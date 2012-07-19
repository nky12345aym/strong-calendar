function getFile() {

    var url = 'test.csv';
    sendRequest( url, writeData, 'GET', '' );
}

function writeData( req ) {
    // テーブル初期化
    var target_area = document.getElementById( "result" );
    var child = target_area.childNodes;
    var length = child.length;
    for ( var i = 0; i < length; i++ ) {
        target_area.removeChild( child[0] );
    }
    // データ取得
    var rows = req.responseText.split( '\r' ).join( '' ).split( '\n' );
    for ( var i = 0; i < rows.length; i++ ) {
        cells = rows[i].split( ',' );
        // CSVの1行が3より小さい場合は追加処理なし
        if ( cells.length < 5 ) { break; }
        var trElem = document.createElement( 'tr' );
        target_area.appendChild( trElem );
        for ( var j = 0; j < cells.length; j++ ) {
            var text = document.createTextNode( cells[j] );
            var tdElem = document.createElement( 'td' );
            tdElem.appendChild( text );
            trElem.appendChild( tdElem );
        }
    }
}