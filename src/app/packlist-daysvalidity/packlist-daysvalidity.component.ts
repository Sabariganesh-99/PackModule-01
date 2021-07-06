import { Component, OnInit } from '@angular/core';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-packlist-daysvalidity',
  templateUrl: './packlist-daysvalidity.component.html',
  styleUrls: ['./packlist-daysvalidity.component.css']
})
export class PacklistDaysvalidityComponent implements OnInit {
  public packs:any;
  color = "accent";

  constructor(private packservice:PackService) { }

  ngOnInit(): void {
    this.packservice.fetchPacksByDaysValidity().subscribe(data=> {this.packs = data;});
  }

}
