//找到url中匹配的字符串
function findInUrl(str){
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}

//产生指定范围的随机数
function randomNumb(minNumb,maxNumb){
	var rn=Math.round(Math.random()*(maxNumb-minNumb)+minNumb);
	return rn;
	}
	
var wHeight;
$(document).ready(function(){
	wHeight=$(window).height();
	if(wHeight<832){
		wHeight=832;
		}
	var bili=wHeight/1039;
	$('.outDiv').height(wHeight);
	$('.logo').css('-webkit-transform','scale('+bili+')');
	$('.page').css('-webkit-transform',"translate(0px,"+(-(1039-(1039*bili))/2)+"px) scale("+bili+")");
	$('.page2').css('margin-top',-(1039-wHeight)/2+'px');
	});