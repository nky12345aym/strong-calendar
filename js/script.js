/**/
/* ウィンドウのポップアップ */
function openWin( theURI, status ) {

    if ( status == "login" ) {
        PopUpWin = window.open( theURI, 'theWin', 'scrollbars=1,width=270,height=120,resizable=1,directories=0,toolbar=0,status=1,location=0' );
    } else if ( status == "schedule_add" ) {
        PopUpWin = window.open( theURI, 'theWin', 'scrollbars=1,width=750,height=700,resizable=1,directories=0,toolbar=0,status=1,location=0' );
    }
    PopUpWin.focus();
}

/* ウィンドウの削除 */
function closeWin() {
    window.open( 'about:blank', '_self' ).close();
}


/* カレンダー表示 */
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

/* ログインステータス */
function login( status ) {
    var objid = document.getElementById( 'status_text' );
    if ( status == "login" ) { msg1 = "Welcome!"; }
    if ( status == "logout" ) { msg1 = "Please Login"; }

    objid.innerHTML = msg1;
}
