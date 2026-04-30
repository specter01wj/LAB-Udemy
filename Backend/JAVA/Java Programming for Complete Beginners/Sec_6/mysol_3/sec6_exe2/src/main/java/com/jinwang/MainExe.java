package com.jinwang;

public class MainExe {

    public static void main(String[] args) {

        Animal[] animals = {
                new Dog("Dog"),
                new Cat("Cat"),
                new Bird("Bird")
        };

        for (Animal animal : animals) {
            animal.makeSound();
        }

    }

}
