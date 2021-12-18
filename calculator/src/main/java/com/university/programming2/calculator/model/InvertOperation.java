package com.university.programming2.calculator.model;

import java.math.BigDecimal;
import java.math.MathContext;

public class InvertOperation extends Operation {
    public Result run(){
        Result res = new Result();
        if(getOperand1() == "" || getOperand2() != ""){
            System.out.println("NULL!!!");
            res.setError(true);
            return res;
        }
        BigDecimal op1 = new BigDecimal(getOperand1());
        try{
            res.setResult(op1.multiply(new BigDecimal(-1)));
            res.setError(false);
        }catch(Exception e){
            res.setError(true);
        }
        return res;
    };

    public InvertOperation(String op1, String op2){
        operand1 = op1;
        operand2 = op2;
    }
}
