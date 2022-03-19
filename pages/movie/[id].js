import { getSession, useSession } from "next-auth/client";
import Head from "next/head";
import { fetchMovie, IMAGE_BASE_URL } from "../../API";
import { Header, Hero } from "../../components";


export const Movie = ({result}) => {
  const [session, _] = useSession();
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <meta name="description" content="disney+ clone react and next JS project" />
        <link rel="icon" href="images/favicon.svg" />
      </Head>

      <Header />
      {!session ? <Hero/> : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh - 72px)]">
            <Image 
              src={
                `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` || 
                `${IMAGE_BASE_URL}${result.poster_path}`
              }  
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
        </section>
      )}
      

    </div>
  )
}

export default Movie;

// getServerSideProps Function
export async function getServerSideProps(context){
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetchMovie(id);



  return {
    props:{
      session,
      result: request,
    }
  }
}