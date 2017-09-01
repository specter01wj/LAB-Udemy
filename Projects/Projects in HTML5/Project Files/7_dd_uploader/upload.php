<?php
	$upload_dir = 'uploads/';
	$allowed_ext = array('jpg','jpeg','png','gif');
	
	if(array_key_exists('pic',$_FILES) && $_FILES['pic']['error'] == 0){
		$pic = $_FILES['pic'];
		if(!in_array(get_extension($pic['name']),$allowed_ext)){
			exit_status('Only '.implode(',',$allowed_ext).' files are allowed');
		}
		if(move_uploaded_file($pic['tmp_name'],$upload_dir.$pic['name'])){
			exit_status('Your file was uploaded');
		}
	}
	
	//Helpers
	function exit_status($str){
		echo json_encode(array('status'=>$str));
		exit;
	}
	
	function get_extension($file){
		$ext = explode('.',$file);
		$ext = array_pop($ext);
		return strtolower($ext);
	}
?>