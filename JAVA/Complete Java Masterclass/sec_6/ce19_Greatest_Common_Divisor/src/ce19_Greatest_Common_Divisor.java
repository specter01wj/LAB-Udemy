

public class ce19_Greatest_Common_Divisor {

    public static void main(String[] args) {

        int input1 = 12, input2 = 30;
        int output = getGreatestCommonDivisor(input1, input2);
        System.out.println("input1: " + input1 + " input2: " + input2 + "\noutput: " + output);

    }

    /**
     * @param num: Two integers
     * @return: An integer
     */
    public static int getGreatestCommonDivisor(int first, int second){
        if(first < 10 || second < 10) return -1;

        int minVal = (first < second) ? first : second;

        int maxVal = (first > second) ? first : second;

        //Euclidean logic:
        // maxVal = (quotient)(minVal) + remainder
        //Quotient doesn't matter. Algorithm ends when remainder is 0.
//        int x= 1;
//        for(int i =1; i <= first || i <= second  ; i++) {
//            if ((first % i == 0) && (second % i == 0)) x = i;
//        }

        int remainder = (maxVal % minVal);
        while(remainder != 0){
            maxVal = minVal;
            minVal = remainder;
            remainder = (maxVal%minVal);
        }
        return minVal;
    }

}
