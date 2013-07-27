<?php
include('includes/header.php');
?>
	       
<article id="content">      
   
	<div class="slider-wrap">
		<div class="flexslider" id="homeslider">
				<ul class="slides">                                     
					<li class="page">
							<?php include('includes/about.php');?>
					</li><!--end About page-->

					<li class="page">
             <?php include('includes/portfolio.php');?>
					</li><!--end Portfolio Page-->

 					<li class="page">
						<?php include('includes/art.php');?>
					</li><!--end Art page-->
  
 					<li class="page contact-page">   
						<?php include('includes/contact.php');?>
					</li><!--end Contact page-->  
				</ul>
		</div> 
	</div><!--end of wrapper-->

</article><!--END Page Content-->

<?php include('includes/footer.php')?>