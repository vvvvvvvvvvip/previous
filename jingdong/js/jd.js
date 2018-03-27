$(function(){
    //1. banner轮播
	var boxi=$(".banner_middle")[0];
	var imgs=$(".banner_img");	
	var circle=$(".banner_six_circle");
	var left=$(".left_kuai")[0];
    console.log(left)
	var right=$(".right_kuai")[0];
    var n=0;
    var next=0;
    var tao=setInterval(moveyao,2000);
    function moveyao(){
    	next=n+1;
    	if(next>=imgs.length){
    		next=0;
    	}
    	for(var i=0;i<imgs.length;i++){
    		imgs[i].style.opacity=0;
    		circle[i].style.background="#3E3E3E";
    	}
    	circle[next].style.background="#B61B1F";
        imgs[n].style.opacity=1;
    	animate(imgs[n],{opacity:0},300);
    	animate(imgs[next],{opacity:1},300);
    	n=next;
    }
    function moveyao1(){
    	next=n-1;
    	if(next<0){
    		next=imgs.length-1;

    	}for(var i=0;i<imgs.length;i++){
    		imgs[i].style.opacity=0;
    		circle[i].style.background="#3E3E3E";
    	}
    	circle[next].style.background="#B61B1F";
        imgs[n].style.opacity=1;
    	animate(imgs[n],{opacity:0},300);
    	animate(imgs[next],{opacity:1},300);
    	n=next;
    }
     
    left.onclick=function(){
    	moveyao1();
    }
    right.onclick=function(){
    	moveyao();
    }
    boxi.onmouseover=function(){
    	clearInterval(tao);
    }
    boxi.onmouseout=function(){
    	tao=setInterval(moveyao,2000);
    }
    for(var i=0;i<circle.length;i++){
    	circle[i].index=i;
        circle[i].onmouseover=function(){
    		for(var j=0;j<imgs.length;j++){
    			circle[j].style.background="#3E3E3E";
    			imgs[j].style.opacity=0;
    		}circle[this.index].style.background="#B61B1F";
            imgs[n].style.opacity=1;
    		animate(imgs[n],{opacity:0},300);
    		animate(imgs[this.index],{opacity:1},300);
    		n=this.index;
    	}
    }

    
    // 2.下拉框
    var xiala=$(".xiala")[0];
    var hidden=$(".hidden")[0];
    var kong=$(".null")[0];
    xiala.onmouseover=function(){
        hidden.style.display="block";
        kong.style.display="block";
    } 
    xiala.onmouseout=function(){
        hidden.style.display="none";
        kong.style.display="none";
    } 

      var xial=$(".xiala")[1];
    var hidde=$(".hidden")[1];
      var kong2=$(".null2")[0];
    xial.onmouseover=function(){
        hidde.style.display="block";
        kong2.style.display="block";
    } 
    xial.onmouseout=function(){
        hidde.style.display="none";
        kong2.style.display="none";
    } 

    
       var lg_rt=$(".logo_right")[0];
    var carhi=$(".carhidden")[0];
      var kon=$(".kon")[0];
    lg_rt.onmouseover=function(){
        carhi.style.display="block";
        kon.style.display="block";
    } 
    lg_rt.onmouseout=function(){
        carhi.style.display="none";
        kon.style.display="none";
    }




    var xia=$(".xiala")[2];
    var hidd=$(".hidden")[2];
     var kong1=$(".null1")[0];
    xia.onmouseover=function(){
        hidd.style.display="block";
        kong1.style.display="block";
    } 
    xia.onmouseout=function(){
        hidd.style.display="none";
        kong1.style.display="none";
    } 
    

    var rrc=$(".rrc")[0];
    var hidden3=$(".hidden3")[0];
    var nnn=$(".nnn")[0];
    rrc.onmouseover=function(){
         nnn.style.display="block";
        hidden3.style.display="block";
    } 
    rrc.onmouseout=function(){
         nnn.style.display="none";
        hidden3.style.display="none";
    } 


    var rrc1=$(".rrc")[1];
    var hidden4=$(".hidden4")[0];
    var null4=$(".null4")[0];
    rrc1.onmouseover=function(){
         null4.style.display="block";
        hidden4.style.display="block";
    } 
    rrc1.onmouseout=function(){
         null4.style.display="none";
        hidden4.style.display="none";
    } 



    // 3.滚动轮播
    var box1=$(".fogur")[0];        //滑动的范围
    var left1=$(".left_cc")[0];
    var right1=$(".right_cc")[0];
    var images=$(".img_sum");
    var ww=parseInt(getStyle(box1,"width"));

    var x=0;
    var y=0;
    var t=setInterval(yi,2000);
    function yi(){
        y=x+1;
        if(y>=images.length){
            y=0;
        }
        images[y].style.left=ww+"px";
        animate(images[x],{left:-ww},300);
        animate(images[y],{left:0},300);
        x=y;
    }
    function yii(){
        y=x-1;
        if(y<0){
            y=images.length-1;
        }imgs[x].style.left=-ww+"px";
        animate(images[x],{left:ww},300)
        animate(images[y],{left:0},300)
        x=y;
    }
    left1.onclick=function(){
        yi();
    }
    right1.onclick=function(){
        yii();
    }
    // 滚动轮播结束
 


      // 4.一楼banner轮播
      function jiao(obj){
            var marry=$(".marry",obj)[0];              // 盒子
            var marryImg=$(".floor1_move",obj);         //图片
            var circlea=$(".circlea",obj);             //原点
            var lt=parseInt(getStyle(marry,"width"));
            var z=0;                               //当前
            var u=0;                              //下张
            var t=setInterval(lunbo,2000)           //时间函数
            function lunbo(){
                u=z+1;
                if(u>=marryImg.length){
                    u=0;
                }for(var i=0;i<marryImg.length;i++){
                    marryImg[u].style.left=lt+"px";
                    animate(marryImg[z],{left:-lt},300);
                    animate(marryImg[u],{left:0},300);
                    z=u;    
        }
    }
    for(var i=0;i<marryImg.length;i++){       //添加标识
    circlea[i].index=i;
    circlea[i].onmouseover=function(){
         if (this.index==z) {
              return;
         }else if(this.index>z){
            for(var i=0;i<circlea.length;i++){
               circlea[i].style.background="#666";
            }circlea[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              marryImg[this.index].style.left=lt+"px";               
              animate(marryImg[z],{left:-lt},300);                           //当前图片向左移
              animate(marryImg[this.index],{left:0},300);                  //点击的图片放到box里
              z=this.index;
            }else if(this.index<z){                     //方向从右到左
                for(var i=0;i<circlea.length;i++){
                circlea[i].style.background="#ccc";
              }
              circlea[this.index].style.background="#B61B1F";
              marryImg[this.index].style.left=-lt+"px";      
                    animate(marryImg[z],{left:lt},300);   
                    animate(marryImg[this.index],{left:0},300);
                    z=this.index;
            }
        }
    }
    marry.onmouseover=function(){
        clearInterval(t);
    }
    marry.onmouseout=function(){
        t=setInterval(lunbo,2000);
    }
}  
var floor1=$(".floor1_right")[0];
jiao(floor1);
// 5.二楼个护美妆轮播
        var $_ba=$(".floor2_banner")[0];          //盒子
        var $_line1=$(".floor2_right_line1");    // 每一列
        var left2=$(".floor2_left11")[0];     //左边的
        var right2=$(".floor2_right11")[0];    //右边的
        var dian2=$(".dian2_per");         //点
        var kuan2=parseInt(getStyle($_line1[0],"width")); //盒子的宽度
        var e=0;        //当前列
        var E=0;        //下一列
        var a2=setInterval(yd,2000);   //时间函数
        function yd(){ 
            E=e+1;
                if(E>=$_line1.length){
                    E=0;
                }for(var i=0;i<$_line1.length;i++){
                    dian2[e].style.background="#3E3E3E";   
                }
                    dian2[E].style.background="#B61B1F";
                    $_line1[E].style.left=kuan2+"px";
                    animate($_line1[e],{left:-kuan2},300);
                    animate($_line1[E],{left:0},300);
                    e=E; 
        }
        function yd1(){
            E=e-1;
                if(E<0){
                    E=$_line1.length-1;
                }for(var i=0;i<$_line1.length;i++){
                     dian2[e].style.background="#3E3E3E";   
                }  
                    dian2[E].style.background="#B61B1F";
                    $_line1[E].style.left=-kuan2+"px";
                    animate($_line1[e],{left:kuan2},300);
                    animate($_line1[E],{left:0},300);
                    e=E;    
        }
      for(var i=0;i<$_line1.length;i++){
         dian2[i].index=i;
         dian2[i].onmouseover=function(){
            if(this.index==e){
                return;
            }else if(this.index>e){
                for(var j=0;j<$_line1.length;j++){
                dian2[j].style.background="#3E3E3E";
                }dian2[this.index].style.background="#B61B1F";
                $_line1[this.index].style.left=kuan2+"px";
                animate($_line1[e],{left:-kuan2},300);
                animate($_line1[this.index],{left:0},300);
                e=this.index;
            }else if(this.index<e){
                for(var j=0;j<$_line1.length;j++){
                dian2[j].style.background="#3E3E3E";
                }dian2[this.index].style.background="#B61B1F";
                $_line1[this.index].style.left=-kuan2+"px";
                animate($_line1[e],{left:kuan2},300);
                animate($_line1[this.index],{left:0},300);
                e=this.index;     
                
            }
         }     
      }
      left2.onclick=function(){
        yd1();
      } 
      right2.onclick=function(){
        yd();
      } 
      $_ba.onmouseover=function(){
        clearInterval(a2);
      } 
      $_ba.onmouseout=function(){
        a2=setInterval(yd,2000)
      }
// 六楼第三列轮播开始
        var f4line3=$(".floor4_line3")[0];          //盒子
        var f4_per=$(".floor4_banner_per");    // 每一列
        var left6=$(".floor6_left11")[0];     //左边的
        var right6=$(".floor6_right11")[0];    //右边的
        var dian6=$(".dian6");         //点
        var kuan6=parseInt(getStyle(f4line3,"width")); //盒子的宽度
        var q=0;        //当前列
        var Q=0;        //下一列
        var a6=setInterval(yd6,2000);   //时间函数
        function yd6(){ 
            Q=q+1;
                if(Q>=f4_per.length){
                    Q=0;
                }for(var i=0;i<f4_per.length;i++){
                    dian6[q].style.background="#3E3E3E";   
                }
                    dian6[Q].style.background="#B61B1F";
                    f4_per[Q].style.left=kuan6+"px";
                    animate(f4_per[q],{left:-kuan6},300);
                    animate(f4_per[Q],{left:0},300);
                    q=Q; 
        }
        function yd61(){
            Q=q-1;
                if(Q<0){
                    Q=f4_per.length-1;
                }for(var i=0;i<f4_per.length;i++){
                     dian6[q].style.background="#3E3E3E";   
                }  
                    dian6[Q].style.background="#B61B1F";
                    f4_per[Q].style.left=-kuan6+"px";
                    animate(f4_per[q],{left:kuan6},300);
                    animate(f4_per[Q],{left:0},300);
                    q=Q;    
        }
      for(var i=0;i<f4_per.length;i++){
         dian6[i].index=i;
         dian6[i].onmouseover=function(){
            if(this.index==q){
                return;
            }else if(this.index>q){
                for(var j=0;j<f4_per.length;j++){
                dian6[j].style.background="#3E3E3E";
                }dian6[this.index].style.background="#B61B1F";
                f4_per[this.index].style.left=kuan6+"px";
                animate(f4_per[q],{left:-kuan6},300);
                animate(f4_per[this.index],{left:0},300);
                q=this.index;
            }else if(this.index<q){
                for(var j=0;j<f4_per.length;j++){
                dian6[j].style.background="#3E3E3E";
                }dian6[this.index].style.background="#B61B1F";
                f4_per[this.index].style.left=-kuan6+"px";
                animate(f4_per[q],{left:kuan6},300);
                animate(f4_per[this.index],{left:0},300);
                q=this.index;     
                
            }
         }     
      }
      left6.onclick=function(){
        yd61();
      } 
      right6.onclick=function(){
        yd6();
      } 
      f4line3.onmouseover=function(){
        clearInterval(a6);
      } 
     f4line3.onmouseout=function(){
        a6=setInterval(yd6,2000)
      }
// 六层轮播结束

// 七楼第三列轮播开始
        var f7line3=$(".floor7_line3")[0];          //盒子
        var f7_per=$(".floor7_banner_per");    // 每一列
        var left7=$(".floor7_left11")[0];     //左边的
        var right7=$(".floor7_right11")[0];    //右边的
        var dian7=$(".dian7");         //点
        var kuan7=parseInt(getStyle(f7line3,"width")); //盒子的宽度
        var f7=0;        //当前列
        var F7=0;        //下一列
        var a7=setInterval(yd7,2000);   //时间函数
        function yd7(){ 
            F7=f7+1;
                if(F7>=f7_per.length){
                    F7=0;
                }for(var i=0;i<f7_per.length;i++){
                    dian7[f7].style.background="#3E3E3E";   
                }
                    dian7[F7].style.background="#B61B1F";
                    f7_per[F7].style.left=kuan7+"px";
                    animate(f7_per[f7],{left:-kuan7},300);
                    animate(f7_per[F7],{left:0},300);
                    f7=F7; 
        }
        function yd71(){
            F7=f7-1;
                if(F7<0){
                    F7=f7_per.length-1;
                }for(var i=0;i<f7_per.length;i++){
                     dian7[f7].style.background="#3E3E3E";   
                }  
                    dian7[F7].style.background="#B61B1F";
                    f7_per[F7].style.left=-kuan7+"px";
                    animate(f7_per[f7],{left:kuan7},300);
                    animate(f7_per[F7],{left:0},300);
                    f7=F7;    
        }
      for(var i=0;i<f7_per.length;i++){
         dian7[i].index=i;
         dian7[i].onmouseover=function(){
            if(this.index==f7){
                return;
            }else if(this.index>f7){
                for(var j=0;j<f7_per.length;j++){
                dian7[j].style.background="#3E3E3E";
                }dian7[this.index].style.background="#B61B1F";
                f7_per[this.index].style.left=kuan7+"px";
                animate(f7_per[f7],{left:-kuan7},300);
                animate(f7_per[this.index],{left:0},300);
                f7=this.index;
            }else if(this.index<f7){
                for(var j=0;j<f7_per.length;j++){
                dian7[j].style.background="#3E3E3E";
                }dian7[this.index].style.background="#B61B1F";
                f7_per[this.index].style.left=-kuan7+"px";
                animate(f7_per[f7],{left:kuan7},300);
                animate(f7_per[this.index],{left:0},300);
               f7=this.index;     
                
            }
         }     
      }
      left7.onclick=function(){
        yd71();
      } 
      right7.onclick=function(){
        yd7();
      } 
      f7line3.onmouseover=function(){
        clearInterval(a7);
      } 
     f7line3.onmouseout=function(){
        a7=setInterval(yd7,2000)
      }
// 七层轮播结束

// 八楼第三列轮播开始
        var f8line3=$(".floor8_line3")[0];          //盒子
        var f8_per=$(".floor8_banner_per");    // 每一列
        var left8=$(".floor8_left11")[0];     //左边的
        var right8=$(".floor8_right11")[0];    //右边的
        var dian8=$(".dian8");         //点
        var kuan8=parseInt(getStyle(f8line3,"width")); //盒子的宽度
        var f8=0;        //当前列
        var F8=0;        //下一列
        var a8=setInterval(yd8,2000);   //时间函数
        function yd8(){ 
            F8=f8+1;
                if(F8>=f8_per.length){
                    F8=0;
                }for(var i=0;i<f8_per.length;i++){
                    dian8[f8].style.background="#3E3E3E";   
                }
                    dian8[F8].style.background="#B61B1F";
                    f8_per[F8].style.left=kuan8+"px";
                    animate(f8_per[f8],{left:-kuan8},300);
                    animate(f8_per[F8],{left:0},300);
                    f8=F8; 
        }
        function yd81(){
            F8=f8-1;
                if(F8<0){
                    F8=f8_per.length-1;
                }for(var i=0;i<f8_per.length;i++){
                     dian8[f8].style.background="#3E3E3E";   
                }  
                    dian8[F8].style.background="#B61B1F";
                    f8_per[F8].style.left=-kuan8+"px";
                    animate(f8_per[f8],{left:kuan8},300);
                    animate(f8_per[F8],{left:0},300);
                    f8=F8;    
        }
      for(var i=0;i<f8_per.length;i++){
         dian8[i].index=i;
         dian8[i].onmouseover=function(){
            if(this.index==f8){
                return;
            }else if(this.index>f8){
                for(var j=0;j<f8_per.length;j++){
                dian8[j].style.background="#3E3E3E";
                }dian8[this.index].style.background="#B61B1F";
                f8_per[this.index].style.left=kuan8+"px";
                animate(f8_per[f8],{left:-kuan8},300);
                animate(f8_per[this.index],{left:0},300);
                f8=this.index;
            }else if(this.index<f8){
                for(var j=0;j<f8_per.length;j++){
                dian8[j].style.background="#3E3E3E";
                }dian8[this.index].style.background="#B61B1F";
                f8_per[this.index].style.left=-kuan8+"px";
                animate(f8_per[f8],{left:kuan8},300);
                animate(f8_per[this.index],{left:0},300);
               f8=this.index;     
                
            }
         }     
      }
      left8.onclick=function(){
        yd81();
      } 
      right8.onclick=function(){
        yd8();
      } 
      f8line3.onmouseover=function(){
        clearInterval(a8);
      } 
     f8line3.onmouseout=function(){
        a8=setInterval(yd8,2000)
      }
// 八层轮播结束

// 九楼第三列轮播开始
        var f9line3=$(".floor9_line3")[0];          //盒子
        var f9_per=$(".floor9_banner_per");    // 每一列
        var left9=$(".floor9_left11")[0];     //左边的
        var right9=$(".floor9_right11")[0];    //右边的
        var dian9=$(".dian9");         //点
        var kuan9=parseInt(getStyle(f9line3,"width")); //盒子的宽度
        var f9=0;        //当前列
        var F9=0;        //下一列
        var a9=setInterval(yd9,2000);   //时间函数
        function yd9(){ 
            F9=f9+1;
                if(F9>=f9_per.length){
                    F9=0;
                }for(var i=0;i<f9_per.length;i++){
                    dian9[f9].style.background="#3E3E3E";   
                }
                    dian9[F9].style.background="#B61B1F";
                    f9_per[F9].style.left=-kuan9+"px";
                    animate(f9_per[f9],{left:-kuan9},300);
                    animate(f9_per[F9],{left:0},300);
                    f9=F9; 
        }
        function yd91(){
            F9=f9-1;
                if(F9<0){
                    F9=f9_per.length-1;
                }for(var i=0;i<f9_per.length;i++){
                     dian9[f9].style.background="#3E3E3E";   
                }  
                    dian9[F9].style.background="#B61B1F";
                    f9_per[F9].style.left=kuan8+"px";
                    animate(f9_per[f9],{left:kuan9},300);
                    animate(f9_per[F9],{left:0},300);
                    f9=F9;    
        }
      for(var i=0;i<f9_per.length;i++){
         dian9[i].index=i;
         dian9[i].onmouseover=function(){
            if(this.index==f9){
                return;
            }else if(this.index>f9){
                for(var j=0;j<f9_per.length;j++){
                dian9[j].style.background="#3E3E3E";
                }dian9[this.index].style.background="#B61B1F";
                f9_per[this.index].style.left=kuan9+"px";
                animate(f9_per[f9],{left:-kuan9},300);
                animate(f9_per[this.index],{left:0},300);
                f9=this.index;
            }else if(this.index<f9){
                for(var j=0;j<f9_per.length;j++){
                dian9[j].style.background="#3E3E3E";
                }dian9[this.index].style.background="#B61B1F";
                f9_per[this.index].style.left=-kuan9+"px";
                animate(f9_per[f9],{left:kuan9},300);
                animate(f9_per[this.index],{left:0},300);
               f9=this.index;     
                
            }
         }     
      }
  left9.onclick=function(){
    yd91();
  } 
  right9.onclick=function(){
    yd9();
  } 
  f9line3.onmouseover=function(){
    clearInterval(a9);
  } 
 f9line3.onmouseout=function(){
    a9=setInterval(yd9,2000)
  }
// 九层轮播结束





   // var marry=$(".marry1")[0];              // 盒子
   //  var marryImg=$(".floor1_move");         //图片
   //  var circlea=$(".circlea");             //原点
   //  var lt=parseInt(getStyle(marry,"width"));
   //  var z=0;                               //当前
   //  var u=0;                              //下张
   //  var t=setInterval(lunbo,2000)           //时间函数
   //  function lunbo(){
   //      u=z+1;
   //      if(u>=marryImg.length){
   //          u=0;
   //      }for(var i=0;i<marryImg.length;i++){
   //          marryImg[z].style.left=lt+"px";
   //          animate(marryImg[z],{left:-lt},300);
   //          animate(marryImg[u],{left:0},300);
   //          z=u;    
   //      }
   //  }


// 一楼选项卡开始
   var qu=$(".qu");
   var f1=$(".floor1_right");
   var nulll_1=$(".nulll_1");
   for(var i=0;i<qu.length;i++){
    qu[i].index=i;             //添加标识 
    qu[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu.length;j++){
    f1[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_1[j].style.display="none";
    qu[j].style.border="none";
    }
  f1[this.index].style.display="block";    // 将当前色块显示出来
  nulll_1[this.index].style.display="block";
  qu[this.index].style.borderTop="2px solid #C81623";
  qu[this.index].style.borderLeft="1px solid #C81623";
  qu[this.index].style.borderRight="1px solid #C81623";
    }
  }
   
   // 二楼选项卡开始
      var qu2=$(".qu2");
      var f2=$(".floor2_right");
      var nulll_2=$(".nulll_2");
for(var i=0;i<qu2.length;i++){
    qu2[i].index=i;             //添加标识 
    qu2[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu2.length;j++){
    f2[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_2[j].style.display="none";
    qu2[j].style.border="none";
    }
  f2[this.index].style.display="block";    // 将当前色块显示出来
  nulll_2[this.index].style.display="block";
  qu2[this.index].style.borderTop="2px solid #C81623";
  qu2[this.index].style.borderLeft="1px solid #C81623";
  qu2[this.index].style.borderRight="1px solid #C81623";
    }
  }
  
      // 三楼选项卡开始
      var qu3=$(".qu3");
      var f3=$(".floor33_right");
      var nulll_3=$(".nulll_3");
       for(var i=0;i<qu3.length;i++){
    qu3[i].index=i;             //添加标识 
    qu3[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu3.length;j++){
    f3[j].style.display="none";       //当点击的时候 隐藏所有色块
      nulll_3[j].style.display="none";
       qu3[j].style.border="none";
    }
   f3[this.index].style.display="block";    // 将当前色块显示出来
   nulll_3[this.index].style.display="block"
  qu3[this.index].style.borderTop="2px solid #C81623";
  qu3[this.index].style.borderLeft="1px solid #C81623";
  qu3[this.index].style.borderRight="1px solid #C81623";
    }
  }

       // 四楼选项卡开始
      var qu4=$(".qu4");
      var f4=$(".floor4_right");
      var nulll_4=$(".nulll_4");
      for(var i=0;i<qu4.length;i++){
    qu4[i].index=i;             //添加标识 
    qu4[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu4.length;j++){
    f4[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_4[j].style.display="none";
     qu4[j].style.border="none";
    }
  f4[this.index].style.display="block";    // 将当前色块显示出来
  nulll_4[this.index].style.display="block";
  qu4[this.index].style.borderTop="2px solid #C81623";
  qu4[this.index].style.borderLeft="1px solid #C81623";
  qu4[this.index].style.borderRight="1px solid #C81623";
    }
  }



       // 五楼选项卡开始
      var qu5=$(".qu5");
      console.log(qu5.length)
      var f5=$(".floor5_right");
      var ff55=$(".ff55")[0];
      var nulll_5=$(".nulll_5",ff55);
      console.log(nulll_5.length)
      for(var i=0;i<qu5.length;i++){
    qu5[i].index=i;             //添加标识 
    qu5[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu5.length;j++){
    f5[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_5[j].style.display="none"
     qu5[j].style.border="none";
    }
  f5[this.index].style.display="block";    // 将当前色块显示出来
  nulll_5[this.index].style.display="block";
  qu5[this.index].style.borderTop="2px solid #C81623";
  qu5[this.index].style.borderLeft="1px solid #C81623";
  qu5[this.index].style.borderRight="1px solid #C81623";
    }
  }


     // 六楼选项卡开始
      var qu6=$(".qu6");
      var f6=$(".floor6_right");
      var nulll_6=$(".nulll_6");
      for(var i=0;i<qu6.length;i++){
    qu6[i].index=i;             //添加标识 
    qu6[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu6.length;j++){
    f6[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_6[j].style.display="none";
    qu6[j].style.border="none";
    }
  f6[this.index].style.display="block";    // 将当前色块显示出来
  nulll_6[this.index].style.display="block";
  qu6[this.index].style.borderTop="2px solid #C81623";
  qu6[this.index].style.borderLeft="1px solid #C81623";
  qu6[this.index].style.borderRight="1px solid #C81623";
    }
  }


// 七楼选项卡开始
      var qu7=$(".qu7");
      var f77=$(".floor7_right");
       var nulll_7=$(".nulll_7");
      for(var i=0;i<qu7.length;i++){
    qu7[i].index=i;             //添加标识 
    qu7[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu7.length;j++){
    f77[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_7[j].style.display="none";
    qu7[j].style.border="none";
    }
  f77[this.index].style.display="block";    // 将当前色块显示出来
  nulll_7[this.index].style.display="block";
  qu7[this.index].style.borderTop="2px solid #C81623";
  qu7[this.index].style.borderLeft="1px solid #C81623";
  qu7[this.index].style.borderRight="1px solid #C81623";
    }
  }

   // 八楼选项卡开始
      var qu8=$(".qu8");
      var f88=$(".floor8_right");
      var nulll_8=$(".nulll_8");
      for(var i=0;i<qu8.length;i++){
    qu8[i].index=i;             //添加标识 
    qu8[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu8.length;j++){
    f88[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_8[j].style.display="none";
    qu8[j].style.border="none";
    }
  f88[this.index].style.display="block";    // 将当前色块显示出来
  nulll_8[this.index].style.display="block";
  qu8[this.index].style.borderTop="2px solid #C81623";
  qu8[this.index].style.borderLeft="1px solid #C81623";
  qu8[this.index].style.borderRight="1px solid #C81623";
    }
  }


// 九楼选项卡开始
      var qu9=$(".qu9");
      var f99=$(".floor9_right");
      var nulll_9=$(".nulll_9");
      for(var i=0;i<qu9.length;i++){
    qu9[i].index=i;             //添加标识 
    qu9[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu9.length;j++){
    f99[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_9[j].style.display="none";
    qu9[j].style.border="none";
    }
  f99[this.index].style.display="block";    // 将当前色块显示出来
  nulll_9[this.index].style.display="block";
  qu9[this.index].style.borderTop="2px solid #C81623";
  qu9[this.index].style.borderLeft="1px solid #C81623";
  qu9[this.index].style.borderRight="1px solid #C81623";
    }
  }


 // 十楼选项卡开始
      var qu10=$(".qu10");
      var f10=$(".floor10_rt");
      var nulll_10=$(".nulll_10");
      for(var i=0;i<qu10.length;i++){
    qu10[i].index=i;             //添加标识 
    qu10[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<qu10.length;j++){
    f10[j].style.display="none";       //当点击的时候 隐藏所有色块
    nulll_10[j].style.display="none";
    qu10[j].style.border="none";
    qu10[j].style.color="#ccc";
    }
  f10[this.index].style.display="block";    // 将当前色块显示出来
  nulll_10[this.index].style.display="block";
  qu10[this.index].style.borderTop="2px solid #C81623";
  qu10[this.index].style.borderLeft="1px solid #C81623";
  qu10[this.index].style.borderRight="1px solid #C81623";
  qu10[this.index].style.color="#C81623";
    }
  }

  // 楼层跳转
    var floor=$(".floor");
    var box_lt=$(".box_lt")[0];
    var box_per=$(".box_per");
    var bw=document.documentElement.clientWidth;     //获取浏览器的宽度
    var bh=document.documentElement.clientHeight;     //获取浏览器的高度
    var height=box_lt.offsetHeight;        //获取box_lt的实际高度
    box_lt.style.top=(bh-height)/2+"px";    //设置box的top值
    for(var i=0;i<floor.length;i++){
         box_per[i].index=i;     // 设标识
         box_per[i].onclick=function(){   //添加点击事件
         var obj_a=document.body.scrollTop?  document.body:document.documentElement;
         var top=floor[this.index].offsetTop; //获取每个楼层的offsettop 值
         animate(obj_a,{scrollTop:top},300);  //动画效果         
         for(var i=0;i<floor.length;i++){
         box_per[i].style.color="#ccc"; //循环  让侧导航的背景颜色默认设置为灰色
     }
         box_per[this.index].style.color="#C81623";  //将当前导航的背景颜色设置为红色                    
    }   
}   var flag=true;
    var flag1=true;  
window.onscroll=function(){
     var obj_a=document.body.scrollTop?  document.body:document.documentElement;
     for(var i=0;i<floor.length;i++){                          //循环
                    if (obj_a.scrollTop>=floor[i].offsetTop-bh+150) {      //scrolltop+每个图片的高度=offsettop
                        for(var j=0;j<floor.length;j++){   
                         box_per[j].style.color="#ccc";
                         box_per[j].innerHTML=(j+1)+'F';    //楼层上来的时候  将所有点的颜色变为默认
                        }box_per[i].style.color="#C81623";
                            var left_con= box_per[i].getAttribute("zin") 
                            box_per[i].innerHTML=left_con;          //改变当前点的颜色
                            var imgs=$("img",floor[i]);                           // 先获取每一层楼上的图片
                            for(var j=0;j<imgs.length;j++){
                            var aa=imgs[j].getAttribute("aa");
                            imgs[j].src=aa;
                            }
                    }
                    if(obj_a.scrollTop>=floor[0].offsetTop-bh+150){
                            if (flag) {
                                flag=false;
                                animate(box_lt,{opacity:1},300,function(){
                                    flag1=true;
                            })  
                            }
                    }else{
                            if(flag1){
                                flag1=false;
                                animate(box_lt,{opacity:0},300,function(){
                                flag=true;
                            })
                        }
                     }
                    
     


     }
        
}
box_per.onmouseover=function(){
   
}
    




   // 十楼第一个轮播

   var f11_bbox=$(".floor11_line2_top")[0];
    var f11_ll=$(".f11_lun");
    var f11_d=$(".f11_d_per");
    var f11_left=$(".f11_lt1")[0];
    var f11_right=$(".f11_rt1")[0];
    var yao=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a=parseInt(getStyle(f11_bbox,"width"));           //获取图片的宽度
    var B=setInterval(moveyjf,2000)
    function moveyjf(){
        zyb=yao+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb>=f11_ll.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb=0;
        }
    for(var i=0;i<f11_ll.length;i++){            //循环将点的颜色全部设置为灰色
        f11_d[i].style.background="#ccc";
        }
        f11_d[zyb].style.background="#C81623";
        f11_ll[zyb].style.left=width11_a+"px";            //保证当前图片的下一张始终在box的右边
        animate(f11_ll[yao],{left:-width11_a},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f11_ll[zyb],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yao=zyb;
    }
  function moveyjf1(){
        zyb=yao-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb=f11_ll.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f11_ll.length;i++){            //循环将点的颜色全部设置为灰色
            f11_d[i].style.background="#ccc";
        }
        f11_d[zyb].style.background="#C81623";
        f11_ll[zyb].style.left=width11_a+"px";            //保证当前图片的下一张始终在box的右边
        animate(f11_ll[yao],{left:-width11_a},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f11_ll[zyb],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yao=zyb;
    }
f11_bbox.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(B);
}
f11_bbox.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    B=setInterval(moveyjf,2000)
}
f11_left.onclick=function(){              // 向左
    moveyjf1();
}
f11_right.onclick=function(){               //向右
    moveyjf();
}

// 分三种情况 1.点击当前点 出现当前图片   2.点击2然后点1  3.点击2然后点3
for(var i=0;i<f11_ll.length;i++){
    f11_d[i].index=i;          //给每个点做标识
    f11_d[i].onmouseover=function(){    //添加点击事件

           if(this.index==yao){                             //第一种情况
            return;
           }
           else if(this.index>yao){                        //第二种情况
              for(var i=0;i<f11_ll.length;i++){                      //先把所有的点颜色默认
                f11_d[i].style.background="#ccc";                 
              }                                           
              f11_d[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f11_ll[this.index].style.left=width11_a+"px";               
              animate(f11_ll[yao],{left:-width11_a},300);                           //当前图片向左移
              animate(f11_ll[this.index],{left:0},300);                  //点击的图片放到box里
              yao=this.index;
           }else if(this.index<yao){                     //方向从右到左
                for(var i=0;i<f11_ll.length;i++){
             f11_d[i].style.background="#ccc";
              }
              f11_d[this.index].style.background="#B61B1F";
              f11_ll[this.index].style.left=-width11_a+"px";      
                    animate(f11_ll[yao],{left:width11_a},300);   
                    animate(f11_ll[this.index],{left:0},300);
                    yao=this.index;
              }
    }
}



   // 2
   var f11_bbox2=$(".floor11_line2_top")[1];
    var f11_ll2=$(".f11_lun2");
    var f11_d2=$(".f11_d_per2");
    var f11_left2=$(".f11_lt2")[0];
    var f11_right2=$(".f11_rt2")[0];
    var yao2=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a2=parseInt(getStyle(f11_bbox2,"width"));           //获取图片的宽度
    var B2=setInterval(moveyjf2,2000)
    function moveyjf2(){
        zyb2=yao2+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb2>=f11_ll2.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb2=0;
        }
    for(var i=0;i<f11_ll2.length;i++){            //循环将点的颜色全部设置为灰色
        f11_d2[i].style.background="#ccc";
        }
        f11_d2[zyb2].style.background="#C81623";
        f11_ll2[zyb2].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f11_ll2[yao2],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f11_ll2[zyb2],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yao2=zyb2;
    }
  function moveyjf21(){
        zyb2=yao2-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb2<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb2=f11_ll2.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f11_ll2.length;i++){            //循环将点的颜色全部设置为灰色
            f11_d2[i].style.background="#ccc";
        }
        f11_d2[zyb2].style.background="#C81623";
        f11_ll2[zyb2].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f11_ll2[yao2],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f11_ll2[zyb2],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yao2=zyb2;
    }
f11_bbox2.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(B2);
}
f11_bbox2.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    B2=setInterval(moveyjf2,2000)
}
f11_left2.onclick=function(){              // 向左
    moveyjf21();
}
f11_right2.onclick=function(){               //向右
    moveyjf2();
}

// 分三种情况 1.点击当前点 出现当前图片   2.点击2然后点1  3.点击2然后点3
for(var i=0;i<f11_ll2.length;i++){
    f11_d2[i].index=i;          //给每个点做标识
    f11_d2[i].onmouseover=function(){    //添加点击事件

           if(this.index==yao2){                             //第一种情况
            return;
           }
           else if(this.index>yao2){                        //第二种情况
              for(var i=0;i<f11_ll2.length;i++){                      //先把所有的点颜色默认
                f11_d2[i].style.background="#ccc";                 
              }                                           
              f11_d2[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f11_ll2[this.index].style.left=width11_a2+"px";               
              animate(f11_ll2[yao2],{left:-width11_a2},300);                           //当前图片向左移
              animate(f11_ll2[this.index],{left:0},300);                  //点击的图片放到box里
              yao2=this.index;
           }else if(this.index<yao2){                     //方向从右到左
                for(var i=0;i<f11_ll2.length;i++){
             f11_d2[i].style.background="#ccc";
              }
              f11_d2[this.index].style.background="#B61B1F";
              f11_ll2[this.index].style.left=-width11_a2+"px";      
                    animate(f11_ll2[yao2],{left:width11_a2},300);   
                    animate(f11_ll2[this.index],{left:0},300);
                    yao2=this.index;
              }
    }
}


   // 10
   // 2
    var f10_box=$(".floor10_line3_top")[0];
    var f10_ll=$(".f10_lun");
    var f10_d=$(".f10_d_per");
    var f10_left=$(".f10_lt1")[0];
    var f10_right=$(".f10_rt1")[0];
    var yaoo=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a2=parseInt(getStyle(f10_box,"width"));           //获取图片的宽度
    var B3=setInterval(movingy,2000)
    function movingy(){
        zyb22=yaoo+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb22>=f10_ll.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb22=0;
        }
    for(var i=0;i<f10_ll.length;i++){            //循环将点的颜色全部设置为灰色
        f10_d[i].style.background="#ccc";
        }
        f10_d[zyb22].style.background="#C81623";
        f10_ll[zyb22].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f10_ll[yaoo],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f10_ll[zyb22],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yaoo=zyb22;
    }
  function movingy1(){
        zyb22=yaoo-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(zyb22<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            zyb22=f10_ll.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f10_ll.length;i++){            //循环将点的颜色全部设置为灰色
            f10_d[i].style.background="#ccc";
        }
        f10_d[zyb22].style.background="#C81623";
        f10_ll[zyb22].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f10_ll[yaoo],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f10_ll[zyb22],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        yaoo=zyb22;
    }
f10_box.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(B3);
}
f10_box.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    B3=setInterval(movingy,2000)
}
f10_left.onclick=function(){              // 向左
    movingy1();
}
f10_right.onclick=function(){               //向右
    movingy();
}
for(var i=0;i<f10_ll.length;i++){
    f10_d[i].index=i;          //给每个点做标识
    f10_d[i].onmouseover=function(){    //添加点击事件

           if(this.index==yaoo){                             //第一种情况
            return;
           }
           else if(this.index>yaoo){                        //第二种情况
              for(var i=0;i<f10_ll.length;i++){                      //先把所有的点颜色默认
                f10_d[i].style.background="#ccc";                 
              }                                           
              f10_d[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f10_ll[this.index].style.left=width11_a2+"px";               
              animate(f10_ll[yaoo],{left:-width11_a2},300);                           //当前图片向左移
              animate(f10_ll[this.index],{left:0},300);                  //点击的图片放到box里
              yaoo=this.index;
           }else if(this.index<yaoo){                     //方向从右到左
                for(var i=0;i<f10_ll.length;i++){
             f10_d[i].style.background="#ccc";
              }
              f10_d[this.index].style.background="#B61B1F";
              f10_ll[this.index].style.left=-width11_a2+"px";      
                    animate(f10_ll[yaoo],{left:width11_a2},300);   
                    animate(f10_ll[this.index],{left:0},300);
                    yaoo=this.index;
              }
    }
}



    var f3_box=$(".floor_3_banner")[0];
    var f3_ll=$(".f3_lun");
    var f3_d=$(".f3_d_per");
    var f3_left=$(".f3_lt1")[0];
    var f3_right=$(".f3_rt1")[0];
    var ling=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a2=parseInt(getStyle(f3_box,"width"));           //获取图片的宽度
    var Bx=setInterval(movingyi,2000)
    function movingyi(){
        wen=ling+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wen>=f3_ll.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wen=0;
        }
    for(var i=0;i<f3_ll.length;i++){            //循环将点的颜色全部设置为灰色
        f3_d[i].style.background="#ccc";
        }
        f3_d[wen].style.background="#C81623";
        f3_ll[wen].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f3_ll[ling],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f3_ll[wen],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        ling=wen;
    }
  function movingyi1(){
        wen=ling-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wen<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wen=f3_ll.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f3_ll.length;i++){            //循环将点的颜色全部设置为灰色
            f3_d[i].style.background="#ccc";
        }
        f3_d[wen].style.background="#C81623";
        f3_ll[wen].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f3_ll[ling],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f3_ll[wen],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        ling=wen;
    }
f3_box.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(Bx);
}
f3_box.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    Bx=setInterval(movingyi,2000)
}
f3_left.onclick=function(){              // 向左
    movingyi1();
}
f3_right.onclick=function(){               //向右
    movingyi();
}
for(var i=0;i<f3_ll.length;i++){
    f3_d[i].index=i;          //给每个点做标识
    f3_d[i].onmouseover=function(){    //添加点击事件

           if(this.index==ling){                             //第一种情况
            return;
           }
           else if(this.index>ling){                        //第二种情况
              for(var i=0;i<f3_ll.length;i++){                      //先把所有的点颜色默认
                f3_d[i].style.background="#ccc";                 
              }                                           
              f3_d[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f3_ll[this.index].style.left=width11_a2+"px";               
              animate(f3_ll[ling],{left:-width11_a2},300);                           //当前图片向左移
              animate(f3_ll[this.index],{left:0},300);                  //点击的图片放到box里
              ling=this.index;
           }else if(this.index<ling){                     //方向从右到左
                for(var i=0;i<f3_ll.length;i++){
             f3_d[i].style.background="#ccc";
              }
              f3_d[this.index].style.background="#B61B1F";
              f3_ll[this.index].style.left=-width11_a2+"px";      
                    animate(f3_ll[ling],{left:width11_a2},300);   
                    animate(f3_ll[this.index],{left:0},300);
                    ling=this.index;
              }
    }
}



    var f4_box=$(".floor_4_banner")[0];
    var f4_ll=$(".f4_lun");
    var f4_d=$(".f4_d_per");
    var f4_left=$(".f4_lt1")[0];
    var f4_right=$(".f4_rt1")[0];
    var lin=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a2=parseInt(getStyle(f4_box,"width"));           //获取图片的宽度
    var be=setInterval(movingxc,2000)
    function movingxc(){
        wens=lin+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wens>=f4_ll.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wens=0;
        }
    for(var i=0;i<f4_ll.length;i++){            //循环将点的颜色全部设置为灰色
        f4_d[i].style.background="#ccc";
        }
        f4_d[wens].style.background="#C81623";
        f4_ll[wens].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f4_ll[lin],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f4_ll[wens],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        lin=wens;
    }
  function movingxc1(){
        wens=lin-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wens<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wens=f4_ll.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f4_ll.length;i++){            //循环将点的颜色全部设置为灰色
            f4_d[i].style.background="#ccc";
        }
        f4_d[wens].style.background="#C81623";
        f4_ll[wens].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f4_ll[lin],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f4_ll[wens],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        lin=wens;
    }
f4_box.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(be);
}
f4_box.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    be=setInterval(movingxc,2000)
}
f4_left.onclick=function(){              // 向左
    movingxc1();
}
f4_right.onclick=function(){               //向右
    movingxc();
}
for(var i=0;i<f4_ll.length;i++){
    f4_d[i].index=i;          //给每个点做标识
    f4_d[i].onmouseover=function(){    //添加点击事件

           if(this.index==lin){                             //第一种情况
            return;
           }
           else if(this.index>lin){                        //第二种情况
              for(var i=0;i<f4_ll.length;i++){                      //先把所有的点颜色默认
                f4_d[i].style.background="#ccc";                 
              }                                           
              f4_d[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f4_ll[this.index].style.left=width11_a2+"px";               
              animate(f4_ll[lin],{left:-width11_a2},300);                           //当前图片向左移
              animate(f4_ll[this.index],{left:0},300);                  //点击的图片放到box里
              lin=this.index;
           }else if(this.index<lin){                     //方向从右到左
                for(var i=0;i<f4_ll.length;i++){
             f4_d[i].style.background="#ccc";
              }
              f4_d[this.index].style.background="#B61B1F";
              f4_ll[this.index].style.left=-width11_a2+"px";      
                    animate(f4_ll[lin],{left:width11_a2},300);   
                    animate(f4_ll[this.index],{left:0},300);
                    lin=this.index;
              }
    }
}




var f5_box=$(".floor_5_banner")[0];
    var f5_ll=$(".f5_lun");
    var f5_d=$(".f5_d_per");
    var f5_left=$(".f5_lt1")[0];
    var f5_right=$(".f5_rt1")[0];
    var linc=0;                          //将当前图片的初始值设为n
    // var next=0;                         //当前图片的下一张
    var width11_a2=parseInt(getStyle(f5_box,"width"));           //获取图片的宽度
    var bec=setInterval(movingdr,2000)
    function movingdr(){
        wenc=linc+1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wenc>=f5_ll.length){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wenc=0;
        }
    for(var i=0;i<f5_ll.length;i++){            //循环将点的颜色全部设置为灰色
        f5_d[i].style.background="#ccc";
        }
        f5_d[wenc].style.background="#C81623";
        f5_ll[wenc].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f5_ll[linc],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f5_ll[wenc],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        linc=wenc;
    }
  function movingdr1(){
        wenc=linc-1;                          //当前图片的下一张等于当前图片加1  相当于n++
        if(wenc<0){        //如果下个f11的下标大于等于图片的个数时让它又从头开始运行动画
            wenc=f5_ll.length-1;     //将最后一个又拉到最前面
        }
    for(var i=0;i<f5_ll.length;i++){            //循环将点的颜色全部设置为灰色
            f5_d[i].style.background="#ccc";
        }
        f5_d[wenc].style.background="#C81623";
        f5_ll[wenc].style.left=width11_a2+"px";            //保证当前图片的下一张始终在box的右边
        animate(f5_ll[linc],{left:-width11_a2},300);    //动画效果  500毫秒内运行动画 将当前图片向左移一个图片的宽度
        animate(f5_ll[wenc],{left:0},300);      //动画效果  500毫秒内运行动画 将下一张图片移到当前图片的box里  也就是当前图片的位置
        linc=wenc;
    }
f5_box.onmouseover=function(){            //鼠标移入时清除时间函数  停止运行
    clearInterval(bec);
}
f5_box.onmouseout=function(){             //鼠标移出时 又将时间函数直接赋值给t  让动画继续运行
    bec=setInterval(movingdr,2000)
}
f5_left.onclick=function(){              // 向左
    movingdr1();
}
f5_right.onclick=function(){               //向右
    movingdr();
}
for(var i=0;i<f5_ll.length;i++){
    f5_d[i].index=i;          //给每个点做标识
    f5_d[i].onmouseover=function(){    //添加点击事件

           if(this.index==linc){                             //第一种情况
            return;
           }
           else if(this.index>linc){                        //第二种情况
              for(var i=0;i<f5_ll.length;i++){                      //先把所有的点颜色默认
                f5_d[i].style.background="#ccc";                 
              }                                           
              f5_d[this.index].style.background="#B61B1F";      //把当前点的颜色改变
              f5_ll[this.index].style.left=width11_a2+"px";               
              animate(f5_ll[linc],{left:-width11_a2},300);                           //当前图片向左移
              animate(f5_ll[this.index],{left:0},300);                  //点击的图片放到box里
              linc=this.index;
           }else if(this.index<linc){                     //方向从右到左
                for(var i=0;i<f5_ll.length;i++){
             f5_d[i].style.background="#ccc";
              }
              f5_d[this.index].style.background="#B61B1F";
              f5_ll[this.index].style.left=-width11_a2+"px";      
                    animate(f5_ll[linc],{left:width11_a2},300);   
                    animate(f5_ll[this.index],{left:0},300);
                    linc=this.index;
              }
    }
}


// 右边固定定位
var ft_zt=$(".ft_zt");
var hr1=$(".hr1");
for(var i=0;i<ft_zt.length;i++){
    ft_zt[i].index=i;
     hr1[i].style.display="none";
    ft_zt[i].onmouseover=function(){
          hr1[this.index].style.display="block";
    }
    ft_zt[i].onmouseout=function(){
          hr1[this.index].style.display="none";
    }
}



// banner左边
var banner_left_per=document.querySelectorAll('.banner_left_per');
var  hi2=document.querySelectorAll('.hi2');
for(var i=0;i<banner_left_per.length;i++){
    banner_left_per[i].index=i;
    banner_left_per[i].onmouseover=function(){
        for(var j=0;j<hi2.length;j++){
            hi2[j].style.display="none";
        }
        hi2[this.index].style.display="block";
    }
    banner_left_per[i].onmouseout=function(){
        hi2[this.index].style.display="none";
    }
}

var inp=$(".form_input")[0];
inp.onfocus=function(){
    inp.value="";
}
inp.onblur=function(){
    inp.value="闪购";
}


})