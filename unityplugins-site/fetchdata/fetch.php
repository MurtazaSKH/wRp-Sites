<?php
$func= $_GET['func']?$_GET['func']:$_POST['func'];

include("connect.php");

////////////////////////////////////////// get all plugins for list//////////////////////////////////

if($func=="displayAllPlugins")
{
	$query=("SELECT * FROM plugin_main");

   	$result = mysqli_query($db,$query);
	if(mysqli_num_rows($result2) > 0)
     {
       echo '<div id="numberofrows" style="display:none;">'.mysqli_num_rows($result2).'</div>';
       while($row2 = mysqli_fetch_array($result2,MYSQLI_BOTH))
       {
          $timestamp = strtotime($row2['LastUpdate']);
           echo '<li id="device'.$row2['DeviceID'].'" class="" onclick="clearonedevice('.$row2['DeviceID'].')" ';
           if ($row2['OSType']=='iOS')
           {
             echo 'style="background-color:#424F63;"';
           }
           echo '><span class="span-check" >
     <label for="task-2" class="">'.$row2['name'].' - v'.$row2['OSVersion'].'</label>
     </span>

     <div class="todo-date">
       <div class="completed-date"> '.$row2['OSType'].'</div>
       <div class="due-date">'.date('g:i a', $timestamp).' - '.date('l, F d, Y', $timestamp).'</div>
     </div>
     </li>';
        }
       }

}

?>
