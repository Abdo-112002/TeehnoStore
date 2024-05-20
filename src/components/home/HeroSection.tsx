import img1 from '../../assets/hero1.png'
import img2 from '../../assets/hero2.png'
import img3 from '../../assets/hero3.png'
const HeroSection = () => {
    return (
        <div className="px-4 -mt-4 md:px-[80px] max-h-[587px] flex items-start justify-between flex-wrap gap-5">
            <div className="h-[100%] max-w-[800px]">
                <img className="w-full object-cover h-[100%]" src={img1} alt="hero image" />
            </div>
            <div className="flex flex-1 flex-col gap-5">
                <img className="w-full h-full md:h-[306px]" src={img2} alt="hero image" />
                <img className="w-full h-full md:h-[257px]" src={img3} alt="hero image" />
            </div>
        </div>
    )
}

export default HeroSection
