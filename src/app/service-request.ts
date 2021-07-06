import { Account } from './account';

export interface ServiceRequest {
    serviceRequestId:number;
	account:Account;
	message:string;
}
