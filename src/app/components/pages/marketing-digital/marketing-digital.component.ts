import { Component, OnInit } from '@angular/core';
import { DevisIbComProdService } from '../../services/Devisservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marketing-digital',
  templateUrl: './marketing-digital.component.html',
  styleUrls: ['./marketing-digital.component.scss']
})
export class MarketingDigitalComponent implements OnInit {
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

changeService(e:any){
  let data = e.target.value ; 
  console.log(data);
}
}
