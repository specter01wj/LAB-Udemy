

public class ce23_Flour_Pack_Problem {

    public static void main(String[] args) {

        int input1 = 5, input2 = 5, input3 = 4;
        boolean output = canPack(input1, input2, input3);
        System.out.println("BigCount: " + input1 + " SmallCount: " + input2 +
                            " Goal: " + input3 + "\noutput: " + output);

    }

    /**
     * @param num: An integer
     * @param num: An integer
     * @param num: An integer
     * @return: A boolean
     */
    public static boolean canPack(int bigCount, int smallCount, int goal) {
        if (bigCount < 0 || smallCount < 0 || goal < 0 || (bigCount * 5 + smallCount < goal) || (smallCount < goal % 5)) {
            return false;
        } else {
            return true;
        }
    }

}
