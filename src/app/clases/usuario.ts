export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface Usuario {
    uid: string ;
    email: string;
    displayName?: string;
    emailVerified: boolean;
    password?: string;
    photoURL?: string;
    role?: Roles;
 }