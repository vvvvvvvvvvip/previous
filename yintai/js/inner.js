	function getInner(obj,value){
		// 判断是否有该方法
     if(obj.textContent){
     	// 判断value是否赋值
         if(value==undefined){
         	// 如果没有赋值获取内容
            return obj.textContent;
         }else{
         	// 如果赋值显示输入内容
         	 obj.textContent=value;
         }
     }else{
     	// IE浏览器
           if(value==undefined){
           	return obj.innerText;
           }else{
         	 obj.innerText=value;
         }
     }
}





function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return getComputedStyle(obj,null)[style];
	}

}




function $(search,obj){
	var obj=obj||document;
	// 如果要寻找的第一个字符是#，通过Id获取
	// 判断第一个字符
  if(typeof(search)=="string"){
    if(search.charAt(0)=="#"){
    // 截取除第一个字符之外的所有
    return document.getElementById(search.substr(1));
    // 第一个字符为.则是类名
  }else if(search.charAt(0)=="."){
    // 截取除第一个字符之外的所有
        return getClass(search.substr(1),obj);
  }else{
    // 其余情况为通过标签名来获取所需元素
    return obj.getElementsByTagName(search);
     }
  }
	else if(typeof(search)=="function"){
    window.onload=function(){
      search();
    }
  }
}







// 创建函数  需要获取的类名 方法
function getClass(className,obj){
	// 方法若传入obj参数则为输入值，否则为document
     var obj=obj||document;  
     // 判断是否有获取方法      
     if(obj.getElementsByClassName){
     	// 若有则返回该方法
     	return obj.getElementsByClassName(className);
     }else{
     	// 获取所有的对象 建立空数组
     	var arr=[];
      var alls=obj.getElementsByTagName("*"); 
        // 类数组形式           
        for(var i=0;i<alls.length;i++){
        	// 判断alls中的类名是否和所需相等 
        	// 调用checkClass函数判断是否相等  
        	if(checkClass(alls[i].className,className)){
        		// 若等放入空数组当中
        		arr.push(alls[i]);
        	}
        }
        return arr;
     }
}





// 类名可能有多个，需要将类名都放入数组当中与所需类名进行逐个比较
function checkClass(search,match){
	// 将类名以空格分割成数组
       var brr=search.split(" ");
       // 进行比较
       for(var i=0;i<brr.length;i++){
       	if(brr[i]==match){
       		return true;
       	}
       }
       return false;
}




function getChilds(obj,type){
      var type=type||"a";
      var all=obj.childNodes;
      var arr=[];
      for(var i=0;i<all.length;i++){
        if(type=="a"){
             if(all[i].nodeType==1){
              arr.push(all[i]);
             }
         }else if(type=="b"){
             if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
              arr.push(all[i]);
             }
         }
      }
      return arr;
      
}

// 获取第一个子节点
function getFirst(obj){
    return getChilds(obj)[0];
}

// 获取最后一个子元素
function getLast(obj){
    return getChilds(obj)[getChilds(obj).length-1];
}


// 获取下一个兄弟元素
function getNext(obj){
  var next=obj.nextSibling;
  // 如果没有下一个兄弟返回false
   if(next==null){
    return false;
   }
   // 循环获取下一个兄弟，若下一个为文本 注释继续循环 若没有返回false
    while(next.nodeType==3||next.nodeType==8){
      next=next.nextSibling;
      if(next==null){
       return false;
       }
    }
    // 最后返回next
    return next;
   }



// 同getNext
   function getPrevious(obj){
  var previous=obj.previousSibling;
  // 如果没有上一个兄弟返回false
   if(previous==null){
    return false;
   }    
    while(previous.nodeType==3||previous.nodeType==8){
      previous=previous.previousSibling;
      if(previous==null){
       return false;
       }
    }
    return previous;
   }



function insertBefore(obj,before){
  var parent=before.parentNode;
  parent.insertBefore(obj,before);
}


function insertAfter(obj,after){
  var next=getNext(after,"b");
  var parent=after.parentNode; 
  if(next){
    insertBefore(obj,next);
  } 
  else{
    parent.appendChild(obj);
  }
}


// 添加事件
function addEvent(type,event,obj){
  if(obj.addEventListener){
    return obj.addEventListener(type,event,false);
  }else{
    return obj.attachEvent("on"+type,event);
  }
}

// 删除事件
function delEvent(type,event,obj){
  if(obj.removeEventListener){
    return obj.removeEventListener(type,event,false);
  }else{
    return obj.detachEvent("on"+type,event);
  }
}




function scrollTop(){
  if(document.body){
    return document.body.scrollTop;
  }else{
    return document.documentElement.scrollTop;
  }
}