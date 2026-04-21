import java.util.concurrent.Semaphore;

public class Messages {

	private static Messages value = new Messages();
	private Semaphore semaphore = new Semaphore(20, true);
	private int messages = 0;
	
	private Messages() {
	}

	public static Messages getValue() {
		return value;
	}

	public void send() {
		try {
			semaphore.acquire();
		} catch (InterruptedException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		try {
			sendMsg();
		} finally {
			semaphore.release();
		}
	}

	public void sendMsg() {

		synchronized (this) {
			messages++;
			System.out.println("Current messages: " + messages);
		}

		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		synchronized (this) {
			messages--;
		}

	}

}
