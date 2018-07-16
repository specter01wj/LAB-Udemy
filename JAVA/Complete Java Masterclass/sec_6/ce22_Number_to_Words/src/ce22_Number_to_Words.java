

public class ce22_Number_to_Words {

    public static void main(String[] args) {

        int input = 2345000;
        numberToWords(input);
        //System.out.println("input1: " + input1 + " input2: " + input2 + "\noutput: " + output);

    }

    /**
     * @param num: Two integers
     * @return: void
     */
    public static void numberToWords(int number) {

        int reverseNumber = reverse(number);
        int length = getDigitCount(number);
        String[] arr = {"Zero", "One", "Two", "Three",
                "Four", "Five", "Six", "Seven", "Eight", "Nine"};

        if (number < 1) {
            System.out.println("Invalid Value");
        } else {
            int lastDigit = 0;
            for (int i = 0; i < length; i++) {
                lastDigit = reverseNumber % 10;
                reverseNumber /= 10;

                System.out.println(arr[lastDigit]);

                /*if (lastDigit == 0) {
                    System.out.println("Zero");
                } else if (lastDigit == 1) {
                    System.out.println("One");
                } else if (lastDigit == 2) {
                    System.out.println("Two");
                } else if (lastDigit == 3) {
                    System.out.println("Three");
                } else if (lastDigit == 4) {
                    System.out.println("Four");
                } else if (lastDigit == 5) {
                    System.out.println("Five");
                } else if (lastDigit == 6) {
                    System.out.println("Six");
                } else if (lastDigit == 7) {
                    System.out.println("Seven");
                } else if (lastDigit == 8) {
                    System.out.println("Eight");
                } else {
                    System.out.println("Nine");
                }*/
            }
        }
    }

    public static int getDigitCount(int number) {
        int count = 0;

        if (number < 0) {
            return -1;
        } else if (number == 0) {
            return 1;
        } else {
            while (number != 0) {
                number /= 10;
                count++;
            }
            return count;
        }
    }

    public static int reverse(int number) {

        int digit = 0;
        int reverse = 0;

        while (number != 0) {
            digit = number % 10;
            reverse = (reverse * 10) + digit;
            number /= 10;
        }
        return reverse;
    }

}
