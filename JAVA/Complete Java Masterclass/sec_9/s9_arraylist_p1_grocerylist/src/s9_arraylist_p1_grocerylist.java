import java.util.Arrays;
import java.util.ArrayList;

public class s9_arraylist_p1_grocerylist {

    private static ArrayList<String> groceryList = new ArrayList<String>();

    public static void main(String[] args){
        addGroceryItem("Apple");
        addGroceryItem("Melon");
        printGroceryList();
    }

    public static void addGroceryItem(String item){
        groceryList.add(item);
    }

    public static void printGroceryList(){
        //int[] int1 = new int[5];
        System.out.println("Youu have " + groceryList.size() + " item in your list!");
        for(int i=0;i<groceryList.size();i++){
            System.out.println((i+1) + ". "+groceryList.get(i));
        }
        //System.out.println(Arrays.toString(groceryList));
    }

    public static 

}
