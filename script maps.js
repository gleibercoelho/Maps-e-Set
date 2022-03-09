function getAdmins(maps) {
    let admins = []
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('LÇuiz', 'Admin');
usuarios.set('Stephany',  'Admin');
usuarios.set('jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));
