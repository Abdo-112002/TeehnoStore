
import { useProductsStore } from "../store/AllProductsStore";
import { HomeService } from "../services/HomeServices";
import useFetchData from "../hooks/useFetchData";
import { ProductTypes } from "../types/productsTypes";

const Home = () => {

    const setProductsData = useProductsStore((state) => state.setProducts);
    const products = useProductsStore((state) => state.products);
    const { loading, error } = useFetchData<ProductTypes>({
        isMutate: true,
        setData: setProductsData,
        serviceFunction: (params) => HomeService?.getAllProducts(params),
    });

    return (
        <div>
            hello
        </div>
    )
}

export default Home
