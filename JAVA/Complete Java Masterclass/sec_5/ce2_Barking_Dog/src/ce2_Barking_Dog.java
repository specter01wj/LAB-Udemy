

public class ce2_Barking_Dog {

    public static void main(String[] args) {

        int input = 20;
        boolean output = bark(true, input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: A boolean
     * @param n: An integer
     * @return: boolean
     */
    public static boolean bark(boolean barking, int hourOfDay) {
        // write your code here
        int mega_const = 1024;

        if (hourOfDay < 0 || hourOfDay > 23) {
            return false;
        } else if (barking == true && hourOfDay < 8 || hourOfDay > 22) {
            return true;
        } else {
            return false;
        }
    }

}
