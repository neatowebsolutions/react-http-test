import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const useSkills = () => {
  const { data, error } = useSWR(`/api/test`, fetcher, {
    revalidateOnFocus: false
  });

  return {
    data,
    error
  };
};

export default useSkills;
