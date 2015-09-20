//找到url中匹配的字符串
function findInUrl(str){
	url = location.href;
	return url.indexOf(str) == -1 ? false : true;
}
//获取url参数
function queryString(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}

function showPop(obj){
	$('.popBg').show();
	$('.pop').hide();
	$('.pop'+obj).show();
	}

function closePop(){
	$('.popBg').hide();
	$('.pop').hide();
	}

//提交step1表单
function submitInfo(){
	var s1Name=$.trim($('.infoTxt1').val());
	var s1Job=$.trim($('.infoTxt2').val());
	var s1Destination=$.trim($('.infoTxt3').val());
	var s1Mail=$.trim($('.infoTxt4').val());
	var s1Wish=$.trim($('.infoTxtArea').val());
	var mailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(s1Name==''){
		alert('请输入姓名');
		return;
		}
		else if(s1Job==''){
			alert('请输入职业');
			return;
			}
			else if(s1Destination==''){
				alert('请输入我想去的地方');
				return;
				}
				else if(s1Mail==''||!mailReg.test(s1Mail)){
					alert('请输入正确的邮箱地址');
					return;
					}
					else if(s1Wish==''){
						alert('请输入旅行宣言');
						return;
						}
						else if(s1Wish.length>20){
							alert('旅行宣言最多20个字');
							return;
							}
							else if(!isSelectedImg){
								alert('请选择照片');
								return;
								}
								else{
									alert("posX:"+posX+" posY:"+posY+" scale:"+scale);
									showPop('Loading');//loading浮层
									//提交表单后跳转到结果页面
									}
	}
	
//首页like
function voteIndex(er){
	var aIndex=$('.indexSel').index($(er).parents('.indexSel'));
	var votes=parseInt($(er).find('span').text());
	
	//提交成功+1
	votes++;
	$(er).find('span').html(votes);
	alert("索引值："+aIndex);
	}
	
//单个like
function voteSingle(er){
	var url = $(er).attr('data-url');
	$.getJSON(url,function(json){
		if(json.ret == 0){
			$(er).find('span').html(json.likeCount);
			if(json.method == "cancel"){
				$(er).find('img').eq(1).hide();
				$(er).find('img').eq(0).show();
			}
			else{
				$(er).find('img').eq(0).hide();
				$(er).find('img').eq(1).show();
			}
		}
	})
	}
	
//列表like
function voteList(er){
	var vRelId=$(er).parents('.listItem').attr('relId');
	var votes=parseInt($(er).find('span').text());
	
	//提交成功+1
	votes++;
	$(er).find('span').html(votes);
	alert('照片relId:'+vRelId);
	}
	
//获奖信息提交
function submitAwardInfo(){
	var afName=$.trim($('.awardInfoTxt1').val());
	var afTel=$.trim($('.awardInfoTxt2').val());
	var afAddress=$.trim($('.awardInfoTxt3').val());
	if(afName==''){
		alert('请输入姓名');
		return;
		}
		else if(afTel==''){
			alert('请输入联系电话');
			return;
			}
			else if(afAddress==''){
				alert('请输入联系地址');
				return;
				}
				else{
					showPop('Loading');//loading浮层
					//提交表单后跳转到结果页面
					}
	}