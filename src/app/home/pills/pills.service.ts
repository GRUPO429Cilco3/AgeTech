import { Injectable } from '@angular/core';
import {Pill} from './pill'
 
@Injectable({
  providedIn: 'root'
})
export class PillsService  {
  pills =["Dolex","Acetaminofen"];



  reminders =[{
    'pill':'Dolex',
    'day':'Lunes',
    'hour':"12:30"
  }];
  //private medicamento : Array<Pill>
  constructor() {}

}
