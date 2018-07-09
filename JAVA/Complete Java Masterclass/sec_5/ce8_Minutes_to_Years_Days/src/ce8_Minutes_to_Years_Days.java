

public class ce8_Minutes_to_Years_Days {

    public static void main(String[] args) {

        int input = 561600;
        printYearsAndDays(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An long
     * @return: void
     */
    public static void printYearsAndDays(long mins) {
        // write your code here
        if( mins < 0 ) {
            System.out.println("Invalid Value");
        } else {
            long days = (mins / 60) / 24;
            long years = days / 365;
            long remainDays = days % 365;
            System.out.println(mins + " min = " + years + " y and " + remainDays + " d");
        }
    }

}
