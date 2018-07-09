

public class ce9_Equality_Printer {

    public static void main(String[] args) {

        int input1 = 1, input2 = 1, input3 = 1;
        printEqual(input1, input2, input3);
        /*System.out.println("input1: " + input1 +
                "\ninput2: " + input2 +
                "\ninput3: " + input3 + "\noutput: " + output);*/

    }

    /**
     * @param n: An int
     * @param n: An int
     * @param n: An int
     * @return: void
     */
    public static void printEqual(int num1, int num2, int num3) {
        // write your code here
        if(num1 < 0 || num2 < 0 || num3 < 0) {
            System.out.println("Invalid Value");
            return;
        }

        if(num1 == num2 && num3 == num2) {
            System.out.println("All numbers are equal");
            return;
        }

        if(num1 != num2 && num3 != num2 && num1 != num3) {
            System.out.println("All numbers are different");
            return;
        } else {
            System.out.println("Neither all are equal or different");
            return;
        }
    }

}
