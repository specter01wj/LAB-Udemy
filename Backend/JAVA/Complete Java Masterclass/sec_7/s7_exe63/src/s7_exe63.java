

public class s7_exe63 {

    public static void main(String[] args) {

        Calculator.printSum(5, 10);
        //Calculator cal = new Calculator();
        //System.out.println(cal.printSum(5, 15));

        Dog rex = new Dog();
        rex.bark();

        printHello();

    }

    public static void printHello() {
        System.out.println("Hello!");
    }

}


class Calculator {

    public static int printSum(int a, int b) {
        System.out.println("sum = " + (a + b));
        return a + b;
    }

}

class Dog {

    public void bark() {
        System.out.println("woof!");
    }

}
