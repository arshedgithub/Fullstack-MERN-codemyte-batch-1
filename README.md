## Day 5 - RESTful API Design

`client` => `server` (Request)

`client` <= `server` (Response)

API - Application Programming Interface

### API Architecural styles

- SOAP - XML

- REST - HTTP

- GraphQL - Query Language

- gRPC

- websocket


## REST - REpresentational State Transfer

RESTful API - RESTful Services


### HTTP Methods

verbs

CRUD Operations - Create, Read, Update, Delete

`GET` - Read

`PUT` - Update

`POST` - Create

`DELETE` - Delete

### Resources

Product Model -> products (plural)

GET `/api/products` => all products 

GET `/api/products/:id` => relevant user 

POST `/api/products` => new user

PUT `/api/products/:id` => edit user

DELETE `/api/products/:id` => delete user

### /api Prefix

- `/api`
  
- `api.` -> subdomain

### Version Controlling

- `/api/v1/products`, `/api/v2/products`, `/api/v3/products`

- version controlling - Git

### HTTP Status code ranges

Range	Type	Meaning
- 100-199	 `Informational`	Request received, continuing process.
- 200-299	 `Success`	The request was successfully received, understood, and accepted.
- 300-399	 `Redirection`	Further action is needed to complete the request (often involves URL redirection).
- 400-499	 `Client Error`	The request contains bad syntax or cannot be fulfilled (error on the client’s side).
- 500-599	 `Server Error`	The server failed to fulfill a valid request (error on the server’s side).


### Pagination

Query Params

- `limit` - how many items per page
- `page` - which page items should display 
- `sort` - sort on which field


