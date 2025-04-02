
import axios from 'axios';




const BASE_URL = process.env.NEXT_PUBLIC_URL

const AuthService = {



  login: async (requestBody) => {


    try {


      // Send the POST request with the request body
      const response = await axios.post(`${BASE_URL}/users/login`, requestBody);


return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  register: async (values) => {
    // const requestData = search ? { ...values, referral_id: search } : values;

    try {
      // Send the POST request with the request body
      const response = await axios.post(`${BASE_URL}/users/register`, values);


return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }





}

export default AuthService;
