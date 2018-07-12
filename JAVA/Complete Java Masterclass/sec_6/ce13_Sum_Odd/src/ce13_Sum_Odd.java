

public class ce13_Sum_Odd {

    public static void main(String[] args) {

        int input = 3;
        int output = sumOdd(input, 100);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: A boolean
     */
    public static boolean isOdd(int number){
        if(number < 0 || number % 2 == 0){
            return false;
        }
        return true;
    }

    /**
     * @param n: An integer
     * @param n: An integer
     * @return: An Integer
     */
    public static int sumOdd(int start, int end){

        int sum = 0;

        if((start > 0) && (end >= start)) {
            for (int i = start; i <= end; i++) {
                if (isOdd(i)) {
                    sum += i;
                }
            }
            return sum;
        }

        return -1;
    }

}
