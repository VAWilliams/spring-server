package com.app.server.control;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Response {

    private float response;

    @RequestMapping("/{amount}/{type}")
    public float feedback(@PathVariable double amount, @PathVariable String type) {
        switch (type) {
            case "ml_km":
                response = (float) toMetric(amount, 1.609344);
                break;
            case "pd_kg":
                response = (float) toMetric(amount, 0.453592);
                break;
            case "yd_mt":
                response = (float) toMetric(amount, 0.9144);
                break;
            case "km_ml":
                response = (float) toImperial(amount, 1.609344);
                break;
            case "kg_pd":
                response = (float) toImperial(amount, 0.453592);
                break;
            case "mt_yd":
                response = (float) toImperial(amount, 0.9144);
                break;
        }
        return response;
    }

    private double toMetric (double i,double utm) {
        return i*utm;
    }
    private double toImperial (double m, double uti) {
        return m/uti;
    }

}
