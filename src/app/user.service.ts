import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http:HttpClient) { }

  register(user:User): Observable<any>{
    return this.http.post("http://localhost:8083/users/register",user);
  }
  getById(user:User):Observable<any>{
    return this.http.get("http://localhost:8083/users/getById/"+`${user.userId}`)
  }
  addAccount(user:any):Observable<any>{
    return this.http.post("http://localhost:8083/users/",user)
  }

}
