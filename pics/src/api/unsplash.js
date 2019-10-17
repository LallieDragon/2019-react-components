import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID b79a653e114b45a8e03866a6cea9d35f0b664da0483b5ea1bfab12998dba44fc'
  }
})
