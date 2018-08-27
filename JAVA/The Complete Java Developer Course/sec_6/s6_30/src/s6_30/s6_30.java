package s6_30;

import java.util.Arrays;

public class s6_30 {
	
	public static void main(String[] args) {
		
		String name = "University of Maryland!";
		
		for(int i=0; i<name.length();i++){
			System.out.print(name.charAt(i));
		}
		for(int i=name.length()-1; i>=0;i--){
			System.out.print(name.charAt(i));
		}
		System.out.println("");
		
		System.out.println("print split: ");
		String[] split_name = name.split(" ");
		for(int j=0; j<split_name.length;j++){
			System.out.println(split_name[j]);
		}
		System.out.println("output: " + Arrays.toString(split_name));
		
	}

}
