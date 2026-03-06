package com.jinwang;

public class InnerClassDemo {

    public static void run() {

        Machine machine = new Machine(12);

        machine.run();

        Machine.Tire tire = new Machine.Tire();
        tire.repair();
    }
}
