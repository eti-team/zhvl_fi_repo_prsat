sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"com/hvl/hr/PersonelBilgileri/util/Formatter"
], function (Controller, MessageToast, Formatter) {
	"use strict";

	return Controller.extend("com.hvl.hr.PersonelBilgileri.controller.Main", {
		onInit: function () {

		},
		onListPerson: function () {
			var oParamPernr = this.getView().byId("pernrInput");
			var oParamVorna = this.getView().byId("vornaInput");
			var oParamNachn = this.getView().byId("nachnInput");
			var oParamAktifler = this.getView().byId("aktifler");

			var filters = [];

			if (oParamPernr.getValue()) {
				var oFilter = new sap.ui.model.Filter("Pernr", sap.ui.model.FilterOperator.EQ, oParamPernr.getValue());
				filters.push(oFilter);
			}
			if (oParamVorna.getValue()) {
				oFilter = new sap.ui.model.Filter("Vorna", sap.ui.model.FilterOperator.Contains, oParamVorna.getValue().toUpperCase());
				filters.push(oFilter);
			}
			if (oParamNachn.getValue()) {
				oFilter = new sap.ui.model.Filter("Nachn", sap.ui.model.FilterOperator.Contains, oParamNachn.getValue().toUpperCase());
				filters.push(oFilter);
			}
			
			if (oParamAktifler.getSelected()) {
				oFilter = new sap.ui.model.Filter("Sttx2", sap.ui.model.FilterOperator.Contains, "Aktif");
				filters.push(oFilter);
			}

			var list = this.getView().byId("listPersonel");
			var binding = list.getBinding("items");
			binding.filter(filters);

			var myModel = this.getOwnerComponent().getModel();
			myModel.setSizeLimit(10);
		},
		onListItemPress: function (oEvent) {
			MessageToast.show("Seçildi : " + oEvent.getSource().getTitle());
		}
	});
});