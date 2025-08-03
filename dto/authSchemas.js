const registerSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 3,
            maxLength: 30
        },
        password: {
            type: 'string',
            minLength: 6
        },
        email: {
            type: 'string',
            format: 'email'
        },
        firstname: {
            type: 'string',
            minLength: 2,
            maxLength: 50
        },
        lastname: {
            type: 'string',
            minLength: 2,
            maxLength: 50
        },
        age: {
            type: 'number',
            minimum: 13,
            maximum: 120
        },
        userType: {
            type: 'string',
            enum: ['user', 'admin']
        }
    },
    required: ['username', 'password', 'email', 'firstname', 'lastname'],
    additionalProperties: false
};

const loginSchema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 1
        },
        password: {
            type: 'string',
            minLength: 1
        }
    },
    required: ['username', 'password'],
    additionalProperties: false
};

module.exports = {
    registerSchema,
    loginSchema
}; 