<?php
$func= $_GET['func']?$_GET['func']:$_POST['func'];

include("connect.php");

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
         echo '<div class="uk-modal-dialog uk-modal-body">
           <button class="uk-modal-close-default" type="button" uk-close></button>
           <div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid>
             <h1 class="uk-text-center .uk-text-small" style="font-size: 1.5rem !important;">WRP IOS Video Player</h1>
             <div class="" name="col1" style="">
               <div class="uk-padding-small" uk-slideshow uk-grid>
                 <div class="uk-width-auto@m">
                   <ul class="uk-thumbnav uk-thumbnav-vertical" uk-margin>
                     <li uk-slideshow-item="0"><a href="#"><img src="./images/plu1.jpg" width="60" alt=""></a></li>
                     <li uk-slideshow-item="1"><a href="#"><img src="./images/plu2.jpg" width="60" alt=""></a></li>
                     <li uk-slideshow-item="2"><a href="#"><img src="./images/plu3.jpg" width="60" alt=""></a></li>
                     <li uk-slideshow-item="3"><a href="#"><img src="./images/youtube.jpg" width="60" alt=""></a></li>
                   </ul>
                 </div>
                 <div class="uk-position-relative uk-visible-toggle uk-dark uk-width-expand@m">
                   <ul class="uk-slideshow-items">
                     <li>
                       <img src="./images/plu1.jpg" alt="" uk-cover>
                     </li>
                     <li>
                       <img src="./images/plu2.jpg" alt="" uk-cover>
                     </li>
                     <li>
                       <img src="./images/plu3.jpg" alt="" uk-cover>
                     </li>
                     <li>
                       <iframe width="440" height="315" src="https://www.youtube.com/embed/TUUUh-51t1k?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                     </li>
                   </ul>
                   <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                   <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                 </div>

               </div>

               <!-- <div class="uk-padding-small"> -->
               <table class="uk-table uk-table-hover uk-table-divider uk-dark uk-margin-remove-bottom">
                 <tbody>
                   <tr>
                     <td style="color:#333333">Price: $</td>
                     <td style="color:#333333">Supported Versions: </td>
                   </tr>
                   <tr>
                     <td><a href="">Download</a></td>
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
