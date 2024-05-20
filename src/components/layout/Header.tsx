import { PiPhoneCall, PiShoppingCartSimple, PiUser } from "react-icons/pi";
import SelectBox from "../../common/ui/SelectBox";
import { langOptions } from "../../utils/utils";
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/Logo.svg';
import { CiHeart } from "react-icons/ci";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { NavBarLinks } from '../../components';



const Header = () => {
    return (
        <header className="bg-mainColor w-full">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap py-3 px-4 md:px-[150px] border-b border-gray-400">
                    <div dir="ltr" className="flex items-center gap-2 text-white font-[400] text-[18px]">
                        <p>+1-23456789012</p>
                        <PiPhoneCall className="rotate-[-100deg] text-[28px]" />
                    </div>
                    <div className="text-white flex items-center gap-4 flex-wrap">
                        <SelectBox selectVariant={"defVariant"} dataOptions={langOptions} renderOptions={(item) =>
                            (<option className="text-black" key={crypto.randomUUID()} value={item.key}>{item.value}</option>)
                        } />
                        <div className="text-[16px] cursor-pointer flex items-center gap-2">
                            <FaInstagram />
                            <FaYoutube />
                            <FaPinterestP />
                            <FaFacebook />
                            <FaTwitter />
                        </div>
                        <span className="text-[14px]">: Follow us</span>
                    </div>
                </div>
                <div className="flex px-4 md:px-[190px] py-[20px] items-center justify-between gap-4 flex-wrap">
                    <div>
                        <img decoding="async" className="max-w-[223px] aspect-auto" src={logo} alt="logo" />
                    </div>
                    <div className="w-full max-w-[650px] relative border py-[14px] px-[20px] h-[48px]">
                        <input placeholder="بحث" className="block border-none outline-none px-5 absolute top-0 left-0 bottom-0 right-0" type="text" />
                        <HiMiniMagnifyingGlass className="absolute text-[20px] top-[50%] left-4 translate-y-[-50%]" />
                    </div>
                    <div className="text-white text-[32px] flex items-center gap-4">
                        <PiUser />
                        <CiHeart />
                        <PiShoppingCartSimple />
                    </div>
                </div>
                <NavBarLinks />
            </div>
        </header>
    )
}

export default Header
