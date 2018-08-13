
import java.util.ArrayList;

public class s9_7 {

    public static void main(String[] args) {
        Customer customer = new Customer("James", 66.66);
        Customer anotherCustomer;
        anotherCustomer = customer;
        anotherCustomer.setBalance(200.45);
        System.out.println("Balance for " + customer.getName() + " is " + customer.getBalance());

        ArrayList<Integer> intList = new ArrayList<Integer>();

        intList.add(1);
        intList.add(2);
        intList.add(3);

        for (int i = 0; i < intList.size(); i++) {
            System.out.println(i + ": " + intList.get(i));
        }

        intList.add(1,222);
        for (int i = 0; i < intList.size(); i++) {
            System.out.println(i + ": " + intList.get(i));
        }

    }

}
