import { Component } from '@angular/core';
import { CrudServiceService } from '../../service/crud-service.service';
import { customer } from '../../customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrl: './get-customer.component.css'
})
export class GetCustomerComponent {
  cust: customer[]
  constructor(private Service: CrudServiceService,
            private activeRoute: ActivatedRoute,
  ){}

  ngOnInit(){
    this.Service.getCustomer().subscribe((res) => {
      console.log(res);
      
      this.cust = res
    })
  }

  deleting(id:number){
    this.Service.DeleteCustomer(id).subscribe((res) => {
      console.log(res);
      
    })
    
  }
}
