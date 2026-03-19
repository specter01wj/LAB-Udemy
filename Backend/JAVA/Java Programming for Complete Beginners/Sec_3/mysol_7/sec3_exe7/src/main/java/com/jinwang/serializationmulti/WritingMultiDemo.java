package com.jinwang.serializationmulti;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.Arrays;

public class WritingMultiDemo {

    public static void run() {

        System.out.println("Writing multiple objects...");

        Vehicle[] vehicles = {
                new Vehicle(805, "Toyota"),
                new Vehicle(505, "Ford"),
                new Vehicle(203, "Chevrolet")
        };

        ArrayList<Vehicle> vehicleList =
                new ArrayList<>(Arrays.asList(vehicles));

        try (ObjectOutputStream out =
                     new ObjectOutputStream(new FileOutputStream("vehicle.data"))) {

            out.writeObject(vehicles);





            
            out.writeObject(vehicleList);

            out.writeInt(vehicleList.size());

            for (Vehicle v : vehicleList) {
                out.writeObject(v);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
