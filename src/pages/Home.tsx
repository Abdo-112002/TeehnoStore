import { useEffect } from "react"
import { HomeService } from "../services/HomeServices";
import { useProductsStore } from "../store/AllProductsStore";


const Home = () => {

    const setProductsData = useProductsStore((state) => state.setProducts);
    const products = useProductsStore((state) => state.products);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await HomeService.getAllProducts();
                setProductsData(res);
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, [setProductsData]);

    console.log("products : ", products);

    return (
        <div>
            hello
        </div>
    )
}

export default Home
