package s7_32;

public class s7_32 {
	
	float Sub(float n1, float n2){
		float result = n1 - n2;
		return result;
	}
	
	float Sub(float n1, float n2, float n3){
		float result = n1 - n2 - n3;
		return result;
	}
	
	public static void main(String[] args) {
		
		float r1 = new s7_32().Sub(23, 15);
		
		System.out.println("r1 = " + r1);
		
		float r2 = new s7_32().Sub(23, 15, 78);
		
		System.out.println("r2 = " + r2);
	}

}
