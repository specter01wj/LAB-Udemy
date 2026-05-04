package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) throws InterruptedException {

        List<BankAccount> accounts = new ArrayList<>();
        accounts.add(new BankAccount(1, 1000));
        accounts.add(new BankAccount(2, 1000));

        Thread t1 = new Thread(new DepositTask(accounts));
        Thread t2 = new Thread(new WithdrawTask(accounts));
        Thread t3 = new Thread(new DepositTask(accounts));
        Thread t4 = new Thread(new WithdrawTask(accounts));

        t1.start();
        t2.start();
        t3.start();
        t4.start();

        t1.join();
        t2.join();
        t3.join();
        t4.join();

        for (BankAccount acc : accounts) {
            System.out.println("Account " + acc.getAccountNumber()
                    + " balance: " + acc.getBalance());
        }
    }
}
