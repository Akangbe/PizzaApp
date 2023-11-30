import { useLoaderData } from "react-router-dom"
import {getMenu} from "../../Services/apiRestaurant"
import MenuItem from "../../Features/Menu/MenuItem"
// import MenuItem from "../../Features/Menu/MenuItem";
function Menu() {
  const menu =useLoaderData();
  console.log(menu)

return(
  <ul className="space-y-2 px-2 divide-y divide-stone-200">
    {/* {menu.map((pizza)=> <Menuitem pizza={pizza} key={pizza.id}/>)} */}
    {menu.map((pizza)=><MenuItem pizza={pizza} key={pizza.id}/>)}
  </ul>
)
}
export async function Loader(){
    const menu =await getMenu()
    return menu
}

export default Menu; 
