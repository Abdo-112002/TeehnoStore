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
            <a className="text-textColor text-[14px]" href="#">الرئيسية</a>
            <SelectBox selectVariant={"bgVariant"} dataOptions={navBarLinksDropdown} renderOptions={(item) =>
                (<option className="text-black" key={crypto.randomUUID()} value={item.key}>{item.value}</option>)
            } />
            <a className="text-textColor text-[14px]" href="#">المنتجات</a>
            <a className="text-textColor text-[14px]" href="#">المنتجات</a>
            <a className="text-textColor text-[14px]" href="#">المنتجات</a>
            <a className="text-textColor text-[14px]" href="#">المنتجات</a>
        </nav>
    )
}

export default NavBarLinks
