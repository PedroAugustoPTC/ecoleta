import express, { request, response } from 'express'; // DPENDENCIA RESPONSÁVEL POR CONTROLAR AS ROTAS DA API
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // carregar as imagens estaticas da pagina
// ROTA: ENDEREÇO COMPLETO DA REQUISIÇÃO
// RECURSO: QUAL ENTIDADE ESTAMOS ACESSANDO DO SISTEMA

// GET: BUSCAR UMA OU MAIS INFORMAÇÕS DO BACK-END
// POST: CRIAR UMA NOVE INFORMAÇÃO NO BACK-END
// PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE NO BACK-END
// DELETE: REMOVER UMA INFORMAÇÃO DO BACK-END

// POST http://localhost/users = CRIAR USUARIO
// GET http://localhost/users = LISTAR USUARIOS
// GET http://localhost/users/5 = LISAR O USUARIO COM ID 5

// REQUEST PARAM: PARÂMETROS QUE VEM NA PROPRIA ROTA QUE IDENTIFICAM UM RECURSO
// QUERY PARAM: PARÂMETROS QUE VEM NA PROPRIA ROTA GERALMENTE OPCIONAIS PARA FILTROS, PAGINAÇÃO
// REQUEST BODY: PARAMETROS PARA CRIAÇÃO/ATUALIZAÇÃO DE INFORMAÇÕES

// SELECT * FROM USERS WHERE NAME = 'DIEGO'
// knex('users').where('name', 'Diego').select('*')
/*
app.get('/', (request, response) => { // DEFINE A ROTA DO TIPO GET QUE SERÁ CHAMADA E QUAL FUNÇÃO ELA OBEDECERÁ
    const search = String(request.query.search);  // REQUEST => É O PARÂMETRO DE O QUE ESTAMOS QUERENDO (O ID POR EXEMPLO);
                                         // RESPONSE => É O QUE A REQUISIÇÃO VAI RETORNAR PARA O FRONTEND(A LISTAGEM DE CIENTES POR EXEMPLO);
    const filteredUsers = search ?  users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id); 
            // UMA ALTERNATIVA PARA "ID" TERIA QUE SER A MAS IDENTIFICAÇÃO QUE FOI DADA NA ROTA "'/USERS/:ID'"
            // Number() É USADO APRA CONVERTER O REST QUE VEM EM STRING PARA NUMERO, PARA SER USADO COMO POSIÇÃO NO ARRAY
    const user = users[id];

    return response.json(user);
});*/

app.listen(3333); //DEFINE A PORTA NA QUAL A API FUNCIONARÁ