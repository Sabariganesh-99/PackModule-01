import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from '../channel';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {

  public pack:Pack = new Pack();
  public channels:Channel[] = new Array;

  constructor(public packService:PackService,public router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    this.pack.packName = value.packName;
    this.pack.packCost = value.packCost;
    this.pack.packValidity = value.packValidity;
    this.pack.packDescription = value.packDescription;
    this.pack.channels.push(value.channels);
  

    this.addPack();

  }
  addPack() {
    this.packService.addPack(this.pack).
    subscribe(data => {console.log(data)},
    error => {console.log(error)});
  }

  

}
