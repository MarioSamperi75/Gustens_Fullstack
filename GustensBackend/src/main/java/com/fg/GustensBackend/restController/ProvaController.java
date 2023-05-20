package com.fg.GustensBackend.restController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProvaController {

    @GetMapping("/")
    public String helloWorld(){
        return "Hello World! Ciao Terra!";
    }
}
