let n=Number(prompt('How many element you want:'));
let arr=[];

for(let i=0;i<n;i++){
    let num=Number(prompt(`Enter ${i} elements`));
    arr.push(num);
}
console.log(arr);

let largest=0;
for(let i=0;i<n;i++){
     if(arr[i]>largest)
        largest=arr[i];
}
console.log(largest);
