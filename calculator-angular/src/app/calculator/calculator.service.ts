import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private apiService: ApiService) { }

  doOperation(operation: string, operand1: string, operand2:string = ''){
    return this.apiService.send(operation, {"operand1": operand1, "operand2": operand2});
  }
}
