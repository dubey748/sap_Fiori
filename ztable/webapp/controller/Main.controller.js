sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ztable.controller.Main", {
        onInit() {

        },
        onDelete(oEvent) {
            var oModel = this.getView().byId("SmartTable").getModel()
            oModel.setUseBatch(false);
            var items = this.getView().byId("_IDGenTable").getSelectedItems()
            items.forEach(element => {
                var id = element.getBindingContext().getProperty("ID")
                oModel.remove("/Products(" + id + ")")
            });
        }
    });
});