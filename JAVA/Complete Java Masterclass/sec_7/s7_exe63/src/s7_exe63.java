

public class s7_exe63 {

    public static void main(String[] args) {

        Calculator.printSum(5, 10);
        printHello();

    }

    public static void printHello() {
        System.out.println("Hello!");
    }
    

}


class Calculator {

    public static void printSum(int a, int b) {
        System.out.println("sum = " + (a + b));
    }

}
