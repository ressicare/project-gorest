const axios = require('axios');

const API = 'https://gorest.co.in/public-api/users';
const TOKEN = 'Bearer 79b3e89546ea1a0331d5fc8ade3c2ae266b54c386d567149011ff34ffad203d5';

async function allFunction() {
    try {
        //Create data
        const response = await axios.post(API, {
            name: 'Rizka Test',
            gender: 'female',
            email: `kaa@mail.com`,
            status: 'active'
        }, {
            headers: {
                Authorization: TOKEN
            }
        });

        const Data = response.data.data;
        console.log('User berhasil dibuat:');
        console.log(Data); //menampilkan data users

        const userId = Data.id;

        //get data
        const getResponse = await axios.get(`${API}/${userId}`, {
            headers: {
                Authorization: TOKEN
            }
        });

        console.log('Data User berdasarkan ID:');
        console.log(getResponse.data.data); //menampilkan data users

        //Update data
        const putResponse = await axios.put(`${API}/${userId}`, {
            name: 'Rizka Fajrin',
            gender: 'female',
            email: `rizkafajrin@mail.com`,
            status: 'active'
        }, {
            headers: {
                Authorization: TOKEN
            }
        });
        
        console.log('User berhasil diupdate:');
        console.log(putResponse.data.data); //menampilkan data users

        //Detele data
        const deleteResponse = await axios.delete(`${API}/${userId}`, {
            headers: {
                Authorization: TOKEN
            }
        });
        
        console.log('🚮 User berhasil dihapus:');
        
    } catch (error) {
        console.error('Terjadi Error:');
        console.error(error.response?.data || error.message);
    }
}


allFunction();