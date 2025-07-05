## Day 5 - REST

client => server (Request)
client <= server (Response)

API - Application Programming Interface

SOAP - XML
REST - HTTP
GraphQL - Query Language
gRPC
websocket

RESTful API - RESTful Services

REST - REpresentational State Transfer


### HTTP Methods

verbs

CRUD Operations - Create, Read, Update, Delete

GET - Read
PUT - Update
POST - Create
DELETE - Delete

### resources

Product Model -> products (plural)

GET /api/products => all products 
GET /api/products/:id => relevant user 
POST /api/products => new user
PUT /api/products/:id => edit user
DELETE /api/products/:id => delete user

### /api prefix

/api
api. -> subdomain

### versioning control

/api/products
version controlling - Git

### HTTP Status code ranges

Status Code 

100 - 199 => 
200 - 299 => 
300 - 399 => 
400 - 499 => 
500 - 599 => 

Range	Type	Meaning
100-199	Informational	Request received, continuing process.
200-299	Success	The request was successfully received, understood, and accepted.
300-399	Redirection	Further action is needed to complete the request (often involves URL redirection).
400-499	Client Error	The request contains bad syntax or cannot be fulfilled (error on the client’s side).
500-599	Server Error	The server failed to fulfill a valid request (error on the server’s side).


### Pagination

query param


