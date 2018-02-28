<?php
$func= $_GET['func']?$_GET['func']:$_POST['func'];

include("connect.php");
echo "connect fine";
////////////////////////////////////////// get all plugins for list//////////////////////////////////

if($func=="displayAllPlugins")
{
	$query=("SELECT * FROM plugin_main");

   	$result = mysqli_query($db,$query);
	if(mysqli_num_rows($result) > 0)
     {



       while($row = mysqli_fetch_array($result,MYSQLI_BOTH))
       {
         echo '<div class="col col-lg-3 '.$row['category'].'" >

           <div class="uk-inline uk-slider-items uk-transition-toggle ">
             <img src="'.$row['default_thumb'].'" alt="">
             <div class="uk-overlay uk-overlay-primary uk-remove-padding uk-position-bottom uk-transition-fade" style="min-height:50%;">
               <a href="#plugin" onclick="updateModal('.$row['plugin_id'].')" uk-toggle>
                 <div class=" uk-overlay-primary uk-transition-fade  uk-width-1-1 uk-position-top uk-text-center  ">
                   Quick View
                 </div>
               </a>
               <p class="uk-padding-remove">'.$row['title'].'</p>
             </div>
           </div>
         </div>
         ';
        }
       }

}

////////////////////////////////////////// get data for selected plugin //////////////////////////////////

if($func=="updatePluginModal")
{
  $pluginId = $_REQUEST['pluginId'];

	$query=("SELECT * FROM plugin_main WHERE plugin_id='$pluginId'");

   	$result = mysqli_query($db,$query);
	if(mysqli_num_rows($result) > 0)
     {




       while($row = mysqli_fetch_array($result,MYSQLI_BOTH))
       {
         $pid=$row['plugin_id'];
         $query2=("SELECT * FROM plugin_thumbs WHERE plugin_id='$pid'");
         $result2 = mysqli_query($db,$query2);
         $result3 = mysqli_query($db,$query2);
         echo '<div class="uk-modal-dialog uk-modal-body">
           <button class="uk-modal-close-default" type="button" uk-close></button>
           <div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid>
             <h1 class="uk-text-center .uk-text-small" style="font-size: 1.5rem !important;">'.$row['title'].'</h1>
             <div class="" name="col1" style="">';


             if(mysqli_num_rows($result2) > 0)
                {
                  $count=0;
                  echo '<div class="uk-padding-large uk-padding-remove-bottom" uk-slideshow uk-grid>
                    <div class="uk-width-auto@m">
                      <ul class="uk-thumbnav uk-thumbnav-vertical" uk-margin>';
                      while($row2 = mysqli_fetch_array($result2,MYSQLI_BOTH))
                      {
                        echo '<li uk-slideshow-item="'.$count.'"><a href="#"><img src="'.$row2['link'].'" width="60" alt=""></a></li>';
                        $count++;
                      }


                        echo '
                      </ul>
                    </div>
                    <div class="uk-position-relative uk-visible-toggle uk-dark uk-width-expand@m">
                      <ul class="uk-slideshow-items">';
                      $count=0;
                      while($row3 = mysqli_fetch_array($result3,MYSQLI_BOTH))
                      {
                        echo '<li>
                          <img src="'.$row3['link'].'" alt="" uk-cover>
                        </li>';
                        $count++;
                      }


                    echo '</ul></div></div>';


             }

              echo '<!-- <div class="uk-padding-small"> -->
               <table class="uk-table uk-table-hover uk-table-divider uk-dark uk-margin-remove-bottom">
                 <tbody>
                   <tr>
                     <td style="color:#333333">Price: $'.$row['Price'].'</td>
                     <td style="color:#333333">Supported Versions: '.$row['supported_versions'].'</td>
                   </tr>
                   <tr>
                     <td><a href="'.$row['Direct_link'].'">Download</a></td>
                     <td></td>
                   </tr>
                 </tbody>
               </table>
               <!-- </div> -->
             </div>
             <div class="uk-padding-small">

               <p>
                 <div >
                   '.$row['Description'].'
                 </div>
               </p>
             </div>
           </div>
         </div>';


        }
       }

}

?>
