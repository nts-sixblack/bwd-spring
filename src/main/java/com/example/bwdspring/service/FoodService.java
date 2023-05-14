package com.example.bwdspring.service;

import com.example.bwdspring.model.Food;
import com.example.bwdspring.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<Food> findFoodByType(String type) {
        return foodRepository.getFoodByType(type);
    }


    public void saveData() {
        List<Food> foods = new ArrayList<Food>();

        foods.add(new Food("Tráng miệng 1", 500, "image/appetizer-slide1.jpg", "appetizer", 1));
        foods.add(new Food("Tráng miệng 2", 600, "image/appetizer-slide2.jpg", "appetizer", 2));
        foods.add(new Food("Tráng miệng 3", 700, "image/appetizer-slide3.jpg", "appetizer", 3));
        foods.add(new Food("Tráng miệng 4", 800, "image/appetizer-slide4.jpg", "appetizer", 4));
        foods.add(new Food("Tráng miệng 5", 900, "image/appetizer-slide5.jpg", "appetizer", 5));
        foods.add(new Food("Tráng miệng 6", 1000, "image/appetizer-slide6.jpg", "appetizer", 6));

        foods.add(new Food("Đồ uống 1", 500, "image/drink-slide1.jpg", "drink", 1));
        foods.add(new Food("Đồ uống 2", 600, "image/drink-slide2.jpg", "drink", 2));
        foods.add(new Food("Đồ uống 3", 700, "image/drink-slide3.jpg", "drink", 3));
        foods.add(new Food("Đồ uống 4", 800, "image/drink-slide4.jpg", "drink", 4));
        foods.add(new Food("Đồ uống 5", 900, "image/drink-slide5.jpg", "drink", 5));
        foods.add(new Food("Đồ uống 6", 1000, "image/drink-slide6.jpg", "drink", 6));

        foods.add(new Food("Thịt 1", 500, "image/meat-slide1.jpg", "meat", 1));
        foods.add(new Food("Thịt 2", 600, "image/meat-slide2.jpg", "meat", 2));
        foods.add(new Food("Thịt 3", 700, "image/meat-slide3.jpg", "meat", 3));
        foods.add(new Food("Thịt 4", 800, "image/meat-slide4.jpg", "meat", 4));

        foodRepository.saveAll(foods);
    }

}
