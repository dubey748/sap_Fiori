sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType",
    "sap/ui/model/json/JSONModel"
], (Controller, Filter, FilterOperator, FilterType, JSONModel) => {
    "use strict";

    return Controller.extend("masterdetail.zordersummarymasterdetail.controller.Main", {
        onInit() {
        },
        onListPress: function (oEvent) {
            var orderID = oEvent.getParameter("listItem").getBindingContext().getProperty("OrderID")
            var oFilter = new Filter("OrderID", FilterOperator.EQ, orderID)
            this.getView().byId("orderTable").getBinding("items").filter(oFilter, FilterType.Application)
            this.getSplitContainerObj().to(this.createId("orderDetail"))
        },
        onPressOrderDetail: function (oEvent) {
            var that = this
            var productID = oEvent.getSource().getBindingContext().getProperty("ProductID")
            var oModel = this.getOwnerComponent().getModel()
            oModel.read("/Products(" + productID + ")", {
                success: function (oData) {

                    var jsonData = new JSONModel(oData)

                    that.getView().byId("_IDGenSimpleForm").setModel(jsonData)
                    that.getSplitContainerObj().to(that.createId("ProductDetail"))

                }, error: function (oError) {
                    console.log(oError)
                }
            })

        },
        getSplitContainerObj: function () {
            var result = this.byId("_IDGenSplitContainer1")
            return result
        },
        onProductBack: function () {
            this.getSplitContainerObj().backDetail()
        }
    });
});