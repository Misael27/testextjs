Ext.define('TestJS.model.Inventory', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'quantity', type: 'int' },
        { name:'productId', reference:'TestJS.model.Product', unique: true}
    ],

    validators: {
        quantity: 'presence'
    },

    identifier: {
        type: 'negative'
    }

});