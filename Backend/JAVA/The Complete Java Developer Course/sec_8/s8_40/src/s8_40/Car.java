package s8_40;

public class Car {

	String Type;
	protected int Model;
	double Price;
	double MilesDrive;
	static String Owner;
	
	public Car(String Type, int Model, double Price, double MilesDrive){
		this.Type = Type;
		this.Model = Model;
		this.Price = Price;
		this.MilesDrive = MilesDrive;
		System.out.println("Constructor 1 created!");
	}
	
	public Car(){
		this.Type = "TOYOTA";
		this.Model = 2017;
		this.Price = 50000;
		this.MilesDrive = 15;
		System.out.println("Constructor 2 created!");
	}
	
	double GetPrice(){
		double NewPrice = Price - (MilesDrive * 100);
		return NewPrice;
	}
	
}
