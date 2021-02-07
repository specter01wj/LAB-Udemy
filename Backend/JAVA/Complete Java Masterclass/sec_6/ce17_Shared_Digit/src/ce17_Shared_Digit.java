

public class ce17_Shared_Digit {

    public static void main(String[] args) {

        int input1 = 15, input2 = 58;
        boolean output = hasSharedDigit(input1, input2);
        System.out.println("input1: " + input1 + " input2: " + input2 + "\noutput: " + output);

    }

    /**
     * @param num: Two integers
     * @return: A boolean
     */
    public static boolean hasSharedDigit(int number1, int number2){
        if (number1 <10 || number1 > 99 || number2 < 10 || number2 > 99) {
            return false;
        }

        String str1 = String.valueOf(number1);
        String str2 = String.valueOf(number2);

        for(int i = 0; i < str1.length(); i++) {
            for(int j = 0; j < str2.length(); j++) {
                if(str1.charAt(i) == str2.charAt(j))
                    return true;
            }
        }

        /*else if((number1 % 10 == number2 % 10)||(number1/10 == number2/10)||(number1%10 == number2/10)||(number2/10 == number2%10)) {
            return true;
        }*/
        return false;
    }

}
