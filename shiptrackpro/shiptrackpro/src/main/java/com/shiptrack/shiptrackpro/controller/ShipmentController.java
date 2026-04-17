package com.shiptrack.shiptrackpro.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.shiptrack.shiptrackpro.model.Shipment;
import com.shiptrack.shiptrackpro.service.ShipmentService;

@RestController
@RequestMapping("/shipments")
@CrossOrigin
public class ShipmentController {

    @Autowired
    private ShipmentService service;

    @PostMapping("/addshipment")
    public ResponseEntity<Shipment> addShipment(@RequestBody Shipment shipment) {
        return ResponseEntity.ok(service.addShipment(shipment));
    }

    @GetMapping("/getshipments")
    public ResponseEntity<List<Shipment>> getAllShipments() {
        return ResponseEntity.ok(service.getAllShipments());
    }

    @GetMapping("/track/{trackingId}")
    public ResponseEntity<Shipment> getShipmentByTrackingId(@PathVariable String trackingId) {
        return ResponseEntity.ok(service.getShipmentByTrackingId(trackingId));
    }

    @PutMapping("/updateshipment/{trackingId}")
    public ResponseEntity<Shipment> updateShipment(
            @PathVariable String trackingId,
            @RequestBody Shipment shipment) {
        return ResponseEntity.ok(service.updateShipment(trackingId, shipment));
    }

    @DeleteMapping("/deleteshipment/{id}")
    public ResponseEntity<String> deleteShipment(@PathVariable int id) {
        service.deleteShipment(id);
        return ResponseEntity.ok("Shipment deleted successfully with id: " + id);
    }
    @GetMapping("/dashboard")
    public Map<String, Long> getDashboard() {
        return service.getDashboardData();
    }
}