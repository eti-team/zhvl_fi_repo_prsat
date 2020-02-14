/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/hvl/hr/PersonelBilgileri/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/hvl/hr/PersonelBilgileri/test/integration/pages/Main",
	"com/hvl/hr/PersonelBilgileri/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.hvl.hr.PersonelBilgileri.view.",
		autoWait: true
	});
});