package com.jinwang.semaphore;

import java.util.concurrent.Semaphore;

public class MessageService {

    private static final MessageService INSTANCE = new MessageService();

    // max 20 threads at same time
    private final Semaphore semaphore = new Semaphore(20, true);

    private int activeMessages = 0;

    private MessageService() {}

    public static MessageService getInstance() {
        return INSTANCE;
    }

    public void send() {

        try {
            semaphore.acquire(); // get permit
            sendInternal();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            semaphore.release(); // release permit
        }
    }

    private void sendInternal() {

        synchronized (this) {
            activeMessages++;

            
            System.out.println("Active messages: " + activeMessages);
        }

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        synchronized (this) {
            activeMessages--;
        }
    }
}
