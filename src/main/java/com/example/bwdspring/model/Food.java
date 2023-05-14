package com.example.bwdspring.model;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "food")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long foodId;
    private String name;
    private int price;
    private String image;
    private String type;
    private int indexx;

    public Food(String name, int price, String image, String type, int index) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.type = type;
        this.indexx = index;
    }

}
