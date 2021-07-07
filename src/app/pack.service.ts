import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from './pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {
  

  baseurl = "http://localhost:8083/packs/"

  constructor(private http:HttpClient) { }

  addPack(pack:Pack): Observable<Object>{
    return this.http.post(`${this.baseurl}`+ "addpack",pack);    
  }
  fetchAll():Observable<Pack[]>{
    return this.http.get<Pack[]>(`${this.baseurl}`+"findallpacks");
  }
  fetchPacksByCost(){
    return this.http.get(`${this.baseurl}`+"cost");
  }
  fetchPacksByDaysValidity(){
    return this.http.get(`${this.baseurl}`+"daysvalidity");
  }
  getPackById(id:number):Observable<Pack>{
    return this.http.get<Pack>(`${this.baseurl}`+"getPackById/"+id);
  }
  getPackByName(name:string){
    return this.http.get(`${this.baseurl}`+"getPackByName/"+name);
  }
  getPacksByAmount(amount:number):Observable<Pack[]>{
    return this.http.get<Pack[]>(`${this.baseurl}`+"amount/?amount="+amount);
  }
  deletepack(id:number){
    return this.http.delete(`${this.baseurl}`+"delete/"+id);
  }
  updatepack(pack:Pack) {
    console.log("afterupdate:"+pack);
    return this.http.put(`${this.baseurl}`+`updatepack`,pack);
  }
}
