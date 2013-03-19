$(document).ready( function(){
	$('#example1, #example2').responsiveText();
	$('#example3').responsiveText({maxWidth: 500, minWidth: '400px' });
	$('#example4').responsiveText({minFontSize: 0.5});
});
