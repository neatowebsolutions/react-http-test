import axios from "axios";
import Head from "next/head";
import useTest from "../hooks/test";

const HomePage = () => {
  const { data, error } = useTest();
  const data2 = axios.get("http://localhost:3002/categories").then((res) => res.data);

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
