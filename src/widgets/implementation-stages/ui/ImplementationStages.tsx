import { useRef } from 'react';
import { ArrowIcon } from 'shared/assets/icons/arrow-icon';
import { Navigation } from 'swiper/modules';
import { Swiper, type SwiperRef,SwiperSlide } from 'swiper/react';

import { stageSlidesItems } from '../lib';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { StageSlide } from './StageSlide';

import 'swiper/css';

export const ImplementationStages = () => {
    const swiperRef = useRef<SwiperRef | null>(null);

    return (
        <div className='container'>
            <div className='p-[36px] rounded-[12px] bg-white'>
                <div className='flex gap-[24px] items-center'>
                    <p className="text-[24px]/[24px] font-semibold">Этапы реализации</p>
                    <div className='flex gap-[8px]'>
                        <div className='rounded-[50%] bg-[#D9D9D9] h-[12px] w-[16px]'/>
                        <p className='text-[14px]/[14px] font-medium text-[#505050]'>План</p>
                    </div>
                    <div className='flex gap-[8px]'>
                        <div className='rounded-[50%] bg-[#00863D] h-[12px] w-[16px]'/>
                        <p className='text-[14px]/[14px] font-medium text-[#505050]'>Факт</p>
                    </div>
                    <div className='flex gap-[8px]'>
                        <div className='rounded-[50%] bg-[#FFCC00] h-[12px] w-[16px]'/>
                        <p className='text-[14px]/[14px] font-medium text-[#505050]'>Требуются данные</p>
                    </div>
                    <div className='ml-auto cursor-pointer'>
                        <p className='px-[24px] py-[16px] rounded-[12px] bg-custom-gradient text-white text-[18px]/[18px] font-medium'>Просмотр КСГ</p>
                    </div>
                </div>
                <div className='flex relative align-middle mt-[32px]'>
                    <button
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                        className="custom-prev cursor-pointer"
                        type='button'
                    >
                        <ArrowIcon className='h-[8px] w-[24px] text-[#505050] -rotate-90' />
                    </button>
                    <Swiper
                        ref={swiperRef}
                        className='h-[54px] w-full'
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={9}
                        freeMode
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                    >
                        {stageSlidesItems.map((item, index) => (
                            <SwiperSlide key={index} className='w-fit'>
                                <StageSlide
                                    name={item.name}
                                    lineClassName={item.lineClassName}
                                    blockClassName={item.blockClassName}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                        className="custom-next cursor-pointer"
                        type='button'
                    >
                        <ArrowIcon className='h-[8px] w-[24px] text-[#505050] rotate-90 mr-[15px]' />
                    </button>
                    <div className='cursor-pointer'>
                        <p className='py-[16px] px-[24px] text-[16px]/[16px] font-normal rounded-[4px] bg-[#F1F3F7] whitespace-nowrap'>Все этапы</p>
                    </div>
                </div>
            </div>
        </div>
    );
};