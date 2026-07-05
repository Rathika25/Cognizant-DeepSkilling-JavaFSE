package com.cognizant.springlearn.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country c1 = context.getBean("country1", Country.class);
        Country c2 = context.getBean("country2", Country.class);
        Country c3 = context.getBean("country3", Country.class);

        if (c1.getCode().equalsIgnoreCase(code)) {
            return c1;
        }
        if (c2.getCode().equalsIgnoreCase(code)) {
            return c2;
        }
        if (c3.getCode().equalsIgnoreCase(code)) {
            return c3;
        }

        return null;
    }
}