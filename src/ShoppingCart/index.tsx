import {createContext, useContext, ReactNode, useState, useEffect} from 'react';
import {ProductProps} from '../types/Product';
import Product from '../Produse/Product';

export interface ProductItemProps {
  product: ProductProps;
}

const ShoppingCartContext = createContext<{
  cart: {product: ProductProps; qty: number}[];
  total: number;
  addProduct: (product: ProductProps) => void;
  handleRemoveItem: (productId: number) => void;
  addToFavorite: (product: ProductProps) => void;
  removeFromFavorite: (productId: number) => void;
  favorite: ProductProps[];
}>({
  cart: [],
  total: 0,
  addProduct: () => {},
  handleRemoveItem: () => {},
  addToFavorite: () => {},
  removeFromFavorite: () => {},
  favorite: [],
});

const ShoppingCartProvider = ({children}: {children: ReactNode}) => {
  const [cart, setCart] = useState<{product: ProductProps; qty: number}[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [favorite, setFavorite] = useState<ProductProps[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      let calculatedTotal = 0;
      for (let i = 0; i < cart.length; i++) {
        calculatedTotal += cart[i].product.price * cart[i].qty;
      }
      setTotal(calculatedTotal);
    } else {
      setTotal(0);
    }
  }, [cart]);

  const addProduct = (product: ProductProps) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex(
      prod => prod.product.id === product.id,
    );
    if (productIndex === -1) {
      newCart.push({
        qty: 1,
        product: {...product},
      });
    } else {
      newCart[productIndex].qty += 1;
    }
    setCart(newCart);
  };

  const handleRemoveItem = (productId: number) => {
    const newCart = cart.filter(item => item.product.id !== productId);
    setCart(newCart);
  };

  const addToFavorite = (product: ProductProps) => {
    const newFavorit = [...favorite];
    if (!newFavorit.some(favProd => favProd.id === product.id)) {
      newFavorit.push(product);
    }
    setFavorite(newFavorit);
  };

  const removeFromFavorite = (productId: number) => {
    const newFavorite = favorite.filter(favProd => favProd.id !== productId);
    setFavorite(newFavorite);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        total,
        addProduct,
        handleRemoveItem,
        addToFavorite,
        removeFromFavorite,
        favorite,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext);
  return shoppingCart;
};
