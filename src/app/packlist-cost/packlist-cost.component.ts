import { Component, OnInit } from '@angular/core';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packlist-cost',
  templateUrl: './packlist-cost.component.html',
  styleUrls: ['./packlist-cost.component.css']
})
export class PacklistCostComponent implements OnInit {
  packs: any;
  color = "accent";

  constructor(private packservice:PackService) { }

  ngOnInit(): void {
    this.packservice.fetchPacksByCost().subscribe((data: any)=> {this.packs = data;});
  }


}
