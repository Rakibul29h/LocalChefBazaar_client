import axios from 'axios';
import React from 'react';

const instance = axios.create({ baseURL: import.meta.env.VITE_SERVER_Domain ,
      withCredentials: true,
});

// Works just like axios(config)

const useAxios = () => {
    return (instance);
};

export default useAxios;