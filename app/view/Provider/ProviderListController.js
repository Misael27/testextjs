Ext.define('TestJS.view.provider.ProviderListController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.provider-list',

    onAddClick: function (sender, record) {
        debugger;
        var providerStore = this.getViewModel().getStore('ProviderListStore');

        //adding dummy provider
        var providerModel = Ext.create('TestJS.model.Provider');
      // providerModel.set("Id", 0);
        providerModel.set("name", "New provider "+providerModel.data.Id);

        providerStore.insert(0, providerModel);

        var providerGrid = this.getView();
        providerGrid.editingPlugin.startEdit(providerModel, 1);
       
    },

    onLoadClick: function (sender, record) {
        debugger;
        var providerStore = this.getView().getStore();
        providerStore.load();
    },

    onRemoveClick: function (sender, record) {
        debugger;
        var providerGrid = this.getView();
        var providerStore = providerGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = providerGrid.getSelectionModel().getSelection();

        providerStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        debugger;
        var removeBtn = this.lookupReference('btnRemoveProvider');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});