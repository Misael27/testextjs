Ext.define('TestJS.model.Provider', {
    extend: 'Ext.data.Model',
    idProperty:'Id',
    fields: [
        { name: 'Id', type: 'int' },
        { name: 'name', type: 'string' }
    ],
    validators: {
        name: 'presence'
    },
    identifier: {
        type: 'sequential'
    },

});