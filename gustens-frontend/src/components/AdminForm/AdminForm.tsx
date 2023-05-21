import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./AdminForm.module.css";
import { AdminFormType, defaultAdminForm } from "./AdminFormType";

const AdminForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState<AdminFormType>(defaultAdminForm);

  useEffect(() => {
    const productUrl = `http://localhost:8080/api/products/${params.productId}`;
    const fetchData = async () => {
      //setIsLoading(true);
      await fetch(productUrl)
        .then((response) => response.json())
        .then((result) => {
          setProduct(result);
        });
      //setIsLoading(false);
    };

    fetchData();
  }, [params.productId]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    updateRecord().then(() => navigate("/"));
  };

  const updateRecord = async () => {
    await fetch("http://localhost:8080/api/products-update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify(product),
    });
  };

  return (
    <Fragment>
      <div className={classes.title}>Uppdatera produkten</div>
      <div className={classes.AdminForm}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="namn">Namn</label>
            <div>
              <input
                type="text"
                name="namn"
                value={product.namn}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="namn">Urspung</label>
            <div>
              <input
                type="text"
                name="ursprung"
                value={product.ursprung}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="namn">Scoville</label>
            <div>
              <input
                type="text"
                name="scoville"
                value={product.scoville}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="namn">Styckpris</label>
            <div>
              <input
                type="text"
                name="styckpris"
                value={product.styckpris}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="namn">Antal</label>
            <div>
              <input
                type="text"
                name="antal"
                value={product.antal}
                onChange={handleChange}
              />
            </div>
          </div>
          <button>ADD</button>
        </form>
        <br />
      </div>
    </Fragment>
  );
};

export default AdminForm;
