import { Link } from "react-router-dom"
import SelectBox from "../../common/ui/SelectBox"


const NavBarLinks = () => {
    const navBarLinksDropdown = [
        { key: "الأقسام", value: "الأقسام" },
        { key: "الأقسام", value: "الأقسام" },
        { key: "الأقسام", value: "الأقسام" },
        { key: "الأقسام", value: "الأقسام" },
    ]
    return (
        <nav className="py-[16px] flex bg-white border-b-[1px] items-center justify-center gap-5">
            <Link className="text-textColor text-[14px]" to={"/"}>الرئيسية</Link>
            <SelectBox selectVariant={"bgVariant"} dataOptions={navBarLinksDropdown} renderOptions={(item) =>
                (<option className="text-black" key={crypto.randomUUID()} value={item.key}>{item.value}</option>)
            } />
            <Link className="text-textColor text-[14px]" to={"/products"}>المنتجات</Link>
            <Link className="text-textColor text-[14px]" to={"/products"}>المنتجات</Link>
            <Link className="text-textColor text-[14px]" to={"/products"}>المنتجات</Link>
            <Link className="text-textColor text-[14px]" to={"/products"}>المنتجات</Link>
        </nav>
    )
}

export default NavBarLinks
