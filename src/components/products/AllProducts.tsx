import { Pagenation } from "..";
import useFetchData from "../../hooks/useFetchData";
import { HomeService } from "../../services/HomeServices";
import { useProductsStore } from "../../store/AllProductsStore";
import { ProductTypes } from "../../types/productsTypes";
import ProductItem from "../shared/ProductItem";


const AllProducts = () => {
    const setProductsData = useProductsStore((state) => state.setProducts);
    const products = useProductsStore((state) => state.products);
    const { loading, error } = useFetchData<ProductTypes>({
        isMutate: true,
        setData: setProductsData,
        serviceFunction: (params) => HomeService?.getAllProducts(params),
        params: "limit=20",
    });

    return (
        <>

            <Pagenation<ProductTypes> items={products} itemsPerPage={10}>
                {
                    (items) => {
                        return (
                            <div className="grid min-h-[500px] grid-cols-2 md:grid-cols-5 gap-5 ">
                                {
                                    loading ? 'Loading...' : error ? `${error}` :
                                        items?.map((item) => <ProductItem key={item.id} item={item} />)
                                }
                            </div>
                        )
                    }
                }
            </Pagenation>
        </>
    )
}

export default AllProducts
