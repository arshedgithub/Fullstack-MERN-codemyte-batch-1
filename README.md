# 🚀 Day 6 – Error Handling and Validation

---

## 📝 Logger – Winston

We use [**winston**](https://www.npmjs.com/package/winston) for logging:

- ❌  Errors
- ⚠️  Warnings
- ℹ️  Informational messages

This helps track, debug, and monitor application behavior.

### 📦 Installation

```bash
npm install winston
```

## 🧩 Middlewares

Middleware functions in Express are used to:

- Handle errors centrally

- Log incoming requests and responses

- Perform validation before reaching controllers

- Authorize user access based on roles

Middleware functions have access to the `req`, `res`, and `next()` objects, and they run before the final route handler.

## 📦 DTO & Validation

### 🧾 DTO (Data Transfer Object)
DTOs are used to structure and validate incoming request data from the client. They help ensure that the data received by the server is in the correct format.

### 🗄️ DAO (Data Access Object)
DAOs are used to interact with the database. They encapsulate all data access logic and keep the business logic separate and clean.

### ✅ Validation with AJV
We use [**ajv**](https://www.npmjs.com/package/ajv) – Another JSON Schema Validator – to validate DTOs.

It allows us to define JSON schema rules for validating input data before processing it in the controller.

### 📦 Installation

```bash
npm install ajv
```
