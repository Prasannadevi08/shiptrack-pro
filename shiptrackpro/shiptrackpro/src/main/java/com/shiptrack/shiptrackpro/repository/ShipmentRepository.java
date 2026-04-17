package com.shiptrack.shiptrackpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.shiptrack.shiptrackpro.model.Shipment;

public interface ShipmentRepository extends JpaRepository<Shipment, Integer> {

    // ✅ Find shipment by tracking ID (for tracking page)
    Shipment findByTrackingId(String trackingId);

    // ✅ Count shipments by status (for dashboard)
    long countByStatus(String status);
}