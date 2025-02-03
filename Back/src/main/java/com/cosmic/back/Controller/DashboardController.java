package com.cosmic.back.Controller;

import com.cosmic.back.DTO.DashboardDTO;
import com.cosmic.back.Service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/dashboard")
@RestController
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping
public ResponseEntity<DashboardDTO> getDashboard() {
    return ResponseEntity.ok(dashboardService.getDashboard());
    }



}
