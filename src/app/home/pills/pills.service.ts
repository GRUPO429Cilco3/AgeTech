import { Injectable } from '@angular/core';
import {Pill} from './pill'
 
@Injectable({
  providedIn: 'root'
})
export class PillsService  {
  pills =['DOLEX','ACETAMINOFEN'];
  //private medicamento : Array<Pill>
  constructor() {}

}
