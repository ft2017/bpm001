
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');//for 开窗


var tDbConn = new DataSource("SOP002","SQL0");//前面是表单代号，后面是sql command控件的名称
var tEFGP = "T100PROD"; 
var tDbConn1 = new DataSource("SOP002","SQL1");
var tT100 = "T100PROD"; 

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
    var sql = " select a.sfaadocno 工单号,a.sfaa010 生产料号,b.imaal003 品名,a.sfaa012 生产数量,to_char(a.sfaa020,'yyyy-mm-dd') 预计完工日 from sfaa_t a left join imaal_t b on b.imaal001=a.sfaa010 and b.imaalent=11 where a.sfaaent=11 order by a.sfaadocno";

  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工单单号","生产料号","品名","数量","预计完工日");//客製開窗的Grid Label
  var QBEField = new Array("a.sfaadocno","a.sfaa010","b.imaal003","a.sfaa012","to_char(a.sfaa020,'yyyy-mm-dd')");//模糊查詢,須和DB Table欄位名稱相同
  var QBELabel = new Array("工单单号","生产料号","品名","数量","预计完工日");//模糊查詢的Label
     var ReturnId = new Array("Textbox21", "Textbox24", "Textbox26","Textbox30","Textbox32");
     singleOpenWin(FileName, tEFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
}
//工序开窗选择
function Button1_onclick(){
if(document.getElementById("Textbox21").value != ""){
    var FileName = "PluralityOpenWin";    
  var sql = " select a.sfcbdocno,a.sfcb001,a.sfcb002,a.sfcb003,b.OOCQL004 from sfcb_t a left join oocql_t b on b.oocql002=a.sfcb003 and b.oocql001=221  and b.oocql003='zh_CN'  and b.oocqlent=11 where a.sfcbent=11 order by a.sfcbdocno,a.sfcb001,a.sfcb002"; 
  var SQLClaused = new Array(sql);
  var SQLLabel = new Array("工序");//客制开窗的Grid Label
  var QBEField = new Array("b.OOCQL004");//模糊查询,須和DB Table栏位名称相同
  var QBELabel = new Array("工序");//模糊查询的Label
     var ReturnId = new Array("hdngx");//表单上的栏位代号
  pluralityOpenWin(FileName, tT100, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
     
}else{
  alert("请先填写工单单号！");
}
}
function checkPointOnClose(pReturnId){

  if(pReturnId == "hdngx"){
     
     Grid1Obj.reload(eval(document.getElementById("hdngx").value));
  }

}

//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//