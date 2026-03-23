package com.jinwang;

import com.jinwang.threads.ThreadExtendDemo;
import com.jinwang.threads.RunnableDemo;
import com.jinwang.threads.AnonymousThreadDemo;

public class MainExe {

    public static void main(String[] args) {

        ThreadExtendDemo.run();
        RunnableDemo.run();
        AnonymousThreadDemo.run();
    }

}
