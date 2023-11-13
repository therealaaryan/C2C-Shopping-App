import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Product from "../components/Product";

const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:3000/api/products")
            console.log(response.data);
            setProducts(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {isLoading ? (
                    "Loading"
                ) : (
                    <>
                    {products.length > 0 ? (
                        <>
                            {
                                products.map((product, index) => {
                                    return (
                                        <Product key={index} product={product}/>
                                    )
                                })
                            }
                        </>
                    ) : (
                        <div>
                            There is no product
                        </div>
                    )}
                    </>
                )}
            </div>
        </div>
    )
}


export default HomePage;