import { Product } from "../../__generated__/api";
import React from "react";
import { api } from "@/http";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    api.productsGet().then((res) => setProducts(res.products));
  }, []);

  return (
    <div>
      <Link href="/new">Create New</Link>
      <ol>
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </div>
  );
}
