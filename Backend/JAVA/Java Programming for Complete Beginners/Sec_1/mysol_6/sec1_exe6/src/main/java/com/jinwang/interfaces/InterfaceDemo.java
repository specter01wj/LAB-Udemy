package com.jinwang.interfaces;

public class InterfaceDemo {

    public static void run() {

        Computer computer = new Computer();
        computer.start();

        Vehicle vehicle = new Vehicle("Car");
        vehicle.drive();

        Information info1 = computer;
        Information info2 = vehicle;

        info1.displayInformation();
        info2.displayInformation();

        System.out.println();

        showInformation(computer);
        showInformation(vehicle);
    }

    private static void showInformation(Information info) {
        info.displayInformation();
    }

}
