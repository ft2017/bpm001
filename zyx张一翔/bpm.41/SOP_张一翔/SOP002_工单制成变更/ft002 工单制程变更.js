
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP002","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 



function formCreate(){
return true;
}
function formOpen(){
return true;
}
function formSave(){
return true;
}
function formClose(){
return true;
}


function Button22_onclick(){
	var FileName = "SingleOpenWin";
   	var sql = " select a.sfaadocno 工单号,a.sfaa010 生产料号,b.imaal003 品名,a.sfaa012 生产数量 from sfaa_t a left join imaal_t b on b.imaal001=a.sfaa010 and b.imaalent=11 where a.sfaaent=11 order by a.sfaadocno";

	var SQLClaused = new Array(sql);
	var SQLLabel = new Array("工单单号","生产料号","品名","数量");//客製開窗的Grid Label
	var QBEField = new Array("a.sfaadocno","a.sfaa010","b.imaal003","a.sfaa012");//模糊查詢,須和DB Table欄位名稱相同
	var QBELabel = new Array("工单单号","生产料号","品名","数量");//模糊查詢的Label
     var ReturnId = new Array("Textbox21", "Textbox24", "Textbox26","Textbox30");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}



//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//