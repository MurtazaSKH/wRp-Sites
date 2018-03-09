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



			 // prevoius while used for isotope sorting
       // while($row = mysqli_fetch_array($result,MYSQLI_BOTH))
       // {
       //   echo '<div class="col col-lg-3 '.$row['category'].'" >
			 //
       //     <div class="uk-inline uk-slider-items uk-transition-toggle ">
       //       <img src="'.$row['default_thumb'].'" alt="">
       //       <div class="uk-overlay uk-overlay-primary uk-remove-padding uk-position-bottom uk-transition-fade" style="min-height:50%;">
       //         <a href="#plugin" onclick="updateModal('.$row['plugin_id'].')" uk-toggle>
       //           <div class=" uk-overlay-primary uk-transition-fade  uk-width-1-1 uk-position-top uk-text-center  ">
       //             Quick View
       //           </div>
       //         </a>
       //         <p class="uk-padding-remove">'.$row['title'].'</p>
       //       </div>
       //     </div>
       //   </div>
       //   ';
       //  }

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
         echo '<div class="uk-modal-dialog uk-modal-body">
           <button class="uk-modal-close-default" type="button" uk-close></button>
           <div class="uk-grid-collapse uk-child-width-1-1@s uk-flex-middle" uk-grid>

             <div class="" name="col1" style="" uk-grid>
               <div class="uk-width-expand@m" name="col1-subdiv">';


             if(1)
                {
                  $count=0;
                  echo '<div class=" uk-padding-remove-bottom" uk-slideshow uk-grid>
                    <div class="uk-padding-small" style="overflow: auto; overflow-x: hidden; padding-left:25px; height: 450px;">
                      <ul class="uk-thumbnav uk-thumbnav-vertical uk-hidden@s	" uk-margin>';
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


				 echo '<div style="uk-width-1-3@m uk-text-bottom " name="col1-subdiv2" style="max-height: 450px;">
           <!-- <div class="uk-padding-small"> -->
					 <div style="width:400px">
	           <h1 class=".uk-text-small" style="font-size: 1.5rem !important;">'.$row['title'].'</h1>
					 </div>
					 <div style="width:300px">
           <img  src="'.$row['default_thumb'].'" alt="">
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
