
const table=document.getElementsByTagName('table')[0];

 for(let i=0;i<5;i++){
    table.tHead.rows[0].cells[i].style.backgroundColor='rgb(12, 180, 222)';
 }


   table.tBodies[0].rows[0].style.backgroundColor='blue';
   table.tBodies[0].rows[1].style.backgroundColor='pink';
   table.tBodies[0].rows[2].style.backgroundColor='rgb(55, 223, 33)';
   table.tBodies[0].rows[3].style.backgroundColor='rgb(237, 31, 16)';
   table.tBodies[0].rows[4].style.backgroundColor='rgb(224, 239, 17)';
  
   let arr=[];
   let k=0;
 for(let i=0;i<5;i++){
    
    for(let j=0;j<5;j++){
        if(j%2!=0){
            
                arr[k]=table.tBodies[0].rows[i].cells[j].innerHTML;    
            k++;
       
        }
    } 
 }

 for(let k=0;k<10;k++){
    document.write(`"`+ arr[k]+`"`);
   
 }
