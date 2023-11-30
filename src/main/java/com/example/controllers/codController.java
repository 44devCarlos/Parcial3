package com.example.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Services.CodDb;
import com.example.modelos.infos;

@RestController
public class codController {
    
    @GetMapping("/infos/all")
    public List<infos> obtenerDatos(){
        return new CodDb().obtenerDatos();
    }
}
