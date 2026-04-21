package com.jinwang.reentrantlock;

import java.util.Scanner;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {

    private int value = 0;

    private final Lock lock = new ReentrantLock();
    private final Condition condition = lock.newCondition();

    private void increment() {
        for (int i = 0; i < 20000; i++) {
            value++;
        }
    }

    public void threadOne() throws InterruptedException {

        lock.lock();

        try {
            System.out.println("Thread 1 waiting...");
            condition.await(); // wait
            System.out.println("Thread 1 resumed.");
            increment();
        } finally {
            lock.unlock();
        }
    }

    public void threadTwo() throws InterruptedException {

        Thread.sleep(1000);

        lock.lock();

        try (Scanner scanner = new Scanner(System.in)) {

            System.out.println("Press ENTER to continue...");
            scanner.nextLine();
            System.out.println("ENTER pressed.");

            condition.signal(); // notify

            increment();
        } finally {
            lock.unlock();
        }
    }

    public void finished() {
        System.out.println("Value is: " + value);
    }
}