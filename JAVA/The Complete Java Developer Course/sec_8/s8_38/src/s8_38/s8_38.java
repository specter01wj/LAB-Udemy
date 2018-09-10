package s8_38;

import s8_38.Car;

public class s8_38 {

	public static void main(String[] args) {
		Car.Owner = "James";
		
		Car car1 = new Car("BMW", 2018, 100000, 30);

		double price = car1.GetPrice();
		
		System.out.println("Car1 Price: " + price);
		System.out.println("Car1 Owner: " + car1.Owner);
		
		Car car2 = new Car();
		double price2 = car2.GetPrice();
		System.out.println("Car2 Price: " + price2);
		System.out.println("Car2 Owner: " + car2.Owner);
		
	}
	
}
