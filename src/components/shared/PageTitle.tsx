

const PageTitle = ({ title }: { title: string[] }) => {
    return (
        <div className="text-textColor -mt-4 text-[16px] flex items-center gap-1">
            {
                title?.length
                    ? title?.map((text, index) => {
                        return (
                            <div key={crypto.randomUUID()} className={`flex items-center gap-1 ${title?.length - 1 === index ? "text-primaryColor" : ""}`}>
                                <span>{text}</span>
                                <span>{title?.length - 1 !== index && ">"}</span>
                            </div>
                        )
                    }) : title
            }
        </div>
    )
}

export default PageTitle
