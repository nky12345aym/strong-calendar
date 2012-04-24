myTbl = new Array( "“ú—j“ú", "Œ—j“ú", "‰Î—j“ú", "…—j“ú", "–Ø—j“ú", "‹à—j“ú", "“y—j“ú" );
myD = new Date();
myYear = myD.getYear();
myMonth = myD.getMonth() + 1;
myDate = myD.getDay();
myDay = myD.getDay();

myMess1 = myYear + "”N" + myMonth + "Œ" + myDate + "“ú";
myMess2 = myTbl[myDay];



document.write( myMess1 );
document.write( myMess2 );