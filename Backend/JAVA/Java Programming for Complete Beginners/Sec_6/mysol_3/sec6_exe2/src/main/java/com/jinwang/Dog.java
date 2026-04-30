package com.jinwang;

public class Dog extends Animal {

    public Dog(String name) {

        super(name);

    }

    @Override

    public void makeSound() {

        System.out.println("The dog barks.");

    }

}
