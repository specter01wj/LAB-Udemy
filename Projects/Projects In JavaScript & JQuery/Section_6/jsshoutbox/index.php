<?php include 'database.php'; ?>
<?php
	// Create Select Query
	$query = "SELECT * FROM shouts ORDER BY id DESC";
	$shouts = mysqli_query($con, $query);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>JS Shoutbox</title>
		<link rel="stylesheet" href="style.css">
		
		<script src="jquery-2.1.3.min.js"></script>
		<script src="script.js"></script>
	</head>
	<body>
		<div id="container">
			<header>
				<h1>JS ChatRoom</h1>
			</header>
			<div id="shouts">
				<ul>
					<?php while($row = mysqli_fetch_assoc($shouts)) : ?>
						<li><?php echo $row['name']; ?>: <?php echo $row['shout']; ?> [<?php echo $row['date']; ?>]</li>
					<?php endwhile; ?>
				</ul>
			</div>
			<footer>
				<form>
					<label>Name: </label>
					<input type="text" id="name">
					<label>Chat Text </label>
					<input type="text" id="shout">
					<input type="submit" id="submit" value="SUBMIT">
				</form>
			</footer>
		</div>
	</body>
</html>