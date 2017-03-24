$('#toggle1').click(function() {
   $('#toggle1').toggleClass('active');
   $('#toggle2').removeClass('active');
   $('#sport-overlay').removeClass('open');
   $('#overlay').toggleClass('open');
});

$('#toggle2').click(function() {
   $('#toggle2').toggleClass('active');
   $('#toggle1').removeClass('active');
   $('#overlay').removeClass('open');
   $('#sport-overlay').toggleClass('open');
});