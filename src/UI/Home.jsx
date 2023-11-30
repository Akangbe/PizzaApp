import { useSelector } from "react-redux";
import CreateUser from "../Features/User/CreateUser";
import Buttons from "./Buttons";
function Home() {
  const username =useSelector((state)=>state.user.username)
  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="text-xl text-center font-semibold text-stone-700 mb-4">
        The best pizza.
        <br />
        <span className="text-blue-500 md:text-3xl">

        Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ?<CreateUser/>:<Buttons to="/menu" type="primary">
        Continue ordering, {username}
        </Buttons>}
    </div>
  );
}

export default Home;
