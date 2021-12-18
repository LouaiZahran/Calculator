package com.university.programming2.calculator.model;

import java.math.BigDecimal;
import java.math.MathContext;

public class ReciprocalOperation extends Operation{
    public Result run(){
        Result res = new Result();
        if(getOperand1() == "" || getOperand2() != "" || Double.parseDouble(getOperand1()) == 0.0){
            System.out.println("NULL!!!");
            res.setError(true);
            return res;
        }
        BigDecimal op1 = new BigDecimal(1);
        BigDecimal op2 = new BigDecimal(getOperand1());
        try{
            res.setResult(op1.divide(op2, new MathContext(10)));
            res.setError(false);
        }catch(Exception e){
            res.setError(true);
        }
        return res;
    };

    public ReciprocalOperation(String op1, String op2){
        operand1 = op1;
        operand2 = op2;
    }
}
