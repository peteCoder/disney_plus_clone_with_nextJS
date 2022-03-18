import React from 'react';
import Image from 'next/image';
import {HomeIcon, PlusIcon, SearchIcon, StarIcon} from '@heroicons/react/solid';
// next-auth client
import {getSession, signIn, signout, useSession} from 'next-auth/client';
import {useRouter} from 'next/router';

const Header = () => {

  const [session, _] = useSession();
  // _ represents loading
  const router = useRouter();

  return (
    <div className='sticky top-0 h-[72px] px-10 
      bg-[#030511] z-[1000] flex items-center md:px-12'>
        <Image
        onClick={() => router.push("/")}
          src="/images/logo.svg" 
          width={80} 
          height={80}
          className="cursor-pointer"
        />

        {
          session && (
            <div className="hidden ml-10 lg:flex items-center space-x-6">
              <a className="header-link group">
                <HomeIcon className="h-4" />
                <span className="span">Home</span>
              </a>
              <a className="header-link group">
                <SearchIcon className="h-4" />
                <span className="span">Search</span>
              </a>
              <a className="header-link group">
                <PlusIcon className="h-4" />
                <span className="span">Watchlist</span>
              </a>
              <a className="header-link group">
                <StarIcon className="h-4" />
                <span className="span">Originals</span>
              </a>
              <a className="header-link group">
                <img src="/images/movie-icon.svg" alt="" className="h-4" />
                <span className="span">Movies</span>
              </a>
              <a className="header-link group">
                <img src="/images/series-icon.svg" alt="" className="h-4" />
                <span className="span">Series</span>
              </a>
            </div>
          )
        }

        {
          !session ? (
            <button className='ml-auto uppercase border font-medium
              px-4 py-1.5 rounded tracking-wide hover:bg-white hover:text-black
              transition duration-200' onClick={signIn} >Login</button>
          ) : (
            <img 
              src={session.user.image} 
              onClick={signout}
              className='ml-auto h-12 w-12 
                rounded-full object-cover cursor-pointer' />
          )
        }
        
        
    </div>
  )
}

export default Header;


