
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_URL

const roleService = {
  getRoles: async () => {
    const token = sessionStorage.getItem("user_token");

   try {
     const headers = {
       Authorization: `Bearer ${token}`,
       'Content-Type': 'application/json',
     };

     // Send the POST request with the request body
     const response = await axios.get(`${BASE_URL}/role/get-role`, { headers });


return response.data;
   } catch (error) {
     console.error('Error fetching data:', error);
     throw error;
   }
 },




}

export default roleService;
