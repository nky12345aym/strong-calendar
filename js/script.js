/* �ϐ��Q */
var static_login_flg = false;





/* �E�B���h�E�̃|�b�v�A�b�v */
function openWin( theURI, status ) {

    if ( status == "login" ) {
        PopUpWin = window.open( theURI, 'theWin', 'scrollbars=1,width=270,height=120,resizable=1,directories=0,toolbar=0,status=1,location=0' );
    } else if ( status == "schedule_add" ) {
        PopUpWin = window.open( theURI, 'theWin', 'scrollbars=1,width=750,height=700,resizable=1,directories=0,toolbar=0,status=1,location=0' );
    }
    PopUpWin.focus();
}

/* �E�B���h�E�̍폜 */
function closeWin() {
    window.open( 'about:blank', '_self' ).close();
}


/* �J�����_�[�\�� */
function himekuri() {
    myTbl = new Array( "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY" );
    myD = new Date();
    myYear = myD.getYear() + 1900;
    myMonth = myD.getMonth() + 1;
    myDate = myD.getDate();
    myDay = myD.getDay();

    myMess1 = "Year:" + myYear + " Month:" + myMonth + " Day:" + myDate + " wtf:" + myTbl[myDay];

    window.alert( myMess1 );

}

/* ���O�C���X�e�[�^�X */
function login( status ) {
    var objid = document.getElementById( 'status_text' );
    if ( status == "login" || static_login_flg == true ) {
        //window.alert( "static_login_flg = true" );
        msg1 = "Welcome!";
    }
    if ( status == "logout" || static_login_flg == false ) {
        //window.alert( "static_login_flg = false" );
        msg1 = "Please Login";
    }

    objid.innerHTML = msg1;
}

/* ���O�C���`�F�b�N */
function loginCheck( id, pass ) {
    var id_data = id.value;
    var pass_data = pass.value;
    if ( id_data == "id" && pass_data == "pass" ) {
        window.alert( "OK" );
        static_login_flg = true;
    } else {
        window.alert( "NG" );
    }
}

/*
* Copyright 2004-2012 by CLES All Rights Reserved.   ���]�p 
*/

function loadCSV( path ) {
    var httpObj = createXMLHttpRequest( handleResult );
    if ( httpObj ) {
        httpObj.open( "GET", path, true );
        httpObj.send( null );
    }
}

function handleResult() {
    if ( ( this.readyState == 4 ) && ( this.status == 200 ) ) {
        var text = getAjaxFilter()( this.responseText );
        csvData = parseCSV( text );

        //�����Ɏ擾����csv�̏����������B�����ł̓e�[�u����\���B
        var result = "<table>";
        for ( var i = 0; i < csvData.length; i++ ) {
            result += "<tr>";
            for ( var j = 0; j < csvData[i].length; j++ ) {
                result += "<td>";
                result += csvData[i][j];
                result += "</td>";
            }
            result += "</tr>";
        }
        result += "</table>";
        document.getElementById( "result" ).innerHTML = result;
    }
}


//�t�@�C������
function parseCSV( str ) {
    var CR = String.fromCharCode( 13 );
    var LF = String.fromCharCode( 10 );
    //������CSV�̉��s�R�[�h�ɂ����CR,LF���g��������K�v������B
    var lines = str.split( LF );
    var csvData = new Array();

    for ( var i = 0; i < lines.length; i++ ) {
        var cells = lines[i].split( "," );
        if ( cells.length != 1 ) csvData.push( cells );
    }
    return csvData;
}



function createXMLHttpRequest( cbFunc ) {
    var XMLhttpObject = null;
    try {
        XMLhttpObject = new XMLHttpRequest();
    } catch ( e ) {
        try {
            XMLhttpObject = new ActiveXObject( "Msxml2.XMLHTTP" );
        } catch ( e ) {
            try {
                XMLhttpObject = new ActiveXObject( "Microsoft.XMLHTTP" );
            } catch ( e ) {
                return null;
            }
        }
    }
    if ( XMLhttpObject ) XMLhttpObject.onreadystatechange = cbFunc;
    return XMLhttpObject;
}

function getAjaxFilter() {
    if ( navigator.appVersion.indexOf( "KHTML" ) > -1 ) {
        return function ( t ) {
            var esc = escape( t );
            return ( esc.indexOf( "%u" ) < 0 && esc.indexOf( "%" ) > -1 ) ? decodeURIComponent( esc ) : t
        }
    } else {
        return function ( t ) {
            return t
        }
    }
}

