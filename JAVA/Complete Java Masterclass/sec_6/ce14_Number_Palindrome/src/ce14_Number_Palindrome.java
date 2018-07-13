

public class ce14_Number_Palindrome {

    public static void main(String[] args) {

        int input = -12321;
        boolean output = isPalindrome(input);
        System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: a positive number
     * @return: true if it's a palindrome or false
     */
    public static boolean isPalindrome(int num) {
        // write your code here
        String str = String.valueOf(Math.abs(num));
        int i = 0;
        int j = str.length() - 1;
        while (i < j) {
            if (str.charAt(i++) != str.charAt(j--)) {
                return false;
            }
        }
        return true;
    }

}
