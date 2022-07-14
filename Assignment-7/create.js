const prompt=require('prompt-sync')();

const fs=require('fs');
function Item(id,name,quantity,price){
    this.id=id;
    this.name=name;
    this.quantity=quantity;
    this.price=price;
}

exports.addItem=()=>{
    const n=prompt(`Enter number of items : `);
    let itemArr=[];
    for(let i=0;i<n;i++){
        const id=prompt(`Enter item id: `);
        const name=prompt(`Enter item name : `);
        const quantity=prompt(`Enter item quantity: `);
        const price=prompt(`Enter item price: `);

        const item=new Item(id,name,quantity,price);
        itemArr.push(item);
    }

    fs.writeFile("item.json",JSON.stringify(itemArr),(err)=>{
        if(err)
           console.log('Something went wrong');
        else
           console.log('Item saved successfully');
    })
}