import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


export default function Home() {
  const [session, _] = useSession();
  // _ represents loading
  
  return (
    <>
      <Head>
        <title>Disney+ Clone</title>
        <meta name="description" content="disney+ clone react and next JS project" />
        <link rel="icon" href="images/favicon.svg" />
      </Head>

      <Header/>
    </>
  )
}



export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
