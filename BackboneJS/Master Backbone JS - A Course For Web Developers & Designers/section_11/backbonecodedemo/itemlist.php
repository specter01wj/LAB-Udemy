<?php
//$id=$_GET["id"];
$request = explode("/",$_SERVER['REQUEST_URI']);
$id=$request[2];

$items = array(
    array(
        'task'=> "Create BackboneJS Course",
        'status'=> "Open",
        'id'=>1
    ),
    array(
        'desc'=> "Creating BackboneJS Course 2",
        'status'=> "Open",
        'id'=>2
    ));

$result=json_encode(search($items,"id",$id),JSON_FORCE_OBJECT);
echo $result;
//echo substr($result,1,-1);

function search($array, $key, $value)
{
    $results = array();

    if (is_array($array))
    {
        if (isset($array[$key]) && $array[$key] == $value)
            $results[] = $array;

        foreach ($array as $subarray)
            $results = array_merge($results, search($subarray, $key, $value));
    }

    return $results;
}
?>