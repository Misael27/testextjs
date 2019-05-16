Ext.define('TestJS.view.product.ProductViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productviewmodel',
    stores: {

        ProductListStore: {
            model: 'TestJS.model.Product',
            autoLoad: true,
            autoSync: true,
            proxy: {
                type: 'localstorage',
                id  : 'product'
            }
        },

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