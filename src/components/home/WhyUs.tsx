import { PiCreditCardLight, PiHeadphonesLight, PiPackageFill, PiTrophyThin } from "react-icons/pi"


const WhyUs = () => {
    return (
        <div className="w-full bg-[#DDE8EF] py-[25px] px-4 md:px-[150px] flex items-center justify-between gap-12 flex-wrap lg:flex-nowrap">
            <div className="basis-[280px] flex items-center gap-4 p-[16px] bg-white min-h-[76px] text-[14px] text-black">
                <PiCreditCardLight className="text-[32px]" />
                <div>
                    <p className="font-[500]">الدفع المؤمَّن</p>
                    <p className="text-textColor">أموالك آمنة.</p>
                </div>
            </div>
            <div className="basis-[280px] flex items-center gap-4 p-[16px] bg-white min-h-[76px] text-[14px] text-black">
                <PiTrophyThin className="text-[32px]" />
                <div>
                    <p className="font-[500]">إرجاع خلال ٢٤ ساعة</p>
                    <p className="text-textColor">ضمان استعادة بنسبة 100%</p>
                </div>
            </div>
            <div className="basis-[280px] flex items-center gap-4 p-[16px] bg-white min-h-[76px] text-[14px] text-black">
                <PiHeadphonesLight className="text-[32px]" />
                <div>
                    <p className="font-[500]">الدعم على مدار الساعة 24/7</p>
                    <p className="text-textColor">التواصل المباشر أو الرسائل الفورية</p>
                </div>
            </div>
            <div className="basis-[280px] flex items-center gap-4 p-[16px] bg-white min-h-[76px] text-[14px] text-black">
                <PiPackageFill className="text-[32px]" />
                <div>
                    <p className="font-[500]">توصيل سريع</p>
                    <p className="text-textColor">توصيل في ٢٤ ساعة</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
