/**
 * This view is a list of providers.
 */
Ext.define('TestJS.view.main.ProviderList', {
    extend: 'Ext.grid.Panel',
    xtype: 'providerlist',

    title: 'Provider',

    controller: 'provider-list',
    viewModel: { type: 'providerviewmodel' },
    reference:'providerlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{ProviderListStore}'
    },

    initComponent: function () {
        Ext.apply(this,
        {
            plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],

            columns: [{
                text: "Id",
                dataIndex: 'Id',
                flex: 2,
            },
            {
                text: "Nombre",
                flex: 3,
                dataIndex: 'name',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },
            ],
            tbar: [{
                text: 'Add Provider',
                iconCls: 'x-fa fa-check',
                handler: 'onAddClick'
            }, {
                itemId: 'removeProvider',
                text: 'Remove Provider',
                iconCls: 'x-fa fa-trash',
                reference: 'btnRemoveProvider',
                handler: 'onRemoveClick',
                disabled: true
            }]

        });

        this.callParent(arguments);
    }

    
});
