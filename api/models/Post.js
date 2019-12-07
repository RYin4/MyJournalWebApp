module.exports = {
    attributes: {
        title: {
            type: 'String',
            required: true
        },
        body: {
            type: 'String',
            required: true
        },
        user: {
            model: 'user'
        }
    }
}