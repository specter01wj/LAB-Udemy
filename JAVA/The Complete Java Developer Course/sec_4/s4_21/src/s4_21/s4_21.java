package s4_21;

import java.util.Scanner;

public class s4_21 {
	
	static Scanner reader = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.print("Enter index: ");
		int grade = reader.nextInt();
		
		switch(grade) {
		case 1:
			System.out.println("Grade A!");
			break;
		case 2:
			System.out.println("Grade B!");
			break;
		case 3:
			System.out.println("Grade C!");
			break;
		default:
			System.out.println("Grade F!");
		} 
		
		double num1 = 3.5;
		double tmp = num1*10%10;
		int num2 = (int)num1;
		 if(tmp>=5){
			 num2++;
		 }
		 
		 System.out.println("output: " + num2);
	}

}
