import axios from 'axios';
import useSWR from 'swr';

const client = axios.create();

client.defaults.baseURL = 'http://localhost:3002';
client.defaults.timeout = 20 * 1000;
client.defaults.responseType = 'json';
client.defaults.headers.common['Content-Type'] =
  'application/json; charset=utf-8';

// const fetcher = (url) => fetch(url).then((r) => r.json());
const fetcher = (url) =>
  client({ method: 'GET', url }).then((response) => response.data);

const useSkills = () => {
  const { data, error } = useSWR(`/categories`, fetcher, {
    revalidateOnFocus: false
  });

  return {
    data,
    error
  };
};

export default useSkills;
