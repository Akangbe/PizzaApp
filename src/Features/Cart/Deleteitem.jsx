import { useDispatch } from 'react-redux';
import Button from '../../UI/Buttons';
import { deleteItem } from './Cartslice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;