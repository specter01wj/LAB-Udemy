package com.jinwang;

public class Car extends Vehicle {

    @Override
    public void drive() {
        System.out.println("Car is driving with " + getEngine() + " engine.");
    }
}
