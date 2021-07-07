import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from "../pack";
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packlist',
  templateUrl: './packlist.component.html',
  styleUrls: ['./packlist.component.css']
})
export class PacklistComponent implements OnInit {

  public packs: Pack[] = [];
  public packDetails: Pack | any;
  public color = "accent";
  public packError: Pack = new Pack();

  filterValue: string = "";
  packsByCost: Pack[] = [];
  PacksByName: Pack | any;
  constructor(private packservice: PackService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPacks();

  }
  fetchPacks() {
    this.packservice.fetchAll().subscribe(data => { this.packs = data; console.log(this.packs) });

  }
  GetFilteredValue(value: any) {
    if(this.filterValue == "default"){
      this.fetchPacks();
    }
    if (this.filterValue == "cost") {
      value = parseInt(value);
      this.filterByCost(value);
    }
    if (this.filterValue == "Pack Name") {
      this.filterByPackName(value);
    }
    if (this.filterValue == "Id") {
      value = parseInt(value);
      this.filterByPackId(value);
    }
    
  }
  filterByCost(cost: number) {
    console.log(cost);
    this.packservice.getPacksByAmount(cost).subscribe(data => { this.packs = data; console.log(data),(packError: any) => console.log(packError.error) });

  }
  filterByPackName(name: string) {
    console.log(name);
    this.packservice.getPackByName(name).subscribe(data => { this.packDetails = data; console.log(data),(packError: any) => console.log(packError.error) });
  }
  filterByPackId(id: number) {
    console.log(id);
    this.packservice.getPackById(id).subscribe(data => { this.packDetails = data; console.log(data)
    } , error => { this.packError = error.error;console.log(this.packError)});
  }
  viewpack(id:any){
    console.log(id);
    this.packservice.getPackById(id).subscribe(data => { this.packDetails = data; console.log(data),(packError: any) => console.log(packError) });
  }
  deletepack(id:any){
    console.log("delete pack:"+id);
    prompt("Are you sure you want to delete this?")
    this.packservice.deletepack(id).subscribe(data =>{this.packDetails = data;(packError: any) => console.log(packError)});
  }

}


