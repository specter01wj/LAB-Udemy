package s8_48;

public class s8_48 {

	public static void main(String[] args) {
		Car.Owner = "James";
		
		CarTruck cartruck1 = new CarTruck();
		cartruck1.Model = 2017;
		cartruck1.SetHasTruck(true);
		System.out.println("CarTruck1 Price: " + cartruck1.GetPrice());
		CarTruck.Owner = "Lee";
		cartruck1.GetOwner();
		
		Car mycar = (Car) cartruck1;
		System.out.println("MyCar: " + mycar.MilesDrive);
		
	}
	
}
