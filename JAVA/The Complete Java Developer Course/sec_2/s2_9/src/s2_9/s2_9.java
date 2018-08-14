package s2_9;

import java.util.Scanner;

public class s2_9 {
	
	private static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) {
		//String name = "James Wang";
		System.out.println("Enter name: ");
		String name = scanner.nextLine();
		System.out.println(name);
		
		System.out.println("Enter genderss: ");
		String gender = scanner.nextLine();
		char gen = gender.charAt(0);
		System.out.println(gen);
		
	}
	
}
