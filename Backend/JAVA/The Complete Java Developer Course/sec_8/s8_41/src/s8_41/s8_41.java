package s8_41;

import s8_41.Car;
import s8_41.CarTruck;

public class s8_41 {

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
		cartruck1.SetHasTruck(true);
		System.out.println("CarTruck1 Price: " + cartruck1.GetPrice());
		CarTruck.Owner = "Lee";
		cartruck1.GetOwner();
		
	}
	
}
