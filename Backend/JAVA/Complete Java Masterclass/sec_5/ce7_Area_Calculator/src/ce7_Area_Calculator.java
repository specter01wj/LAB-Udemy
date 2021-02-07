

public class ce7_Area_Calculator {

    public static void main(String[] args) {

        double input1 = 5, input2 = 6, input3 = 4;
        double output1 = area(input1);
        System.out.println("input1: " + input1 +
                 "\noutput1: " + output1);
        double output2 = area(input2, input3);
        System.out.println("input2: " + input2 +
                "\ninput3: " + input3 + "\noutput2: " + output2);
    }

    private static final double INVALID_VALUE = -1.0;
    private static final double PI_VALUE = 3.141592654;

    /**
     * @param n: A double
     * @return: A double
     */
    public static double area(double radius) {
        // write your code here
        if( radius < 0 ) {
            return INVALID_VALUE;
        } else {
            return PI_VALUE * radius * radius;
        }
    }

    /**
     * @param n: A double
     * @return: A double
     */
    public static double area(double x, double y) {
        // write your code here
        if( x < 0 || y < 0 ) {
            return INVALID_VALUE;
        } else {
            return x * y;
        }
    }

}
