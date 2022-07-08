let numberofelements=Number(prompt('How many element you want:'));
let arr=[];
let sum=0;
for(let i=0;i<numberofelements;i++){
    let num=Number(prompt(`Enter ${i} elements`));
    arr.push(num);
}
console.log(arr);
for(let i=0;i<numberofelements;i++){
    if(arr[i]>0 && arr[i]%3==0 && arr[i]%2==0){
        sum +=arr[i];
    }
}
console.log(`Sum of the integer ${sum}`);
