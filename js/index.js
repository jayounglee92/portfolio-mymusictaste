
	 $(function(){

		 /*############### 원페이지 스크롤 #################*/
			// content의 높이값 ( 화면에 보이는 높이 )에 맞춰서 적용하기
			$(".content").height( $(window).height() );

			// 02) 작동 확인을 위한 true, false 이용하기(초기값)
			OKs = true;

			$(document).bind("DOMMouseScroll mousewheel", function(e){
				/*
					03) 제이쿼리에서 사용하는 이벤트 기능 X
					function(e) 는 제이쿼리에서 지원되는 기능을 javascript로 부터 호출할때 사용!
				*/
				e.preventDefault();

				$aniPage = function(e){
						if(e.originalEvent.wheelDelta > 0){
							// 현재 보여지는 window의 스크롤 위치에서 높이값 빼기 : 
							//	2번 화면이 보여지려면 1번 화면의 높이값 만큼 빼기
							$("body,html").animate({scrollTop:$(window).scrollTop()-$(window).height()},700,function(){
								OKs = true;
							});
						}
						else{
							$("body,html").animate({scrollTop:$(window).scrollTop()+$(window).height()},700,function(){
								OKs = true;
							});
						}
					
					} 

				// 04) 위에서 지정한 익명적 함수 제어하기
				//		작동이 되었다면 true, 작동이 끝났다면 false 지정!
				if(OKs ==  true){ $aniPage(e); OKs=false; }
			});



		 /*############### 숫자랜덤 #################*/
			
			$(".bgBtn").click(function(){
				for(i=0; i<28; i++){ // 총 숫자28개
					var rnd = Math.round(Math.random()*10);
					if(rnd == 10){ // 10이면 안보이게
						rnd = "";
					}
					
					$("#main .bgDigits li:eq("+i+")").html(rnd);
					$("#slider .bgDigits li:eq("+i+")").html(rnd);
				}
			});
			setInterval(function(){ $(".bgBtn").click(); },700);



		/*############# 슬라이딩 윈도우 ##########*/

			/*############# 슬라이딩 윈도우1 ##########*/
			$(".film1").append($(".scene1:first"));

			$(".sliderBtn1").click(function(){
				$(".film1:not(:animated)").stop().animate({"marginTop":"-=295px"},1000,"swing",function(){
					$(".film1").append($(".scene1:first"));
					$(".film1").css({"marginTop":"0"});
				});
			});

			var autoSel1 = setInterval(function(){ $(".sliderBtn1").click(); },4000);

			$(".makeBtn1").mouseover(function(){
				clearInterval(autoSel1);
			}).mouseout(function(){
				setInterval(function(){ $(".sliderBtn1").click(); },4000);
			});



			/*############# 슬라이딩 윈도우2 ##########*/
			$(".film2").append($(".scene2:first"));

			$(".sliderBtn2").click(function(){
				$(".film2:not(:animated)").stop().animate({"marginTop":"-=295px"},1500,"swing",function(){
					$(".film2").append($(".scene2:first"));
					$(".film2").css({"marginTop":"0"});
				});
			});

			var autoSel2 = setInterval(function(){ $(".sliderBtn2").click(); },3000);

			$(".makeBtn2").mouseover(function(){
				clearInterval(autoSel2);
			}).mouseout(function(){
				setInterval(function(){ $(".sliderBtn2").click(); },3000);
			});




			/*############# 슬라이딩 윈도우3 ##########*/
			$(".film3").append($(".scene3:first"));

			$(".sliderBtn3").click(function(){
				$(".film3:not(:animated)").stop().animate({"marginTop":"-=295px"},1200,"swing",function(){
					$(".film3").append($(".scene3:first"));
					$(".film3").css({"marginTop":"0"});
				});
			});

			var autoSel3 = setInterval(function(){ $(".sliderBtn3").click(); },3500);

			$(".makeBtn3").mouseover(function(){
				clearInterval(autoSel3);
			}).mouseout(function(){
				setInterval(function(){ $(".sliderBtn3").click(); },3500);
			});


			 

	});