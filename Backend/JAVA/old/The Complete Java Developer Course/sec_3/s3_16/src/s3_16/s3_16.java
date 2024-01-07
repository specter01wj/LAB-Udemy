package s3_16;

import java.util.Scanner;
import java.util.Calendar;

public class s3_16 {
	
	static Scanner reader = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		System.out.println("enter DOB: ");
		int DOB = reader.nextInt();
		int year = Calendar.getInstance().get(Calendar.YEAR);
		//int age = 2018 - DOB;
		int age = year - DOB;
		System.out.println("Ur age: " + age + " years!");
		
	}

}
