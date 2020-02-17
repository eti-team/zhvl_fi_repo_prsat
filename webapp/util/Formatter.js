sap.ui.define(function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === "Aktif") {
					return "Success";
				} else if (sStatus === "") {
					return "Warning";
				} else if (sStatus === "Pasif"){
					return "Error";
				} else {
					return "None";
				}
		}
	};

	return Formatter;

},  /* bExport= */ true);
