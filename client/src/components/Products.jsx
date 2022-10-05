import React, { useEffect, useState } from "react";
import Product from "./Product";
import { popularProducts } from "../data";
import styled from "styled-components";
import axios from "axios";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProduts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res);
      } catch (err) {}
    };
    getProduts();
  }, [cat]);

  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};
export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
