import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Application {

	public static void main(String[] args) throws Exception {

//		Semaphore semaphore = new Semaphore(1);
//		
//		semaphore.release();
//		semaphore.acquire();
//		
//		System.out.println("Number of permits: " + semaphore.availablePermits());

		ExecutorService executor = Executors.newCachedThreadPool();

		for (int n = 0; n < 300; n++) {
			executor.submit(new Runnable() {
				public void run() {
					Messages.getValue().send();
				}
			});
		}
		executor.shutdown();
		executor.awaitTermination(10, TimeUnit.HOURS);
	}

}
