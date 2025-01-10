import withProtectedRoute from "@/components/Auth/withWrappedProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Home = () => {
  const { user } = useAuth();
  return (<div>{}</div>)
}

export default withProtectedRoute(Home);
