import { useMemo } from "react"
import { PiCreditCardLight, PiHeadphonesLight, PiPackageFill, PiTrophyThin } from "react-icons/pi"


const WhyUs = () => {

    const cardItems = useMemo(() => {
        return [
            {
                title: "الدفع المؤمَّن",
                desc: "أموالك آمنة.",
                icon: <PiCreditCardLight className="text-[32px]" />,
            },
            {
                title: "إرجاع خلال ٢٤ ساعة",
                desc: "ضمان استعادة بنسبة 100%",
                icon: <PiTrophyThin className="text-[32px]" />,
            },
            {
                title: "الدعم على مدار الساعة 24/7",
                desc: "التواصل المباشر أو الرسائل الفورية",
                icon: <PiHeadphonesLight className="text-[32px]" />,
            },
            {
                title: "توصيل سريع",
                desc: "توصيل في ٢٤ ساعة",
                icon: <PiPackageFill className="text-[32px]" />,
            }
        ]
    }, []);

    return (
        <div className="w-full bg-[#DDE8EF] py-[25px] px-4 md:px-[150px] flex items-center justify-between gap-12 flex-wrap lg:flex-nowrap">
            {
                cardItems?.map((item, index) => {
                    const Icon = () => item.icon;
                    return (
                        <div key={index} className="basis-[280px] flex items-center gap-4 p-[16px] bg-white min-h-[76px] text-[14px] text-black">
                            <Icon />
                            <div>
                                <p className="font-[500]">{item.title}</p>
                                <p className="text-textColor">{item.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WhyUs
