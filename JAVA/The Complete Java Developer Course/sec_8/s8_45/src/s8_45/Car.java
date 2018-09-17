package s8_45;

//import s8_45.Owners;

public class Car {

	String Type;
	protected int Model;
	double Price;
	double MilesDrive;
	static String Owner;
	//Owners owners;
	
	public Car(String Type, int Model, double Price, double MilesDrive){
		this.Type = Type;
		this.Model = Model;
		this.Price = Price;
		this.MilesDrive = MilesDrive;
		System.out.println("Constructor 1 created!");
		//owners = new Owners();
		//owners.FirstName = "Kim";
		//System.out.println("Owner name: " + owners.FirstName);
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
