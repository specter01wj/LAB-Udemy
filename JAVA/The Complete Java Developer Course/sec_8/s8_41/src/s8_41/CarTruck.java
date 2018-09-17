package s8_41;

public class CarTruck extends Car {

	private boolean HasTruck;
	
	void SetHasTruck(boolean HasTruck){
		this.HasTruck = HasTruck;
	}
	
	public CarTruck(){
		System.out.println("Constructor of Car Truck!");
	}
	
	void GetOwner(){
		System.out.println("Owner: " + Owner);
	}
	
	@Override
	double GetPrice(){
		double NewPrice = Price - (MilesDrive * 500);
		return NewPrice;
	}
	
}
