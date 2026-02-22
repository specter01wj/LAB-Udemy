package com.jinwang;

class Student {

    public static final int MY_CONSTANT = 8;

    private String name;
    public static String studentClass;
    public static int count = 0;

    public Student(String name) {
        this.name = name;
        count++;
    }

    public void studentName() {
        System.out.println(name + " is enrolled in: " + studentClass);
    }

    public static void classInfo() {
        System.out.println(studentClass);
    }
}

public class StaticDemo {

    public static void run() {

        Student.studentClass = "Web Development Fundamentals";

        System.out.println("Before creating objects: " + Student.count);

        Student s1 = new Student("Steven");
        Student s2 = new Student("Daniel");

        System.out.println("After creating objects: " + Student.count);

        s1.studentName();
        s2.studentName();

        System.out.println(Math.E);
        System.out.println(Student.MY_CONSTANT);
    }

}
