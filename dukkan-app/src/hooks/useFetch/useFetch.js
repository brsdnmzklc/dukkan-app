import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setResponseData(response.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, responseData};
};

export default useFetch;
