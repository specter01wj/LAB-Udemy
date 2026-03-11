package com.jinwang.serialization;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class ReadingDemo {

    public static void run() {

        System.out.println("Reading objects...");

        try (ObjectInputStream in =
                     new ObjectInputStream(new FileInputStream("vehicle.data"))) {

            Vehicle vehicle1 = (Vehicle) in.readObject();
            Vehicle vehicle2 = (Vehicle) in.readObject();

            System.out.println(vehicle1);
            System.out.println(vehicle2);

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
