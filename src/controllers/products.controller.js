import { getConection, sql, queries } from "../database";


export const getProducts = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getProducts);
    console.log(result);

    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createPruebas = async (req, res) => {
  const { name, cantidad } = req.body;

  if (name == null) {
    return res.status(400).json({ msg: "mal" });
  }

  try {
    const pool = await getConection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("cantidad", sql.Int, cantidad)
      .query(queries.create);

    res.json("new");
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  } 
};


export const getByID = async (req, res)=> {
  const {id} = req.params;

  const pool = await getConection()
  const result = await pool.request()
  .input("id", id)
  .query(queries.getById)
  console.log (result);

  res.send(id)
}
