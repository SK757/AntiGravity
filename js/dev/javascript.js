$('#toggle1').click(function() {
   $('#toggle1').toggleClass('navActive');
   $('#toggle2').removeClass('navActive');
   $('#overlay').toggleClass('open');
   $('#sport-overlay').removeClass('open');
});

$('#toggle2').click(function() {
   $('#toggle2').toggleClass('navActive');
   $('#toggle1').removeClass('navActive');
   $('#overlay').removeClass('open');
   $('#sport-overlay').toggleClass('open');
});

/******** Accordion ********/
// https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
    		panel.style.maxHeight = null;
    	} else {
    		panel.style.maxHeight = panel.scrollHeight + "px";
    	}
    }
}