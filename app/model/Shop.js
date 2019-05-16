Ext.define('TestJS.model.Shop', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    fields: [
        { name: 'Id', type: 'int' },
        'name',
    ],
    validators: {
        name: 'presence'
    },

    identifier: {
        type: 'negative'
    }

});