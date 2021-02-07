

public class ce25_Diagonal_Star {

    public static void main(String[] args) {

        int input = 5;
        printSquareStar(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @return: void
     */
    public static void printSquareStar (int number)  {
        if (number < 5)  {
            System.out.println("Invalid Value");
            return;
        }
        for (int i = 1; i <= number; i++)  {
            String s = "";
            for (int j = 1; j <= number; j++)  {
                s += ((i==1) || (i==number)                     // top and bottom rows
                        ||  (j==1) || (j==number)                     // left and right edges
                        ||  (j==i) || (j==(number-i+1)))? "*" : " ";  // stars in the middle
            }
            System.out.println(s);
        }
    }

}
