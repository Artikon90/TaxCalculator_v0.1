package com.artikon90.taxcalc.model.Dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IncomeTaxDto {
    private int income;
    private int taxRate;
    private int fixedPayment;
}
