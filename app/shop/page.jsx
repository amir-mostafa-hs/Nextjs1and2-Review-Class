export const ProductsData = [
  {
    id: 0,
    name: "Phone",
    price: 1000,
  },
  {
    id: 1,
    name: "Laptop",
    price: 2000,
  },
  {
    id: 2,
    name: "Hard",
    price: 3000,
  },
  {
    id: 3,
    name: "Flash Memory",
    price: 4000,
  },
];

const ShopPage = () => {
  return (
    <div>
      <h2>Welcome to Shop</h2>
      <ol>
        {ProductsData.map((item) => (
          <li key={item.id}>
            <a
              href={`/shop/${item.id}`}
              className="text-blue-500 hover:underline"
            >
              {item.name} - {item.price}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default ShopPage;
