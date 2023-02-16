import sql from 'mssql'
const dbSettings ={
    user: 'SA',
    password: 'm4l3d3tt4w3b164**/',
    server: 'localhost',
    database : 'SmiteWiki',
    port: 14330,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}
export async function getConnection()
{
 try {
    const pool = await sql.connect(dbSettings);   
    return pool;          
    }
     
 catch (error) 
    {
    console.log(error)
    }
}

export {sql}