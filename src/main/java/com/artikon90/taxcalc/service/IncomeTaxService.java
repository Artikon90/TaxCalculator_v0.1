package com.artikon90.taxcalc.service;

import com.artikon90.taxcalc.model.Dto.IncomeTaxDto;
import org.springframework.stereotype.Service;

@Service
public class IncomeTaxService {
    public Double getTax(IncomeTaxDto data) {
        return (double) (data.getIncome() * (0.01 * data.getTaxRate())) - data.getFixedPayment();
    }
}
