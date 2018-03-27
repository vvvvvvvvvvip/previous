// 取类名
function getClass(classname,obj){     
	                    // 先构建函数 两个形参 obj默认值是document
     var obj=obj||document;
                          // 用或来定义obj 当传入obj的时候，obj等于传入的参数，当obj不传入参数的时候 是undefined obj仍然等于document
     if(obj.getElementsByClassName){
     	                                      // 检测IE6里面有没有这个属性
             return obj.getElementsByClassName(classname);
     }else{
             var arr=[]; 
                          // 定义一个空数组往里面传参
                           // 先通过标签名找出页面中所有的元素
              var alls=document.getElementsByTagName("*");
    
       for(var i=0;i<alls.length;i++){
           alls[i].className;
	       	if(checkclass(alls[i].className,classname)){  //如果元素的类名与需要找到classname值相等的时候，将它传到空数组里面
	            arr.push(alls[i]);       	
	       }
	     }
       return arr;//输出所有元素的类名
      }
}
function checkclass(search,match){
      var brr=search.split(" ");   //将类名以空格分割成
      for(var i=0;i<brr.length;i++){   //循环将分割成的类名和match比较
           if(brr[i]==match){          //若类名与match相等的时候返回true将这个标签传给arr
           	return true;
           } 
      }
      return false;       
}



// 在浏览器中获取或设置内容的函数     现代浏览器中用textconcent获取  ie6里面用innertext
function getInner(obj,value){
  if(obj.textContent){            //先判断有没有textcontent，如果有，证明是现代浏览器
    if(value==undefined){           //再判断有没有设置内容 
      return obj.textContent;             //如果没有设置，直接返回内容
    }else{                                 
      obj.textContent=value;                  //如果设置，将设置的值赋值给内容
    }
    
  }else{                             // 没有textcontent，则是ie6浏览器 
    if(value==undefined){                //ie浏览器要获取内容用innerText
      return obj.innerText;               //value=undefined 说明value没有被赋值
    }else{
      obj.innerText=value;
    }
    
  }

}




//IE getStyle
function getStyle(obj,style){              //先判断有没有currentsty这个属性
  if(obj.currentStyle){                 //currentStyle  IE
    return obj.currentStyle[style];           
  }else{
    return getComputedStyle(obj,null)[style];    //现代 getComputedStyle(obj,null)[style]
  }
}



// $函数
function $(search,obj){
  var obj=obj||document;         //当不传入obj的值的时候，用或使他的默认值设为document
  if(typeof(search)=="string"){
     if(search.charAt(0)=="#"){          //charAT(x)是取下标为x对应的字符
    return document.getElementById(search.substr(1));             //当这个名字的开始第一个字符为#时 id名
  }if(search.charAt(0)=="."){           //当这个名字的开始第一个字符为.时 类名
    return getClass(search.substr(1));
  }else{
    return obj.getElementsByTagName(search);   //其余是以标签名查找
  } 
  }else if(typeof(search)=="function"){
    window.onload=function(){
           search();
    }
  }
}



 // getChilds函数
 // 通过父节点获取子节点  type是要获取的节点类型    当传参的时候 type是传入的那个类型
 // 当不传参的时候默认是元素节点  a:获取所有的元素节点  b:获取所有的元素节点和文本节点并且不要
 // 文本节点里面的空格
 function getChilds(obj,type){       
       var type=type||"a";                            //type默认为a
       var all=obj.childNodes;                        //获取所有的子节点
       var arr=[];                                    //定义一个空数组
       for(var i=0;i<all.length;i++){                 // 循环取得的节点
       if(type=="a"){                           //当type值为a的时候要获取的是元素节点
           if(all[i].nodeType==1){          //元素节点的nodetype值为1;
                 arr.push(all[i]);          //所以当nodetype值为1 的时候将arr[i]加到arr数组里
           }
       }else if(type=="b"){             //如果type值为b的时候  要获取的是元素节点和没有空格的文字节点
         if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
                                     
         }if(all[i].nodeType==3){                          
             all[i].nodeValue=all[i].nodeValue.replace(/^\s*|\*$/g,"");     //删除空格             
         }
       }arr.push(all[i]);
}
      return arr;
}



// 获取第一个子节点
 function getFirst(obj){
     return obj.getChilds(obj)[0];
 }

 // 获取最后一个子节点
 function getLast(obj){
      var nub=getChilds(obj)
      return  nub[nub.length-1];
}


// 获得下一个兄弟节点  对象.nextSibling 获得下一个兄弟节点的引用
function getNext(obj,type){
    var type=type||"a";
    var next=obj.nextSibling;
    if(type=="a"){
          while(next.nodeType==3||next.nodeType==8){
              next=next.nextSibling     //将下一个节点赋值给next
              if(next==null){
              return false;
              }
          }
    }else if(type=="b"){
            while((next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
                    next=next.nextSibling     //将下一个节点赋值给next
                    if(next==null){ 
                    return false;
                    }
            }
    }
    
    return next;
}


// 获得上一个兄弟节点         对象.previousSibling 获得上一个兄弟节点的引用
function getPrevious(obj){
    var previous=obj.previousSibling;
    if(previous==null){
       return false;
    }
    while(previous.nodeType==3||previous.nodeType==8){
       previous=previous.previousSibling;     //将下一个节点赋值给next
       if(previous==null){
           return false;
       }
    }
    return previous;
}


// 追加到页面当中父对象.insertBefore(要插入的对象,之前的对象) 插入到某
// 个对象之前
function insertBefore(obj,before){
     var parent = before.parentNode;
     parent.insertBefore(obj,before);
}


// 插入到某个对象之后  即某个对象的后一个的前一个
function insertAfter(obj,after){
     var next = getNext(obj,"b");
     var parent=after.parentNode;
     if(next){       //真
      insertBefore(obj,next);
     }else{
      parent.appendChild(obj);  //没有下一个兄弟节点；直接添加在父节点下
     }

}

//添加事件
function  addEvent(obj,event,aa){
  if(obj.addEventListener){
   return obj.addEventListener(event,aa,false) 
  }else{
   return obj.attachEvent("on"+event,aa) 
  }
}

//删除事件
function  removeEvent(obj,event,aa){
  if(obj.removeEventListener){
   return obj.removeEventListener(event,aa,false) 
  }else{
   return obj.detachEvent("on"+event,aa) 
  }
}


//鼠标滚轮
 function mouseWheel(obj,funup,fundown){
   if(obj.attachEvent){                 //如果有attachevent的时候说明是ie浏览器
        obj.attachEvent("onmousewheel",scroll);    
   }
   else if(obj.addEventListener){          //如果有addeventListener说明是现代浏览器
        obj.addEventListener("DOMMouseScroll",scroll,false);  //火狐浏览器 添加事件
        obj.addEventListener("mousewheel",scroll,false);    //谷歌浏览器
   }
   function scroll(e){
     var ev=e||window.event;
     var d=ev.wheelDelta||ev.detail;
    if(d==-120||d==3){                  //如果值为-120或者为3的时候 说明滚轮向下滚
        if(fundown){
          fundown();
        }
    }else if (d==120||d==-3) {        //如果值为120或者为-3的时候 说明滚轮向上滚
        if(funup){
          funup();
        }
    }
   }
 }