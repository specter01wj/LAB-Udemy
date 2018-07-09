

public class ce5_Equal_Sum_Checker {

    public static void main(String[] args) {

        int input1 = 1, input2 = -1, input3 = 0;
        boolean output = hasEqualSum(input1, input2, input3);
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
    public static boolean hasEqualSum(int num1, int num2, int num3) {
        // write your code here
        if(num1 + num2 == num3) {
            return true;
        } else {
            return false;
        }
    }

}
