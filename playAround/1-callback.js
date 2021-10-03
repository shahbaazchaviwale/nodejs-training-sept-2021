const geodata = (address, callback) => {
    setTimeout(()=>{
        const data = {
            longitude: 0, latitude:0
        }
        callback(data);
    },2000);
}

geodata('belgaum', (data)=>{
    console.log('Geo >>', data);
});

const add = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b);
    },2000);
};

add(5,15, (data) =>{
    console.log('add: ', data);
}); 