
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";


const ShopOurDepartments = () => {
    return (
        <div className="bg-[#DDE8EF] flex flex-col gap-8 py-12 px-[100px]">
            <h2 className="text-center text-blackColor text-[32px] font-semibold">تسوق من أقسامنا</h2>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand1} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand2} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand1} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand3} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand4} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand1} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand1} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
                <SwiperSlide className='bg-white py-[24px] px-[12px] rounded flex flex-col gap-2'>
                    <img className='block w-full max-w-[150px]' src={brand1} alt="brand1" />
                    <h3 className=''>موبايلات & تابلت</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ShopOurDepartments
