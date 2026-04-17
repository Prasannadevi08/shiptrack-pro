package com.shiptrack.shiptrackpro.service;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shiptrack.shiptrackpro.model.Shipment;
import com.shiptrack.shiptrackpro.repository.ShipmentRepository;

@Service
public class ShipmentService {

    @Autowired
    private ShipmentRepository repo;

    // ✅ Add Shipment
    public Shipment addShipment(Shipment shipment) {
        return repo.save(shipment);
    }

    // ✅ Get All Shipments
    public List<Shipment> getAllShipments() {
        return repo.findAll();
    }

    // ✅ Track Shipment by Tracking ID
    public Shipment getShipmentByTrackingId(String trackingId) {
        Shipment shipment = repo.findByTrackingId(trackingId);

        if (shipment != null) {
            return shipment;
        } else {
            throw new RuntimeException("Shipment not found with tracking ID: " + trackingId);
        }
    }

    // ✅ Update Shipment
    public Shipment updateShipment(String trackingId, Shipment shipment) {
        Shipment existing = repo.findByTrackingId(trackingId);

        if (existing != null) {
            existing.setStatus(shipment.getStatus());
            existing.setCurrentLocation(shipment.getCurrentLocation());
            existing.setSource(shipment.getSource());
            existing.setDestination(shipment.getDestination());

            return repo.save(existing);
        } else {
            throw new RuntimeException("Shipment not found with tracking ID: " + trackingId);
        }
    }

    // ✅ Delete Shipment
    public void deleteShipment(int id) {
        repo.deleteById(id);
    }

    // ✅ FIXED: Dashboard Data (SAFE VERSION)
    public Map<String, Long> getDashboardData() {

        List<Shipment> shipments = repo.findAll();

        long total = shipments.size();

        long delivered = shipments.stream()
                .filter(s -> "DELIVERED".equalsIgnoreCase(s.getStatus()))
                .count();

        long pending = shipments.stream()
                .filter(s -> "PENDING".equalsIgnoreCase(s.getStatus()))
                .count();

        Map<String, Long> data = new HashMap<>();
        data.put("total", total);
        data.put("delivered", delivered);
        data.put("pending", pending);

        return data;
    }
}