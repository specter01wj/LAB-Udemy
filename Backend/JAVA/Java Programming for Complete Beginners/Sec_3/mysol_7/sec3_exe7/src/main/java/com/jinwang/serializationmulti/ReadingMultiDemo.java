package com.jinwang.serializationmulti;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.ArrayList;

public class ReadingMultiDemo {

    public static void run() {

        System.out.println("Reading multiple objects...");

        try (ObjectInputStream in =
                     new ObjectInputStream(new FileInputStream("vehicle.data"))) {

            Vehicle[] vehicles = (Vehicle[]) in.readObject();
            ArrayList<Vehicle> vehicleList =
                    (ArrayList<Vehicle>) in.readObject();

            for (Vehicle v : vehicles) {
                System.out.println(v);
            }

            for (Vehicle v : vehicleList) {
                System.out.println(v);
            }

            int count = in.readInt();

            for (int i = 0; i < count; i++) {
                Vehicle v = (Vehicle) in.readObject();
                System.out.println(v);
            }

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
