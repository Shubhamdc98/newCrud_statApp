import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudServiceService } from '../../service/crud-service.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent {

  UpdateCustomerForm : FormGroup
  constructor(
    private fb: FormBuilder,
    private service: CrudServiceService
  ){}

  ngOnInit(){

    this.UpdateCustomerForm = this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required, Validators.email]],
      phone:[null,[Validators.required]]
  })
  }

  submitted(){
    this.service.postCustomer(this.UpdateCustomerForm.value).subscribe((res) => {
      console.log(res);
      
    })
    
  }
  
}
