



import { Link } from 'react-router-dom';
import Buttons from '../../UI/Buttons';
import LinkButton from '../../UI/LinkButton';
// Import CartItem if available
import CartItem from './CartItem'; // Import CartItem if available in the same directory
import { useSelector } from 'react-redux';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetable',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username =useSelector((state)=>state.user.username)
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu" className='text-blue-500 hover:text-blue-800 hover:underline'>&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

      <ul className='divide-y divide-stone-200 border-b mt-3 '>
        {cart.map(item => <CartItem item={item} key={item.pizzaId} />)} {/* Using item.pizzaId as a key */}
      </ul>

      <div className='mt-6 space-x-2'> 
        <Buttons to="/order/new" type="primary">Order pizzas</Buttons>
        <Buttons type="secondary">Clear cart</Buttons>
      </div>
    </div>
  );
}

export default Cart;
