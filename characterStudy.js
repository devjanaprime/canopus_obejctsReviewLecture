// check to see if a character prcedes another in a string
function checkForCharacters( first, second, word ){
    for( var i = 1; i < word.length ; i++ ){
        if( word[ i-1 ] == first && word[ i ] == second ){
            return true;
        } // end if
    } // end for
    return false;
} // end function