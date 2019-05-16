# Test JS

### Aplicación desarrollada en ExtJS 6.

#### Para correr la aplicación:

 - Descargar ExtJS 6  - [descargarExtJS6]
 
 - Descargar Sencha CMD  - [descargarSenchaCMD]

 - Configurar Sencha Cmd con el sdk descargado: `sencha config --prop sencha.sdk.path=C:\Users\Me\sencha-sdks --save`
 
 - Ejecutar servidor: sencha app watch y abrir navegador con la dirección http://localhost:1841/
 
 La aplicación contiene CRUD de producto y proveedor, siendo asociado un producto a un proveedor, permite visualizar las listas a través de un combobox como se muestra en la imágen: [screenProductView] y [screenProviderView]
 
 
 
 La aplicación fue generada con el comando sencha app init, se incluye la descripción de la arquitectura de la aplicación provista por la heramienta Sencha Cmd:

## Estructura de la aplicación


    app/                # Contains JavaScript code
        model/          # Data model classes
        view/           # Views as well as ViewModels and ViewControllers
        store/          # Data stores
        controller/     # Global / application-level controllers

    overrides/          # JavaScript code that is automatically required

    sass/
        etc/            # Misc Sass code (all.scss is imported by default)
        var/            # Sass variable and mixin declarations
        src/            # Sass rules

    resources/          # Assets such as images, fonts, etc.


    classic/                # Content specific to the classic toolkit
        src/
            model/          # Data model classes
            view/           # Views as well as ViewModels and ViewControllers
            store/          # Data stores
            controller/     # Global / application-level controllers

        overrides/          # JavaScript code that is automatically required

        sass/
            etc/            # Misc Sass code (all.scss is imported by default)
            var/            # Sass variable and mixin declarations
            src/            # Sass rules

        resources/          # Assets such as images, fonts, etc.

    modern/                 # Content specific to the modern toolkit
        src/
            model/          # Data model classes
            view/           # Views as well as ViewModels and ViewControllers
            store/          # Data stores
            controller/     # Global / application-level controllers

        overrides/          # JavaScript code that is automatically required

        sass/
            etc/            # Misc Sass code (all.scss is imported by default)
            var/            # Sass variable and mixin declarations
            src/            # Sass rules

        resources/          # Assets such as images, fonts, etc.


 [screenProductView]: <https://drive.google.com/file/d/1JfWRtrwB0aZUzPlawevZTFHpYURHE9c6/view?usp=sharing>
 [screenProviderView]: <https://drive.google.com/file/d/1Otp46D7yKbBqIzqyjpNhD-3N-Pq3jcCl/view?usp=sharing>
 [descargarSenchaCMD]: <https://www.sencha.com/products/extjs/cmd-download/>
 [descargarExtJS6]: <http://cdn.sencha.com/ext/gpl/ext-6.2.0-gpl.zip?utm_source=sncln&utm_medium=email&utm_campaign=pt_purchase&utm_content=tnc-gpl%E2%80%94extjs1>


