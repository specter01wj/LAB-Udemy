package s8_39;

import s8_39.Car;

public class s8_39 {

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
		
		CarTruck cartruck1 = new CarTruck();
		System.out.println("CarTruck1 Price: " + cartruck1.GetPrice());
		cartruck1.Owner = "Lee";
		cartruck1.GetOwner();
		
	}
	
}
