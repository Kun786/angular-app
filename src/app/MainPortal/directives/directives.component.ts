import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/SharedPortal/Services/product.service';
import { boy } from 'src/app/SharedPortal/Interfaces/Product';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  UserObject={
    Name:'kjhads',
    LastName:'abc',
    Email:'a@.com'
  }

  constructor(
    private _ProductService:ProductService,
    private _Formbuilder:FormBuilder
    ) { 
      this.MyFormModel()
    }

  MyForm: FormGroup | any;
  GetFirstName:any;

  Myname = 'kjashkja';
  MyData:any=[];

  ngOnInit(): void {
    this.GetFirstName = this.MyForm.get('FirstName').setValue('kajsdhkasj');
    console.log(this.GetFirstName);
  }

  MyFormModel(){
    this.MyForm = this._Formbuilder.group({
      FirstName:[this.UserObject.Name],
      LastName:[this.UserObject.LastName],
      Email:[this.UserObject.Email]
    })
  }

  GetMyAllData(){
    this.MyData = this._ProductService.GetAllProducts();
  }

  SubmitMyForm(){
    let MyFormValues = this.MyForm.value;
    this.GetFirstName = undefined;
    console.log(MyFormValues);
  }

}
