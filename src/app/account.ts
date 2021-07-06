import { User } from './user';
import { Pack } from './pack';
import { ServiceRequest } from './service-request';
import { Complaint } from './complaint';

export interface Account {
    accountId:number;

	user:User;

	 rechargePacks:Pack[];
	  
	 registeredDate :Date;
	 

	 requests:ServiceRequest[];

	 complaints:Complaint[];

	
	
	
}
