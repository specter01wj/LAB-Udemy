

public class s7_exe64 {

    public static void main(String[] args) {

        Dog rex = new Dog("rex");
        Dog fluffy = new Dog("fluffy");

        rex.printName();
        fluffy.printName();

    }

}

class Dog {

    //private static String name;
    private String name;

    public Dog(String name) {
        //Dog.name = name;
        this.name = name;
    }

    public void printName() {
        System.out.println("name = " + name);
    }

}
