
import { useAuth } from "@/hooks/useAuth";
import { withAuth } from "@/middleware/withAuth";

const Home = () => {
  const { user } = useAuth();
  console.log("The user is"+user);
  return (<div>test</div>)
}

export default withAuth(Home);
