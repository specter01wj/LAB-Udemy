<?php
$items = array(
    array(
        'task'=> "Create BackboneJS Course",
        'status'=> "Open",
        'id'=>1
    ),
    array(
        'task'=> "Creating BackboneJS Course 2",
        'status'=> "Closed",
        'id'=>2
    ));

$result=json_encode($items);
echo $result;
?>