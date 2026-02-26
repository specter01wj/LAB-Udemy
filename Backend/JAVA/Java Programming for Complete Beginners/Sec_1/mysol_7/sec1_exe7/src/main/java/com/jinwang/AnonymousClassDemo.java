package com.jinwang;

interface Phone {
    void call();
}

class Computer {

    public void shutDown() {
        System.out.println("Computer is shutting down.");
    }
}

public class AnonymousClassDemo {

    public static void run() {

        Computer computer = new Computer() {
            @Override
            public void shutDown() {
                System.out.println("MacBook is shutting down.");
            }
        };

        computer.shutDown();

        Phone phone = new Phone() {
            @Override
            public void call() {
                System.out.println("Calling...");
            }
        };

        phone.call();
    }
}
