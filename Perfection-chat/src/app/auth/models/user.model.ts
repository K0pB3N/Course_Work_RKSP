export type Role = 'admin' | 'headmaster' | 'user';

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    role: Role;
}