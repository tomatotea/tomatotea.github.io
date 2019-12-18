new w.FontFaceObserver( "Nunito-Light Nunito-Regular Sniglet-Regular" )
    .check()
    .then( function(){ console.log( “Loaded!” ); });

    new w.FontFaceObserver( "Nunito-Light Nunito-Regular Sniglet-Regular" )
        .check()
        .then( function(){
            w.document.documentElement.className += " fonts-loaded";
        });
