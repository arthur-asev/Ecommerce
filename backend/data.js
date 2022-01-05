import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "admin",
      email: "arthurginho02@gmail.com",
      password: bcrypt.hashSync("admin", 8),
      isAdmin: true,
    },
    {
      name: "zezin",
      email: "arthurginho03@gmail.com",
      password: bcrypt.hashSync("123", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "camisa branca Lacoste",
      category: "camisas",
      image: "/images/lp.jpg",
      price: 220,
      countInStock: 14,
      brand: "Lacoste",
      rating: 1.5,
      numReviews: 17,
      description:
        " camisa lacoste branca 100% algodão produto de alta qualidade",
    },
    {
      name: "camisa cinza Lacoste",
      category: "camisas",
      image: "/images/lp1.jpg",
      price: 320,
      countInStock: 50,
      brand: "Lacoste",
      rating: 2.5,
      numReviews: 1,
      description:
        "camisa lacoste cinza 100% algodão produto de alta qualidade",
    },
    {
      name: "moletom majin boo ",
      category: "moletons",
      image: "/images/md.jpg",
      price: 200,
      countInStock: 10,
      brand: "indefinida",
      rating: 4.5,
      numReviews: 60,
      description: "produto de alta qualidade",
    },
    {
      name: "moleton preto",
      category: "moletons",
      image: "/images/mp.jpg",
      price: 200,
      countInStock: 0,
      brand: "indefinido",
      rating: 4.5,
      numReviews: 0,
      description: "produto de alta qualidade",
    },
    {
      name: "camisa verde",
      category: "camisas",
      image: "/images/p2.jpg",
      price: 300,
      countInStock: 20,
      brand: "Oakley",
      rating: 4.5,
      numReviews: 5,
      description: "produto de alta qualidade",
    },
  ],
};
export default data;
