package s4_18;

import java.util.Scanner;

public class s4_18 {
	
	static Scanner reader = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		int grade = reader.nextInt();
		
		if(grade >= 90){
			System.out.println("Grade A!");
		} else {
			System.out.println("Grade F!");
		}
		
	}

}
