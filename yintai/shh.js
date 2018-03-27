function xz(obj) {
		var m = 0;
	    var k = 0;
		var dians = $(".circles",obj);
		var xlbimgs = $(".img",obj);
		var xlbr = $(".lleft",obj)[0]; //获取右按钮
		var xlbl = $(".rright",obj)[0]; //获取左按钮
		function xxlb() {
			k=m+1;
			if (k>=xlbimgs.length) {
				k=0;
			}
			for (var i = 0; i < xlbimgs.length; i++) {
				dians[i].style.background = "#3e3e3e"
			}
			var width=390;
			xlbimgs[k].style.left=width+"px";
			xlbimgs[k].style.zIndex = 1;
			animate(xlbimgs[m], {left: -width}, 500)
			animate(xlbimgs[k], {left: 0}, 500)
			dians[k].style.background = "#b61b1f"
			m=k;
		}
		function xxlb1() {
			k=m-1;
			if (k<0) {
				k=xlbimgs.length-1;
			}
			for (var i = 0; i < xlbimgs.length; i++) {
				dians[i].style.background = "#3e3e3e";
			}
			var width=390;
			xlbimgs[k].style.left=-width+"px";
			xlbimgs[k].style.zIndex = 1;
			animate(xlbimgs[m], {left: width}, 500)
			animate(xlbimgs[k], {left: 0}, 500)
			dians[k].style.background = "#b61b1f"
			m=k;
		}
		xlbr.onclick = function() {
			xxlb1()
		}
		xlbl.onclick = function() {
			xxlb()
		}
		for (var j = 0; j<xlbimgs.length; j++) {
			dians[j].index=j;
			dians[j].onmouseover=function() {
				for (var i = 0; i < xlbimgs.length; i++) {
						dians[i].style.background="#3e3e3e"
					}
				dians[this.index].style.background="#b61b1f"
				if (this.index==m) {
					return;
				}else if (this.index>m) {
					var width=390;
					xlbimgs[this.index].style.left=width+"px";
					xlbimgs[this.index].style.zIndex=1;
					animate(xlbimgs[m],{left:-width},500)
					animate(xlbimgs[this.index],{left:0},500);
				}else if (this.index<m) {
					var width=390;
					xlbimgs[this.index].style.left=-width+"px";
					xlbimgs[this.index].style.zIndex=1;
					animate(xlbimgs[m],{left:width},500)
					animate(xlbimgs[this.index],{left:0},500)
				}	
				m=this.index;
				k=this.index;
			}
		}
	}