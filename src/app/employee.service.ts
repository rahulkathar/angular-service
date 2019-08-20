import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee} from '/employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  private _url:string = '/assets/data/employee.json'

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee> {
    return this.http.get<IEmployee[]>(this._url);
  }

}