package com.university.programming2.calculator.controller;

import com.university.programming2.calculator.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1/calculator")
public class CalculatorController {

    @PostMapping("/add")
    public Result add(@RequestBody AddOperation addOp){
        Result res = addOp.run();
        return res;
    }

    @PostMapping("/subtract")
    public Result subtract(@RequestBody SubtractOperation subOp){
        Result res = subOp.run();
        return res;
    }

    @PostMapping("/multiply")
    public Result multiply(@RequestBody MultiplyOperation mulOp){
        Result res = mulOp.run();
        return res;
    }

    @PostMapping("/divide")
    public Result divide(@RequestBody DivideOperation divOp){
        Result res = divOp.run();
        return res;
    }

    @PostMapping("/reciprocal")
    public Result reciprocal(@RequestBody ReciprocalOperation recOp){
        Result res = recOp.run();
        return res;
    }

    @PostMapping("/sqrt")
    public Result sqrt(@RequestBody SqrtOperation sqrtOp){
        Result res = sqrtOp.run();
        return res;
    }

    @PostMapping("/square")
    public Result square(@RequestBody SquareOperation sqrOp){
        Result res = sqrOp.run();
        return res;
    }

    @PostMapping("/percentile")
    public Result percentile(@RequestBody PercentileOperation perOp){
        Result res = perOp.run();
        return res;
    }

    @PostMapping("/invert")
    public Result invert(@RequestBody InvertOperation invOp){
        Result res = invOp.run();
        return res;
    }

}
