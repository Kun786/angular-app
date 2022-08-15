import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/SharedPortal/Services/product.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor(private _ProductService:ProductService) { }
  Myname = 'kjashkja';
  MyData:any=[];
  ngOnInit(): void {
  }

  GetMyAllData(){
    this.MyData = this._ProductService.GetAllProducts();
  }


}
