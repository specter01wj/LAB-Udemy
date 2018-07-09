

public class ce3_Leap_Year_Calculator {

    public static void main(String[] args) {

        int input = 2018;
        boolean output = isLeapYear(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: A boolean
     */
    public static boolean isLeapYear(int year) {
        // write your code here
        if (year >= 1 && year <= 9999) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

}
