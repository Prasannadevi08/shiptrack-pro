package com.shiptrack.shiptrackpro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shiptrack.shiptrackpro.model.User;
import com.shiptrack.shiptrackpro.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // ✅ Register User
    public User register(User user) {
        return repo.save(user);
    }

    // ✅ Login User
    public User login(String email, String password) {
        User user = repo.findByEmailAndPassword(email, password);

        if (user != null) {
            return user;
        } else {
            throw new RuntimeException("Invalid Email or Password");
        }
    }
}