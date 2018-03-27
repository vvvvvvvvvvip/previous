$(function() {
	var minicartimg=$(".minicartimg")[0];
	var shopcart=$(".shopcart")[0];
	var nothing=$(".yt-bags-nothing")[0];
	var ytbags=$(".yt-bags")[0]
	shopcart.onmouseover=function(){
		ytbags.style.display="block"
		setTimeout(function(){
			minicartimg.style.display="none"
		},500)
	}
	shopcart.onmouseout=function(){
		ytbags.style.display="none"
	}



	// banner轮播
	var box=$(".pannels")[0];
	var imgs = $(".banner");
	var circle = $(".dian");
	var n = 0;
	var right = $(".ri")[0];
	var left = $(".le")[0];
	var t=setInterval(move, 2000)
	function move(type) {
		var type=type||"r";//判断type初始值
			if (type=="r") {
				n++;
			    if (n>=circle.length) {
				    n=0;
			    }
			}else{
				n--;
				if (n<0) {
					n=circle.length-1;
				};

			}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0},400)
			circle[i].style.background = "#211616";
		}
		animate(imgs[n],{opacity:1},400)
		circle[n].style.background = "#e5004f";
	}
	box.onmouseover = function() {
		clearInterval(t)
	}
	box.onmouseout = function() {
		t = setInterval(move, 2000)
	}
	for (var i = 0; i < circle.length; i++) {
		circle[i].index = i;
		circle[i].onmouseover = function() {
			for (var i = 0; i < circle.length; i++) {
				circle[i].style.background = "#211616"
				animate(imgs[i],{opacity:0},400)
			}
			circle[this.index].style.background = "#e5004f"
			animate(imgs[this.index],{opacity:1},400)
		}
	}
	right.onclick = function() {
		move("r")
	}
	left.onclick = function() {
		move("l")
	}


	var bct=$(".brand-content-top")[0]
	var bcbf=$("li",bct);
	var bcb=$(".brand-content-bottom");
	for (var i = 0; i < bcbf.length; i++) {
		bcbf[i].index=i;
		bcbf[i].onmouseover=function(){
			for (var i = 0; i < bcbf.length; i++) {
				bcbf[i].classList.remove("bctf")
				bcb[i].style.zIndex=0;
			};
			bcbf[this.index].classList.add("bctf")
			bcb[this.index].style.zIndex=1;
		}
	}


	var mains=$(".mains");
	var title=$(".title-lis");
	for (var i = 0; i < title.length; i++) {
		title[i].index=i;
		title[i].onmouseover=function(){
			for (var i = 0; i < mains.length; i++) {
				mains[i].style.zIndex=0;
				title[i].classList.remove("tl-active")
			}
			mains[this.index].style.zIndex=1;
			title[this.index].classList.add("tl-active")
		}
	};
	
	

	var floor=$(".sfloor");
	for (var i = 0; i < floor.length; i++) {
		xz(floor[i])
		jiedian(floor[i])
	}
	
	var lis = $(".fl");//获取左边浮动表
	var floatt = $(".float")[0];//获取左边浮动表框
	var cw = document.documentElement.clientWidth;//获取浏览器宽度
	var ch = document.documentElement.clientHeight;//获取浏览器高度
	var bh = floatt.offsetHeight;//获取左边浮动表框高度
	floatt.style.top = (ch - bh) / 2 + "px";//设置左边浮动表框高度
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < lis.length-1; i++) {
		lis[i].index = i;//给浮动表每一个按钮进行编号
		// lis[i].onmouseover=function(){
		// 	lis[this.index].style.color = "#fff" //按钮变色，文字变色
		// 	lis[this.index].style.background = "#e5004f"
		// 	var aa = lis[this.index].getAttribute("aa");
		// 	lis[this.index].innerHTML=aa;
		// 	sign=true;
		// }
		lis[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = floor[this.index].offsetTop;//获取所要出现楼层到body顶部的距离
			// obj.scrollTop = top;
			animate(document.documentElement,{scrollTop:top-50},300,function () {
			    sign=true;
			})//设置滚动条到顶部距离
			animate(document.body,{scrollTop:top-50},300,function () {
			    sign=true;
			})//设置滚动条到顶部距离
			for (var i = 0; i < lis.length-1; i++) {//设置按钮的颜色和文字颜色
				lis[i].style.background = "none"
				lis[i].innerHTML=null;
			}
			lis[this.index].style.color = "#fff" //按钮变色，文字变色
			lis[this.index].style.background = "#e5004f"
			var aa = lis[this.index].getAttribute("aa");
			lis[this.index].innerHTML=aa;
		}
		

	}
	
	window.onscroll=function(){//滚动条事件
		if(!sign){
			return;
		}
		var obj = document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i = 0; i < floor.length; i++) {
			if (obj.scrollTop >= (floor[i].offsetTop-ch+300)) {//按钮变色，文字变色
				for (var j = 0; j < lis.length; j++) {
					lis[j].style.background = "none"
					lis[j].innerHTML=null;
				}
				var aa = lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				lis[i].style.color = "#fff"//按钮变色，文字变色
				lis[i].style.background = "#e5004f"
			}	
		}
		if (obj.scrollTop >= (floor[0].offsetTop - ch)) {//开关控制
			if (flag) {
				flag = false;
				animate(floatt, {opacity: 1}, 300, function() {flag1 = true;})
			} 
		}else {
				if (flag1) {
				flag1 = false;
				animate(floatt, {opacity: 0}, 300, function() {flag = true;})
			} 
		}
	}


})
