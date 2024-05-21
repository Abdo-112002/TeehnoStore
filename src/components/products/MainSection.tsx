import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import mainImage from "../../assets/hero1.png"

const MainSection = () => {
    return (
        <div className="mt-16 mb-5 flex flex-col gap-4">
            <div className="w-full border bg-white relative h-[44px] rounded-sm overflow-hidden">
                <input type="text" className="border-none block absolute top-0 left-0 bottom-0 right-0 w-[100%]  outline-none p-4 pr-10" placeholder="ابحث عن المنتج" />
                <HiMiniMagnifyingGlass className="absolute text-[20px] top-[50%] right-3 translate-y-[-50%]" />
            </div>
            <div className="w-full h-[591px]">
                <img className="w-full h-[100%] object-cover" src={mainImage} alt="main image" />
            </div>
        </div>
    )
}

export default MainSection
