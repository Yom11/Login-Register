$(document).ready(function(){
	$('#create').on('click', function(){
		var fName = $('#fullName').val();
		var uName= $('#userName').val(); 
		var email = $('#emailAdd').val(); 
		var pw = $('#password').val(); 
		var cpw = $('#cPassword').val(); 
		var valid = true;
	
		//validations for user inputs client-side
		if(fName === ''){
			$('#sFullName').text('Please enter your fullname');
			valid = false;
		}else{
			$('#sFullName').text('');
		}

		if(uName === ''){
			$('#sUserName').text('Please enter your username');
			valid = false;
		}else{
			$('#sUserName').text('');
		}

		if(email === ''){
			$('#sEmailAdd').text('Please enter your email');
			valid = false;
		}else{
			$('#sEmailAdd').text('');
		}

		if(pw === ''){
			$('#sPw').text('Please enter your password');
			valid = false;
		}else{
			$('#sPw').text('');
		}

		if(cpw === ''){
			$('#sCpw').text('Please confirm your password');
			valid = false;
		}else if(pw !== cpw){
			$('#sCpw').text('Your password does not match');
			valid = false;
		}else{
			$('#sCpw').text('');
		}
		return valid;
	})
});