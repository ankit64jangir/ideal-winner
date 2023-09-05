import LogIn from "@/components/Auth/LogIn";
import { Logo } from "@/utils/icons";

const Home = () => {
  return (
    <div className="bg-primaryBG flex items-center flex-col w-screen h-screen justify-center">
      <div className="mb-8">
        <Logo />
      </div>
      <LogIn />
    </div>
  );
};

export default Home;
