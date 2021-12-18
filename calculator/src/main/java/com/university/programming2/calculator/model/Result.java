package com.university.programming2.calculator.model;

import java.math.BigDecimal;

public class Result {
    private BigDecimal result;
    private Boolean error;

    public Result(){
        result = new BigDecimal(0);
        error = true;
    }

    public Result(BigDecimal res, Boolean err){
        result = res;
        error = err;
    }

    public void setResult(BigDecimal res){
        result = res;
    }

    public void setError(Boolean err){
        error = err;
    }

    public BigDecimal getResult(){
        return result;
    }

    public boolean getError(){
        return error;
    }

    @Override
    public String toString() {
        return "Result [error=" + error + ", result=" + result + "]";
    }

}
