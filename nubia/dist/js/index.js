define(['jquery', "jquery-cookie"], function($){
	function nav_load(){
			$.ajax({
				url:"data/nav1.json",
				type:"get",
				success:function(arr){
					for(var i =0;i<arr.length;i++){
						$(`<li><a href=""><img src="${arr[i].img}" alt=""></br><span>${arr[i].title}</span></a></li>`).appendTo($("#phone1_list"))
					}
				},
				error:function(msg){
					console.log(msg)
				}
			})
			$.ajax({
				url:"data/nav2.json",
				type:"get",
				success:function(arr){
					for(var i =0;i<arr.length;i++){
						$(`<li><a href=""><img src="${arr[i].img}" alt=""></br><span>${arr[i].title}</span></a></li>`).appendTo($("#phone2_list"))
					}
				},
				error:function(msg){
					console.log(msg)
				}
			})
			$.ajax({
				url:"data/banner.json",
				type:"get",
				success:function(arr){
					for(var i =0;i<arr.length;i++){
						$(`<li><a href=""><img src="${arr[i].img}" alt=""></a></li>`).appendTo($("#banner_list"))
					}
				},
				error:function(msg){
					console.log(msg)
				}
			})
	}
	function nav_fix(){
		$("#phone1_btn").mouseenter(function(){
			$("#phone1_box").stop().animate({height:240},500);
		})
		$("#phone1_list").mouseenter(function(){
			$("#phone1_box").stop(true);			
		})
		$("#phone1_list").mouseleave(function(){
			$("#phone1_box").stop().animate({height:0},500);
		})
		$("#phone1_btn").mouseleave(function(){
			$("#phone1_box").stop().animate({height:0},500);
		})

		$("#phone2_btn").mouseenter(function(){
			$("#phone2_box").stop().animate({height:240},500);
		})
		$("#phone2_list").mouseenter(function(){
			$("#phone2_box").stop(true);			
		})
		$("#phone2_list").mouseleave(function(){
			$("#phone2_box").stop().animate({height:0},500);
		})
		$("#phone2_btn").mouseleave(function(){
			$("#phone2_box").stop().animate({height:0},500);
		})


		$("#parts_btn").mouseenter(function(){
			$("#parts_box").stop().animate({height:240},500);
		})
		$("#parts_list").mouseenter(function(){
			$("#parts_box").stop(true);			
		})
		$("#parts_list").mouseleave(function(){
			$("#parts_box").stop().animate({height:0},500);
		})
		$("#parts_btn").mouseleave(function(){
			$("#parts_box").stop().animate({height:0},500);
		})
		

		$("#photo_btn").mouseenter(function(){
			$("#photo_box").stop().animate({height:240},500);
		})
		$("#photo_list").mouseenter(function(){
			$("#photo_box").stop(true);			
		})
		$("#photo_list").mouseleave(function(){
			$("#photo_box").stop().animate({height:0},500);
		})
		$("#photo_btn").mouseleave(function(){
			$("#photo_box").stop().animate({height:0},500);
		})

		$("#nubia_ui_btn").mouseenter(function(){
			$("#nubia_ui_box").stop().animate({height:240},500);
		})
		$("#nubia_ui_list").mouseenter(function(){
			$("#nubia_ui_box").stop(true);			
		})
		$("#nubia_ui_list").mouseleave(function(){
			$("#nubia_ui_box").stop().animate({height:0},500);
		})
		$("#nubia_ui_btn").mouseleave(function(){
			$("#nubia_ui_box").stop().animate({height:0},500);
		})
	}
	return{
			nav_fix:nav_fix,
			nav_load:nav_load
		}

})