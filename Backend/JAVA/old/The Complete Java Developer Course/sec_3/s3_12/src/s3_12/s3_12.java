package s3_12;

public class s3_12 {

	public static void main(String[] args) {
		
		int age = 75;
		double salary = 222.56;
		boolean isTrue = true;
		String rate = "3";
		String doubleRate = "33.554";
		
		String newSalary = String.valueOf(salary);
		String newTrue = String.valueOf(isTrue);
		System.out.println("new salary: " + newSalary);
		System.out.println("new true: " + newTrue);
		
		int newRate = Integer.parseInt(rate);
		double newDoubleRate = Double.parseDouble(doubleRate);
		//double newDoubleRate = (double) doubleRate;
		System.out.println("new rate: " + newRate);
		System.out.println("new doublerate: " + newDoubleRate);
		
	}
	
}
