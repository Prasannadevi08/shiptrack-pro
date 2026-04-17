package com.shiptrack.shiptrackpro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.shiptrack.shiptrackpro.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

    User findByEmailAndPassword(String email, String password);
}