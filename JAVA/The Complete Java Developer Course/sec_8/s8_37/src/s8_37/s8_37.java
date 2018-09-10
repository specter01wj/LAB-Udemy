package s8_37;

import s8_37.Car;

public class s8_37 {

	public static void main(String[] args) {
		
		Car car1 = new Car("BMW", 2018, 100000, 30);

		double price = car1.GetPrice();
		
		System.out.println("Car1 Price: " + price);
		
		Car car2 = new Car();
		double price2 = car2.GetPrice();
		System.out.println("Car2 Price: " + price2);
		
	}
	
}
