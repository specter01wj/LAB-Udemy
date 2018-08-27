package s6_ce3;

public class s6_ce3 {
	
	public static void main(String[] args) {
		
		String Search="loop";
		String[] words={"loop","pool","lopo","book","kobo"};
		
		String[] searchWord = Search.split("");

        System.out.println("Match words:");
        for (int i = 0; i < 3; i++) {
            if (words[i].contains(searchWord[i])) {
                System.out.println(words[i]);
            }
        }
		
	}

}
