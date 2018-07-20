

public class Fish extends Animal {

    private int gills;
    private int eyes;
    private int fins;

    public Fish(String name, int size, int weight, int gills, int eyes, int fins) {

        super(name, 1, 1, size, weight);
        this.gills = gills;
        this.eyes = eyes;
        this.fins = fins;
    }

    private void rest() {

    }

    private void moveMuscles() {
        System.out.println("Fish Move Muscles!");
    }

    private void moveBackFin() {
        System.out.println("Fish Move BackFin?");
    }

    public void swim(int speed) {
        moveMuscles();
        moveBackFin();
        //super.move(speed);
        move(speed);
    }

    private void fastSwim(int speed) {
        System.out.println("Fish.fastSwim() called");
    }
    @Override
    public void move(int speed) {
        System.out.println("Override Fish.move() called.  Fish is moving at " +speed);
        fastSwim(speed);
        super.move(speed);
    }

}
