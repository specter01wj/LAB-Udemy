

public class s6_4 {

    public static void main(String[] args) {
        String numberAsString = "2018.125";
        System.out.println("numberAsString= " + numberAsString);

        int number1 = Integer.parseInt("2019");
        System.out.println("Int number = " + number1);

        double number = Double.parseDouble(numberAsString);
        System.out.println("number = " + number);

        numberAsString += 1;
        number += 1;

        System.out.println("numberAsString = " + numberAsString);
        System.out.println("number = " + number);
    }

}
