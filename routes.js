const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut - update';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage Number Setelah Pull Zaki';
        },
    },
];

module.exports = routes;
