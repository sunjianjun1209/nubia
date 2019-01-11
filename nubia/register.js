define(['jquery', "jquery-cookie"], function($){
	function register(){
		$("#username").keyup(username);
		function username(){
			oValue = $("#username").val();
			if(oValue ==""||oValue.length<6 ||oValue.length>16){
					$("#usertext").css("display","block");
					$("#usertext").attr("class","alert alert-danger");	
					$("#span1").html("用户名长度应为6~16位");
				}else{
					$("#usertext").css("display","block");
					$("#usertext").attr("class","alert alert-success");	
					$("#span1").html("用户名输入正确");
					return true;
			}
		}
		$("#password").keyup(password) 
		function password(){
			oValue2 = $("#password").val();
				if(/\W/.test(oValue2)){
					$("#passtext").attr("class","alert alert-danger");
					$("#passtext").css("display","block");					
					$("#span2").html("密码需由字母、数字或下划线组成");
				}else if(oValue2.length < 6 || oValue2.length > 16){
					$("#passtext").attr("class","alert alert-danger");
					$("#passtext").css("display","block");
				 	$("#span2").html("密码的长度应为6~16位");
				 }else if(/\d/.test(oValue2) && /[a-z]/.test(oValue2) && /[A-Z]/.test(oValue2)){
					$("#passtext").attr("class","alert alert-success");
					$("#passtext").css("display","block");
				 	$("#span2").html("√  密码强度：强");
				 	return true;

				 }else if(/^\d+$/.test(oValue2) || /^[a-z]+$/.test(oValue2) && /^[A-Z]+$/.test(
				 		oValue2)){
					$("#passtext").attr("class","alert alert-success");
					$("#passtext").css("display","block");
				 	$("#span2").html("√  密码强度：弱");
				 	return true;

				 }else{
					$("#passtext").attr("class","alert alert-success");
					$("#passtext").css("display","block");
				 	$("#span2").html("√  密码强度：中");
				 	return true;

				}}
		$("#verify").keyup(verify)
		function verify(){
			oValue3 =$("#verify").val();
			if(oValue3 !== "4410"){
				$("#verifytext").attr("class","alert-danger")
				$("#verifytext").css("display","block");
				$("#span3").html("验证码输入错误");
			}else{
				$("#verifytext").attr("class","alert alert-success");
				$("#verifytext").css("display","block");
				$("#span3").html("验证码输入正确");				
				return true;
			}
		}
		$("#phone").keyup(phone);
			function phone(){
			$("#phonetext").attr("class","alert alert-danger");
			$("#phonetext").css("display","none");

			var oValue4 = $("#phone").val();
			if(oValue4.length != 11 || oValue4[0] !=1){
				$("#phonetext").css("display","block");
				$("#span4").html( "请填写正确的手机号");
			}else if(!(/\d/.test(oValue4))){
				$("#phonetext").css("display","block");
				$("#span4").html( "请填写正确的手机号");
			}else{
			$("#phonetext").attr("class","alert alert-success");
				$("#phonetext").css("display","block");
				$("#span4").html( "√ 手机号输入正确");
				return true;

			}}




		$("#btn").click(function(){
			if (username()&&password()&&verify()&&phone()){
				$.ajax({
				type:"POST",
				url:"php/register.php",
				data:{
					username:$("#username").val(),
					password:$("#password").val(),
					phone:$("#phone").val()
				},
				success:function(data){
					alert(data);
					if(data == "注册成功"){
						location.assign("http://localhost:8808/login.html");
								}

				},
				error:function(msg){
					alert(msg);
				}
			})
			}else{
				return false;
			}
			
		})
	}
	return {
		register:register
	}
})