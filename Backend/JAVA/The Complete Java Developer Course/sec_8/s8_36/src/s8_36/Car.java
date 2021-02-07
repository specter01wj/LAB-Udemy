package s8_36;

public class Car {
	
	String Type;
	int Model;
	double Price;
	double MilesDrive;
	
	double GetPrice(){
		double NewPrice = Price - (MilesDrive * 100);
		return NewPrice;
	}

}
