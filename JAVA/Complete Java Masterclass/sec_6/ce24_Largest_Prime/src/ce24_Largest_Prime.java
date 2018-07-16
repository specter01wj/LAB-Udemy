

public class ce24_Largest_Prime {

    public static void main(String[] args) {

        int input = 217;
        int output = getLargestPrime(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: An integer
     */
    public static int getLargestPrime(int number) {
        if (number <= 1) return -1;

        for (int i = number - 1; i > 1; i--) {
            if (number % i == 0) {
                number = i;
            }
        }

        return number;
    }

}
