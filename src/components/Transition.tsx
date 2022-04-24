import React, { useState, useTransition } from "react";
import ProductList from "./ProductList";
import { generateProducts } from "../utils/data";

const dummyProducts = generateProducts();

const filterProducts = (filterWord: string) => {
  if (!filterWord) return dummyProducts;

  return dummyProducts.filter((product) => product.includes(filterWord));
};

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [filterWord, setFilterWord] = useState("");

  const filteredProducts = filterProducts(filterWord);

  const updateFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilterWord(event.target.value);
    });
  };

  return (
    <div id="app">
      <h1>useTransition</h1>
      <input
        type="text"
        placeholder="数字を入力してください"
        onChange={(event) => updateFilterHandler(event)}
      />
      <p>
        {/* NOTE: 状態（ステート）の更新を遅らせている間は、「isPending = true」となる。 */}
        {isPending && (
          <span style={{ color: "white" }}>
            プロダクトをアップデート中・・・
          </span>
        )}
      </p>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Transition;
