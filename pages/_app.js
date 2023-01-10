import Head from "next/Head";
import "../styles/globals.css";
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  const title = "Sokadata";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}
