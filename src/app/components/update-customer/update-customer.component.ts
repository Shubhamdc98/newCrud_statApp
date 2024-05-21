import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudServiceService } from '../../service/crud-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { customer } from '../../customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
  cust:customer
  UpdateForm : FormGroup
  id:number
  constructor(
    private fb: FormBuilder,
    private service: CrudServiceService,
    private activeRoute: ActivatedRoute,
    private nav: Router
  ){}
  
  ngOnInit(){

    this.UpdateForm = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required, Validators.email]],
      phone:[null,[Validators.required]]
  })
  this.id = this.activeRoute.snapshot.params["id"]
  this.submitted();
  
  }

  
  submitted(){
    this.service.getCustomerById(this.id).subscribe((res) => {
    this.UpdateForm.patchValue(res);
      
    })
  }

  updating(){
    this.service.UpdateCustomer(this.id, this.UpdateForm.value).subscribe((res) => {
      console.log(res);
    })
    if(this.id != null){
      this.nav.navigateByUrl("")
    }
  }

}
