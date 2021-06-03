let hanysor=0;
let hanyoszlop=0;
let o=0;
let x=0;
let table = "";

/* function torol(){ //torles az adatbazisbol
	
	let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
        }
    };
    xhttp.open("GET", "torol.php" , true);
    xhttp.send();
	
} */

function game(){

	
	hanysor = document.getElementById("hanysor").value;
	hanyoszlop = document.getElementById("hanyoszlop").value;
	
	//a tablanak minimum 5X5osnek kell lennie
	if(hanysor < 5 || hanyoszlop < 5){
		alert("Minimum 5 sornak és 5 oszlopnak kell lennie!");
	} else{
		
	//tabla legeneralasa
	table += "<table id='myTable'>";
	for(let i = 0; i < hanysor; i++){
		table += '<tr>';
		for(let j = 0; j < hanyoszlop; j++){
			sorid = parseInt(i+1);
			oszlopid = parseInt(j+1);
			table += "<td id='sor"+sorid+"oszlop"+oszlopid+"'></td>";
		}
		table += "</tr>";
	}
	table += "</table>";
	
	//tabla megjelenitese
	document.getElementById("tablahelye").innerHTML = table;
	
	//ha megnyomom a kuldes gombot, akkor "lep", ellenorzi hogy nyert-e valamelyik jatekos
	document.getElementById("letsturn").onclick = function turn(){
		
	o=0;
	x=0;
	
	//megkapja hogy hova akarok lepni es hogy melyik karakterrel
	let sor = document.getElementById("sorszam").value;
	let oszlop = document.getElementById("oszlopszam").value;
	let karakter = document.getElementById("karakter").value;
	
	//ervenytelen koordinata eseten a program szol
	if(parseInt(sor) > parseInt(hanysor) || parseInt(oszlop) > parseInt(hanyoszlop) || parseInt(sor) < 1 || parseInt(oszlop) < 1 ){
		alert("Érvénytelen koordinátát adtál meg!");
		} else {
			
				//leellenorzi hogy az adott koordinatan mar van-e karakter
				if(document.getElementById("myTable").rows[sor-1].cells[oszlop-1].innerHTML == "O" || document.getElementById("myTable").rows[sor-1].cells[oszlop-1].innerHTML == "X"){
					alert("Ide már tettél!");
				} else{
					
				document.getElementById("myTable").rows[sor-1].cells[oszlop-1].innerHTML = karakter;
				
				//beirja az adatbazisba, hogy hova es milyen karakterrel leptek
					/*let xhttp = new XMLHttpRequest();
					xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200) {
						}
					}; 
					xhttp.open("GET", "csatlakozas.php?sor=" + sor +"&oszlop=" + oszlop + "&karakter=" + karakter, true);
					xhttp.send();*/
				
				/*	console.log(karakter);
				if(karakter == "O"){
					karakter.selectedIndex = 0;
				} else {
					karakter.selectedIndex = 1;
				} */
					}
							
							
				//itt ellenorzi le, hogy valamelyik jatekos nyert-e
				for(let i = 0; i < hanysor; i++){
					x=0;
					o=0;
					for(let j = 0; j < hanyoszlop; j++){
						if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "O"){
							o += 1;
							x = 0;
							if(o == 5){
								alert("O nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
							}
						}
						else if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "X"){
							x += 1;
							o = 0;
							if(x == 5){
								alert("X nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
							}
						}
						else{
							o=0;
							x=0;
						}
					}
				}
				for(let i = 0; i < hanyoszlop; i++){
					x=0;
					o=0;
					for(let j = 0; j < hanysor; j++){
						if(document.getElementById("myTable").rows[j].cells[i].innerHTML == "O"){
							o += 1;
							x = 0;
							if(o == 5){
								alert("O nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
							}
						}
						else if(document.getElementById("myTable").rows[j].cells[i].innerHTML == "X"){
							x += 1;
							o = 0;
							if(x == 5){
								alert("X nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
							}
						}
						else{
							o=0;
							x=0;
						}
					}
				}
				for(let i = 0; i < hanysor-4; i++){
					
					for(let j = 0; j < hanyoszlop-4; j++){
						if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "X" && 
						document.getElementById("myTable").rows[i+1].cells[j+1].innerHTML == "X" && 
						document.getElementById("myTable").rows[i+2].cells[j+2].innerHTML == "X" && 
						document.getElementById("myTable").rows[i+3].cells[j+3].innerHTML == "X" && 
						document.getElementById("myTable").rows[i+4].cells[j+4].innerHTML == "X"){
							alert("X nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
						}
					}
				}
				for(let i = 0; i < hanysor-4; i++){
					
					for(let j = 0; j < hanyoszlop-4; j++){
						if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "O" && 
						document.getElementById("myTable").rows[i+1].cells[j+1].innerHTML == "O" && 
						document.getElementById("myTable").rows[i+2].cells[j+2].innerHTML == "O" && 
						document.getElementById("myTable").rows[i+3].cells[j+3].innerHTML == "O" && 
						document.getElementById("myTable").rows[i+4].cells[j+4].innerHTML == "O"){
							alert("O nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
						}
					}
				}
				for(let i = 4; i < hanysor; i++){
					
					for(let j = 0; j < hanyoszlop-4; j++){
						if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "X" && 
						document.getElementById("myTable").rows[i-1].cells[j+1].innerHTML == "X" && 
						document.getElementById("myTable").rows[i-2].cells[j+2].innerHTML == "X" && 
						document.getElementById("myTable").rows[i-3].cells[j+3].innerHTML == "X" && 
						document.getElementById("myTable").rows[i-4].cells[j+4].innerHTML == "X"){
							alert("X nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
						}
					}
				}
				for(let i = 4; i < hanysor; i++){
					
					for(let j = 0; j < hanyoszlop-4; j++){
						if(document.getElementById("myTable").rows[i].cells[j].innerHTML == "O" && 
						document.getElementById("myTable").rows[i-1].cells[j+1].innerHTML == "O" && 
						document.getElementById("myTable").rows[i-2].cells[j+2].innerHTML == "O" && 
						document.getElementById("myTable").rows[i-3].cells[j+3].innerHTML == "O" && 
						document.getElementById("myTable").rows[i-4].cells[j+4].innerHTML == "O"){
							alert("O nyert!");
								//torol();
								table = "";
								location.reload();
								game();
								break;
						}
					}
				}
			}
		}
	}
}