import { Account } from './account';

export interface User {
    role: string;
    userId:number;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    account:Account
}
