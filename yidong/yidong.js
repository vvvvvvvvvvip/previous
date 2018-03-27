$(function() {
	var hover=$(".hover");
	var hidden=$(".hidden");
	for (var i = 0; i < hover.length; i++) {
		hover[i].index=i;
		hover[i].onmouseover=function() {
			hover[this.index].style.background="#fff"
			hidden[this.index].style.display="block"
		}
		hover[i].onmouseout=function() {
			hover[this.index].style.background="#f6f6f6"
			hidden[this.index].style.display="none"
		}
	}
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].index=i;
		hidden[i].onmouseover=function() {
			hover[this.index].style.background="#fff"
			hidden[this.index].style.display="block"
		}
		hidden[i].onmouseout=function() {
			hover[this.index].style.background="#f6f6f6"
			hidden[this.index].style.display="none"
		}
	}


	var ls=$(".ls")[0];
	var lsn=0;
	ls.onclick=function(){
		var dropdown=$(".dropdown")[0];
		lsn++;
		if (lsn%2!=0) {
		dropdown.style.display="block"
		}else{
		dropdown.style.display="none"
		}
		
	}


	var navs=$(".nav-lis");
	var menus=$(".menu");
	for (var i = 0; i < navs.length; i++) {
		navs[i].index=i;
		navs[i].onmouseover=function(){
			var menubox=$(".nav-menu")[0];
			menubox.style.display="block"
			for (var i = 0; i < menus.length; i++) {
				menus[i].style.display="none";
			}
			menus[this.index].style.display="block";
		}
		navs[i].onmouseout=function(){
			var menubox=$(".nav-menu")[0];
			menubox.style.display="none"
		}
		menus[i].onmouseover=function(){
			var menubox=$(".nav-menu")[0];
			menubox.style.display="block"
		}
		menus[i].onmouseout=function(){
			var menubox=$(".nav-menu")[0];
			menubox.style.display="none"
		}
	};

	var box=$(".banner-middle")[0];
	var imgs = $(".banner-img");
	var circle = $(".circle");
	var n = 0;
	var right = $(".banner-middle-right")[0];
	var left = $(".banner-middle-left")[0];
	var t=setInterval(move, 1500)
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
			circle[i].style.background = "#d3d3d3";
		}
		animate(imgs[n],{opacity:1},400)
		circle[n].style.background = "#e71d64";
	}
	box.onmouseover = function() {
		clearInterval(t)
	}
	box.onmouseout = function() {
		t = setInterval(move, 1000)
	}
	for (var i = 0; i < circle.length; i++) {
		circle[i].index = i;
		circle[i].onclick = function() {
			for (var i = 0; i < circle.length; i++) {
				circle[i].style.background = "#d3d3d3"
				animate(imgs[i],{opacity:0},400)
			}
			circle[this.index].style.background = "#e71d64"
			animate(imgs[this.index],{opacity:1},400)
		}
	}
	right.onclick = function() {
		move("r")
	}
	left.onclick = function() {
		move("l")
	}


	var boss = $(".box")[0];
	var you = $(".youfuhao")[0];
	var zuo = $(".zuofuhao")[0];
	var flag = true;
	var m = setInterval(dong, 1500)

		function dong() {
			if (!flag) {
				return;
			}
			flag = false;
			var pho = getFirst(boss);
			animate(boss, {
				left: -294
			},300, function() {
				boss.appendChild(pho);
				boss.style.left = 0;
				flag = true;
			})
		}

		function dong1() {
			if (!flag) {
				return;
			}
			flag = false;
			var pho = getFirst(boss);
			var pho1 = getLast(boss);
			insertBefore(pho1, pho);
			boss.style.left = -294 + "px";
			animate(boss, {
				left: 0
			}, 300, function() {
				flag = true;
			})
		}
	$(".lbb")[0].onmouseover = function() {
		clearInterval(m);
	}
	$(".lbb")[0].onmouseout = function() {
		m = setInterval(dong, 1500);
	}
	zuo.onclick = function() {
		dong()
	}
	you.onclick = function() {
		dong1()
	}
})