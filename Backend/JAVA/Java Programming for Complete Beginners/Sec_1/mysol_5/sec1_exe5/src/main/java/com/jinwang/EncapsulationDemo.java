package com.jinwang;

class RevenueCar {

    public static final int SPEED = 150;

    private String type;

    public String getType() {
        return type;
    }

    public String getRevenueData() {
        return "Revenue: " + calculateRevenue();
    }

    private int calculateRevenue() {
        return 12000;
    }

    public void setType(String type) {
        this.type = type;
    }
}

public class EncapsulationDemo {

    public static void run() {

        RevenueCar car = new RevenueCar();
        car.setType("Sedan");

        System.out.println("Type: " + car.getType());
        System.out.println(car.getRevenueData());
        System.out.println("Max Speed: " + RevenueCar.SPEED);
    }

}
