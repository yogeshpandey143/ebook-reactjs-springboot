import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { galleryData } from "../Data/Data";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [books, setBooks] = useState([]);
  const [articles, setArticles] = useState([]);
  const  [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  

// fetchBooks function to get books from galleryData
  const fetchBooks = async () => {
    setBooks(galleryData);
  }


  // Function to add item to cart
  const addToCart = () => {
     let cartData = structuredClone(cartItems);

     if(cartData[itemId]) {
       cartData[itemId].quantity += 1;
     }
     else {
       cartData[itemId] = { ...item, quantity: 1 };
     }

     setCartItems(cartData);
     toast.success("Item added to cart");
  }


  // update cart items
   const updateCartItems = (itemId, quantity) => {
     let cartData = structuredClone(cartItems);

     if(quantity === 0) {
       delete cartData[itemId];
     } else {
       cartData[itemId].quantity = quantity;
     }

     setCartItems(cartData);
     toast.success("Cart updated successfully");
   }


   // remove product from cart

  const removeFromCart = (itemId,quantity) => {

    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    if(cartData[itemId].quantity <= 1) {
      delete cartData[itemId];
    } else {
      cartData[itemId].quantity -= 1;
    }
    toast.success("Item removed from cart");
  }

  useEffect(() => {
   fetchBooks();
  },[]);

  const value = { navigate, user, setUser, isSeller, setIsSeller, showUserLogin,  setShowUserLogin, books, setBooks, articles, setArticles, addToCart,updateCartItems, cartItems, setCartItems , removeFromCart,searchQuery, setSearchQuery };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
