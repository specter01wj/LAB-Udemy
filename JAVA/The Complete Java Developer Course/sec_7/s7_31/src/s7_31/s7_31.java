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
	
	public static void main(String[] args) {
		
		new s7_31().Draw();
		
	}

}
