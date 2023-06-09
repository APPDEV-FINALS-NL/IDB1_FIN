import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AcclistsModel } from './acclists.model';
import { ApiService } from '../shared/shared/api.service';

@Component({
  selector: 'app-acclists',
  templateUrl: './acclists.component.html',
  styleUrls: ['./acclists.component.css']
})
export class AcclistsComponent  implements OnInit{
  term: any;
  selectedProd?:AcclistsModel;
  alert: boolean=false;
  alert1: boolean=false;
  alert2: boolean=false;
  formValue !:FormGroup;
  acclistsModelObj: AcclistsModel = new AcclistsModel();
  acclistsData:any;
  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }
  
  ngOnInit(): void {
    this.formValue=this.formbuilber.group({
      categoryId : [''],
      name : [''],
      description : [''],
      dateAdded: [''],
      pRange : [''],
      aRange : [''],
      imageUrl: [''],
      
    })
    this.getAllProducts();
  }
  postAcclistsDetails(){
    this.acclistsModelObj.categoryId= this.formValue.value.categoryId;
    this.acclistsModelObj.name= this.formValue.value.name;
    this.acclistsModelObj.description= this.formValue.value.description;
    this.acclistsModelObj.dateAdded= this.formValue.value.dateAdded;
    this.acclistsModelObj.pRange= this.formValue.value.pRange;
    this.acclistsModelObj.aRange= this.formValue.value.aRange;
    this.acclistsModelObj.imageUrl= this.formValue.value.imageUrl;
  
    this.api.postProducts(this.acclistsModelObj)
    .subscribe(res=>{
      console.log(res);
      this.alert1=true
      let ref =document.getElementById('cancel1')
      ref?.click();
      this.formValue.reset();
      this.getAllProducts();
    },
    err=>{
      alert("Something Went Wrong")
      
    })
    this.getAllProducts();}
  
getAllProducts(){
  this.api.getProducts()
  .subscribe(res=>{
    this.acclistsData = res;
  })
}

deleteProducts(row : any){
	if (confirm("Are you sure you want to delete this record?") == true) {
    this.api.deleteProducts(row.id)
    .subscribe(res=>{
    this.alert=true
      let ref =document.getElementById('cancel2')
        ref?.click();
        this.getAllProducts();
    })
	}
  else { 
    this.getAllProducts();
	}
}
closeAlert(){
  this.alert=false
  this.alert1=false
  this.alert2=false
  
}


onEdit(row: any){
  this.acclistsModelObj.id = row.id;
  this.formValue.controls['categoryId'].setValue(row.categoryId);
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['description'].setValue(row.description);
  this.formValue.controls['dateAdded'].setValue(row.dateAdded);
  this.formValue.controls['pRange'].setValue(row.pRange);
  this.formValue.controls['aRange'].setValue(row.aRange);
  this.formValue.controls['imageUrl'].setValue(row.imageUrl);
}
updateAcclistsDetails(){
  this.acclistsModelObj.categoryId= this.formValue.value.categoryId;
  this.acclistsModelObj.name= this.formValue.value.name;
  this.acclistsModelObj.description= this.formValue.value.description;
  this.acclistsModelObj.dateAdded= this.formValue.value.dateAdded;
  this.acclistsModelObj.pRange= this.formValue.value.pRange;
  this.acclistsModelObj.aRange= this.formValue.value.aRange;
  this.acclistsModelObj.imageUrl= this.formValue.value.imageUrl;

  this.api.updateProducts(this.acclistsModelObj,this.acclistsModelObj.id )
  .subscribe(res=>{
    this.alert2=true
    let ref =document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllProducts();
  })
}

}



