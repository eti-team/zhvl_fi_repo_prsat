function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZHVL_HR_PERSONEL_BILGI_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}