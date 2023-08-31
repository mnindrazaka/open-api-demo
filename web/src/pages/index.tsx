import { Product } from "../../__generated__/api";
import React from "react";
import { api } from "@/http";

type FormProduct = {
  title: Product["title"];
};

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    api.listProduct().then((res) => setProducts(res.products));
  }, []);

  return (
    <ol>
      {products.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ol>
  );
}
