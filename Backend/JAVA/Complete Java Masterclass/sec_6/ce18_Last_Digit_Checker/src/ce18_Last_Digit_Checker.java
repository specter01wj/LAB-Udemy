

public class ce18_Last_Digit_Checker {

    public static void main(String[] args) {

        int input1 = 41, input2 = 22, input3 = 71;
        boolean output = hasSameLastDigit(input1, input2, input3);
        System.out.println("input1: " + input1 + " input2: " + input2 +
                            " input3: " + input3 + "\noutput: " + output);

    }

    /**
     * @param num: Three integers
     * @return: A boolean
     */
    public static boolean hasSameLastDigit(int number1, int number2, int number3) {
        if (number1< 10|| number1 > 1000||number2<10||number2>1000||number3<10||number3>1000) {
            return false;
        }

        if ((number1 % 10 == number2 % 10) || (number1 % 10 == number3 % 10) || (number2 % 10 == number3 % 10)) {
            return true;
        }

        return false;
    }

}
