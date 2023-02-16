import { getConnection, sql } from "../bdd/conection.js"
export const getPanth = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM pantheons ')

    res.json(result)
}

export const createPanth = async (req,res) =>{
    const {id_pantheon, name_pantheon, lore_pantheon} = req.body
    if(id_pantheon == null || name_pantheon == null || lore_pantheon == null)
    {
        return res.status(400).json(
            {
                "msg" : "falta un campo por rellenar :/"
            }
        )
    }else
    {
        const pool = await getConnection();
        await pool.request()
        .input("id_pantheon", sql.Int, id_pantheon)
        .input("name_pantheon", sql.NVarChar, name_pantheon)
        .input("lore_pantheon", sql.NVarChar, lore_pantheon)
        .query("INSERT INTO pantheons VALUES(@id_pantheon, @name_pantheon, @lore_pantheon)");
        res.json("nuevo panteon creado");
    }

    // Esto se hace, si hay un campo donde no es mandatory y no haga falta rellenarlo
    // en la declaracion de variables, agregamos la variable no requerida
    
    //const {id_pantheon, name_pantheon, lore_pantheon} = req.body
    //let {pantheon_gods} = req.body
    // if(pantheon_gods == null) panthen_gods = 0;
  
}