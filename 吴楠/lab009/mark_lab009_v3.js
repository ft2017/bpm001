//常用引入外部JS
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>'); //for 开窗

//数据库链接
var databaseCfgId_EFGP = "EFGPTEST"; //办公用品
var ds2 = "T100TEST"; //查询T100测试环境
var ds3 = "T100PROD"; //查询T100正式环境

// 2017-03-27准备设置一个通用的标签
// var lble1 = document.getElementById("lble1");
// var lble2 = document.getElementById("lble2");
// var lble3 = document.getElementById("lble3");
var lbl1 = document.getElementById("lbl1");
var lbl2 = document.getElementById("lbl2");
var lbl3 = document.getElementById("lbl3");
var lbl4 = document.getElementById("lbl4");
var lbl5 = document.getElementById("lbl5");
var lbl6 = document.getElementById("lbl6");
var lbl7 = document.getElementById("lbl7");
var txtRadio = document.getElementById("txtRadio"); //实际值

function clearTxt() {
    val = ""
    val2 = "..."

    document.getElementById("txt1").value = val;
    document.getElementById("txt2").value = val;
    document.getElementById("txt3").value = val;
    document.getElementById("txt4").value = val;
    document.getElementById("txt5").value = val;
    document.getElementById("txt6").value = val;
    document.getElementById("txt7").value = val;

    document.getElementById("lbl1").value = val2;
    document.getElementById("lbl2").value = val2;
    document.getElementById("lbl3").value = val2;
    document.getElementById("lbl4").value = val2;
    document.getElementById("lbl5").value = val2;
    document.getElementById("lbl6").value = val2;
    document.getElementById("lbl7").value = val2;


    return true;

}

function btn1_onclick() {
    clearTxt();
    // alert("婷婷1btn_bgyp_onclick");
    lbl1.value = "品名";
    lbl2.value = "规格";
    lbl3.value = "单位";
    lbl4.value = "...";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";

    var FileName = "SingleOpenWin";
    var sql = " select BGYPNAME,BGYPSPEC,BGYPUOM from Z_BGYP  ";
    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("品名", "规格", "单位"); //客制开窗的Grid Label
    var QBEField = new Array("BGYPNAME", "BGYPSPEC", "BGYPUOM"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("品名", "规格", "单位"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", ); //表单上的栏位代号
    singleOpenWin(FileName, databaseCfgId_EFGP, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

function btn2_onclick() {
    clearTxt();
    alert("暂无内容");


}

function btn3_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "单号";
    lbl2.value = "生产料号";
    lbl3.value = "品名";
    lbl4.value = "本站作业";
    lbl5.value = "作业名称";
    lbl6.value = "生产数量";
    lbl7.value = "预计完工日";




    var FileName = "SingleOpenWin";
    var sql = "select a.sfaadocno 单号,a.sfaa010 生产料号,d.imaal003 品名,c.sfcb003 本站作业,e.oocql004 作业名称,b.sfca003 生产数量,TO_CHAR(c.sfcb045, 'YYYY-MM-DD') 预计完工日 from sfaa_t a  left join sfca_t b on b.sfcadocno=a.sfaadocno left join sfcb_t c on c.sfcbdocno=a.sfaadocno  left join imaal_t d on d.imaal001=a.sfaa010 left join oocql_t e on e.oocql002=c.sfcb003 where c.sfcb003 like 'T%' ";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("单号", "生产料号", "品名", "本站作业", "作业名称", "生产数量", "预计完工日"); //客制开窗的Grid Label
    var QBEField = new Array("单号", "生产料号", "品名", "本站作业", "作业名称", "生产数量", "预计完工日"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("单号", "生产料号", "品名", "本站作业", "作业名称", "生产数量", "预计完工日"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5", "txt6", "txt7"); //表单上的栏位代号
    // singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

    if (txtRadio.value == 0) {
        alert("选择环境值的代码为0，正式环境");
        singleOpenWin(FileName, ds3, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
    }
    if (txtRadio.value == 1) {
        alert("选择环境值的代码为1,测试环境");
        singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
    }
}


function btn4_onclick() {
    clearTxt();
    // alert("btn2_onclick");
    lbl1.value = "主件料号";
    lbl2.value = "品名";
    lbl3.value = "审核日期";
    lbl4.value = "...";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";

    var FileName = "SingleOpenWin";
    var sql = " select UNIQUE(a.bmaa001) 主件料号,b.imaal003 品名,TO_CHAR(a.bmaacnfdt, 'YYYY-MM-DD') 审核日期 from bmaa_t a,  imaal_t b WHERE b.imaal001=a.bmaa001";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("主件料号", " 品名", "审核日期"); //客制开窗的Grid Label
    var QBEField = new Array("主件料号", " 品名", "审核日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("主件料号", " 品名", "审核日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

// 2017-03-28 noted by Mark 
// dev together with 吳楠,婷婷,盼盼
function btn_core(lbl,sql){
    clearTxt();//清畫面
    //table th
    if (lbl.length>=1) lbl1.value = lbl[0];
    if (lbl.length>=2) lbl2.value = lbl[1];
    if (lbl.length>=3) lbl3.value = lbl[2];
    if (lbl.length>=4) lbl4.value = lbl[3];
    if (lbl.length>=5) lbl5.value = lbl[4];
    if (lbl.length>=6) lbl6.value = lbl[5];
    if (lbl.length>=7) lbl7.value = lbl[6];
   
    // T100 BPM 要求的樣式
    var FileName = "SingleOpenWin";
    var SQLClaused = new Array(sql);
    var SQLLabel = lbl; //客制开窗的Grid Label
    var QBEField = lbl; //模糊查询,須和DB Table栏位名称相同
    var QBELabel = lbl; //模糊查询的Label

    if (lbl.length==3){ var ReturnId = new Array("txt1", "txt2", "txt3");}
    if (lbl.length==4){ var ReturnId = new Array("txt1", "txt2", "txt3", "txt4");}
    if (lbl.length==5){ var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5");}
    if (lbl.length==6){ var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5", "txt6");}
    if (lbl.length==7){ var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5", "txt6", "txt7");}

    if (txtRadio.value == 0) {
        alert("*** 正式环境 ***");
        singleOpenWin(FileName, ds3, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
    }
    if (txtRadio.value == 1) {
        alert("--- 测试环境 ---");
        singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);
    }
    // alert("end of core");
}

function btn5_onclick() {
    lbl= new Array("供应商编号","供应商全名","资料审核日期");
    var sql = " select UNIQUE( a.pmaa001) 供应商编号,b.pmaal003 供应商全名,TO_CHAR(a.pmaacnfdt, 'YYYY-MM-DD') 资料审核日期  from pmaa_t a left join pmaal_t b on b.pmaal001=a.pmaa001 where a.pmaa002=1 order by a.pmaa001";
    btn_core(lbl,sql);
    return true;   
}




function btn6_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "客户编号";
    lbl2.value = "客户全名";
    lbl3.value = "资料审核日期";
    lbl4.value = "...";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.pmaa001) 客户编号,b.pmaal003 客户全名,TO_CHAR(a.pmaacnfdt, 'YYYY-MM-DD') 资料审核日期  from pmaa_t a left join pmaal_t b on b.pmaal001=a.pmaa001 where a.pmaa002=2";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("客户编号", " 客户全名", "资料审核日期"); //客制开窗的Grid Label
    var QBEField = new Array("客户编号", " 客户全名", "资料审核日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("客户编号", " 客户全名", "资料审核日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}


function btn7_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "料号";
    lbl2.value = "品名";
    lbl3.value = "审核日期";
    lbl4.value = "...";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.imaa001) 料号,b.imaal003 品名,TO_CHAR(a.imaacnfdt, 'YYYY-MM-DD') 审核日期 from imaa_t a left join  imaal_t b on b.imaal001=a.imaa001 where  a.imaaent=11";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("料号", " 品名", "审核日期"); //客制开窗的Grid Label
    var QBEField = new Array("料号", " 品名", "审核日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("料号", " 品名", "审核日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

function btn8_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "审核日期";
    lbl2.value = "品名";
    lbl3.value = "工艺编号";
    lbl4.value = "说明";
    lbl5.value = "审核日期";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.ecba001) 工艺料号,b.imaal003 品名,a.ecba002 工艺编号,a.ecba003 说明,TO_CHAR(a.ecbacnfdt, 'YYYY-MM-DD') 审核日期 from ecba_t a, imaal_t b where b.imaal001=a.ecba001 and  ecbaent=11";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("审核日期", " 品名", " 工艺编号", " 说明", "审核日期"); //客制开窗的Grid Label
    var QBEField = new Array("工艺料号", " 品名", " 工艺编号", " 说明", "审核日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("工艺料号", " 品名", " 工艺编号", " 说明", "审核日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

function btn9_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "库位编号";
    lbl2.value = "库位名称";
    lbl3.value = "库位管控";
    lbl4.value = "录入日期";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.inaa001) 库位编号,b.inayl003 库位名称,a.inaa007 库位管控,TO_CHAR(a.inaacrtdt, 'YYYY-MM-DD') 录入日期 from inaa_t a left join inayl_t b on b.INAYL001=a.inaa001 where  a.inaaent=11";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("库位编号", " 库位名称", " 库位管控", " 录入日期"); //客制开窗的Grid Label
    var QBEField = new Array("库位编号", " 库位名称", " 库位管控", " 录入日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("库位编号", " 库位名称", " 库位管控", " 录入日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", "txt4"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

function btn10_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "主分群码";
    lbl2.value = "说明";
    lbl3.value = "审核日期";
    lbl4.value = "...";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.imca001) 主分群码,b.oocql004 说明,TO_CHAR(a.imcacrtdt, 'YYYY-MM-DD') 审核日期  from imca_t a left join oocql_t b on b.oocql002=a.imca001 where  a.imcaent=11  order by a.imca001";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("主分群码", " 说明", " 审核日期"); //客制开窗的Grid Label
    var QBEField = new Array("主分群码", " 说明", " 审核日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("主分群码", " 说明", " 审核日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}

function btn11_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "员工编号";
    lbl2.value = "全名";
    lbl3.value = "归属部门";
    lbl4.value = "录入日期";
    lbl5.value = "...";
    lbl6.value = "...";
    lbl7.value = "...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.ooag001) 员工编号,a.ooag011 全名,a.ooag003 归属部门,TO_CHAR(a.ooagcrtdt, 'YYYY-MM-DD') 录入日期  from ooag_t a where  a.ooagent=11";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("员工编号", " 全名", " 归属部门", " 录入日期"); //客制开窗的Grid Label
    var QBEField = new Array("员工编号", " 全名", " 归属部门", " 录入日期"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("员工编号", " 全名", " 归属部门", " 录入日期"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", "txt4"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}


function btn12_onclick() {
    clearTxt();
    // alert("btn2_onclick");

    lbl1.value = "订单号";
    lbl2.value = "订单日期";
    lbl3.value = "业务人员";
    lbl4.value = "姓名";
    lbl5.value = "客户编号";
    lbl6.value = "客户名称";
    // lbl7.value="...";
    // alert("lbl1.value="+lbl1.value);



    var FileName = "SingleOpenWin";
    var sql = "select UNIQUE(a.xmdadocno) 订单号,TO_CHAR(a.xmdadocdt, 'YYYY-MM-DD') 订单日期,a.xmda002 业务人员,c.ooag011 姓名,a.xmda004 客户编号,b.PMAAL003 客户名称 from xmda_t a left join pmaal_t b on b.PMAAL001=a.XMDA004 left join ooag_t c on c.ooag001=a.xmda002 where a.xmdaent=11";
    // 单号 生产料号  品名  本站作业  作业名称  生产数量  预计完工日

    var SQLClaused = new Array(sql);
    var SQLLabel = new Array("订单号", " 订单日期", " 业务人员", " 姓名", " 客户编号", " 客户名称"); //客制开窗的Grid Label
    var QBEField = new Array("订单号", " 订单日期", " 业务人员", " 姓名", " 客户编号", " 客户名称"); //模糊查询,須和DB Table栏位名称相同
    var QBELabel = new Array("订单号", " 订单日期", " 业务人员", " 姓名", " 客户编号", " 客户名称"); //模糊查询的Label
    var ReturnId = new Array("txt1", "txt2", "txt3", "txt4", "txt5", "txt6"); //表单上的栏位代号
    singleOpenWin(FileName, ds2, SQLClaused, SQLLabel, QBEField, QBELabel, ReturnId, 720, 430);

}


//供应商性质单选
function radio_onclick() { //radiobutton控件取值
    var Rb_frb = document.getElementsByName("radio");
    for (var i = 0; i < Rb_frb.length; i++) {
        if (Rb_frb[i].checked) {
            txtRadio.value = Rb_frb[i].value; //实际值
        }
    }
}



function btn15_onclick() {
    // alert("btn15_onclick");

    clearTxt();

    if (txtRadio.value == 0) {

        alert("选择环境值的代码为0");
    }
    if (txtRadio.value == 1) {

        alert("选择环境值的代码为1");
    }
}

function formCreate() {
    return true;
}

function formOpen() {

    txtRadio.value = 0; //实际值
    alert("选择环境值的代码为" + txtRadio.value);
    return true;
}

function formSave() {
    return true;
}

function formClose() {
    return true;
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//