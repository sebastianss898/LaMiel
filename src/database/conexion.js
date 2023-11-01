import sql from "mssql";

const dbsethings = {
  user: "SEBAS",
  password: "Tacos3312",
  server: "localhost",
  database: "LaMiel",
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  }
};

async function getConection() {
  try {
    const pool = await sql.connect(dbsethings);
    return pool;
  } catch (error) {
    
  }
 
}

getConection();
