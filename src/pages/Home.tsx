
import { BestOffers, EcommercePanner, HeroSection, OurSuggestedProducts, ShopOurDepartments, WhyUs } from "../components";
import useFetchData from "../hooks/useFetchData";
import { HomeService } from "../services/HomeServices";
import { useProductsStore } from "../store/AllProductsStore";
import { ProductTypes } from "../types/productsTypes";

import BannerProduct1 from "../assets/BannerProduct1.png"
import BannerProduct2 from "../assets/BannerProduct2.png"
import Banner1 from "../assets/Banner1.png";

const Home = () => {
    const setProductsData = useProductsStore((state) => state.setProducts);
    useFetchData<ProductTypes>({
        isMutate: true,
        setData: setProductsData,
        serviceFunction: (params) => HomeService?.getAllProducts(params),
        params: "limit=8",
    });
    return (
        <>
            <HeroSection />
            <WhyUs />
            <div className="px-4 md:px-[100px]">
                <BestOffers sectionTitle="أفضل العروض" showAll={"/products"} />
            </div>
            <ShopOurDepartments />
            <OurSuggestedProducts
                title="منتجاتنا المقترحة"
                renderPanner={() => (
                    <div className="flex justify-between gap-4 flex-wrap">
                        <div className="flex-1 max-h-[300px]">
                            <img className="w-full h-full object-cover" src={BannerProduct2} alt="imag panner" />
                        </div>
                        <div className="flex-1 max-h-[300px]">
                            <img className="w-full h-full object-cover" src={BannerProduct1} alt="imag panner" />
                        </div>
                    </div>
                )}
            />
            <div className="bg-[#DDE8EF] py-[80px]">
                <OurSuggestedProducts
                    title="تسوق الآن منتجاتنا المقترحة"
                    sidePanner={() => <img src={Banner1} alt="Banner image" />}
                />
            </div>
            <EcommercePanner />
        </>
    )
}

export default Home
