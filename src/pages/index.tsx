import Auth from "@/components/Auth";
import { Logo } from "@/utils/icons";

const Home = () => {
  return (
    <div className="bg-primaryBG flex items-center flex-col w-screen h-screen justify-center">
      <div className="mb-8">
        <Logo />
      </div>
      <Auth />
    </div>
  );
};

export default Home;
