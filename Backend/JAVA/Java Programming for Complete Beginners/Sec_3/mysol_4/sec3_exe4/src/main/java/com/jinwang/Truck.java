package com.jinwang;

public class Truck extends Vehicle {

    @Override
    public void drive() {
        System.out.println("Truck is driving with " + getEngine() + " engine.");
    }
}
