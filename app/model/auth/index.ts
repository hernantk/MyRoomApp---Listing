export interface AuthRequest { 
    login: string;
    password: string;   
}

export interface AuthResult { 
    id: string;
    name: string;
    token: string;
}