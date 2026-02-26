package com.jinwang;

import java.util.Objects;

class Laptop {

    private int id;
    private String brand;

    public Laptop(int id, String brand) {
        this.id = id;
        this.brand = brand;
    }

    @Override
    public String toString() {
        return "Laptop{id=" + id + ", brand='" + brand + "'}";
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, brand);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Laptop other)) return false;
        return id == other.id &&
                Objects.equals(brand, other.brand);
    }
}

public class EqualityDemo {

    public static void run() {

        System.out.println("Default Object toString:");
        System.out.println(new Object());

        Laptop laptop1 = new Laptop(250, "HP");
        Laptop laptop2 = new Laptop(90, "DELL");

        System.out.println("Laptop equals: " + laptop1.equals(laptop2));

        int firstNumber = 8;
        int secondNumber = 8;

        System.out.println("Primitive equality: " + (firstNumber == secondNumber));

        String a = "Yes";
        String b = "Yesopss".substring(0, 3);

        System.out.println("String equals: " + a.equals(b));
        System.out.println("String b: " + b);
    }
}
