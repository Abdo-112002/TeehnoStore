import React, { SelectHTMLAttributes } from "react"

type optionItem = { key: string, value: string };

const selectVariants = {
    defVariant: " bg-transparent text-white text-[14px]",
    bgVariant: "text-textColor text-[14px] bg-[#E8E8E9] px-[24px]  py-[14px]",
}

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
    dataOptions: optionItem[];
    renderOptions: (item: optionItem) => React.ReactNode;
    selectVariant: keyof typeof selectVariants;
}

const SelectBox: React.FC<SelectBoxProps> = ({ dataOptions, renderOptions, selectVariant, ...allProps }) => {
    const options = dataOptions?.map((item) => {
        return renderOptions(item);
    });

    return (
        <select className={`cursor-pointer border-none outline-none ${selectVariants?.[selectVariant]}`} {...allProps}>
            {options}
        </select>
    )
}

export default SelectBox
