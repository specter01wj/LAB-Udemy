package com.jinwang;

class Factory {

    public void design() {
        System.out.println("Design the car");
    }

    public void build() {
        System.out.println("Build the car");
    }
}

class Car extends Factory {

    public void brand() {
        System.out.println("Tesla");
    }
}

public class InheritanceDemo {

    public static void run() {

        Factory factory = new Factory();
        factory.design();
        factory.build();

        Car car = new Car();
        car.design();
        car.build();
        car.brand();
    }

}
