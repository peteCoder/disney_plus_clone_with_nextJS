import { useRouter } from "next/router";
import Image from "next/image";
import { IMAGE_BASE_URL } from '../API';

const ShowsThumbnail = ({result}) => {
  const router = useRouter();
  return (
    <div className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden
      shadow-lg cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10 
      hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        onClick={() => router.push(`/show/${result.id}`)}
      >
      <Image 
        src={
          `${IMAGE_BASE_URL}${result.backdrop_path || result.poster_path}` || 
          `${IMAGE_BASE_URL}${result.poster_path}`
        }  
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />

    </div>
  )
}


export default ShowsThumbnail;