package s6_29;

import java.util.Arrays;

public class s6_29 {
	
	public static void main(String[] args) {
		int[][] data = new int[3][3];
		
		for(int i=0; i < 3; i++){
			for(int j=0; j < 3; j++){
				data[i][j] = j + 2;
			}
		}
		
		System.out.println("output: " + Arrays.deepToString(data));
		
	}

}
