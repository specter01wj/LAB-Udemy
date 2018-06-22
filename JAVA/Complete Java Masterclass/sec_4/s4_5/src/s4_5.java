

public class s4_5 {

    public static void main(String[] args) {


        String myString = "This is a string";
        System.out.println("myString is equal to: " + myString);

        myString += ", this is more." + "\u00a9";
        System.out.println("myString 2nd: " + myString);

        String numberString = "250.55";
        float numberString_int = Float.parseFloat(numberString) + Float.parseFloat("49.95");
        System.out.println("The result is " + numberString_int);

        String lastString = "10";
        int myInt = 50;
        lastString = lastString + myInt;
        System.out.println("LastString is equal to " + lastString);

        double doubleNumber = 120.47;
        lastString = lastString + doubleNumber;
        System.out.println("LastString value: " + lastString);

    }

}
