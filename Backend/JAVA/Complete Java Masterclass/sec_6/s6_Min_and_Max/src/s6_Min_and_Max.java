
import java.util.Scanner;

public class s6_Min_and_Max {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
//        boolean first = true;

        while(true) {

            System.out.println("Enter number:");
            boolean isAnInt = scanner.hasNextInt();

            if(isAnInt) {

                int number = scanner.nextInt();

//                if(first) {
//                    first = false;
//                    min = number;
//                    max = number;
//                }

                if(number > max) {
                    max = number;
                }

                if(number < min) {
                    min = number;
                }

                System.out.println("Type 'No' to exit!");

            } else {
                System.out.println("You quit!!!");
                break;
            }

            scanner.nextLine(); // handle input
        }

        System.out.println("min= "+ min + ", max= " + max);
        scanner.close();
    }

}
