

public class ce20_All_Factors {

    public static void main(String[] args) {

        int input = 32;
        printFactors(input);
        //System.out.println("input1: " + input1 + " input2: " + input2 + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: void
     */
    public static void printFactors(int number) {
        int factor = 1;

        if (number < 1) {
            System.out.println("Invalid Value");
        }

        while(factor <= number) {
            if (number % factor == 0) {
                System.out.println(factor);

            }
            factor++;
        }
    }

}
