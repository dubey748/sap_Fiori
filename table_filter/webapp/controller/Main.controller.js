sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("tablefilter.controller.Main", {
        onInit() {
            var oModel = this.getOwnerComponent().getModel(); // safer way

            if (!oModel) {
                console.error("OData model not found!");
                return;
            }

            oModel.metadataLoaded().then(function () {
                var oMetaModel = oModel.getMetaModel();

                // Example: Log all entity types
                console.log("Entity Types:", oMetaModel.getObject());
            }).catch(function (oError) {
                console.error("Failed to load metadata:", oError);
            });
        }
    });
});