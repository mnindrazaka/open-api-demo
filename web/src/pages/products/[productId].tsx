import { ProductBody } from "../../../__generated__/api";
import React from "react";
import { api } from "@/http";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [productForm, setProductForm] = React.useState<ProductBody>({
    brand: "",
    category: "",
    price: 0,
    stock: 0,
    title: "",
    description: "",
    discountPercentage: 0,
    images: [],
    thumbnail: "",
  });

  const router = useRouter();
  const productIdQuery = Array.isArray(router.query.productId)
    ? router.query.productId[0]
    : router.query.productId;

  React.useEffect(() => {
    if (productIdQuery)
      api
        .productsProductIdGet({ productId: parseInt(productIdQuery) })
        .then(setProductForm);
  }, [productIdQuery]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (productIdQuery) {
      api
        .productsProductIdPut({
          productBody: productForm,
          productId: parseInt(productIdQuery),
        })
        .then(() => {
          alert("success");
          router.push("/");
        });
    }
  };

  return (
    <div>
      <Link href="/">Back</Link>
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input
            type="text"
            onChange={(event) =>
              setProductForm((prev) => ({ ...prev, title: event.target.value }))
            }
            value={productForm.title}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
