package com.jinwang;

import com.jinwang.passbyvalue.PassByValueDemo;
import com.jinwang.lambda.LambdaDemo;
import com.jinwang.enums.EnumDemo;

public class MainExe {

    public static void main(String[] args) {

        System.out.println("=== Pass By Value Demo ===");
        PassByValueDemo.run();

        System.out.println();
        System.out.println("=== Lambda Demo ===");


        
        LambdaDemo.run();

        System.out.println();
        System.out.println("=== Enum Demo ===");
        EnumDemo.run();
    }

}
