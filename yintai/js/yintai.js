// 顶部开始
$(function(){
	var xiala=$(".xiala");
  for(var i=0;i<xiala.length;i++){
	xiala[i].onmouseover=function(){
		var yin=$(".xiala-Box",this)[0];
		yin.style.display="block";
	}
	xiala[i].onmouseout=function(){
		var yin=$(".xiala-Box",this)[0];
		yin.style.display="none";
	}
}

// 顶部完成

  var shop=$(".shop")[0];
  var shopYin=$(".shop-yin")[0];
  shop.onmouseover=function(){ 	
  	shopYin.style.display="block";
  }
  shop.onmouseout=function(){ 	
  	shopYin.style.display="none";
  }

  // logo部分完成
  // 图片轮播开始
   var imgs=$(".banner-box");
   var dians=$(".choLis");
   var left=$(".goL")[0];
    var right=$(".goR")[0];
   var smiddle=$(".bannerBox")[0];
    var t=setInterval(move,5000);
    var n=0;
    var next=0;
    function move(type){
    	var type=type||"r";
    	if(type=="r"){
    		 next=n+1;
	      if(next>=imgs.length){
	      	next=0;
      }
		  }else if(type=="l"){
		  	 next=n-1;
			      if(next<0){
			      	next=imgs.length-1;
		      }
		  }
		     
      for(var i=0;i<imgs.length;i++){
      	dians[i].style.background="#211616";
      	imgs[i].style.opacity=0;
      }
      dians[next].style.background="#E5004F";
      imgs[n].style.opacity=1;
      animate(imgs[n],{opacity:0},1000);
      animate(imgs[next],{opacity:1},1000);
      n=next;
    }
    smiddle.onmouseover=function(){
    	clearInterval(t);
    	left.style.display="block";
    	right.style.display="block";
    }
    smiddle.onmouseout=function(){
    	t=setInterval(move,5000);
    	left.style.display="none";
    	right.style.display="none";
    }
    var flag=true;
    for(var i=0;i<dians.length;i++){
    	dians[i].index=i;
    	dians[i].onmouseover=function(){
    		if(!flag){
    			return;
    		}
    		flag=false;
    		for(var j=0;j<imgs.length;j++){
    		   dians[j].style.background="#211616";
      	       imgs[j].style.opacity=0;
    		}
    		dians[this.index].style.background="#E5004F";
		      imgs[n].style.opacity=1;
		      animate(imgs[n],{opacity:0},1000);
		      animate(imgs[this.index],{opacity:1},1000,function(){
		      	flag=true;
		      });
		      n=this.index;
    	}
    }
    left.onmouseover=function(){
    	left.style.background="#E5004F"
    }
    left.onmouseout=function(){
    	left.style.background="#333"
    	left.style.opacity=0.8;
    }
     right.onmouseover=function(){
    	right.style.background="#E5004F"
    }
    right.onmouseout=function(){
    	right.style.background="#333"
    	right.style.opacity=0.8;
    }
    left.onclick=function(){
    	t=setInterval(move("l"),5000);
    }
    right.onclick=function(){
    	t=setInterval(move("r"),5000);
    }
   // 图片轮播结束
   // 选项卡
   var newLeft=$(".new-left")[0];
     xuan(newLeft);
   function xuan(obj){
       var nLis=$(".nLis",obj);
	   var newImg=$(".newImg",obj);
	   for(var i=0;i<nLis.length;i++){
		   	nLis[i].style.borderBottom="3px solid #333";
		    nLis[i].style.fontSize="14px";
		   	nLis[i].index=i;
	    nLis[i].onmouseover=function(){
	        for(var i=0;i<newImg.length;i++){
	        	newImg[i].style.display="none";
	        }
	        newImg[this.index].style.display="block";
	        nLis[this.index].style.borderBottom="3px solid #E5004F";
		    nLis[this.index].style.fontSize="16px";
		    nLis[this.index].style.fontWeight="bold";
	    }
	     nLis[i].onmouseout=function(){
	     	for(var i=0;i<nLis.length;i++){
	     		nLis[i].style.borderBottom="3px solid #333";
	     		nLis[i].style.fontSize="14px";
	     	}
	     	nLis[this.index].style.borderBottom="3px solid #E5004F";
		    nLis[this.index].style.fontSize="16px";
	     }
	   }
   }
   
  var yin=$(".yintai-right")[0];
  xuan(yin);

   // 楼层轮播开始
       var fuBox=$(".ff")[0];
       floMove(fuBox);
     function floMove(obj){
       var box=$(".fashion-middle",obj)[0];
       var imgss=$(".middle-img",obj);
       var dianss=$(".circle",obj);
       var left1=$(".faL",obj)[0];
       var right1=$(".faR",obj)[0];
       var width1=parseInt(getStyle(imgss[0],"width"));
       var a=0;
       var b=0;
      var move3=function (){
        b=a+1;
       if(b>=imgss.length){
          b=0;
       }
       imgss[b].style.left=width1+"px";
       animate(imgss[a],{left:-width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
       var move4=function (){
        b=a-1;
       if(b<0){
        b=imgss.length-1;
       }
       imgss[b].style.left=-width1+"px";
       animate(imgss[a],{left:width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
       box.onmouseover=function(){
        left1.style.display="block";
        right1.style.display="block";
       }
       box.onmouseout=function(){
         left1.style.display="none";
        right1.style.display="none";
       }
      for(var i=0;i<dianss.length;i++){
        dianss[i].index=i;
        dianss[i].onclick=function(){
          if(this.index>a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=width1+"px";
         animate(imgss[a],{left:-width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else if(this.index<a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=-width1+"px";
         animate(imgss[a],{left:width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else{
          return;
        }
      }
       left1.onmouseover=function(){
      left1.style.background="#E5004F";
    }
    left1.onmouseout=function(){
      left1.style.background="#333";
      left1.style.opacity=0.8;
    }
     right1.onmouseover=function(){
      right1.style.background="#E5004F";
    }
    right1.onmouseout=function(){
      right1.style.background="#333";
      right1.style.opacity=0.8;
    }
        left1.onclick=function(){
          move4();
        }
        right1.onclick=function(){
          move3();
        }
      }
   }
   var female=$(".female")[0];
   floMove(female);
   var male=$(".male")[0];
   floMove(male);
   var shoes=$(".shoes")[0];
   floMove(shoes);
   var bag=$(".bag")[0];
   floMove(bag);
   var mei=$(".mei")[0];
   floMove(mei);
   var out=$(".out")[0];
   floMove(out);
   var nei=$(".nei")[0];
   floMove(nei);
   var tool=$(".tool")[0];
   floMove(tool);
   // 楼层轮播结束
    xiabiao(fuBox);
    function xiabiao(obj){       
       var next=$(".faLisBox",obj)[0];
       var nBox=$(".faLis3-box",obj);
       var zuo=$(".turnL",obj)[0];
       var you=$(".turnR",obj)[0];
       var a=0;
       var b=0; 
       var w=next.offsetWidth; 
       var dong=function(){
        b=a+1;
        if(b>=nBox.length){
          b=0;
        }
         nBox[a].style.left=0;
        nBox[b].style.left=w+"px";
        animate(nBox[a],{left:-w},500);
        animate(nBox[b],{left:0},500);
        a=b;
       }
       var dong1=function(){
        b=a-1;
        if(b<0){
          b=nBox.length-1;
        }
         nBox[a].style.left=0;
        nBox[b].style.left=-w+"px";
        animate(nBox[a],{left:w},500);
        animate(nBox[b],{left:0},500);
        a=b;
       }
       zuo.onclick=function(){
        dong();
       }
       you.onclick=function(){
        dong1();
       }
     }
     xiabiao(female);
     xiabiao(male);
     xiabiao(shoes);
     xiabiao(bag);
     xiabiao(mei);
     xiabiao(out);
     xiabiao(nei);
     xiabiao(tool);
});

