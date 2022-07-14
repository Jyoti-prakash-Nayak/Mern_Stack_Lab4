const prompt=require('prompt-sync')();
const fs=require('fs')

function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.updateItem=(id)=>{
    let itemArr=JSON.parse(fs.readFileSync("item.json"));
    itemArr=itemArr.filter(user=>user.id!=id);

    const name=prompt(`Enter item name : `);
    const quantity=prompt(`Enter item quantity: `);
    const price=prompt(`Enter item price: `);

    const itemObj=new Item(id,name,quantity,price);
    itemArr.push(itemObj);

    fs.writeFile("item.Json",JSON.stringify(itemArr),(err)=>{
        if(err)
           console.log('Something went wrong');
        else
           console.log('Item saved successfully');
    })

}