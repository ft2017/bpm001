function formCreate(){

		document.getElementById("txtDate").value=systemDateTime;
	
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



function cblcxgbmhq_onclick(){
  var tCheckbox=document.getElementsByName("cblcxgbmhq");   
  var tSelectedValue="";   
  for(var i=0;i<tCheckbox.length;i++){  
   if(tCheckbox[i].checked){ 
  tSelectedValue=tSelectedValue+tCheckbox[i].value+";"; 
   }
    if(tCheckbox[1].checked){ 
      document.getElementById("hdnmj").value='100306';  
	  //tSelectedValue = document.getElementById("hdnmj").value +";";
    }else{
		 document.getElementById("hdnmj").value = ""; 
	 }
	 if(tCheckbox[2].checked){   
      document.getElementById("hdnyz").value='100301';   
	  //tSelectedValue = tSelectedValue + document.getElementById("hdnyz").value+";";
    }else{
		 document.getElementById("hdnyz").value = ""; 
	 }
	 if(tCheckbox[3].checked){   
      document.getElementById("hdnjg").value='100302';
	 // tSelectedValue = tSelectedValue + document.getElementById("hdnjg").value+";";
    }else{
		 document.getElementById("hdnjg").value = ""; 
	 }
	 if(tCheckbox[4].checked){   
      document.getElementById("hdnsg").value='100305';   
	  // tSelectedValue = tSelectedValue + document.getElementById("hdnsg").value+";";
    }else{
		 document.getElementById("hdnsg").value = ""; 
	 }
	 if(tCheckbox[5].checked){   
      document.getElementById("hdnpg").value='1008';  
	 // tSelectedValue = tSelectedValue + document.getElementById("hdnpg").value+";";
    }else{
		 document.getElementById("hdnpg").value = ""; 
	 }
	 if(tCheckbox[6].checked){   
      document.getElementById("hdnzc").value='100701';   
	  //tSelectedValue = tSelectedValue + document.getElementById("hdnzc").value+";";
    }else{
		 document.getElementById("hdnzc").value = ""; 
	 }
  } 

document.getElementById("HiddenTextField0").value = tSelectedValue;

//alert(document.getElementById("HiddenTextField0").value);
}


//Grid新增
function btxz_onclick(){  


  Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中   
  
  Grid1Obj.clearBinding();  //新增後清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   

  
}   
  //Grid修改
function btxg_onclick(){   
  Grid1Obj.editRow();  //將修改後的欄位的資料填入Grid中   
  
  //Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
}   
  //Grid删除
function btsc_onclick(){   
  Grid1Obj.deleteRow();  //將Grid某筆資料刪除   
  //Grid1Obj.clearBinding();  //清除Binding欄位資料   
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中   
  
}  



//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//