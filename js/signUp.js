$('.success').addClass("hide");
$(document).ready(function(){
	$('#create').on('click', function(){
		var fName = $('#fullName').val();
		var uName= $('#userName').val(); 
		var email = $('#emailAdd').val(); 
		var pw = $('#password').val(); 
		var cpw = $('#cPassword').val(); 
		var valid = true;
		var errors = [];

		//validations for user inputs client-side
		if(fName === ''){
			$('#sFullName').text('Please enter your fullname');
			valid = false;
			errors += 1;
		}else{
			$('#sFullName').text('');
		}

		if(uName === ''){
			$('#sUserName').text('Please enter your username');
			valid = false;
			errors += 2;
		}else{
			$('#sUserName').text('');
		}

		if(email === ''){
			$('#sEmailAdd').text('Please enter your email');
			valid = false;
			errors += 3;
		}else{
			$('#sEmailAdd').text('');
		}

		if(pw === ''){
			$('#sPw').text('Please enter your password');
			valid = false;
			errors += 4;
		}else{
			$('#sPw').text('');
		}

		if(cpw === ''){
			$('#sCpw').text('Please confirm your password');
			valid = false;
			errors += 5;
		}else if(pw !== cpw){
			$('#sCpw').text('Your password does not match');
			valid = false;
			errors += 6;
		}else{
			$('#sCpw').text('');
		}

		if(errors.length == 0){
				$.ajax({
				type: "POST",
				data: {fName:fName,uName:uName, email:email, pw:pw, cpw:cpw},
				url: "php/signup.php",
				success: function(d){
					$('.success').removeClass('hide');
					$('.success').html(d);
					$('#fullName').val('');
					$('#userName').val('');
					$('#emailAdd').val(''); 
					$('#password').val('');
					$('#cPassword').val('');
				}
			})
		}else{
			$('.success').addClass("hide");
		}
		return valid;

	});
});
