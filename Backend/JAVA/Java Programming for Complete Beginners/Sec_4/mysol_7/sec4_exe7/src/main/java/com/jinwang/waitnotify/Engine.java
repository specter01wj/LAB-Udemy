package com.jinwang.waitnotify;

import java.util.Scanner;

public class Engine {

    public void releaseEnergy() throws InterruptedException {

        synchronized (this) {
            System.out.println("Engine started. Waiting...");
            wait(); // release lock + wait
            System.out.println("Resumed.");
        }
    }

    public void consumeFuel() throws InterruptedException {

        try (Scanner scanner = new Scanner(System.in)) {

            Thread.sleep(2000);

            synchronized (this) {
                System.out.println("Press ENTER to continue...");

                
                scanner.nextLine();
                System.out.println("ENTER pressed.");

                notify(); // wake up waiting thread
            }
        }
    }
}
