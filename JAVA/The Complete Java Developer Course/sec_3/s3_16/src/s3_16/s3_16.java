package s3_16;

import java.util.Scanner;

public class s3_16 {
	
	static Scanner reader = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.println("enter DOB: ");
		int DOB = reader.nextInt();
		int age = 2018 - DOB;
		System.out.println("Ur age: " + age + " years!");
		
	}

}
