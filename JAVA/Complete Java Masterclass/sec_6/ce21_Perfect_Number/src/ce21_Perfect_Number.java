

public class ce21_Perfect_Number {

    public static void main(String[] args) {

        int input = 28;
        boolean output = isPerfectNumber(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: A boolean
     */
    public static boolean isPerfectNumber(int number) {
        // write your code here
        if (number < 1) return false;

        int sum = 0;
        for (int i = 1; i < number; i++){
            if (number % i == 0){
                sum += i;
            }
        }
        return sum == number;
    }

}
