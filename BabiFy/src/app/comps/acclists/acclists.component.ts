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
  
  formValue !:FormGroup;
  acclistsModelObj: AcclistsModel = new AcclistsModel();
  acclistsData !:any;
  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }
  
  ngOnInit(): void {
   this.formValue=this.formbuilber.group({
    productID : [''],
    productName : [''],
    productColor : [''],
    productMaterial : [''],
    productPrice : [''],
   })
   this.getAllProducts();
  }
  postAcclistsDetails(){
    this.acclistsModelObj.productID= this.formValue.value.productID;
    this.acclistsModelObj.productName= this.formValue.value.productName;
    this.acclistsModelObj.productColor= this.formValue.value.productColor;
    this.acclistsModelObj.productMaterial= this.formValue.value.productMaterial;
    this.acclistsModelObj.productPrice= this.formValue.value.productPrice;
  
    this.api.postProducts(this.acclistsModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product added successfully")
      let ref =document.getElementById('cancel1')
      ref?.click();
      this.formValue.reset();
      this.getAllProducts();
    },
    err=>{
      alert("Wrong")
    })
  }
  
getAllProducts(){
  this.api.getProducts()
  .subscribe(res=>{
    this.acclistsData = res;
  })

}
deleteProducts(row : any){
  this.api.deleteProducts(row.id)
  .subscribe(res=>{
    alert("Product Deleted")
    this.getAllProducts();
  })
}
onEdit(row: any){
  this.acclistsModelObj.id = row.id;
  this.formValue.controls['productID'].setValue(row.productID);
  this.formValue.controls['productName'].setValue(row.productName);
  this.formValue.controls['productColor'].setValue(row.productColor);
  this.formValue.controls['productMaterial'].setValue(row.productMaterial);
  this.formValue.controls['productPrice'].setValue(row.productPrice);
}
updateAcclistsDetails(){
  this.acclistsModelObj.productID= this.formValue.value.productID;
  this.acclistsModelObj.productName= this.formValue.value.productName;
  this.acclistsModelObj.productColor= this.formValue.value.productColor;
  this.acclistsModelObj.productMaterial= this.formValue.value.productMaterial;
  this.acclistsModelObj.productPrice= this.formValue.value.productPrice;

  this.api.updateProducts(this.acclistsModelObj,this.acclistsModelObj.id )
  .subscribe(res=>{
    alert("Updated Successfully");
    let ref =document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllProducts();
  })
}
}



