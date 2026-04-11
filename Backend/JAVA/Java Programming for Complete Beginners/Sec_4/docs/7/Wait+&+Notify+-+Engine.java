import java.util.Scanner;

public class Engine {

	public void releaseEnergy() throws InterruptedException {

		synchronized (this) {
			System.out.println("Turn on engine and start releasing energy...");
			wait();
			System.out.println("Resumed.");
		}
	}

	public void consumeFuel() throws InterruptedException {

		Scanner scanner = new Scanner(System.in);
		Thread.sleep(2000);

		synchronized (this) {
			System.out.println("Waiting for enter key to resume.");
			scanner.nextLine();
			System.out.println("Enter key pressed.");
			notify();
		}
	}
}
