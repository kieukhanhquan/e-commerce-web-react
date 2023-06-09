import React, { Fragment } from 'react'
import './CartItems.css'
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import { fetchCart } from '../../Redux/Slice/cartSlice';
import { updateQuantity } from '../../Redux/Slice/cartSlice';
import { deleteCartItem } from '../../Redux/Slice/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const CartItem = () => {

    const [cookies, setCookie,removeCookies] = useCookies(['user']);
    const dataCart = useSelector(state => state.cart.cart) || [];
    
    
    
    
    let dispatch = useDispatch()
    const fetchData = async () => {
        await dispatch(fetchCart(cookies.user))
    }
    const updateData = async (ProductID,quantity,user) => {
        await dispatch(updateQuantity({ ProductID, quantity, user }));
    }
    const deleteData = async(ProductID,user) =>{
        await dispatch(deleteCartItem({ProductID,user}))
    }
    
    // handle when update quantity
    const handleQuantityChange = (e,ProductID,user) => {
        const quantity = parseInt(e.target.value);
        updateData(ProductID,quantity,user);
        
      };
    // handle when click on delete button
    const handleCartDelete = (ProductID,user,name) => {
        if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${name} khỏi giỏ hàng?`)) {
            deleteData(ProductID,user);
          } else {
            // Không thực hiện gì cả
          }
        
    }


    useEffect(() => {
        if (cookies.user) {
            fetchData(); // Gọi API để lấy thông tin giỏ hàng từ backend và lưu nó vào redux
        }
      }, [dispatch, cookies.user]);
      
    return(
        <Fragment>
            {dataCart.map( (item) => {
                return (
                    
                    <div className="cart-row">
                <div className="cart-row-col1">
                    <img src={item.Image} alt="image"></img>
                </div>
                <div className="cart-row-col2">
                    <h3>
                        {item.Name}
                    </h3>
                    <span>
                        Thương hiệu: {item.Company}
                    </span>
                    <div>
                        <ToastContainer/>
                        <button type="submit" className="cart-delete"
                            onClick={() => handleCartDelete(item.ProductID,cookies.user,item.Name)}>Xóa</button>
                    </div>
                </div>
                    <div className="cart-row-col3">
                        
                        <div>
                            <input className="cart-item-number" 
                                type="number" min="1" max="10" 
                                value={item.quantity} 
                                onChange={(e) => handleQuantityChange(e, item.ProductID,cookies.user)}
                                
                            ></input>
                        </div>
                        
                            
                        
                    </div>
                    <div className="cart-row-col4">
                        <span className="cart-item-price" id=''>
                            {(item.Price*item.quantity).toLocaleString()}
                        </span>
                        <span>₫</span>
                        </div>
                    </div>
            
                        )
                    
                
            })}
        </Fragment>
    )
}

export default CartItem