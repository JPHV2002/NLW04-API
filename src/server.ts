import express, { response } from 'express';

const app = express();

/*
GET => busca
POST => salvar
PUT => alterar
DELETE => deletar
PATCH => alteração especifica
*/ 

//http://localhost:3333/
app.get("/", (request, response) => {
    return response.json({message: "Hello World - NLW"});
})

app.post("/", (request, response) => {
    return response.json({message: "Data saved"});
})

app.listen(3333, () => console.log("Server is Running"));
