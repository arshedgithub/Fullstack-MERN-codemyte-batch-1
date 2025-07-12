// Arrow function
export const middl1 = (req, res, next) => {
    console.log("middleware 1 called.");
    next();
}

export function authMiddleware(req, res, next) {
    console.log("middleware 2 called.");
    if (req.body.user.role == "admin"){
        next();
    }
}

export function validationRquest(schema) {
    // DTO validation
}

export function middl3(req, res, next) {
    console.log("middleware 3 called.");
    next();
}
