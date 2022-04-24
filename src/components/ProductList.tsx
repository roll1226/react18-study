const ProductList = ({ products }: { products: string[] }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
};

export default ProductList;
