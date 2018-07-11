

public class ce12_Number_of_Days_in_Month {

    public static void main(String[] args) {

        int input = 6;
        printNumberInWord(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: void
     */
    public static void main(String[] args) {

        int input = 6;
        printNumberInWord(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: void
     */
    public class NumberOfDaysInMonth {
        public static boolean isLeapYear(int year) {
            if (year < 1 || year > 9999) {
                return false;
            } else if (year % 100 == 0 && year % 400 != 0) {
                return false;
            } else if (year % 4 == 0) {
                return true;
            } else {
                return false;
            }
        }
        public static int getDaysInMonth(int month, int year) {
            if (month < 1 || month > 12 || year < 1 || year > 9999) {
                return -1;
            }
            switch (month) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    return 31;
                case 2:
                    if (NumberOfDaysInMonth.isLeapYear(year)) {
                        return 29;
                    } else {
                        return 28;
                    }
                case 4: case 6: case 9: case 11:
                    return 30;
                default:
                    return -1;
            }
        }
    }

}
