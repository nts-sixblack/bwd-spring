package com.example.bwdspring.controller;

import com.example.bwdspring.model.Food;
import com.example.bwdspring.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private FoodService foodService;

    @RequestMapping("save")
    public String save() {
        foodService.saveData();
        return "home";
    }

    @RequestMapping("/")
    public String home() {
        return "home";
    }

    @RequestMapping("menu")
    public String menu(Model model) {

        List<Food> drinks = foodService.findFoodByType("drink");
        model.addAttribute("drinks", drinks);

        List<Food> foods = foodService.findFoodByType("meat");
        model.addAttribute("foods", foods);
        System.out.println(foods);

        List<Food> appetizer = foodService.findFoodByType("appetizer");
        model.addAttribute("appetizer", appetizer);

        return "menu";
    }

    @RequestMapping("reservation")
    public String reservation() {
        return "reservation";
    }

    @RequestMapping("promotion")
    public String promotion() {
        return "promotion";
    }

    @RequestMapping("promotion1")
    public String promotion1() {
        return "promotion1";
    }

    @RequestMapping("promotion2")
    public String promotion2() {
        return "promotion2";
    }

    @RequestMapping("promotion3")
    public String promotion3() {
        return "promotion3";
    }

    @RequestMapping("promotion4")
    public String promotion4() {
        return "promotion4";
    }

    @RequestMapping("blogs")
    public String blogs() {
        return "blogs";
    }

    @RequestMapping("introduce")
    public String introduce() {
        return "introduce";
    }

    @RequestMapping("contact")
    public String contact() {
        return "contact";
    }
}
