import { DynamoDBClient, UpdateItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";


export async function fetchQuotes() {
    const quotes: Quote[] = [];
    const dynamodbClient = new DynamoDBClient({ region: import.meta.env.AWS_DEFAULT_REGION });

    const command = new ScanCommand({
        TableName: import.meta.env.DYNAMODB_TABLE_NAME,
        FilterExpression: 'is_processed = :is_processed',
        ExpressionAttributeValues: {
            ":is_processed": {
                BOOL: false
            }
        }
    });

    const response = await dynamodbClient.send(command);

    if (response.Items) {
        response.Items.forEach((item) => {
            if (!item.id.S) {
                return;
            }

            const updateCommand = new UpdateItemCommand({
                TableName: import.meta.env.DYNAMODB_TABLE_NAME,
                Key: {
                    "id": {
                        S: item.id.S
                    }
                },
                UpdateExpression: 'set is_processed = :is_processed',
                ExpressionAttributeValues: {
                    ":is_processed": {
                        BOOL: true
                    }
                }
            });

            // dynamodbClient.send(updateCommand);
            quotes.push(JSON.parse(item.body.S ?? ''));
        });
    }

    addConsultantBannerToSection(quotes)
    addItineraryToSection(quotes)
    addCruiseDataToSection(quotes)
    addPricingToSection(quotes)
    addAccommodationToSection(quotes)
    return quotes;

}

export async function fetchQuotesByGroupId(id: string) {
    const quotes: Quote[] = [];
    const dynamodbClient = new DynamoDBClient({ region: import.meta.env.AWS_DEFAULT_REGION });

    const command = new ScanCommand({
        TableName: import.meta.env.DYNAMODB_TABLE_NAME,
        FilterExpression: 'quote_group_id = :quote_group_id',
        ExpressionAttributeValues: {
            ":quote_group_id": {
                S: id
            }
        }
    });

    const response = await dynamodbClient.send(command);

    response.Items?.forEach((item) => {
        quotes.push(JSON.parse(item.body.S ?? ''));
    });

    return quotes;
}

function addItineraryToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        quote.dflo.travelDetails.parties.map((party) => {
            party.itineraryItems.map((item) => {
                if (item.dataReference && party.additinonalPropertyInformation) {
                    item.property = party.additinonalPropertyInformation[item.dataReference];
                }
                return item;
            });
            return party;
        });

        quote.sections.map((section) => {
            if (section.type === 'Itinerary') {
                const itinerarySection = section as ItinerarySection;
                itinerarySection.travelDetails = quote.dflo.travelDetails;
            }
        }
        );
    });
}

function addCruiseDataToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        quote.sections.map((section) => {
            if (section.type === 'CabinDetails') {
                const cabinSection = section as CabinSection;
                if (!quote.dflo.cruiseDetails) {
                    return;
                }
                cabinSection.cruiseDetails = quote.dflo.cruiseDetails;
            }
        });
    });
}

function addPricingToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        quote.sections.map((section) => {
            if (section.type === 'Pricing') {
                const pricingSection = section as PricingSection;
                pricingSection.pricing = quote.dflo.travelDetails.pricing;
                pricingSection.pricing.cruiseData?.cabins.map((cabin) => {
                    if (cabin.cabinTypeId) {
                        cabin.cabinDetail = quote.dflo.cruiseDetails?.cabinDetails[cabin.cabinTypeId];
                    }
                });
            }
        });
    });
}

function addImportantInformationToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        const importantInformationSection: ImportantInformationSection = {
            title: 'Important Information',
            subtitle: 'Important Information',
            type: 'ImportantInformation',
            hideFromTabs: false,
            erratas: quote.dflo.erratas
        }
        quote.sections.push(importantInformationSection);
    });
}

function addConsultantBannerToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        const consultantBannerSection: ConsultantInformaton = {
            type: 'ConsultantInformation',
            consultant: quote.dflo.consultant
        }
        quote.sections.splice(2, 0, consultantBannerSection);
    });
}


function addAccommodationToSection(quotes: Quote[]) {
    quotes.map((quote) => {
        quote.sections.map((section) => {
            if (section.type === 'Accommodations') {
                const accommodationSection = section as AccommodationSection;
                const additionalPropertyInfo = quote.dflo.travelDetails.parties[0].additinonalPropertyInformation;

                if (!additionalPropertyInfo) {
                    return;
                }

                const accommodations: Property[] = [];

                for (const [key, value] of Object.entries(additionalPropertyInfo)) {
                    accommodations.push(value);
                }

                accommodationSection.accommodations = accommodations;
            }
        });
    });
}