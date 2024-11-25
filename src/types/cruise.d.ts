interface CruiseDetails {
    cabinDetails: { [key: string]: CabinDetail };
}

interface CabinDetail {
    id: string;
    name: string;
    subtitle?: string;
    shipName?: string;
    description?: string;
    images: string[];
    people?: string;
    dimensions?: string;
}