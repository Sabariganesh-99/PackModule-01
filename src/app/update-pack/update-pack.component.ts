import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pack } from '../pack';
import { PackService } from '../pack.service';

@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent implements OnInit {
  pack: Pack = new Pack();
  id: any;


  constructor(public packservice: PackService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.packservice.getPackById(this.id).subscribe(data => {
      this.pack = data; console.log("pack:"+data),
        (packError: any) => console.log(packError)
    });
  }
 onSubmit(){
   this.packservice.updatepack(this.pack).subscribe((data: any) => {
    this.pack = data; console.log(data),
      (packError: any) => console.log(packError)
  });
 }
}
