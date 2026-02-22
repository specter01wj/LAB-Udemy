package com.jinwang;

class Vehicle {

    public void design() {
        System.out.println("Vehicle design");
    }
}

class SportsCar extends Vehicle {

    @Override
    public void design() {
        System.out.println("Car design");
    }

    public void ride() {
        System.out.println("Riding the car");
    }
}

public class PolymorphismDemo {

    public static void run() {

        Vehicle vehicle1 = new Vehicle();
        SportsCar car = new SportsCar();

        Vehicle vehicle2 = car;

        vehicle2.design();   // dynamic binding
        car.ride();

        createDesign(car);
    }

    public static void createDesign(Vehicle vehicle) {
        vehicle.design();
    }

}
