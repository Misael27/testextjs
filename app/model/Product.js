Ext.define('TestJS.model.Product', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string' },
        { name:'providerId', reference:'TestJS.model.Provider'}
    ],
    validators: {
        name: 'presence'
    },

    identifier: {
        type: 'sequential'
    }

});