import { Component, OnInit } from '@angular/core';
import { DevisIbComProdService } from '../../services/Devisservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-design-graphique',
  templateUrl: './design-graphique.component.html',
  styleUrls: ['./design-graphique.component.scss']
})
export class DESIGNGRAPHIQUEComponent implements OnInit {

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
