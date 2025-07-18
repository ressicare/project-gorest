const axios = require('axios');

const API = 'https://gorest.co.in/public-api/users';
const TOKEN = 'Bearer 79b3e89546ea1a0331d5fc8ade3c2ae266b54c386d567149011ff34ffad203d5';

async function create() {
    try {
        const response = await axios.post(API, {
            name: 'Esa',
            gender: 'female',
            email: `ressicaayuesa@mail.com`,
            status: 'active'
        }, {
            headers: {
                Authorization: TOKEN
            }
        });

        console.log('User berhasil dibuat:');
        console.log(response.data.data); //menampilkan data users
    } catch (error) {
        console.error('Gagal membuat user:', error.response?.data || error.message);
    }
}

create();