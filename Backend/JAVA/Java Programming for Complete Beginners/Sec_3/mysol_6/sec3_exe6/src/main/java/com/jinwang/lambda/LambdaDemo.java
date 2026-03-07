package com.jinwang.lambda;

interface FunctionalInterfaceExample {
    int start(int value1, int value2);
}

class Car {

    public void drive(FunctionalInterfaceExample obj) {

        System.out.println("Driving the car...");

        int number = obj.start(10, 20);

        System.out.println("Returning the number: " + number);
    }
}

public class LambdaDemo {

    public static void run() {

        Car car = new Car();

        // Anonymous class
        car.drive(new FunctionalInterfaceExample() {

            @Override
            public int start(int value1, int value2) {

                System.out.println("Start driving...");
                return value1 * value2;
            }
        });

        System.out.println();

        // Lambda expression
        car.drive((value1, value2) -> {

            System.out.println("Start driving...");
            return value1 * value2;
        });
    }
}
