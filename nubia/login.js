define(['jquery', "jquery-cookie"], function($){		
	function login() {
			$("username").val();
			$("password").val();
			$("#username").keyup(username);
			function username(){
				oValue2 = $("#username").val();
				if(oValue2 ==""||oValue2.length<6 ||oValue2.length>16){
						$("#usertext").css("display","block");
						
					}else{
						$("#usertext").css("display","block");
						$("#usertext").attr("class","alert alert-success");	
						$("#span2").html("用户名输入正确");
						return true;
				}
			}
			$("#password").keyup(password);
			function password(){
				ovalue = $("#password").val();
				if(ovalue == ""){
					$("#passtext").css("display","block")
					$("#span").html("请输入密码");
				}else{
					$("#passtext").css("display","block")
					$("#passtext").attr("class","alert alert-success");	
					$("#span").html("已输入密码");
					return true;
				}
			}
			
			$('#btn').click(function(){
				if(username()&&password()){
					$.ajax({
					type:"POST",
					url:"php/login.php",
					data:{
						username:$("#username").val(),
						password:$("#password").val()
					},
					success:function(data){
						alert(data);
						if(data == "登陆成功"){
							setTimeout(function(){
								location.assign("http://localhost:8808/")
							},2000)
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
			login: login
		}

})