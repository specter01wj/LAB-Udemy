

public class ce6_Teen_Number_Checker {

    public static void main(String[] args) {

        int input1 = 23, input2 = 17, input3 = 29;
        boolean output = hasTeen(input1, input2, input3);
        System.out.println("input1: " + input1 +
                "\ninput2: " + input2 +
                "\ninput3: " + input3 + "\noutput: " + output);

    }

    /**
     * @param n: An int
     * @param n: An int
     * @param n: An int
     * @return: A boolean
     */
    public static boolean hasTeen(int num1, int num2, int num3) {
        // write your code here
        return (num1 >= 13 && num1 <= 19) || (num2 >= 13 && num2 <= 19) || (num3 >= 13 && num3 <= 19);
    }

}
