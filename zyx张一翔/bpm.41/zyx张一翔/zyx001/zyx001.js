function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
} 


function formCreate(){
	document.getElementById("txtUserId01").value = userId;
    document.getElementById("txtUserName01").value = userName;
	//document.getElementById("Textbox1").value = mainOrgUnitIds;
	//document.getElementById("Textbox2").value = mainOrgUnitNames;
	//document.getElementById("tbrq").value=systemDateTime;
return true;
}
function formOpen(){
if(activityId == "UserTask_3" ){
	document.getElementById("txtUserId02").value = userId;
    document.getElementById("txtUserName02").value = userName;
}
if(activityId == "UserTask_8" ){
	document.getElementById("txtUserId03").value = userId;
    document.getElementById("txtUserName03").value = userName;
}
return true;
}
function formSave(){
var now=new Date();
var year=now.getYear();
var month=now.getMonth();
var day=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
//var seconds=now.getSeconds();
//document.getElementById("Teb003").value=""+year+"/"+month+"/"+day+" "+hours+":"+minutes+""; 
var t=getNowFormatDate();
if(activityId == "UserTask_2" ){
	document.getElementById("txtTime01").value = t;
    //document.getElementById("txtUserName02").value = userName;
}
if(activityId == "UserTask_3" ){
	document.getElementById("txtTime02").value = t;
    //document.getElementById("txtUserName02").value = userName;
}
if(activityId == "UserTask_8" ){
	document.getElementById("txtTime03").value = t;
  //  document.getElementById("txtUserName03").value = userName;
}
return true;
}
function formClose(){
return true;
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//