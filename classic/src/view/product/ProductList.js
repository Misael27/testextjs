/**
 * This view is a list of products.
 */
Ext.define('TestJS.view.main.ProductList', {
    extend: 'Ext.grid.Panel',
    xtype: 'productlist',

    title: 'Products',

    controller: 'product-list',
    viewModel: { type: 'productviewmodel' },
    reference:'productlistgrid',
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
        store: '{ProductListStore}'
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
                flex: 1,
                align : 'left'
            },
            {
                text: "Name",
                flex: 1,
                dataIndex: 'name',
                align : 'left',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },
            {
                text: "Description",
                flex: 2,
                dataIndex: 'description',
                align : 'left',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: true
                }
            },
            {
                text: "Provider",
                flex: 1,
                dataIndex : 'providerId',
                align : 'left',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: true
                },
                renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                    debugger;
                    //if (value == undefined) return ""; 
                   // return value;
                    var store = this.getViewModel().getStore('ProviderListStore');
                    if (store.getById(value) == null) return "";
                    return store.getById(value).get('name');
                },
            },
            ],
            tbar: [{
                text: 'Add Product',
                iconCls: 'x-fa fa-check',
                handler: 'onAddClick'
            }, {
                itemId: 'removeProduct',
                text: 'Remove Product',
                iconCls: 'x-fa fa-trash',
                reference: 'btnRemoveProduct',
                handler: 'onRemoveClick',
                disabled: true
            }]

        });

        this.callParent(arguments);
    }

    
});
