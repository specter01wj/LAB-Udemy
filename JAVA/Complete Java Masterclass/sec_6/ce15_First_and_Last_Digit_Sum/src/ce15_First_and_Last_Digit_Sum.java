

public class ce15_First_and_Last_Digit_Sum {

    public static void main(String[] args) {

        int input = 257;
        int output = sumFirstAndLastDigit(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: An integer
     */
    public static int sumFirstAndLastDigit (int number){

        //int reverse = 0;
        //int lastDigit = 0;

        if (number < 0){
            return -1;
        }

        int lastDigit = number % 10;

        String str = String.valueOf(number);
        int firstDigit = str.charAt(0) - '0';
        //int firstDigit = Character.getNumericValue(str.charAt(0));

        /*while(number > 0) {
            lastDigit = number % 10;
            reverse = (reverse * 10) + lastDigit;
            number /= 10;
        }*/

        //return sum + (reverse % 10);
        return lastDigit + firstDigit;
    }

}

