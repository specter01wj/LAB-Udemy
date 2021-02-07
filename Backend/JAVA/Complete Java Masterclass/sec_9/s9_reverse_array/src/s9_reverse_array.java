
import java.util.Arrays;

public class s9_reverse_array {

    public static void main(String[] args) {

        int[] array = {1, 5, 3, 7, 11, 9, 15};

        System.out.println("Original Array: " + Arrays.toString(array));

        reverse(array);

        System.out.println("After Reverse: " + Arrays.toString(array));

    }

    private static void reverse(int[] array) {

        for(int i = 0; i < array.length / 2; i++) {
            int tmp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = tmp;
        }

    }

}
