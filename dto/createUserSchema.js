const createUserDtoSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        email: {
            type: 'string',
            format: 'email'
        }
    },
    required: ['name', 'email'],
    additionalProperties: false
};

module.exports = { createUserDtoSchema };

// ajv - library for validation

// DTO - Data Transfer Object
// DAO - Data Access Object