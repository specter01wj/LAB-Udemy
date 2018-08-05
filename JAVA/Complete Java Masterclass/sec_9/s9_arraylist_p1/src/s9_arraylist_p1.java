
import java.util.Scanner;

public class s9_arraylist_p1 {

    private static Scanner s = new Scanner(System.in);

    public static void main(String[] args) {
        int[] baseData = new int[3];

        System.out.println("Enter 3 ints:");
        getInput(baseData);
        printArray(baseData);
        resizeArray(baseData);

        System.out.println("Enter 5 ints:");
        getInput(baseData);
        printArray(baseData);

    }

    private static void getInput(int[] data) {
        for (int i = 0; i < data.length; i++) {
            data[i] = s.nextInt();
        }
    }

    private static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    private static void resizeArray(int[] arr) {
        int[] orig = arr;

        arr = new int[5];
        for (int i = 0; i < orig.length; i++) {
            arr[i] = orig[i];
        }
        orig[1]=110;
    }


}
