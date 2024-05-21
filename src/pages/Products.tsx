import { AllProducts, MainSection, PageTitle } from "../components"


const Products = () => {

    return (
        <div className="px-4 md:px-[180px]">
            <PageTitle title={["الصفحة الرئيسية", "تسوق الآن", "أجهزة الكترونية"]} />
            <MainSection />
            <AllProducts />
        </div>
    )
}

export default Products
