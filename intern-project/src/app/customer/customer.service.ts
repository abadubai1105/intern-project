import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient){}
  
  get(): Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
  }

  getById(id:number){
    return this.http.get<Customer>(`http://localhost:3000/customer/${id}`)
  }

  add(payload: Customer){
    return this.http.post('http://localhost:3000/customer',payload);
  }

  updateCus(registerObj: Customer, id: number) {
    return this.http.put<Customer>(`http://localhost:3000/customer/${id}`, registerObj)
  }

  deleteCus(id:number){
    return this.http.delete<Customer>(`http://localhost:3000/customer/${id}`);
  }

  searchCus(key: string, curPage: number, pageSize: number):Observable<HttpResponse<any>>{
    let url = `http://localhost:3000/customer?_page=${curPage}&_limit=${pageSize}`;
    if (key){
      if (url.indexOf("&") > -1){
        url = `${url}&q=${key}`;
      } else{
        url = `${url}q=${key}`;
      }
    }
    return this.http.get<HttpResponse<any>>(url, {observe:'response'});
  }
 
}
