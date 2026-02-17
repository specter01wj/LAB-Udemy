package com.jinwang;

public class AdvancedObjectDemo {

    public static void run() {

        Animal pet = new Animal();
        pet.animal = "Cat";
        pet.value = 9;
        pet.month = 8;

        int months = pet.calculateMonthsToBirthday();

        pet.walk(7);
        pet.talk("Hi, I am Steven!");

        String hello = "Hello there!";
        pet.talk(hello);

        pet.timer(9, 3.65);

        System.out.println("Months until birthday: " + months);
    }

}
