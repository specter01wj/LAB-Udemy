

public class s7_exe60 {

    public static void main(String[] args) {

        House blueHouse = new House("blue");
        House anotherHouse = blueHouse;

        System.out.println(blueHouse.getColor());
        System.out.println(anotherHouse.getColor());

        anotherHouse.setColor("red");
        System.out.println(blueHouse.getColor());
        System.out.println(anotherHouse.getColor());

        House greenHouse = new House("green");
        anotherHouse = greenHouse;

        System.out.println(blueHouse.getColor());
        System.out.println(greenHouse.getColor());
        System.out.println(anotherHouse.getColor());

    }

}
