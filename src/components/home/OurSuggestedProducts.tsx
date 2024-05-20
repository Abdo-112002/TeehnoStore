import BestOffers from "./BestOffers"

import Banner1 from "../../assets/Banner1.png"

interface OurSuggestedProductsProps {
    title: string;
    renderPanner?: () => React.ReactNode;
    sidePanner?: () => React.ReactNode;
}

const OurSuggestedProducts = ({ renderPanner, sidePanner, title }: OurSuggestedProductsProps) => {
    return (
        <div className="flex flex-col gap-8 px-[100px]">
            <div className="flex items-start justify-between gap-[100px]">
                {sidePanner && sidePanner()}
                <div className="flex-1">
                    <BestOffers sectionTitle={title} showAll={false} />
                </div>
                {!sidePanner && <img src={Banner1} alt="Banner image" />}
            </div>
            {
                renderPanner && renderPanner()
            }
        </div>
    )
}

export default OurSuggestedProducts
