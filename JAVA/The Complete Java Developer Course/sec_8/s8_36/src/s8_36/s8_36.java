package s8_36;

public class s8_36 {
	
	public static void main(String[] args) {
		
		Car car1 = new Car();
		
		car1.Type = "BMW";
		car1.Model = 2018;
		car1.Price = 100000;
		car1.MilesDrive = 3000;
		double price = car1.GetPrice();
		
		System.out.println("Car Price: " + price);
		
	}

}
