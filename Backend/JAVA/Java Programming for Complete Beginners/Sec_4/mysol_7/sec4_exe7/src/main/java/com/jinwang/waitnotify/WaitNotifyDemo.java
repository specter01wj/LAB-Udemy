package com.jinwang.waitnotify;

public class WaitNotifyDemo {

    public static void run() {

        final Engine engine = new Engine();

        Thread t1 = new Thread(() -> {
            try {
                engine.releaseEnergy();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        Thread t2 = new Thread(() -> {
            try {
                engine.consumeFuel();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
