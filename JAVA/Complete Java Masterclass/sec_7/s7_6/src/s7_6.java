

public class s7_6 {

    public static void main(String[] args) {
        Animal animal = new Animal("Animal", 1, 1, 5, 5);

        Dog dog = new Dog("Yorkie", 8, 20, 2, 4, 1, 20, "long silky");
//        dog.eat();
        dog.walk();
//        dog.run();
        Fish fish = new Fish("James", 2, 11, 1, 2, 3);
        fish.swim(100);
    }

}
