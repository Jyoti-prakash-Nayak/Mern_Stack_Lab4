const prompt=require('prompt-sync')();
const fs=require('fs')

function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.deleteItem=(id)=>{
    let itemArr=JSON.parse(fs.readFileSync("item.Json"));
    itemArr=itemArr.filter(user=>user.id!=id);
   
    fs.writeFile("item.Json",JSON.stringify(itemArr),(err)=>{
        if(err)
           console.log('Something went wrong');
        else
           console.log('Item saved successfully');
    })

}