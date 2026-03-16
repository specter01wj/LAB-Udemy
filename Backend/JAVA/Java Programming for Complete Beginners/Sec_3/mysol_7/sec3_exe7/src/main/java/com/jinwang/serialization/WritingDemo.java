package com.jinwang.serialization;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class WritingDemo {

    public static void run() {

        System.out.println("Writing objects...");

        Vehicle car = new Vehicle(369, "Toyota");


        
        Vehicle truck = new Vehicle(852, "Ford");

        System.out.println(car);
        System.out.println(truck);

        try (ObjectOutputStream out =
                     new ObjectOutputStream(new FileOutputStream("vehicle.data"))) {

            out.writeObject(car);
            out.writeObject(truck);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
