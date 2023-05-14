package com.example.bwdspring.repository;

import com.example.bwdspring.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRepository extends JpaRepository<Food, Long> {
    List<Food> getFoodByType(String type);
}