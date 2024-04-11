import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../utils/store/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const CartInfo = (item) => {
	

	const { name, price, defaultPrice, id } = item[0];
	const [items, setItem] = useState([]);


	useEffect(()=>{
		setItem(name)
	},[])
	

	const count = item[1];
	const dispatch = useDispatch();
	const addFoodItem = (i) => {
		console.log("clicked");
		dispatch(increaseCount(i));
	};
	const removeFoodItem = (i) => {
		dispatch(decreaseCount(i));
	};
	return (
		<div className="cart-info">
			<div>
				<p className="cart-info-name">{name}</p>
			</div>
			<div>
				<span className="cart-remove-btn">
					<button
						className=""
						onClick={() => {
							removeFoodItem(item[0].id);
							toast.success("Item removed successfully");
						}}
					>
						&minus;
					</button>
					<span>{count}</span>
					<button
						className=""
						onClick={() => {
							addFoodItem(item[0].id);
							toast.success("Item added successfully");
						}}
					>
						+
					</button>
				</span>
				<p>₹{(count * (price || defaultPrice)) / 100}</p>
			</div>
		</div>
	);
};
export default CartInfo;
