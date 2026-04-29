package com.jinwang;

import com.jinwang.bank.CheckingAccount;
import com.jinwang.bank.SavingsAccount;

public class MainExe {

    public static void main(String[] args) {

        SavingsAccount savings = new SavingsAccount("S001", "John", 1000, 0.05);

        CheckingAccount checking = new CheckingAccount("C001", "Alice", 500, 200);

        // Savings account

        savings.deposit(200);

        savings.displayAccountInfo();

        savings.withdraw(300);

        savings.displayAccountInfo();

        // Checking account

        checking.deposit(100);

        checking.displayAccountInfo();

        checking.withdraw(700);

        checking.displayAccountInfo();

    }

}
