

public class s7_exe61 {

    public static void main(String[] args) {

        SubClass s = new SubClass();
        s.printMethod();

        Rectangle rec = new Rectangle(2,3,4,5);
        System.out.println(rec);

    }

}


class SuperClass {
    public void printMethod() {
        System.out.println("printed in superclass!");
    }
}

class SubClass extends SuperClass {
    @Override
    public void printMethod() {
        super.printMethod();
        System.out.println("printed in subclass!");
    }
}
