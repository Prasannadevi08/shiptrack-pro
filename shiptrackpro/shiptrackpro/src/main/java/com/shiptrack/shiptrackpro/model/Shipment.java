package com.shiptrack.shiptrackpro.model;

import jakarta.persistence.*;

@Entity
@Table(name = "shipments")
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "tracking_id", unique = true, nullable = false)
    private String trackingId;

    @Column(name = "source", nullable = false)
    private String source;

    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "status")
    private String status;

    @Column(name = "current_location")
    private String currentLocation;

    // ✅ Default Constructor
    public Shipment() {
    }

    // ✅ Parameterized Constructor
    public Shipment(int id, String trackingId, String source, String destination,
                    String status, String currentLocation) {
        this.id = id;
        this.trackingId = trackingId;
        this.source = source;
        this.destination = destination;
        this.status = status;
        this.currentLocation = currentLocation;
    }

    // ================= GETTERS =================

    public int getId() {
        return id;
    }

    public String getTrackingId() {
        return trackingId;
    }

    public String getSource() {
        return source;
    }

    public String getDestination() {
        return destination;
    }

    public String getStatus() {
        return status;
    }

    public String getCurrentLocation() {
        return currentLocation;
    }

    // ================= SETTERS =================

    public void setId(int id) {
        this.id = id;
    }

    public void setTrackingId(String trackingId) {
        this.trackingId = trackingId;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setCurrentLocation(String currentLocation) {
        this.currentLocation = currentLocation;
    }

    // ✅ toString (for debugging)

    @Override
    public String toString() {
        return "Shipment{" +
                "id=" + id +
                ", trackingId='" + trackingId + '\'' +
                ", source='" + source + '\'' +
                ", destination='" + destination + '\'' +
                ", status='" + status + '\'' +
                ", currentLocation='" + currentLocation + '\'' +
                '}';
    }
}