var baseUrl = "http://10.1.234.150:29800/chanknow/api/web";
// baseUrl = "http://10.1.234.150:29800/chanknow/api/web"
//outside接口回调数据
var outsideData1 = {
    "success": true,
    "status": 200,
    "data": {
        "id": 3,
        "username": "cityadmin",
        "mobile": "13800000000",
        "email": "cityadmin@xx.com",
        "fullname": "地市主管",
        "outside_user_id": "104",
        "outside_role_names": "县区公司经理|省级（或省级社会）渠道三级经理 （渠道运营中心）|滨海职能渠道主管 （渠道职能中心）|滨海职能渠道二级领导 （渠道职能中心）|地市渠道中心主任|省社会渠道终端主管|县区业务部渠道管理员|巡店管理员|评星省级管理员|地市渠道中心主管|渠道经理|滨海职能渠道三级经理 （渠道职能中心）|省渠道中心主管|省级（或省级社会）渠道二级领导（渠道运营中心）|评星市级管理员|地市渠道中心副主任|地市分公司副总|县区公司副经理|系统管理员|公司管理员|本公司管理员|部门管理员|本部门管理员|普通用户|公告审核员|县区业务部主任",
        "outside_role_ennames": "county_chnl_2_mgr|province_chnl_3_mgr|county_func_mgr|county_func_2_mgr|city_chnl_3_mgr|province_chnl_dev_mgr|county_chnl_mgr|patroladmin|provincestaradmin|city_chnl_mgr|chlmanager|county_func_3_mgr|province_chnl_mgr|province_chnl_2_mgr|citystaradmin|city_chnl_3_vice_mgr|city_chnl_2_mgr|county_chnl_2_vice_mgr|dept|hr|a|b|c|user|NotifyManager|county_chnl_3_mgr",
        "outside_role_types": "busi_reg_county_code|busi_reg_province_code|busi_reg_county_code|busi_reg_county_code|busi_reg_city_code|busi_reg_province_code|busi_reg_county_code|assignment|busi_reg_province_code|busi_reg_city_code|busi_reg_province_code|busi_reg_county_code|busi_reg_province_code|busi_reg_province_code|busi_reg_city_code|busi_reg_city_code|busi_reg_city_code|busi_reg_county_code|busi_reg_city_code|busi_reg_province_code|assignment|busi_reg_province_code|assignment|busi_reg_province_code|busi_reg_city_code|busi_reg_county_code",
        "outside_role_data": "[{\"id\":\"711\",\"officeId\":null,\"name\":\"\\u53bf\\u533a\\u516c\\u53f8\\u7ecf\\u7406\",\"enname\":\"county_chnl_2_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487962000,\"updateBy\":\"1\",\"updateDate\":1498048135000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"712\",\"officeId\":null,\"name\":\"\\u7701\\u7ea7\\uff08\\u6216\\u7701\\u7ea7\\u793e\\u4f1a\\uff09\\u6e20\\u9053\\u4e09\\u7ea7\\u7ecf\\u7406 \\uff08\\u6e20\\u9053\\u8fd0\\u8425\\u4e2d\\u5fc3\\uff09\",\"enname\":\"province_chnl_3_mgr\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494488022000,\"updateBy\":\"1\",\"updateDate\":1494926552000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"709\",\"officeId\":null,\"name\":\"\\u6ee8\\u6d77\\u804c\\u80fd\\u6e20\\u9053\\u4e3b\\u7ba1 \\uff08\\u6e20\\u9053\\u804c\\u80fd\\u4e2d\\u5fc3\\uff09\",\"enname\":\"county_func_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487734000,\"updateBy\":\"1\",\"updateDate\":1495003420000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"710\",\"officeId\":null,\"name\":\"\\u6ee8\\u6d77\\u804c\\u80fd\\u6e20\\u9053\\u4e8c\\u7ea7\\u9886\\u5bfc \\uff08\\u6e20\\u9053\\u804c\\u80fd\\u4e2d\\u5fc3\\uff09\",\"enname\":\"county_func_2_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487807000,\"updateBy\":\"1\",\"updateDate\":1495010542000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1309\",\"officeId\":null,\"name\":\"\\u5730\\u5e02\\u6e20\\u9053\\u4e2d\\u5fc3\\u4e3b\\u4efb\",\"enname\":\"city_chnl_3_mgr\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498046346000,\"updateBy\":\"1\",\"updateDate\":1498046346000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1412\",\"officeId\":null,\"name\":\"\\u7701\\u793e\\u4f1a\\u6e20\\u9053\\u7ec8\\u7aef\\u4e3b\\u7ba1\",\"enname\":\"province_chnl_dev_mgr\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498048560000,\"updateBy\":\"1\",\"updateDate\":1498048560000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1413\",\"officeId\":null,\"name\":\"\\u53bf\\u533a\\u4e1a\\u52a1\\u90e8\\u6e20\\u9053\\u7ba1\\u7406\\u5458\",\"enname\":\"county_chnl_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498048951000,\"updateBy\":\"104\",\"updateDate\":1498290543000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"509\",\"officeId\":null,\"name\":\"\\u5de1\\u5e97\\u7ba1\\u7406\\u5458\",\"enname\":\"patroladmin\",\"roleType\":\"assignment\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1492139314000,\"updateBy\":\"1\",\"updateDate\":1492141503000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1210\",\"officeId\":null,\"name\":\"\\u8bc4\\u661f\\u7701\\u7ea7\\u7ba1\\u7406\\u5458\",\"enname\":\"provincestaradmin\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1495351343000,\"updateBy\":\"1\",\"updateDate\":1495351343000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"309\",\"officeId\":null,\"name\":\"\\u5730\\u5e02\\u6e20\\u9053\\u4e2d\\u5fc3\\u4e3b\\u7ba1\",\"enname\":\"city_chnl_mgr\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1490271882000,\"updateBy\":\"104\",\"updateDate\":1498290628000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"310\",\"officeId\":null,\"name\":\"\\u6e20\\u9053\\u7ecf\\u7406\",\"enname\":\"chlmanager\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1490272022000,\"updateBy\":\"1\",\"updateDate\":1497959507000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"610\",\"officeId\":null,\"name\":\"\\u6ee8\\u6d77\\u804c\\u80fd\\u6e20\\u9053\\u4e09\\u7ea7\\u7ecf\\u7406 \\uff08\\u6e20\\u9053\\u804c\\u80fd\\u4e2d\\u5fc3\\uff09\",\"enname\":\"county_func_3_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487505000,\"updateBy\":\"1\",\"updateDate\":1495010263000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"611\",\"officeId\":null,\"name\":\"\\u7701\\u6e20\\u9053\\u4e2d\\u5fc3\\u4e3b\\u7ba1\",\"enname\":\"province_chnl_mgr\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487570000,\"updateBy\":\"1\",\"updateDate\":1498048676000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"612\",\"officeId\":null,\"name\":\"\\u7701\\u7ea7\\uff08\\u6216\\u7701\\u7ea7\\u793e\\u4f1a\\uff09\\u6e20\\u9053\\u4e8c\\u7ea7\\u9886\\u5bfc\\uff08\\u6e20\\u9053\\u8fd0\\u8425\\u4e2d\\u5fc3\\uff09\",\"enname\":\"province_chnl_2_mgr\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1494487784000,\"updateBy\":\"1\",\"updateDate\":1495003350000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1209\",\"officeId\":null,\"name\":\"\\u8bc4\\u661f\\u5e02\\u7ea7\\u7ba1\\u7406\\u5458\",\"enname\":\"citystaradmin\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1495351296000,\"updateBy\":\"1\",\"updateDate\":1495683481000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1409\",\"officeId\":null,\"name\":\"\\u5730\\u5e02\\u6e20\\u9053\\u4e2d\\u5fc3\\u526f\\u4e3b\\u4efb\",\"enname\":\"city_chnl_3_vice_mgr\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498047388000,\"updateBy\":\"1\",\"updateDate\":1498047388000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1410\",\"officeId\":null,\"name\":\"\\u5730\\u5e02\\u5206\\u516c\\u53f8\\u526f\\u603b\",\"enname\":\"city_chnl_2_mgr\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498047886000,\"updateBy\":\"1\",\"updateDate\":1498047886000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1411\",\"officeId\":null,\"name\":\"\\u53bf\\u533a\\u516c\\u53f8\\u526f\\u7ecf\\u7406\",\"enname\":\"county_chnl_2_vice_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1498048206000,\"updateBy\":\"1\",\"updateDate\":1498048206000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"1\",\"officeId\":null,\"name\":\"\\u7cfb\\u7edf\\u7ba1\\u7406\\u5458\",\"enname\":\"dept\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":\"1\",\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"104\",\"updateDate\":1498290675000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"2\",\"officeId\":null,\"name\":\"\\u516c\\u53f8\\u7ba1\\u7406\\u5458\",\"enname\":\"hr\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":\"2\",\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"1\",\"updateDate\":1498132530000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"3\",\"officeId\":null,\"name\":\"\\u672c\\u516c\\u53f8\\u7ba1\\u7406\\u5458\",\"enname\":\"a\",\"roleType\":\"assignment\",\"dataScope\":\"3\",\"isSys\":\"0\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"1004\",\"updateDate\":1492156304000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"4\",\"officeId\":null,\"name\":\"\\u90e8\\u95e8\\u7ba1\\u7406\\u5458\",\"enname\":\"b\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":\"4\",\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"1\",\"updateDate\":1496225876000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"5\",\"officeId\":null,\"name\":\"\\u672c\\u90e8\\u95e8\\u7ba1\\u7406\\u5458\",\"enname\":\"c\",\"roleType\":\"assignment\",\"dataScope\":\"5\",\"isSys\":\"0\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"1004\",\"updateDate\":1492156011000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"6\",\"officeId\":null,\"name\":\"\\u666e\\u901a\\u7528\\u6237\",\"enname\":\"user\",\"roleType\":\"busi_reg_province_code\",\"dataScope\":\"8\",\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1369612800000,\"updateBy\":\"1\",\"updateDate\":1496225780000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"409\",\"officeId\":null,\"name\":\"\\u516c\\u544a\\u5ba1\\u6838\\u5458\",\"enname\":\"NotifyManager\",\"roleType\":\"busi_reg_city_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"1\",\"createDate\":1490325617000,\"updateBy\":\"1\",\"updateDate\":1498132617000,\"remarks\":null,\"delFlag\":\"0\"},{\"id\":\"609\",\"officeId\":null,\"name\":\"\\u53bf\\u533a\\u4e1a\\u52a1\\u90e8\\u4e3b\\u4efb\",\"enname\":\"county_chnl_3_mgr\",\"roleType\":\"busi_reg_county_code\",\"dataScope\":null,\"isSys\":\"1\",\"useable\":\"1\",\"createBy\":\"106\",\"createDate\":1494485123000,\"updateBy\":\"1\",\"updateDate\":1498048006000,\"remarks\":null,\"delFlag\":\"0\"}]",
        "outside_business_area_names": "青海|西宁|天津|天津",
        "outside_business_area_codes": "QHAI|0971|TJIN|0022",
        "outside_business_area_types": "busi_reg_province_code|busi_reg_city_code|busi_reg_province_code|busi_reg_city_code",
        "outside_business_area_parent_codes": "0|QHAI|0|TJIN",
        "outside_business_area_parents_codes": "0|0,QHAI|0|0,TJIN",
        "outside_business_area_data": "[{\"id\":\"QHAI\",\"parentId\":\"0\",\"name\":\"\\u9752\\u6d77\",\"sort\":null,\"code\":\"QHAI\",\"type\":\"busi_reg_province_code\",\"provinceCode\":\"QHAI\",\"parentIds\":\"0,\"},{\"id\":\"0971\",\"parentId\":\"QHAI\",\"name\":\"\\u897f\\u5b81\",\"sort\":null,\"code\":\"0971\",\"type\":\"busi_reg_city_code\",\"provinceCode\":\"QHAI\",\"parentIds\":\"0,QHAI,\"},{\"id\":\"TJIN\",\"parentId\":\"0\",\"name\":\"\\u5929\\u6d25\",\"sort\":null,\"code\":\"TJIN\",\"type\":\"busi_reg_province_code\",\"provinceCode\":\"TJIN\",\"parentIds\":\"0,\"},{\"id\":\"0022\",\"parentId\":\"TJIN\",\"name\":\"\\u5929\\u6d25\",\"sort\":null,\"code\":\"0022\",\"type\":\"busi_reg_city_code\",\"provinceCode\":\"TJIN\",\"parentIds\":\"0,TJIN,\"}]",
        "head_img": "",
        "login_ip": null,
        "login_at": null,
        "status": 10,
        "created_at": 1498361959,
        "updated_at": 1498363321,
        "head_img_url": null,
        "access_token": "sprdez04XjKn_PuxnwMUMZYFz5b_uIfs"
    }
}

var outsideData = JSON.parse(JSON.stringify(outsideData1))
//判断用户id，拿取用户数据
function getUserInfo(name,id){
	if(id || name){
		if(localStorage.userId != id){
			$.ajax({
				url: baseUrl + "/outside/user-info",
				type: 'post',
				data: {
					outsideUserId: id,
					outsideUserLoginName: name
				},
				dataType:'json',
				success: function(data) {
					if(data.success){
						if(data.data){
							localStorage.setItem('userInfo', JSON.stringify(data.data));
							console.log(JSON.parse(localStorage.userInfo).id)
						}
						else{
							alert("没数据")
						}
					}
					else{
						alert(data.message)
					}
				},
				error: function(xhr) {
					console.log(xhr)
				}
			})
		}
		else{
			
		}
	}
	else{
		alert("你在干嘛？非法操作！")
	}
}

//选集位置定位
function fixRight(){
	var $windowWidth = $(window).width()
	if($windowWidth >= 1190){
		var ltRight = ($windowWidth-1190)/2
		$(".lt-right").eq(0).css({"right":ltRight+"px","position":"fixed"})
	}
	else{
		var ltRight = ($windowWidth-1190)/2
		$(".lt-right").eq(0).css({"right":0,"position":"absolute"})
	}
}
//跳转页面未评论状态下弹出alert
function lessonAlertShow(status,imgUrl,title,describe){
	if(status == 0){
		var alertBac = $(".lesson-alert-bac").eq(0)
		alertBac.find("p").eq(0).text(title)
		alertBac.find("span").eq(0).text(describe)
		alertBac.css({"display":"block"})
		$(".lesson-alert-bac").eq(0).css({"display":"block"})
		lessonAlertStatus ++
	}
}

//获取URL内参数
function getRequest() {
	var requestUrl = window.location.href
	var theRequest = {}
	if (requestUrl.indexOf('?') !== -1) {
		var requestStrs = requestUrl.substr(requestUrl.indexOf('?')+1).split('&')
		for (var requestStr of requestStrs) {
			theRequest[requestStr.split('=')[0]] = decodeURIComponent(requestStr.split('=')[1])
		}
	}
	return theRequest
}
//计时器，每分钟计数
function getTotalTime(isEnabled){
	if(isEnabled){
		totalTime++
		console.log(totalTime)
		disableTimeout = setTimeout(function(){
			getTotalTime(isEnabled)
		},60000)
	}
	else{
		clearTimeout(disableTimeout)
	}
}
//切换状态选项及背景颜色
avalon.filters.setStatusColor = function(status){
	var statusColors = ["待学习","已学习"]
	return statusColors[status]
}
//切换领导状态选项及背景颜色
avalon.filters.setManagerStatusColor = function(status){
	if(preViewNow == 0){
		return "保存中"
	}
	else if(preViewNow == 1){
		if(status == 5){
			return "已失效"
		}
		else{
			return "审批中"
		}
	}
	else if(preViewNow == 2){
		if(status == 3){
			return "已通过"
		}
		else if(status == 4){
			return "已拒绝"
		}
	}
	else if(preViewNow == 3){
		if(status == 0){
			return "已发布"
		}
		else if(status == 1){
			return "进行中"
		}
		else if(status == 2){
			return "已失效"
		}
		// else if(status == 0){
		// 	return "已发布"
		// }
	}
}
//处理星级数据
avalon.filters.starsNumSet = function(star){
	var starArr = star.split("")
	var finalStarArr = starArr
	for(var i=starArr.length-1; i>=0; i--){
		if(starArr[i]==0 || starArr[i]=="."){
			finalStarArr.pop()
		}
	}
	if(finalStarArr.length > 0){
		return finalStarArr.join()
	}
	else{
		return 0
	}
}
// 根据用户角色判断入口 
// finalValue: [1：县区业务部渠道管理员，2：地市渠道中心主管，3：市级/区县管理员，4：省渠道中心主管，6：市级/省级管理员，7：一条龙管理员]
function userAuth() {
	var managerEnnames = ['county_chnl_mgr','city_chnl_mgr','province_chnl_mgr'],
		roleInfo = JSON.parse(localStorage.getItem('user-info')).outside_role_ennames.split('|'),
		managerValue = 0,
		roleIndex;

	for (i = 0; i < roleInfo.length; i ++) {
		roleIndex = managerEnnames.indexOf(roloInfo[i]);
		if (roleIndex !== -1) {
			switch (roleIndex) {
				case 0:
					managerValue += 1;
					break;
				case 1:
					managerValue += 2;
					break;
				case 2:
					managerValue += 4;
					break;
			}
		}
	}
	return managerValue;
}
/**
* 获取日期字符串
* @param {timeStamp}
* @return {string}
*/
function getTime(timeStamp) {
	var d = new Date(timeStamp * 1000);
	var Y =  d.getFullYear() + '-';
	var M = d.getMonth() + 1;
	if (M < 10) {
		M =  '0' + M + '-';  
	} else {
		M = M + '-';
	}
	var D = d.getDate();
	if (D < 10) {
		D = '0' + D;
	} 
	return Y + M + D
}
$(document).ready(function(){
	// getUserInfo("cityadmin", 104)
	console.log(localStorage.userInfo)
	localStorage.setItem('userInfo', JSON.stringify(outsideData1));
})