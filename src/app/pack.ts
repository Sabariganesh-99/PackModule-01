import { Account } from './account';
import { Channel } from './channel';

export class Pack {
  packId: number = 0;
  packName: string = "";
  packValidity: number= 0;
  packCost: number = 0;
  packDescription: string = "";
  PackCount: number = 0;
  channels:Channel[]=[];
  // recharge:Recharge[];
  // account: Account = ;

}

