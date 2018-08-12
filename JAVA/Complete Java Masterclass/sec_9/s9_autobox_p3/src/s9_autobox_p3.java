

public class s9_autobox_p3 {

    public static void main(String[] args) {

        Bank bank = new Bank("Bank of American");

        bank.addBranch("Boston");
        bank.addCustomer("Boston", "James", 2000.54);
        bank.addCustomer("Boston", "Daniel", 3000.56);
        bank.addCustomer("Boston", "Kim", 4000.78);

        bank.addBranch("Chicago");
        bank.addCustomer("Chicago", "Zake", 23000.33);

        bank.addCustomerTransaction("Boston", "Kim", 6000);

        bank.listCustomers("Boston", true);

    }

}
