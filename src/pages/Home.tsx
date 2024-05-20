
import { useProductsStore } from "../store/AllProductsStore";
import { HomeService } from "../services/HomeServices";
import useFetchData from "../hooks/useFetchData";
import { ProductTypes } from "../types/productsTypes";
import { HeroSection, WhyUs } from "../components";

const Home = () => {

    const setProductsData = useProductsStore((state) => state.setProducts);
    const products = useProductsStore((state) => state.products);
    const { loading, error } = useFetchData<ProductTypes>({
        isMutate: true,
        setData: setProductsData,
        serviceFunction: (params) => HomeService?.getAllProducts(params),
    });

    return (
        <>
            <HeroSection />
            <WhyUs />
        </>
    )
}

export default Home
