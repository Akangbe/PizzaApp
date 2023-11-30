// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../Services/apiRestaurant";
import Buttons from "../../UI/Buttons";
import { useSelector } from "react-redux";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const FormErrors =useActionData()
  const cart = fakeCart;
  const username =useSelector((state)=>state.user.username)

  return (
    <div  className="py-6 px-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let`s go!</h2>

      <Form method="POST">
        <div className=" mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 "  >First Name</label>
          <input className="input  grow" type="text" name="customer" required  defaultValue={username} />
        </div>

        <div className=" mb-5 flex gap-2 flex-col sm:flex-row sm:items-center" >
          <label className="sm:basis-40">Phone number</label>
          <div className=" grow">
            <input className="input w-full" type="tel" name="phone" required />
            
          </div>
        </div>

        <div className=" mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            
            <input className="input w-full" type="text" name="address" required />

          </div>
          {FormErrors?.phone && <p className="text-xs mt-2 text-red-600 bg-red-100"> {FormErrors.isValidPhone}</p>}
        </div>

        <div className="mb-12 flex items-center gap-5 px-4">
          <input
          className="h-6 w-6 accent-blue-400 focus:ring-blue-400 focus:ring-offset-4 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <Buttons disabled={isSubmitting} type="primary" >
            {isSubmitting ? "Placing Order........" : "Order Now"}
          </Buttons>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  // const newOrder = await CreateOrder(order);
  const errors= {}
  if (!isValidPhone(order.phone))
  errors.phone= "please provide your valid Phone number we might need to contact you."
if (Object.keys(errors).length>0)
return errors
return null
// return redirect(`/order/${newOrder.id}`);
}
// console.log(redirect);
export default CreateOrder;
