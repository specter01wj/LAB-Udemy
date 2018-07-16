

public class ce16_Even_Digit_Sum {

    public static void main(String[] args) {

        int input = 252;
        int output = getEvenDigitSum(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: An integer
     */
    public static int getEvenDigitSum(int number){
        int sum = 0, lastDigit = 0;

        if(number < 0) {
            return -1;
        }

        while(number > 0) {
            lastDigit = number % 10;
            if( lastDigit % 2 == 0) {
                sum += lastDigit;
            }
            number /= 10;
        }
        return sum;
    }

}
