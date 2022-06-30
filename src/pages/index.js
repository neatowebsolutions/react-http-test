import Head from 'next/head';
import useTest from '../hooks/test';

const HomePage = () => {
  const { data, error } = useTest();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>hello world</div>
    </>
  );
};

export default HomePage;
