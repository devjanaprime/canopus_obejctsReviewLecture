console.log( 'js' );

// lunchboxes array
var lunchboxes =[];

// constructor
function Lunchbox( sizeIn, handleIn, colorIn, imageIn ){
    this.size = sizeIn;
    this.handle = handleIn;
    this.color = colorIn;
    this.image = imageIn;
} // end Lunchbox contructor

// create lunchboxes with constructor & push into our array
lunchboxes.push( new Lunchbox( 'small', false, 'brown', false ) );
lunchboxes.push( new Lunchbox( 'small', false, 'red', true ) );
lunchboxes.push( new Lunchbox( 'medium', true, 'pattern', false ) );
lunchboxes.push( new Lunchbox( 'medium', true, 'black', true ) );
lunchboxes.push( new Lunchbox( 'large', true, 'blue', true ) );
lunchboxes.push( new Lunchbox( 'medium', true, 'blue faux snakeskin', false ) );
lunchboxes.push( new Lunchbox( 'medium', true, 'polka dotted', false ) );

function bothHandleAndImage(){
    // empty array
    var results = [];
    for( var i=0; i<lunchboxes.length; i++ ){
        if( lunchboxes[ i ].handle && lunchboxes[ i ].image ){
            results.push( lunchboxes[ i ] );
        } // end match
    } // end for
    return results;
} // end bothHandleAndImage

// search for lunchboxes with images
function whatever( images ){
    // create an empty array to hold results
    var results =[];
    for( var i=0; i<lunchboxes.length; i++ ){
        // for each lunchbox
        if( lunchboxes[ i ].image === images ){
            results.push( lunchboxes[ i ] );
        } // found match
    } // end for
    return results;
} // end funk
