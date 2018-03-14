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
			 // this one used for manual sorting with slider
			 while($row = mysqli_fetch_array($result,MYSQLI_BOTH))
       {

				 echo '<div class="swiper-slide assets uk-animation-slide-top-medium">
					 <div class="uk-card uk-card-body">
					 <a href="#plugin" onclick="updateModal('.$row['plugin_id'].')" uk-toggle>
						 <div class="uk-inline uk-slider-items uk-transition-toggle">
							 <img src="'.$row['default_thumb'].'" alt="">
							 <div class="uk-overlay uk-overlay-primary uk-remove-padding uk-position-bottom uk-transition-fade">


								 <p class="uk-padding-remove">'.$row['title'].'</p>
							 </div>
						 </div>
						 </a>
					 </div>
				 </div>';

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
         $picdir=$row['pics_folder'];
				 // echo "folder name is $picdir";
				 $pics=scandir($picdir);
				 $picdir = substr($picdir, 1);
				 // foreach($scan as $file)
					// {
					//     if (!is_dir("myFolder/$file"))
					//     {
					//         echo $file.'\n';
					//     }
					// }
         echo '<div class="uk-modal-dialog uk-modal-body uk-padding-remove-bottom" style="overflow-y: auto; max-height: 100%;">
           <button class="uk-modal-close-default" type="button" uk-close></button>
           <div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid>

             <div class="" name="col1" style="" uk-grid>
               <div class="uk-width-expand@m" name="col1-subdiv">';


             if(1)
                {
                  $count=0;
                  echo '<div class=" uk-padding-remove-bottom" uk-slideshow uk-grid>
                    <div class="uk-padding-small uk-padding-remove-bottom" style="overflow: auto; overflow-x: hidden; padding-left:25px; height: 450px;">
                      <ul class="uk-thumbnav uk-thumbnav-vertical uk-visible@m " uk-margin>';
											foreach($pics as $file)
						 					{

						 					    if (!is_dir("myFolder/$file"))
						 					    {
															if($file!="." and $file!="..")
															{
																echo '<li uk-slideshow-item="'.$count.'"><a href="#"><img src="'.$picdir.'\\';
																echo $file;
																echo '" width="60" alt=""></a></li>';
																$count++;
															}
						 					    }
						 					}
                        echo '
                      </ul>
                    </div>
                    <div class="uk-position-relative uk-padding-remove-left uk-visible-toggle uk-dark uk-width-expand@m" >
                      <ul class="uk-slideshow-items uk-width-1-1 " style="max-height: 450px">';
                      $count=0;
											foreach($pics as $file)
						 					{

						 					    if (!is_dir("myFolder/$file"))
						 					    {
														if($file!="." and $file!="..")
														{
															// echo '<li><img src=".\images\plu1\\';
															echo '<li><img class="uk-preserve-width uk-position-center" style="width: auto !important; max-width: 785px !important; height: auto !important; max-height: 442px; !important" src="'.$picdir.'\\';
															echo $file;
															echo '" alt="">
															</li>';
															$count++;
														}
						 					    }
						 					}
											echo '  </ul><a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a></div></div></div>';


             }

						 if(strlen($row['Description']) >1200)
						 {
							 $firsthalf = substr($row['Description'], 0, 1200);
			 				$secondhalf = substr($row['Description'],1200);
						 }


				 echo '<div style="uk-width-1-3@m uk-text-bottom " name="col1-subdiv2" style="max-height: 450px; max-width: 300px;">
           <!-- <div class="uk-padding-small"> -->
					 <div style="width:300px">
	           <h1 class=".uk-text-small" style="font-size: 1.5rem !important;">'.$row['title'].'</h1>
					 </div>
					 <div style="max-width:300px">
           <img  src="'.$row['default_thumb'].'"uk- alt="">
         </div>
           <div class="">
           <table class="uk-table uk-table-divider uk-dark uk-margin-remove-bottom uk-text-left ">
             <tbody>
               <tr>
                 <td class="uk-text-left" style="color:#333333">Price: $'.$row['Price'].'</td>
               </tr>
               <tr>
                 <td class="uk-text-left" style="color:#333333">Supported Versions: '.$row['supported_versions'].'</td>
               </tr>
               <tr>
                 <td class="uk-text-left"><a class="uk-button uk-button-primary" href="'.$row['Direct_link'].'">Buy from Asset Store</a></td>
                 <td></td>
               </tr>
             </tbody>
           </table>
         </div>

         </div>


         <!-- </div> -->
       </div>
       <div class="uk-padding-small">

         <p>
				 <div>';
				 if(strlen($row['Description'])>1200)
				 {
					 echo '<div id="halfDesc">
					 '.$firsthalf.'
					 </div>

					 <div style="display:none;">
					 ""
					 </div>


					 <div id="fullDesc" style="display:none;">
					 		'.$secondhalf.'
					 </div>

					 <div id="moreless" onclick="morelesstoggle()" class="uk-padding-small uk-button" style="display:inline;" >
					 	 Show More..
					 </div>';

				 }
				 else {
				 	echo $row['Description'];
				 }


				 echo '</div>
         </p>
       </div>
     </div>
   </div>';


        }
       }

}


////////////////////////////////////////// get all plugins for list//////////////////////////////////

if($func=="viewSlides")
{
	$query1=("SELECT * FROM plugin_main where slide IS NOT NULL ORDER BY slide ASC");

   	$result1 = mysqli_query($db,$query1);
	if(mysqli_num_rows($result1) > 0)
     {
			 echo '<div uk-slideshow="animation: fade; min-height: 300; max-height: 442">

         <div class="uk-position-relative uk-visible-toggle uk-light">

           <ul class="uk-slideshow-items" >';
			 while($row1 = mysqli_fetch_array($result1,MYSQLI_BOTH))
       {
				 $picdir1=$row1['pics_folder'];
				 // echo "folder name is $picdir";
				 $picdir1 = substr($picdir1, 1);

				 echo '<li>
					 <img class="uk-position-center" style="z-index:0;  height:100%" src="'.$row1['default_thumb'].'" alt="" >
					 <img class="uk-position-left" style="z-index:-1; height:100%; opacity:0.7" src="'.$picdir1.'\1.jpg" alt="" >
					 <img class="uk-position-right" style="z-index:-1; height:100%; opacity:0.7" src="'.$picdir1.'\2.jpg" alt="" >
				 </li>';

        }
				echo '</ul>
				<div class=" uk-text-center uk-overlay uk-light uk-position-center" style="padding: 30px; background-color: #000000b8;">
				<h2 >Welcome to Unity Plugins</h2>
				<p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>

				<a class="uk-position-center-left uk-position-small uk-slidenav-large" style="color:white; background: #00000040;" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
				<a class="uk-position-center-right uk-position-small uk-slidenav-large" style="color:white; background: #00000040;" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

			</div>

			<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

		</div>';
       }

}

?>
