import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactIbComProdService } from '../../services/Contactservice';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService : ContactIbComProdService, private router : Router){}

ngOnInit(): void {
  }

    AddContact(f : any){
        let data = f.value;
        this.contactService.AddContact(data).subscribe((data:any)=>{
          this.router.navigate(["/home"])
        })
    }
}


