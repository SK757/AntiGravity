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

/******** Modal ********/

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/******** Price Change ********/
// http://stackoverflow.com/questions/19382847/change-price-using-select-option-text

var changePrice = function()
{
    var weightSelect = $(".weight-select"),
    	quantitySelect = $(".quantity-select"),
        displayPrice = $(".product-price");

    quantitySelect.change(function(){
        var selected = $(this).children("option:selected").val();
        displayPrice.text(selected);
    });


}

changePrice();