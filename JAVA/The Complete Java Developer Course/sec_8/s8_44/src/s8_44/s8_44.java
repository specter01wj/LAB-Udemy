package s8_44;

public class s8_44 {

	static class Animal {
		String Name;
		String Voice;
	}
	
	public static void main(String[] args) {
		
		call();
		
	}
	
	static void call() {
		Animal animal = new Animal();
		animal.Name = "Monkey";
		animal.Voice = "ZZZZ";
		System.out.println("Annimal (" + animal.Name + ") call: " + animal.Voice);
	}
	
}
