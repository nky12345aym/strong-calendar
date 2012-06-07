
/*
   -----------------------------------------------------
   �J�����_�[
   Ver. 1.0.1
   update 2011.3.5
   Copyright (C) WEB-JOZU  URL:http://www.web-jozu.com/
   -----------------------------------------------------
*/


i = 0;
holiMM = new Array;
holiDD = new Array;
holiWEEK = new Array;
holiDAY = new Array;
holiTTL = new Array;

function holidaySet(MM,DD,WEEK,DAY,TTL){
	holiMM[i] = MM; holiDD[i] = DD; holiWEEK[i] = WEEK; holiDAY[i] = DAY; holiTTL[i++] = TTL;
}


//���݂̓��t���擾
nowDate = new Date();
theYear = nowDate.getFullYear();
theMonth = nowDate.getMonth();
theDate = nowDate.getDate();
theDay = nowDate.getDay();

//���̓����擾
monNum = new Date(theYear, theMonth + 1, 0).getDate();

//1���̗j�����擾
firstDay = new Date(theYear, theMonth, 1).getDay();

//���̏T���擾
theWeek = Math.ceil((monNum + firstDay) / 7);


//�j����ݒ�
holidaySet(1,1,0,0,'���U');
holidaySet(1,0,2,1,'���l�̓�');
holidaySet(2,11,0,0,'�����L�O�̓�');

if(theYear%4 == 0 || theYear%4 == 1){
	holidaySet(3,20,0,0,'�t���̓�');
}else{
	holidaySet(3,21,0,0,'�t���̓�');
}

holidaySet(4,29,0,0,'���a�̓�');
holidaySet(5,3,0,0,'���@�L�O��');
holidaySet(5,4,0,0,'�݂ǂ�̓�');
holidaySet(5,5,0,0,'���ǂ��̓�');
holidaySet(7,0,3,1,'�C�̓�');
holidaySet(9,0,3,1,'�h�V�̓�');

if(theYear >= 2012 && theYear <= 2044 && theYear%4 == 0){
	holidaySet(9,22,0,0,'�H���̓�');
}else{
	holidaySet(9,23,0,0,'�H���̓�');
}

holidaySet(10,0,2,1,'�̈�̓�');
holidaySet(11,3,0,0,'�����̓�');
holidaySet(11,23,0,0,'�ΘJ���ӂ̓�');
holidaySet(12,23,0,0,'�V�c�a����');

//�j���̐����擾
holiNum = i;



//�J�����_�[�\��
document.write('<table id="calTable">');
document.write('<tr>');
document.write('<td colspan="7" id="mon">' + (theMonth + 1) + '��</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<th>SUN</th>');
document.write('<th>MON</th>');
document.write('<th>TUE</th>');
document.write('<th>WED</th>');
document.write('<th>THU</th>');
document.write('<th>FRI</th>');
document.write('<th>SAT</th>');
document.write('</tr>');


dateNum = 0;
subHoli = "off"
nationHoli = "off";
weekSun = 0;
weekMon = 0;
weekTue = 0;
weekWed = 0;
weekThu = 0;
weekFri = 0;
weekSat = 0;
weekNum = new Array;
for(i=0; i<=6; i++){
	weekNum[i] = 0;
}

for(i=0; i<theWeek; i++){

	document.write('<tr>');

	for(j=0; j<7; j++){

		document.write('<td');

		if(i == 0 && j == firstDay){
			dateNum++;
		}

		holiMMDDCk = "off";
		for(k=0; k<holiNum; k++){

			holiMMCk = "off";
			holiDDCk = "off";
			if((theMonth + 1) == holiMM[k]){
				holiMMCk = "on";
			}

			if(holiMMCk == "on" && dateNum != 0 && holiDD[k] == 0 && holiWEEK[k] - 1 == weekNum[holiDAY[k]] && holiDAY[k] == j){
				holiDDCk = "on";

				if(dateNum != 0 && holiMM[k + 1] == holiMM[k] && holiDD[k + 1] == 0 && holiWEEK[k + 1] - 1 == weekNum[holiDAY[k + 1]] && holiDAY[k + 1] == j + 2){
					nationHoli = "on";
				}else if(dateNum != 0 && holiMM[k + 1] == holiMM[k] && holiDD[k + 1] == dateNum + 2 && holiWEEK[k + 1] == 0 && holiDAY[k + 1] == 0){
					nationHoli = "on";
				}

			}else if(holiMMCk == "on" && dateNum != 0 && holiDD[k] == dateNum && holiWEEK[k] == 0 && holiDAY[k] == 0){
				holiDDCk = "on";

				if(dateNum != 0 && holiMM[k + 1] == holiMM[k] && holiDD[k + 1] == 0 && holiWEEK[k + 1] - 1 == weekNum[holiDAY[k + 1]] && holiDAY[k + 1] == j + 2){
					nationHoli = "on";
				}else if(dateNum != 0 && holiMM[k + 1] == holiMM[k] && holiDD[k + 1] == dateNum + 2 && holiWEEK[k + 1] == 0 && holiDAY[k + 1] == 0){
					nationHoli = "on";
				}

			}

			if(holiMMCk == "on" && holiDDCk == "on"){
				holiMMDDCk = "on";
				viewTtl = holiTTL[k];
			}

		}

		if(holiMMDDCk == "on"){
			if(dateNum == theDate){
				document.write(' class="sun today" title="' + viewTtl + '"');
			}else{
				document.write(' class="sun" title="' + viewTtl + '"');
			}

			if(j == 0){
				subHoli = "on";
			}

		}else if(nationHoli == "on"){
			if(dateNum == theDate){
				document.write(' class="sun today" title="�����̋x��"');
			}else{
				document.write(' class="sun" title="�����̋x��"');
			}

			nationHoli = "off";
	
		}else if(subHoli == "on"){
			if(dateNum == theDate){
				document.write(' class="sun today" title="�U�֋x��"');
			}else{
				document.write(' class="sun" title="�U�֋x��"');
			}

			subHoli = "off";
	
		}else if(j == 0){
			if(dateNum == theDate){
				document.write(' class="sun today"');
			}else{
				document.write(' class="sun"');
			}
	
		}else if(j == 6){
			if(dateNum == theDate){
				document.write(' class="sat today"');
			}else{
				document.write(' class="sat"');
			}

		}else if(dateNum == theDate){
			document.write(' class="today"');
		}

		document.write('><a href="disp.html">');

		if((i == 0 && j < firstDay) || dateNum > monNum){
			document.write('&nbsp;');

		}else{
			document.write(dateNum);
			dateNum++;

			switch(j){
				case 0: weekNum[0] = ++weekSun; break;
				case 1: weekNum[1] = ++weekMon; break;
				case 2: weekNum[2] = ++weekTue; break;
				case 3: weekNum[3] = ++weekWed; break;
				case 4: weekNum[4] = ++weekThu; break;
				case 5: weekNum[5] = ++weekFri; break;
				case 6: weekNum[6] = ++weekSat; break;
			}
		}

		document.write('</a></td>');
	}

	document.write('</tr>');
}

document.write('<tr>');
document.write('<td colspan="7" id="webJozu"></td>');
document.write('</tr>');
document.write('</table>');
