package s8_49;

public class s8_49 {

	public static void main(String[] args) {
		
		String[] a1 = {"James", "John", "Dan"};
		Integer[] a2 = {2,4,8,14,29};
		Double[] a3 = {3.4, 5.23, 8.66};
		
		print(a1);
		print(a2);
		print(a3);
		
	}
	
	static <GEN> void print(GEN[] arv) {
		for(GEN s: arv) {
			System.out.println(s);
		}
	}
	
}
