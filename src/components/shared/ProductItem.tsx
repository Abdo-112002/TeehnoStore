import { FaStar } from "react-icons/fa"
import { ProductTypes } from "../../types/productsTypes"
import { IoEyeOutline } from "react-icons/io5"
import { PiShoppingCartSimpleLight } from "react-icons/pi"
import { CiHeart } from "react-icons/ci"


const ProductItem = ({ item }: { item: ProductTypes }) => {
    return (
        <div className="border w-full bg-white border-[#C9CFD2] flex flex-col gap-3  rounded px-3 py-3">
            <div className="w-full h-[100%] group  p-3 relative">
                <img className="w-full h-full  aspect-square object-contain" src={item.image} alt={item.description} />
                <div className="w-full h-full transition-all ease-in-out duration-300 group-hover:scale-100 cursor-pointer bg-[#00000033] absolute scale-0 top-0 left-0 flex items-center justify-center gap-2">
                    <div className="w-[48px] text-white bg-orangeColor h-[48px] text-[24px] rounded-full flex items-center justify-center" >
                        <IoEyeOutline />
                    </div>
                    <div className="w-[48px] bg-white h-[48px] text-[24px] rounded-full flex items-center justify-center" >
                        <PiShoppingCartSimpleLight />
                    </div>
                    <div className="w-[48px] bg-white h-[48px] text-[24px] rounded-full flex items-center justify-center" >
                        <CiHeart />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="text-[#FA8232] flex items-center gap-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <span className="text-[12px] text-[#77878F]">({item.rating.count})</span>
                </div>
                <h2 className="text-[14px] text-blackColor">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</h2>
                <div className="flex items-center gap-2 text-[14px]">
                    <span className="text-[#929FA5] line-through">858.99 ر.س</span>
                    <span className="text-primaryColor font-semibold">{item.price} ر.س</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
