import axios from 'axios';

const baseUrl = 'https://guijkheaaqxhfoetfaiq.supabase.co';

export const testGet = () => {
    const headers = {};
    return axios.get(baseUrl, { headers: headers });
};
