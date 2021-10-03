const  geoCode =  require('./util/geoCode'); 
const  forcast =  require('./util/forcast');

// command line argument
const address = process.argv[2];
if(!address){
    return console.log('Please provide location name in command line arg');
}else{
    geoCode(address, (error, geoCodeData) => {
        console.log('code >>', geoCodeData);
        const  {latitude, logitude} = geoCodeData;
     if(error){
        return console.log('geoCode Error :', error);  // here function get stop here
     }
     console.log('geoCode Data :', geoCodeData);  

     forcast(latitude, logitude, (error, forcastData) => {
        if(error){
          return console.log('Error :', error);
        }
           console.log(geoCodeData.location);
           console.log(forcastData);
    });
 });
}

 
