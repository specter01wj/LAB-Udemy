import java.util.Scanner;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLocksExample {

	private int value = 0;
	private Lock lock = new ReentrantLock();
	private Condition condition = lock.newCondition();

	private void increaseValue() {
		for (int n = 0; n < 20000; n++) {
			value++;
		}
	}

	public void threadOne() throws InterruptedException {
		lock.lock();
		
		System.out.println("Waiting...");
		condition.await();
		
		System.out.println("Another thread woke me up!");
		
		try {
			increaseValue();
		} finally {
			lock.unlock();
		}
	}

	public void threadTwo() throws InterruptedException {
		
		Thread.sleep(1000);
		lock.lock();
		
		System.out.println("Press enter to continue.");
		new Scanner(System.in).nextLine();
		System.out.println("You pressed enter key!");
		
		condition.signal();
		
		try {
			increaseValue();
		} finally {
			lock.unlock();
		}
	}

	public void finished() {
		System.out.println("Value is: " + value);
	}
}
