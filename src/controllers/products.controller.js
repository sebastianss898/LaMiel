import { getConection } from "../database/conexion";

export const getProducts = async (req, res) => {
  const pool = await getConection();
  const result = await pool.request().query("SELECT * FROM colmena");
  console.log(result);

  res.json(result.recordset);
};

export const cretaNewColmena = (req, res) => {
  const { cod_colmena, granja_id, fecha_instalacion, Litrosmielcol } = req.body;

  console.log(cod_colmena, granja_id, fecha_instalacion, Litrosmielcol);
  res.json("new colmena ");
};
