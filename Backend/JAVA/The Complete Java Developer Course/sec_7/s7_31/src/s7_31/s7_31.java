package s7_31;

public class s7_31 {
	
	void Draw() {
		for(int i = 0; i < 10; i++){
			System.out.println("*");
			for(int j = i; j >= 0; j--){
				System.out.print("-");
			}
		}
	}
	
	float sum(float n1, float n2){
		float sum = n1 + n2;
		return sum;
	}
	
	public static void main(String[] args) {
		
		new s7_31().Draw();
		
		float r1 = new s7_31().sum(9, 13);
		System.out.println("r1 = " + r1);
		
	}

}
