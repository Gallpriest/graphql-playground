const userMe = {
    username: 'Anton',
    age: 27,
    hobby: 'Front-End',
}

export const UserResolver = {
    Query: {
        me: () => userMe,
    },
};
