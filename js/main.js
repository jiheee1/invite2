function start(){

	var t = window.location.pathname;
	menu1.innerHTML = "<span class='eng'>HKNU</span>";
	menu2.innerHTML = "<span class='eng'>Academics</span>";
	menu3.innerHTML = "<span class='eng'>Research</span>";
	menu5.innerHTML = "<span class='eng'>Activities</span>";
	menu6.innerHTML = "<span class='eng'>Links</span>";

	switch (t){
		case "/" : 
			var k = document.getElementById("menu1");
			var j = "<span class='eng'>HKNU</span>";
			break;
		case "/index.html" : 
			var k = document.getElementById("menu1");
			var j = "<span class='eng'>HKNU</span>";
			break;
		case "/academics.html" :
			var k = document.getElementById("menu2");
			var j = "<span class='eng'>HKNU</span>";
			break;
		case "/research.html" :
			var k = document.getElementById("menu3");
			var j = "<span class='eng'>HKNU</span>";
			break;
		case "/activities.html" :
			var k = document.getElementById("menu5");
			var j = "<span class='eng'>HKNU</span>";
			break;
		case "/links.html" :
			var k = document.getElementById("menu6");	
			var j = "<span class='eng'>HKNU</span>";
	}
	
	//var t = k.innerHTML;
	//k.innerHTML = t + "+";
	//k.style.opacity = "0.5";��


	var t = document.getElementById("menuLabel");
	t.onclick = function(){
		var j = document.getElementsByTagName('header')[0];
		if(document.getElementById('hiddenInput').checked){ 
			j.style.height = "44px";
			j.style.background = "#f18b00";
		}else{
			j.style.background = "#005a9e";
			j.style.height = "254px";
		}
	}
	
	var fY = [];
	var t = document.getElementsByTagName("figure");
	for(var i=0;i<t.length;i++){fY.push(t[i].offsetTop);}
	var headerHeight = 44;


	window.onscroll = function(){ 
		var scrollD = document.documentElement.scrollTop;

		var k = document.getElementsByTagName("figure");
		for(var j=0;j<k.length;j++)
		{
			var crossP = fY[j] - scrollD - headerHeight;
		 	if(crossP < 0){
				document.getElementsByTagName("figure")[j].style.backgroundAttachment = "fixed";
				document.getElementsByTagName("figure")[j].style.backgroundPosition = "0px 44px";
			}else{
				document.getElementsByTagName("figure")[j].style.backgroundAttachment = "scroll";
				document.getElementsByTagName("figure")[j].style.backgroundPosition = "0px 0px";
			};
		} 
	}

}