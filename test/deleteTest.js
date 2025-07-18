const axios = require('axios');

const userId = 8014471; //8014471, 8014431
const API = `https://gorest.co.in/public-api/users/${userId}`;
const TOKEN = 'Bearer 79b3e89546ea1a0331d5fc8ade3c2ae266b54c386d567149011ff34ffad203d5';

async function deleteUser() {
    try {
        const response = await axios.delete(API, {
            headers: {
                Authorization: TOKEN
            }
        });

        console.log('User berhasil dihapus:');
        
    } catch (error) {
        console.error('Gagal menghapus user:', error.response?.data || error.message);
    }
}

deleteUser();