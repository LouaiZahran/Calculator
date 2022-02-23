import { Component, OnInit } from '@angular/core';
import { Result } from '../models/result.model';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  operand1: string = '0';
  operand2: string = '';
  operator: string = '';
  operation: string = '';
  hasDecimalPoint1: boolean = false;
  hasDecimalPoint2: boolean = false;
  emptyInput: boolean = true;
  result: string = '';
  display: string = '0';

  constructor(private calcService: CalculatorService) { }

  ngOnInit(): void {
  }

  handleErrors(){
    this.display = 'E';
    this.operand1 = '0';
    this.operand2 = '';
    this.operator = '';
    this.operation = '';
    this.hasDecimalPoint1 = false;
    this.hasDecimalPoint2 = false;
  }

  isOperator(s: string){
    return s == '+' || s == '-' || s == '*' || s == '/';
  }

  click(num: number){
    if(this.display == 'E')
      return;
    if(this.emptyInput){                    //Entering the first digit in the first operand
      this.display = this.display.slice(0, -1);
      this.operand1 = this.operand1.slice(0, -1);
      this.operand1 = this.operand1.concat(num.toString());
      this.emptyInput = false;
    }else if(this.operator == ''){          //Entering the remaining numbers in the first operand
      this.operand1 = this.operand1.concat(num.toString());
    }else{                                  //Already chose an operator and now entering the second operand
      this.operand2 = this.operand2.concat(num.toString());
    }

    this.display = this.display.concat(num.toString());
    console.log("clicked: " + num);
  }

  remove(){
    let c: string = this.display.slice(this.display.length - 1);
    if(this.isOperator(c)){
      this.operator = '';
    }else if(this.operator != ''){ //We are removing digits from operand2
      if(c == '.')
        this.hasDecimalPoint2 = false;
      this.operand2 = this.operand2.slice(0, -1);
    }else{                         //We are removing digits from operand1
      if(c == '.')
        this.hasDecimalPoint1 = false;
      this.operand1 = this.operand1.slice(0, -1);
    }

    this.display = this.display.slice(0, -1);
    if(this.display == ''){
      this.display = '0';
      this.operand1 = '0';
      this.emptyInput = true;
    }
  }

  removeAll(){
    while(this.display != '0')
      this.remove();
  }

  putPoint(){
    if(this.display == 'E')
      return;
    if(this.emptyInput)
      this.click(0);
    if(this.operator != '' && this.operand2 == '')
      this.click(0);

    if(this.operand2 != ''){
      if(this.hasDecimalPoint2){
        this.handleErrors();
        return;
      }else{
        this.operand2 = this.operand2.concat('.');
        this.hasDecimalPoint2 = true;
      }
    }else{
      if(this.hasDecimalPoint1){
        this.handleErrors();
        return;
      }else{
        this.operand1 = this.operand1.concat('.');
        this.hasDecimalPoint1 = true;
      }
    }

    this.display = this.display.concat('.');
  }

  setOperation(op: string){
    if(this.display == 'E')
      return;
    
    if(this.operator != ''){
      this.evaluate();
      this.operator = '';
    }
    this.operation = op;
    if(op == 'reciprocal' || op == 'percentile' || op == 'sqrt' || op == 'square' || op == 'invert'){
      this.evaluate();
      return;
    }
    if(op == 'add'){
      this.operator = '+';
    }else if(op == 'subtract'){
      this.operator = '-';
    }else if(op == 'multiply'){
      this.operator = '*';
    }else if(op == 'divide'){
      this.operator = '/';
    }

    this.display = this.display.concat(this.operator);
  }

  evaluate(){
    if(this.display == 'E' || this.operation == '')
      return;
    this.calcService.doOperation(this.operation, this.operand1, this.operand2).subscribe(
      (res: Result) =>{
        if(!res.error){
          this.display = res.result.toString();
          this.operand1 = res.result.toString();
          this.operator = '';
          this.operand2 = '';
          this.operation = '';
          this.hasDecimalPoint1 = this.hasDecimalPoint1 || this.hasDecimalPoint2;
          this.hasDecimalPoint2 = false;
        }else{
          this.handleErrors();
        }
      },
      error => {
        console.log(error);
        this.handleErrors();
      });
  }
}
