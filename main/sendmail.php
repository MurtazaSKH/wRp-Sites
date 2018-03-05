<?php 
	
	//$str = chr(064);
	//echo("You $str me forever!");
	if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
	if(!$captcha){
          echo 'CAPTCHA was not filled properly';
          exit;
        }
		
	if(isset($_POST['email'])){
		$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LfOFwgTAAAAAKX3DsASO-zraqx494sKwMSh4gf-&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
        if($response.success==false)
        {
          echo 'TRY AGAIN!';
        }
		else
		{
			$to = "murtaza@werplay.com"; // this is your Email address
			$from = $_POST['email']; // this is the sender's Email address
			$name = $_POST['name'];
			//$phone = $_POST['phone'];
			//$validcheck = $_POST['validcheck'];
			$subject = "This Email has been sent using the Contact Us Page on werplay.com";// $_POST['subject'];
			$subject2 = $_POST['phone'];
			$message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
			$message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];
		
			$headers = "From:" . $from;
			$headers2 = "From:" . $to;
			mail($to,$subject,$message,$headers);
			//mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
			//echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
			
			echo "success";
			// You can also use header('Location: thank_you.php'); to redirect to another page.
		}
    
	}
	else
	{
		echo "Unable to proceed at this time, please try again later.";
	}
?>