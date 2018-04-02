sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.meghalapps.controller.View1", {
		
		radiobuttonselect:function(oEvent){
    var oSelectedIndex = oEvent.getParameter("selectedIndex"); 
   alert(oSelectedIndex);
    var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");  
    var oSelectedRadioText = oRadioButtonSrc[oSelectedIndex].getText();
    this.a = this.getView().byId("label11");
	alert(oSelectedRadioText);
	if(oSelectedIndex===1)
	{
	alert("1");
	this.a.addStyleClass("meghal");
	}
	else if(oSelectedIndex===2)
	{
		alert("2");
		this.a.removeStyleClass("meghal");
		this.a.addStyleClass("meghal1");
	}
	
  }
  

	});
});