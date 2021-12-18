package com.university.programming2.calculator.model;

import java.math.BigDecimal;

public class SubtractOperation extends Operation{
    public Result run(){
        Result res = new Result();
        if(getOperand1() == "" || getOperand2() == ""){
            System.out.println("NULL!!!");
            res.setError(true);
            return res;
        }
        BigDecimal op1 = new BigDecimal(getOperand1());
        BigDecimal op2 = new BigDecimal(getOperand2());
        try{
            res.setResult(op1.subtract(op2));
            res.setError(false);
        }catch(Exception e){
            res.setError(true);
        }
        return res;
    };

    public SubtractOperation(String op1, String op2){
        operand1 = op1;
        operand2 = op2;
    }
}
