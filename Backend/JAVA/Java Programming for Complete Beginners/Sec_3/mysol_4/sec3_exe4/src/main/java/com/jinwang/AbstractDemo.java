package com.jinwang;

public class AbstractDemo {

    public static void run() {

        Car car = new Car();
        car.setEngine("hybrid");

        Truck truck = new Truck();
        truck.setEngine("electric");

        car.drive();
        truck.drive();
    }
}
