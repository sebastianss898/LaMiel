

export const queries = {
    getProducts:"SELECT * FROM prueba",
    create:"INSERT INTO prueba (name,cantidad) VALUES(@name,@cantidad)",
    getById:"SELECT * FROM prueba WHERE id = @id "

}