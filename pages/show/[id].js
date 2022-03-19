import { getSession, useSession } from "next-auth/client";
import { fetchTVShow } from "../../API";


export const Show = () => {
  const [session, _] = useSession();
  return (
    <div>Show</div>
  )
}
  
  export default Show;
  

  // getServerSideProps Function
export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props:{
      session,
    }
  }
}