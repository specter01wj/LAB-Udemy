

public class ce4_DecimalComparator {

    public static void main(String[] args) {

        double input1 = -3.1758;
        double input2 = -3.1756;
        boolean output = areEqualByThreeDecimalPlaces(input1, input2);
        System.out.println("input1: " + input1 + "\ninput2: " + input2 + "\noutput: " + output);

    }

    /**
     * @param n: An double
     * @param n: An double
     * @return: A boolean
     */
    public static boolean areEqualByThreeDecimalPlaces(double arg1, double arg2) {
        // write your code here
        return (int)(arg1 * 1000) == (int)(arg2 * 1000);
    }

}
