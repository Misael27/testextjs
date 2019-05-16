Ext.define('TestJS.view.product.ProductListController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.product-list',

    onAddClick: function (sender, record) {
        var productStore = this.getViewModel().getStore('ProductListStore');

        //adding dummy product
        var productModel = Ext.create('TestJS.model.Product');
      // productModel.set("Id", 0);
        productModel.set("name", "New product "+productModel.data.Id);
        productModel.set("description", "A description");
        productModel.set("providerId", 0);
        productStore.insert(0, productModel);

        var productGrid = this.getView();
        productGrid.editingPlugin.startEdit(productModel, 1);
       
    },

    onLoadClick: function (sender, record) {
        var productStore = this.getView().getStore();
        productStore.load();
    },

    onRemoveClick: function (sender, record) {
        var productGrid = this.getView();
        var productStore = productGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = productGrid.getSelectionModel().getSelection();

        productStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveProduct');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});