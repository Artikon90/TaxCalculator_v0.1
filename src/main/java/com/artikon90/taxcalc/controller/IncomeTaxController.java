package com.artikon90.taxcalc.controller;

import com.artikon90.taxcalc.model.Dto.IncomeTaxDto;
import com.artikon90.taxcalc.service.IncomeTaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class IncomeTaxController {

    private final IncomeTaxService taxService;

    @Autowired
    public IncomeTaxController(IncomeTaxService taxService) {
        this.taxService = taxService;
    }

    @GetMapping("/calc")
    public Double calcTax(@RequestParam("income") int income, @RequestParam("taxRate") int taxRate,
                          @RequestParam("fixed") int fixed) {
        return taxService.getTax(new IncomeTaxDto(income, taxRate, fixed));
    }
}
