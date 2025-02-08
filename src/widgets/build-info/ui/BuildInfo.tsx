import { CameraIcon } from "shared/assets/icons/camera-icon";
import { LinkIcon } from "shared/assets/icons/link-icon";

export const BuildInfo = () => {
    return (
        <div className="">
            <div className="py-[23px] pr-[24px] pl-[36px] bg-white rounded-[12px] w-[870px]">
                <div className="flex">
                    <div>
                        <div>
                            <img src="src\shared\assets\images\House1-1.png" alt="building"/>
                        </div>
                        <div className="flex gap-[17px] mt-[11px] justify-center">
                            <img src="src\shared\assets\images\House1-1.png" alt="building" className="size-[50px] radius-[8px]"/>
                            <img src="src\shared\assets\images\House1-2.png" alt="building"/>
                            <img src="src\shared\assets\images\House1-3.png" alt="building"/>
                            <img src="src\shared\assets\images\House1-4.png" alt="building"/>
                        </div>
                    </div>
                    <div className="ml-[11px]">
                        <div>
                            <img src="src\shared\assets\images\House2-1.png" alt="building"/>
                        </div>
                        <div className="flex gap-[17px] mt-[11px] justify-center">
                            <img src="src\shared\assets\images\House2-1.png" alt="building" className="size-[50px] radius-[8px]"/>
                            <img src="src\shared\assets\images\House2-2.png" alt="building"/>
                            <img src="src\shared\assets\images\House2-3.png" alt="building"/>
                            <img src="src\shared\assets\images\House2-4.png" alt="building"/>
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
                            <p>Видеокамеры</p>
                            <CameraIcon className="mt-[8px]" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[30px] mt-[16px] ml-[38px]">
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