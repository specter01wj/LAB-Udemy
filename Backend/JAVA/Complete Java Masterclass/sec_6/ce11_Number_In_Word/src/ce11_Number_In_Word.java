

public class ce11_Number_In_Word {

    public static void main(String[] args) {

        int input = 6;
        printNumberInWord(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: void
     */
    public static void printNumberInWord(int num){
        switch (num){
            case 0:
                System.out.println("ZERO");
                break;
            case 1:
                System.out.println("ONE");
                break;
            case 2:
                System.out.println("TWO");
                break;
            case 3:
                System.out.println("THREE");
                break;
            case 4:
                System.out.println("FOUR");
                break;
            case 5:
                System.out.println("FIVE");
                break;
            case 6:
                System.out.println("SIX");
                break;
            case 7:
                System.out.println("SEVEN");
                break;
            case 8:
                System.out.println("EIGHT");
                break;
            case 9:
                System.out.println("NINE");
                break;
            default:
                System.out.println("OTHER");
                break;
        }

        /*String[] arr = {"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE",
                "SIX", "SEVEN", "EIGHT", "NINE"};

        System.out.println(num >= 0 && num <= 9 ? arr[num] : "OTHER");*/

    }

}
