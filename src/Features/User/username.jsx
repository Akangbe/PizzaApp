// import { useSelector } from "react-redux";
// // import { start } from "repl";

// function username() {
//  const username= useSelector((state)=>state.user.username);
//   return <div className="text-sm font-semibold hidden md:block">{username}</div>;
// }
// export default username;

import { useSelector } from "react-redux";

// This is a functional component named `username`
function Username() {
  // The `useSelector` hook is used to select data from the Redux store
  // In this case, it selects the `username` from the `user` slice in the Redux store
  const username = useSelector((state) => state.user.username);

  // The component returns a div that displays the selected `username`
  return <div className="text-sm font-semibold hidden md:block">{username}</div>;
}

// The component is exported as `Username`
export default Username;
