

import java.util.*;

public class ce1_MegaBytes_Converter {

    public static void main(String[] args) {

        int input = 2050;
        printMegaBytesAndKiloBytes(input);
        //System.out.println("input: " + input + "\noutput: " + output);

    }

    /**
     * @param n: An integer
     * @return: void
     */
    public static void printMegaBytesAndKiloBytes(int kiloBytes) {
        // write your code here
        int mega_const = 1024;

        if (kiloBytes < 0) {
            System.out.println("Invalid Value");
        } else {
            int XX = kiloBytes;
            int YY = kiloBytes / mega_const;
            int ZZ= kiloBytes % mega_const;
            System.out.println(XX + " KB = " + YY + " MB and " + ZZ + " KB");
        }
    }

}
