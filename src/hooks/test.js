import useSWR from 'swr';
import HttpClient from '../httpClient';

const httpClient = new HttpClient({
  baseUrl: 'http://localhost:3002'
});

// const fetcher = (url) => fetch(url).then((r) => r.json());
// const fetcher = (url) =>
//   client({ method: 'GET', url }).then((response) => response.data);

const useSkills = () => {
  const { data, error } = useSWR(
    `/categories`,
    httpClient.get.bind(httpClient),
    {
      revalidateOnFocus: false
    }
  );

  return {
    data,
    error
  };
};

export default useSkills;
