package s8_43;

public class CarTruck extends Car {

	private boolean HasTruck;
	
	void SetHasTruck(boolean HasTruck){
		this.HasTruck = HasTruck;
	}
	
	public CarTruck(){
		super("Honda", 2010, 75000, 8);
		System.out.println("Constructor of Car Truck!");
	}
	
	void GetOwner(){
		System.out.println("Owner: " + Owner);
		System.out.println("Price: " + super.GetPrice());
	}
	
	@Override
	double GetPrice(){
		double NewPrice = Price - (MilesDrive * 500);
		return NewPrice;
	}
	
}
