package com.jinwang.volatiledemo;

import java.util.Scanner;

class Engine extends Thread {

    private volatile boolean running = true;

    @Override
    public void run() {

        while (running) {
            System.out.println("Engine is running...");

            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        System.out.println("Engine stopped.");
    }

    public void stopEngine() {
        running = false;
    }
}

public class VolatileDemo {

    public static void run() {

        Engine engine = new Engine();
        engine.start();

        System.out.println("Press ENTER to stop...");

        try (Scanner scanner = new Scanner(System.in)) {
            scanner.nextLine();
        }

        engine.stopEngine();
    }
}
