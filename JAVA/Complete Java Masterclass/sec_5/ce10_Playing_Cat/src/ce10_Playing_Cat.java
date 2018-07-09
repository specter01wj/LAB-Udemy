

public class ce10_Playing_Cat {

    public static void main(String[] args) {

        int input = 40;
        boolean output = isCatPlaying(true, input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: Aa boolean
     * @param n: An int
     * @return: A boolean
     */
    public static boolean isCatPlaying(boolean summer, int temp) {
        // write your code here
        int upperLimit = summer ? 45 : 35;

        return (temp >= 25 && temp <= upperLimit);
    }

}
