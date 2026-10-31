package com.jinwang;

import java.util.List;
import java.util.Random;

public class WithdrawTask implements Runnable {

    private List<BankAccount> accounts;
    private Random random = new Random();

    public WithdrawTask(List<BankAccount> accounts) {
        this.accounts = accounts;
    }

    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            BankAccount acc = accounts.get(random.nextInt(accounts.size()));




            
            double amount = 50 + random.nextInt(151);
            acc.withdraw(amount);
        }
    }
}
