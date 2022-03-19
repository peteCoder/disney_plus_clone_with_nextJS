import Head from 'next/head';

// User Session
import { getSession, useSession } from 'next-auth/client';

// Components
import { 
  Branding, 
  Header, 
  Hero, 
  ShowsCollection, 
  MoviesCollection, 
  Slider
} from '../components';

// GET API Endpoints
import { 
  POPULAR_MOVIES_URL, 
  POPULAR_SHOWS_URL,
  TOP_RATED_MOVIES, 
  TOP_RATED_SHOWS
} from '../API';


// Function
export default function Home({
  popularMovies, 
  popularShows, 
  topRatedMovies, 
  topRatedShows 
}) {
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
      {
        session ? <Hero/> : (
          <main className='main'>
            <Slider/>
            <Branding/>

            {/* <MoviesCollection results={popularMovies} title="Popular Movies" /> */}
            {/* <ShowsCollection results={popularShows} title="Popular Shows" /> */}

            {/* <MoviesCollection results={topRatedMovies} title="Top Rated Movies" /> */}
            {/* <ShowsCollection results={topRatedShows} title="Top Rated Shows" /> */}

          </main>
        )
      }
    </>
  )
}


// getServerSideProps Function
export async function getServerSideProps(context){
  const session = await getSession(context);

  // const [ 
  //   popularMoviesRes, 
  //   popularShowsRes, 
  //   topRatedMoviesRes, 
  //   topRatedShowsRes
  // ] = await Promise.all([
  //   await fetch(POPULAR_MOVIES_URL), 
  //   await fetch(POPULAR_SHOWS_URL),
  //   await fetch(TOP_RATED_MOVIES), 
  //   await fetch(TOP_RATED_SHOWS)
  // ]);


  // const [ 
  //   popularMovies, 
  //   popularShows, 
  //   topRatedMovies, 
  //   topRatedShows 
  // ] = await Promise.all([
  //   await popularMoviesRes.json(), 
  //   await popularShowsRes.json(), 
  //   await topRatedMoviesRes.json(), 
  //   await topRatedShowsRes.json()
  // ]);

  return {
    props: {
      session,
      // popularMovies: popularMovies.results, 
      // popularShows: popularShows.results, 
      // topRatedMovies: topRatedMovies.results, 
      // topRatedShows: topRatedShows.results
    }
  }
}
