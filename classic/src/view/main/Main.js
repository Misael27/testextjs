/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TestJS.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Ext.form.ComboBox',

        'TestJS.view.main.MainController',
        'TestJS.view.main.MainModel',
        'TestJS.view.main.ProductList',
        'TestJS.view.main.ProviderList'

    ],

    controller: 'main',
    viewModel: 'main',

    cls:'my-panel',

    title:'Ext JS Test',

    items: [
    {
        xtype: 'combobox',
        fieldLabel: 'Choose Model',
        store: {
            fields: ['value', 'name'],
            data : [
                {"showmodel":"prod", "name":"Product"},
                {"showmodel":"prov", "name":"Provider"},
            ]
        },
        queryMode: 'local',
        displayField: 'name',
        valueField: 'showmodel',
        renderTo: Ext.getBody(),
        bind: '{showProduct}',
        listeners:{
            select: 'onCombobox',
            afterrender: function() {
                //So now we are going to set the combobox value here.
                //I just simply used my default value in the combobox definition but it's possible to query from combobox store also.
                //For example: store.getAt('0').get('id'); according to Brik's answer.
                this.setValue(this.defaultValue);    
             }
            
        },
        defaultValue: "prod",
    },
    {
        iconCls: 'x-fa fa-table',
        title: 'Product Grid',
        reference: 'productGrid',
        xtype: 'productlist',
        bind: {
            hidden: '{showProduct!="prod"}'
        }
    },
    {
        iconCls: 'x-fa fa-table',
        title: 'Provider Grid',
        reference: 'providerGrid',
        xtype: 'providerlist',
        bind: {
            hidden: '{showProduct!="prov"}'
        }
    }]
    
});
