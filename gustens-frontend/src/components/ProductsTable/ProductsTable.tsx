import { Fragment, useEffect, useState } from "react";
import classes from "./ProductsTable.module.css";
import { useNavigate } from "react-router-dom";
import { ProductsTableType, defaultProductsTable } from "./ProductTables";

const ProductsTable = () => {
  const navigate = useNavigate();

  const [allProducts, setAllProducts] =
    useState<ProductsTableType>(defaultProductsTable);

  useEffect(() => {
    const allProductsUrl = `http://localhost:8080/api/products`;
    const fetchData = async () => {
      //setIsLoading(true);
      await fetch(allProductsUrl)
        .then((response) => response.json())
        .then((result) => {
          setAllProducts(result);
        });
      //setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  const toEditPage = (id: any) => {
    navigate(`/edit/${id}`);
    console.log(id);
  };

  return (
    <Fragment>
      <div className={classes.ProductsTable}>
        <table>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Urspung</th>
              <th>Scoville</th>
              <th>Styckpris</th>
              <th>Antal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {allProducts.map((item: any, key: any) => {
              return (
                <tr key={key}>
                  <td>{item.namn}</td>
                  <td>{item.ursprung}</td>
                  <td>{item.scoville}</td>
                  <td>{item.styckpris}</td>
                  <td>{item.antal}</td>
                  <td>
                    <button onClick={() => toEditPage(item.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ProductsTable;
