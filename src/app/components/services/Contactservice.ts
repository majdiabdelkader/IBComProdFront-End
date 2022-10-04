

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({

providedIn: 'root'
})
 export class ContactIbComProdService {
  private readonly baseUrl:string="http://localhost:8081/SpringMVC/Contact/"
  constructor(private httpclient: HttpClient) {}

  public AddContact(data:any){
   return this.httpclient.post(this.baseUrl+"add",data);
  }
  
 }