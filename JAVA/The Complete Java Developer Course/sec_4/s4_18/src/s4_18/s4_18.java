package s4_18;

import java.util.Scanner;

public class s4_18 {
	
	static Scanner reader = new Scanner(System.in);
	
	public static void main(String[] args) {
		System.out.print("Enter grade: ");
		int grade = reader.nextInt();
		
		if(grade >= 90){
			System.out.println("Grade A!");
		} else if(grade < 90 && grade >=60) {
			System.out.println("Grade B!");
		} else {
			System.out.println("Grade F!");
		}
		
	}

}
