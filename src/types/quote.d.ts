interface Quote {
    id: string;
    quoteGroupId?: string;
    dflo: DfloMetadata;
    sections: Section[];
}

interface Section {
    title?: string;
    type?: string;
    subtitle?: string;
    description?: string;
    column?: number;
    hideFromTabs?: boolean;
    image?: string;
    child?: Section[];
    link?: SectionLink;
}

interface PropertyContent extends Section {
    location?: string;
}

interface CountryContent extends Section {

}

interface CabinSection extends Section {
    cabinIdentifier: string;
    cruiseDetails: CruiseDetails;
}

interface ItinerarySection extends Section {
    travelDetails: TravelDetails;
    pdfLink?: string;
}
interface PricingSection extends Section {
    pricing: Pricing;
    cruiseDetails?: CruiseDetails;
    contactNumber?: string;
}

interface ImportantInformationSection extends Section {
    erratas: AdviceItem[];
}

interface ConsultantInformaton extends Section {
    consultant: Consultant;
}
interface WhyChooseUsSection extends Section {
    testimonials?: Testimonial[];
}

interface AccommodationSection extends Section {
    accommodations: Property[];   
}

interface DestinationSection extends Section {
    subtitleDescription: string;
    highlights: DestinationHighlight[];
}

interface FeatureHiglightsSection extends Section {
    highlights: DestinationHighlight[];
}

interface ActionSection extends Section {
    actions? : SectionLink[];
}

interface DestinationHighlight {
    title: string;
    description: string;
    image: string;
    link: DestinationHighlightLink;
    type: string
}

interface DestinationHighlightLink {
    label: string;
    url: string;
}

interface Testimonial {
    name: string;
    quote: string;
}

interface FooterContent extends Section {
    address?: string[];
    telephone?: string;
    mainWebsite?: string;
    logo?: string;
    logoReversed?: string;
    termsUrl?: string;
    replyAddress?: string;
}

interface CoverPageContent extends Section {
    agentImage: string;
}

interface SectionLink {
    label?: string;
    url: string;
}

interface DfloMetadata {
    travelDetails: TravelDetails;
    consultant: Consultant;
    cruiseDetails?: CruiseDetails;
    erratas: AdviceItem[];
}


interface TravelDetails {
    parties: Party[];
    pricing: Pricing;
}

interface Consultant {
    name: string;
    email: string;
    phoneNumber?: string;
    imageUrl?: string
    experience?: string;
    callbackUrl?: string;
}

interface Erratas {
    adviceItems: AdviceItem[]
}

interface Pricing {
    pricingText: string;
    sellingPrice: string;
    deposit: string;
    currency: string;
    finalDueDate?: Date;
    quoteValidForText?: string;
    cruiseData?: CruiseData;
}

interface CabinPriceData {
    category?: string;
    numberOfCabins: string;
    cabinCostPerSailor: string;
    taxesAndFeesPerSailor: string;
    totalCostPerSailor: string;
    totalCostPerCabin: string;
    cabinTypeId?: string
    cabinDetail?: CabinDetail
}

interface CruiseData {
    cabins: CabinPriceData[];
    totalInUSD: string;
}

interface Party {
    name: string;
    count: String;
    passengerNames?: string;
    showNames?: boolean;
    shipName?: string;
    itineraryItems: ItineraryItem[];
    additinonalPropertyInformation?: {
        [key: string]: Property;
    }
}

interface Property {
    name: string;
    address?: string;
    telephone?: string;
    email?: string;
    image?: string;
    description: string;
    amenities: string[];
}

interface ItineraryItem {
    header?: ItineraryItemHeader;
    subItems?: ItineraryItemSubItem[];
    dataReference?: string;
    image?: string;
    day?: string;
    property?: Property;
    key?: string;
}

interface ItineraryItemHeader {
    description: string;
    title?: string;
    date?: string;
    time?: string;
    showDate: boolean;
    subTitle?: string;
    style?: ItineraryItemStyle;
}

interface ItineraryItemSubItem {
    title?: string;
    description: string;
    image?: string;
}



interface AdviceItem {
    title?: string;
    description?: string;
    style?: string;
}



