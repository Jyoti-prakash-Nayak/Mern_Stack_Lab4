let n=Number(prompt('How many element you want:'));
let arr=[];
let sum=0;
for(let i=0;i<n;i++){
    let num=Number(prompt(`Enter ${i} elements`));
    arr.push(num);
}
console.log(arr);


negativeAverage(arr,n);
function negativeAverage(arr,n){
   
    for(let i=0;i<n;i++){
        if(arr[i]<0){ 
            sum +=arr[i];
        }
    }
    let average=sum/n;
    console.log(average);
}