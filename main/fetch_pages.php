<?php
include('connection.php'); //include config file
//sanitize post value
$page_number = filter_var($_POST["page"], FILTER_SANITIZE_NUMBER_INT, FILTER_FLAG_STRIP_HIGH);

//throw HTTP error if page number is not valid
if(!is_numeric($page_number)){
    header('HTTP/1.1 500 Invalid page number!');
    exit();
}

//get current starting point of records
$position = ($page_number );

//Limit our results within a specified range. 
$sql = "SELECT * FROM media_content LIMIT $position, 1";
$results = $mysqli_query($conn,$sql);
//$results->execute(); //Execute prepared Query
//$results->bind_result($content_id, $content_title, $content); //bind variables to prepared statement

//output results from database
// echo '<ul class="page_result">';
// while($results->fetch()){ //fetch values
//     echo '<li id="item_'.$id.'"><span class="page_name">'.$id.') '.$name.'</span><span class="page_message">'.$message.'</span></li>';  
// }
// echo '</ul>';
echo "asd";
					// if (mysqli_num_rows($results) > 0) {
                      
     //                      while($row = mysqli_fetch_assoc($results))
     //                      {
     //                      		echo $row["content"];
     //                      }
     //                  }
?>