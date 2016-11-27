$(document).ready(function(){
$("#lightsoff").click(function(){
		$("body").prepend('<div id="fader" style="position: absolute; z-index: 1000; left: 0px; top: 0px; background-color: rgba(0, 0, 0, 0.7); width: '+document.body.clientWidth+'px; height: '+document.body.clientHeight+'px; display: none;"></div>');
		$(".player").css("z-index", "2000");
		$("#fader").fadeIn(500, function(){
			$("body").prepend('<div id="fader-message" style="position: absolute; z-index: 1100; top: 270px; left: 10px; color: #fff; font-size: 18px;">Click anywhere on the screen to turn the lights on</div>');
			$("#fader").bind("click", function(){
			
				$("#fader-message").fadeOut(1000, function(){
					$("#fader-message").remove();
					$("#fader").fadeOut(500, function(){
						$("#fader").remove();
						$(".player").css("z-index", "0");
					});
				});
			});
		});
	
	});
});

<div id="shadow" style="height: 2190px; display: none;"></div>

<script type='text/javascript'>
//<![CDATA[
$(document).ready(function(){
   $("#shadow").css("height", $(document).height()).hide();
   $(".lightSwitcher").click(function(){
      $("#shadow").toggle();
         if ($("#shadow").is(":hidden"))
            $(this).html("Lights Off").removeClass("turnedOff");
         else
            $(this).html("Lights On").addClass("turnedOff");
         });
            
  });
//]]>
</script>
