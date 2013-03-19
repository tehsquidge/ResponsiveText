$(document).ready( function(){
	$('#example1, #example2').responsiveText();
	$('#example3 div').responsiveText({maxWidth: 250, minWidth: '100px' });
	$('#example4').responsiveText({minFontSize: 0.5});
});
