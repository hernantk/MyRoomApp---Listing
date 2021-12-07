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
    _id: string;
    name: string;
}

export interface ListingResult  { 
    _id: string;
    title: string;
    description: string;
    price: number;
    listingTypeId:string;
    userId:string;
    creationDate: Date;
    numberOfRatings: number;
    rating: number;
}

export interface NewListing  { 
    title: string;
    description: string;
    price: number;
    listingTypeId:string;
    userId:string;
}

export interface User  { 
    id: string;
    name: string;
    email:string,
    type:string
}

