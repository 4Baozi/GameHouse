export const signup = (user) => {
    fetch('api/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getUsers = () => {
    fetch('api/users', {
        method: 'GET',
    });
};
