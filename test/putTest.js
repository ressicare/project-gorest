const axios = require('axios');

const userId = 8014431; //isi id yang ingin di update
const API = `https://gorest.co.in/public-api/users/${userId}`;
const TOKEN = 'Bearer 79b3e89546ea1a0331d5fc8ade3c2ae266b54c386d567149011ff34ffad203d5';

async function updateUser() {
    try {
        const response = await axios.put(API, {
            name: 'Ressica Elhas',
            gender: 'female',
            email: `ressicaayu@mail.com`,
            status: 'active'
        }, {
            headers: {
                Authorization: TOKEN
            }
        });

        console.log('User berhasil diupdate:');
        console.log(response.data.data); //menampilkan data users
    } catch (error) {
        console.error('Gagal update user:', error.response?.data || error.message);
    }
}

updateUser();