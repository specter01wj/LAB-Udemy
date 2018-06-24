


public class s4_7 {

    public static void main(String[] args) {


        boolean isAlien = false;

        int topScore = 80;

        int secondTopScore = 81;

        // more on operators
        if((topScore >90) || (secondTopScore <=90))
            System.out.println("One of these tests is true");

        int newValue = 50;
        if(newValue == 50)
            System.out.println("This is true");

        boolean isCar = false;
        if(isCar == true)
            System.out.println("This is not supposed to happen");

        isCar = true;
        boolean wasCar = isCar ? true : false;
        if(wasCar)
            System.out.println("wasCar is true");


        double myFirstValue = 20d;
        double mySecondValue = 80;

        double myTotal = (myFirstValue + mySecondValue) * 25;

        System.out.println("myTotal = " + myTotal);

        double theRemainder = myTotal % 40;
        System.out.println("Remainder is " + theRemainder);
        
        if(theRemainder <=20)
            System.out.println("Total was over the limit");

    }

}
