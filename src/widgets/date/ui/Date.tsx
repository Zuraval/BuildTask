import { useState } from "react";
import { LogoutIcon } from "shared/assets/icons/logout-icon";
import { WarningIcon } from "shared/assets/icons/warning-icon";

export const Date = () => {
    const [activeButton, setActiveButton] = useState("customer");

    return (
        <div className="w-[803px]">
            <div className="flex justify-between">
                <div className="flex cursor-pointer bg-white rounded-[8px]">
                    <button
                        type="button"
                        className={`px-[24px] py-[8.5px] text-[18px]/[28px] font-medium rounded-[12px] cursor-pointer ${activeButton === "customer" ? "text-white bg-custom-gradient" : "bg-white"}`}
                        onClick={() => setActiveButton("customer")}
                    >
                        Данные заказчика
                    </button>
                    <button
                        type="button"
                        className={`px-[24px] py-[8.5px] text-[18px]/[28px] font-medium rounded-[12px] cursor-pointer ${activeButton === "ano" ? "text-white bg-custom-gradient" : "bg-white"}`}
                        onClick={() => setActiveButton("ano")}
                    >
                        Данные АНО
                    </button>
                </div>
                <div className="flex cursor-pointer items-center">
                    <LogoutIcon className="pr-[5.5px]"/>
                    <p className="text-[18px]/[28px] font-medium">Вернуться в реестр</p>
                </div>
            </div>
            <div className="flex gap-[16px] pt-[16px]">
                <div className="">
                    <div className="relative flex flex-col px-[23px] pt-[8px] pb-[10px] rounded=[8px] bg-white items-center w-[257px]">
                        <div className="flex text-[12px]/[12px] font-normal text-[#C00000] items-center ml-auto group">Срок изменен<WarningIcon className="ml-[5px] cursor-pointer" />
                            <div className="absolute z-10 left-[235px] bottom-[82px] hidden group-hover:block text-[#161616]">
                                <div className="flex flex-col p-[16px] border border-[#C00000] rounded-[8px] bg-white gap-[8px] w-[395px]">
                                    <div className="flex">
                                        <div className="flex flex-col gap-[8px]">
                                            <span className="text-[14px]/[14px] font-normal">Предыдущий срок:</span>
                                            <span className="text-[14px]/[14px] font-normal">Дата изменения:</span>
                                            <span className="text-[14px]/[14px] font-normal">Кем принято решение:</span>
                                        </div>
                                        <div className="flex flex-col gap-[8px] ml-[24px]">    
                                            <span className="text-[16px]/[14px] font-medium">25.09.2024</span>
                                            <span className="text-[16px]/[14px] font-medium">03.12.2024</span>
                                            <span className="text-[16px]/[14px] font-medium">Ефимов В.В.</span>
                                        </div>
                                    </div>
                                    <span className="flex text-[14px]/[14px] font-normal justify-end">(Совещание от 24.09.2024) </span>
                                </div>
                            </div>
                        </div>
                        <p className="text-[24px]/[24px] font-semibold pt-[7px]">30.12.2024</p>
                        <p className="text-[14px]/[14px] font-normal text-center pt-[12px]">Плановый ввод по <br /> директивному графику</p>
                    </div>
                </div>
                <div className="px-[16px] py-[18.5px] rounded=[8px] bg-white h-min w-full">
                    <p className="text-[24px]/[24px] font-semibold text-center">20.11.2024</p>
                    <p className="text-[14px]/[14px] font-normal text-center pt-[12px]">Плановый ввод по <br /> договору</p>
                </div>
                <div className="px-[16px] py-[18.5px] rounded=[8px] bg-white w-full">
                    <p className="text-[24px]/[24px] font-semibold text-center">26.12.2024</p>
                    <p className="text-[14px]/[14px] font-normal text-center pt-[12px]">Прогнозируемый срок <br /> ввода</p>
                </div>
            </div>
        </div>
    );
}