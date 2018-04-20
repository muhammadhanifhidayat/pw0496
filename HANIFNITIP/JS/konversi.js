function konversiKurs(){

     var hasil

     x=document.kurs.nilai.value;
     Number(x);
     
     for (var i=0;i<document.kurs.pilihan.length;i++){
          
           if(document.kurs.pilihan[i].checked==true){
               
                kursType=document.kurs.pilihan[i].value;
                break;
    		}
          
    }

    if(kursType=='usd'){

           hasil=13500*x;

           document.kurs.resultfield.value='Hasil konversi mata uang $ ' + x +' adalah Rp ' + hasil;
    }
    
    else{

           hasil=x/13500;

           document.kurs.resultfield.value='Hasil konversi mata uang Rp ' + x +' adalah $ ' + hasil;
    }
    
    

}