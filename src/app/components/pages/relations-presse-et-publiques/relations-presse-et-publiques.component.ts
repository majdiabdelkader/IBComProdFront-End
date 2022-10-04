import { Component, OnInit } from '@angular/core';
import { DevisIbComProdService } from '../../services/Devisservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-relations-presse-et-publiques',
  templateUrl: './relations-presse-et-publiques.component.html',
  styleUrls: ['./relations-presse-et-publiques.component.scss']
})
export class RELATIONSPRESSEETPUBLIQUESComponent implements OnInit {

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
