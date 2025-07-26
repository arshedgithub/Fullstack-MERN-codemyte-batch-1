const Ajv = require('ajv');

function validateRequest(schema) {
    const ajv = new Ajv();

    ajv.addFormat('email', {
        type: 'string',
        validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    });

    ajv.addFormat('date', {
        type: 'string',
        validate: /^\d{4}-\d{2}-\d{2}$/,
    });

    ajv.addFormat('price', {
        type: 'string',
        validate: /^\d+\.\d{2}$/,
    });

    return (req, res, next) => {
        if (Object.keys(req.body).length === 0) {
            return next();
        }

        const isValid = ajv.validate(schema, req.body);

        if (!isValid) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: ajv.errorsText(ajv.errors, { separator: '\n' })
            });
        }

        next();
    };
}

module.exports = validateRequest;
