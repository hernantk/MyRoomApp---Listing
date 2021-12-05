export interface AuthRequest { 
    login: string;
    password: string;   
}

export interface AuthResult { 
    id: string;
    name: string;
    token: string;
}

export interface ListingType { 
    id: string;
    name: string;
}

export interface ListingResult  { 
    id: string;
    title: string;
    description: string;
    price: number;
    listingTypeId:string;
    userId:string;
    creationDate: Date;
    numberOfRatings: number;
    rating: number;
}
