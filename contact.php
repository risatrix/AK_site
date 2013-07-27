<!DOCTYPE HTML>

<head> 
<link href="style.css" rel="stylesheet" type="text/css" media="screen" />     
<style>
body {background: none; text-align: left;}
.msg {font: bold 1.1em/1.5 'futura-pt','GeosansLightRegular', Verdana, Arial, sans-serif;  color: #ccff99; text-shadow:2px 2px 8px #000;}              
</style> 
</head>
<body>  
 <?php $to = "amanda.n.krauss@gmail.com"; $subject = "Contact Form"; $email = $_REQUEST['email'] ; $message = $_REQUEST['message'] ; $headers = "From: $email"; $sent = mail($to, $subject, $message, $headers) ; if($sent) {print '<div class="msg">Your mail was sent successfully!</div>'; } else {print '<div class="msg">We encountered an error sending your mail'; } ?> 

</body>
</html>
