/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-28 21:20:17
 * @version $Id$
 */
function gspan(cobj){               //获取下一个span 通过这个对象给状态
	while(true){
		if(cobj.nextSibling.nodeName!="SPAN")
          cobj=cobj.nextSibling;
        else
      	   return cobj.nextSibling;
	}
}
function check(obj,info,fun,click){              //通用的检查方法 obj用来检查的对象info用来检查的提示信息
	var sp=gspan(obj);                           //fun用来检查值，click分清楚点击提交还是失去焦点
    obj.onfocus=function(){
		sp.innerHTML=info;
		sp.className="stats2";
	}
	obj.onblur=function(){
		if(fun(this.value)){
			sp.innerHTML="输入正确";
			sp.className="stats4";
		}else{
			sp.innerHTML=info;
			sp.className="stats3";
		}
	}
	if(click=="click")
		obj.onblur();
}
onload=regs    //页面加载完自动调用
function regs(click){  //函数可以使用onsubmit调用，也可以使用onload调用
	var stat=true;
	var username=document.getElementsByName("username")[0];
	var password=document.getElementsByName("password")[0];
	var repass=document.getElementsByName("repass")[0];
	var email=document.getElementsByName("email")[0];
	check(username,"用户名的长度要在3-20之间",function(val){
		if(val.match(/^\S+$/) && val.length>=3 && val.length<=20){
			return true;
		}else{
			stat=false;
			return false;
		}
	},click);
	check(password,"密码必须在6-20位之间",function(val){
		if(val.match(/^\S+$/) && val.length>=6 && val.length<=20){
			return true;
		}else{
			stat=false;
			return false;
		}
	},click);
	check(repass,"确认两次输入密码相同",function(val){
		if(val.match(/^\S+$/) && val.length>=6 && val.length<=20 && val==password.value){
			return true;
		}else{
			stat=false;
			return false;
		}
	},click);
	check(email,"请输入正确格式的邮箱",function(val){
        if(val.match(/\w+@\w+\.\w/)){
        	return true;
        }else{
        	stat=false;
    	    return false;
        }
	},click);
	return stat;
}
