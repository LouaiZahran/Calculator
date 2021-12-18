package com.university.programming2.calculator.model;

import java.math.BigDecimal;

public class Operation {
    protected String operand1 = "";
    protected String operand2 = "";

    public String getOperand1(){
        return operand1;
    }
    public String getOperand2(){
        return operand2;
    }
    public void setOperand1(String op1){
        operand1 = op1;
    }
    public void setOperand2(String op2){
        operand2 = op2;
    }

}
