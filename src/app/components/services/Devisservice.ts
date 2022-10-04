

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

providedIn: 'root'
})
 export class DevisIbComProdService {
  private readonly baseUrl:string="http://localhost:8081/SpringMVC/Devis/"
  constructor(private httpclient: HttpClient) {}

  public AddDevis(data:any){
   return this.httpclient.post(this.baseUrl+"add",data);
  }
  
 }