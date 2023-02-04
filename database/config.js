const mongoose = require('mongoose');

const dbConnection = async()=>{

    try{

        mongoose.connection.openUri(process.env.DB_CNN, 
        { useNewUrlParser: true }, ( err, res) => {
            if ( err ) throw err;
            console.log(`Database: `, 'online');
           });
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la DB ver logs');
    }


}

module.exports = {
    dbConnection
}