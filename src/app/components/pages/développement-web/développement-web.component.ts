import { Component, OnInit } from '@angular/core';
import { DevisIbComProdService } from '../../services/Devisservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-développement-web',
  templateUrl: './développement-web.component.html',
  styleUrls: ['./développement-web.component.scss']
})
export class DéveloppementWebComponent implements OnInit {

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
