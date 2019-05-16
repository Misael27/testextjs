Ext.define('TestJS.view.provider.ProviderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.providerviewmodel',
    stores: {

        ProviderListStore: {
            model: 'TestJS.model.Provider',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'localstorage',
                id  : 'provider'
            }
        }

    }
});