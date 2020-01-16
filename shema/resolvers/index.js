const userMe = {
    username: 'Anton',
    age: 27,
    hobby: 'Front-End',
}

const resolvers = {
    Query: {
        me: () => userMe,
    },
};

export default resolvers;