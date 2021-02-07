package s7_34;

public class s7_34 {
	
	float sum(float n1, float n2) {
		float r = n1 + n2;
		return r;
	}
	
	public static void main(String[] args) {
		
		float r = new s7_34().sum(19.73f, 7.78f);
		System.out.println("output r: " + r);
		
		for(int i=1;i<=4;i++){
	        new s7_34().MoveForward();
	        for(int j=1;j<=1;j++){
	            new s7_34().MoveLeft();
	        }
	    }
		
	}
	
	static void MoveLeft(){
	    //think this method have  able to move the Robot left
	    //donot write code here 
	}
	static void MoveForward(){
	    //think this method have  able to move the Robot left
	    //donot write code here 
	}

}
