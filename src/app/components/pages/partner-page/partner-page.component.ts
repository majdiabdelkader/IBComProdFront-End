import { Component, OnInit } from '@angular/core';
import { DevisIbComProdService } from '../../services/Devisservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-partner-page',
  templateUrl: './partner-page.component.html',
  styleUrls: ['./partner-page.component.scss']
})
export class PartnerPageComponent implements OnInit {
  constructor(private DevisService : DevisIbComProdService,  private router : Router ){}


  ngOnInit(): void {
  }

  AddDevis(f : any){
    let data = f.value;
    console.log(data);
    this.DevisService.AddDevis(data).subscribe((data:any)=>{
      this.router.navigate(["/home"])
  })
}
}
