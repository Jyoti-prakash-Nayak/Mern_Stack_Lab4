const {addItem}=require('./create');
const {updateItem}=require('./update');
const {deleteItem}=require('./delete');
const prompt=require('prompt-sync')();

const operation = prompt(`Enter which operation u need to perform: `);

switch(operation){
    case 'add':
            addItem();
            break;
    case 'update':
            const id=prompt(`Enter user id u want to update: `);
            updateItem(id);
            break;
    case 'delete':
            const del=prompt(`Enter user id u want to delete: `);
            deleteItem(del);
            break;
    default:
            console.log(`No operation`);
            break;
}