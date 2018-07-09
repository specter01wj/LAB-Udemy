

public class s5_Seconds_Minutes {

    public static void main(String[] args) {

        int input1 = 65, input2 = 45, input3 = 4945;
        String output1 = getDurationString(input1, input2);
        System.out.println("input1: " + input1 +
                "\ninput2: " + input2 + "\noutput1: " + output1);
        String output2 = getDurationString(input3);
        System.out.println("input3: " + input3 + "\noutput2: " + output2);
    }

    /**
     * @param n: An int
     * @param n: An int
     * @return: A string
     */
    public static String getDurationString(int mins, int secs) {
        // write your code here
        if( mins < 0 || secs < 0 || secs > 59 ) {
            return "Invalid Value";
        }

        int hours = mins / 60;
        int remainMins = mins % 60;

        return hours + "h " + remainMins + "m " + secs + "s";
    }

    /**
     * @param n: An int
     * @return: A string
     */
    public static String getDurationString(int secs) {
        // write your code here
        if( secs < 0 ) {
            return "Invalid Value";
        }

        int mins = secs / 60;
        int remainSecs = secs % 60;

        return getDurationString(mins, remainSecs);
    }

}
