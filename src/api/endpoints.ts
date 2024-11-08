const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const endpoints = {
    login: "/login",
    banner: "/banner",
    promo: "/promo",
    user: "/user",
    category: `${BASE_URL}/categories`,
    activity: "/activities",
    cart: "/cart",
    paymentMethod: "/payment-method",
    transaction: "/transaction",
  };
  
  export default endpoints;
  