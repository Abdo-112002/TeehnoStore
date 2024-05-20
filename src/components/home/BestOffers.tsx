import { Link } from "react-router-dom";
import { HiMiniArrowLeft } from "react-icons/hi2"

import ProductItem from "../shared/ProductItem"

import { useProductsStore } from "../../store/AllProductsStore";
import useFetchData from "../../hooks/useFetchData";

import { ProductTypes } from "../../types/productsTypes";
import { HomeService } from "../../services/HomeServices";


const BestOffers = ({ showAll = "#", sectionTitle }: { showAll: string | boolean; sectionTitle: string }) => {

    const products = useProductsStore((state) => state.products);
    const setProductsData = useProductsStore((state) => state.setProducts);
    const { loading, error } = useFetchData<ProductTypes>({
        isMutate: false,
        setData: setProductsData,
        serviceFunction: (params) => HomeService?.getAllProducts(params),
    });

    return (
        <div className="w-full py-3 flex flex-col gap-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-[24px] font-semibold text-blackColor">{sectionTitle}</h2>
                {
                    showAll && (
                        <Link className="flex items-center gap-1 font-semibold text-[14px] text-primaryColor" to={`${showAll}`}>
                            تصفح الكل
                            <HiMiniArrowLeft />
                        </Link>
                    )
                }

            </div>
            <div className="grid min-h-[500px] grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 ">
                {
                    loading ? 'Loading...' : error ? `${error}` :
                        products?.map((item) => <ProductItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default BestOffers
