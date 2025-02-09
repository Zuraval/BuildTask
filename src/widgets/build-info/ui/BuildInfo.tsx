import { useState } from 'react';
import { CameraIcon } from "shared/assets/icons/camera-icon";
import { LinkIcon } from "shared/assets/icons/link-icon";

import House11 from '../../../shared/assets/images/House1-1.jpg';
import House12 from '../../../shared/assets/images/House1-2.jpg';
import House13 from '../../../shared/assets/images/House1-3.jpg';
import House14 from '../../../shared/assets/images/House1-4.jpg';
import House21 from '../../../shared/assets/images/House2-1.jpg';
import House22 from '../../../shared/assets/images/House2-2.jpg';
import House23 from '../../../shared/assets/images/House2-3.jpg';
import House24 from '../../../shared/assets/images/House2-4.jpg';

export const BuildInfo = () => {

    const [selectedImage, setSelectedImage1] = useState<string>(House11);
    const [activeIndex, setActiveIndex1] = useState<number>(0);

    const [selectedImage2, setSelectedImage2] = useState<string>(House21);
    const [activeIndex2, setActiveIndex2] = useState<number>(0);

const handleImageClick = (image: string, index: number) => {
    setSelectedImage1(image);
    setActiveIndex1(index);
};

const handleImageClick2 = (image: string, index: number) => {
    setSelectedImage2(image);
    setActiveIndex2(index);
};

    return (
        <div className="">
            <div className="py-[23px] pr-[24px] pl-[36px] bg-white rounded-[12px] w-[870px]">
                <div className="flex">
                    <div>
                        <div>
                            <img src={selectedImage} alt="building" className='h-[247px] w-[270px] rounded-[8px]'/>
                        </div>
                        <div className="flex gap-[17px] mt-[11px] justify-center">
                            {[House11, House12, House13, House14].map((image, index) => (
                                <button
                                    type='button'
                                    key={index}
                                    onClick={() => handleImageClick(image, index)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleImageClick(image, index);
                                        }
                                    }}
                                    className="p-0 border-none bg-transparent cursor-pointer"
                                    aria-label={`Select image ${index + 1}`}
                                >
                                    <img
                                        src={image}
                                        alt="building"
                                        className={`size-[50px] rounded-[8px] ${
                                            index === activeIndex ? 'border-[2px] border-[#C00000]' : ''
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="ml-[11px]">
                        <div>
                            <img src={selectedImage2} alt="building" className='h-[247px] w-[270px] rounded-[8px]'/>
                        </div>
                        <div className="flex gap-[17px] mt-[11px] justify-center">
                            {[House21, House22, House23, House24].map((image2, index2) => (
                                <button
                                    type='button'
                                    key={index2}
                                    onClick={() => handleImageClick2(image2, index2)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleImageClick2(image2, index2);
                                        }
                                    }}
                                    className="p-0 border-none bg-transparent cursor-pointer"
                                    aria-label={`Select image ${index2 + 1}`}
                                >
                                    <img
                                        src={image2}
                                        alt="building"
                                        className={`size-[50px] rounded-[8px] ${
                                            index2 === activeIndex2 ? 'border-[2px] border-[#C00000]' : ''
                                        }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[20px] ml-[24px] w-[235px]">
                        <div>
                            <p className="text-[14px]/[14px] font-normal text-[#505050]">Дата контрактации</p>
                            <p className="text-[20px]/[20px] font-semibold pt-[8px]">20.06.2023</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[14px]/[14px] font-normal text-[#505050]">Заказчик</p>
                                <p className="[20px]/[20px] font-semibold pt-[8px]">ДГП</p>
                            </div>
                            <LinkIcon className="cursor-pointer"/>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[14px]/[14px] font-normal text-[#505050]">Генподрядчик</p>
                                <p className="[20px]/[20px] font-semibold pt-[8px]">ООО “ГП-МФС”</p>
                            </div>
                            <LinkIcon className="cursor-pointer"/>
                        </div>
                        <div>
                            <p className="text-[14px]/[14px] font-normal text-[#505050]">Этажность</p>
                            <p className="[20px]/[20px] font-semibold pt-[8px]">14</p>
                        </div>
                        <div>
                            <p className="text-[14px]/[13px] font-medium text-[#C00000]">Видеокамеры</p>
                            <CameraIcon className="mt-[8px]" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[55px] mt-[16px] ml-[38px]">
                        <div>
                            <p className="text-[14px]/[16px] font-normal text-[#505050]">Дата последнего продления <br />(количество продлений)</p>
                            <p className="text-[20px]/[20px] font-semibold pt-[8px]">25.09.2024 (5)</p>
                        </div>
                        <div className="flex flex-col justify-end">
                            <p className="text-[14px]/[16px] font-normal text-[#505050]">Прогноз получения РВ</p>
                            <p className="text-[20px]/[20px] font-semibold pt-[12px]">30.12.2024</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex gap-[100px] mt-[16px] py-[19px] px-[38px] border-[2px] border-[#E5E7EB] rounded-[10px]">
                            <div className="flex flex-col justify-end">
                                <p className="text-[14px]/[16px] font-normal text-[#505050]">Дата включения АИП</p>
                                <p className="text-[20px]/[20px] font-semibold pt-[12px]">25.09.2019</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="text-[14px]/[16px] font-normal text-[#505050]">Сумма по АИП</p>
                                <p className="text-[20px]/[20px] font-semibold pt-[12px]">1,871 млрд руб. (0%)</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <p className="text-[14px]/[16px] font-normal text-[#505050]">Аванс</p>
                                <p className="text-[20px]/[20px] font-semibold pt-[12px]">0 млрд руб. (0%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}