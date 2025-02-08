import { LogoutIcon } from "shared/assets/icons/logout-icon";
import { WarningIcon } from "shared/assets/icons/warning-icon";

export const Date = () => {
    return (
        <div className="w-[803px]">
            <div className="flex justify-between">
                <div className="flex cursor-pointer">
                    <button type="button" className="cursor-pointer"><p className="px-[24px] py-[8.5px] text-[18px]/[28px] font-medium text-white bg-custom-gradient rounded-[12px]">Данные заказчика</p></button>
                    <button type="button"><p className="px-[24px] py-[8.5px] text-[18px]/[28px] font-medium bg-white rounded-[12px] cursor-pointer">Данные АНО</p></button>
                </div>
                <div className="flex cursor-pointer items-center">
                    <LogoutIcon className="pr-[5.5px]"/>
                    <p className="text-[18px]/[28px] font-medium">Вернуться в реестр</p>
                </div>
            </div>
            <div className="flex gap-[16px] pt-[16px]">
                <div className="">
                    <div className="flex  flex-col px-[23px] pt-[8px] pb-[10px] rounded=[8px] bg-white items-center w-[257px]">
                        <div className="flex text-[12px]/[12px] font-normal text-[#C00000] items-center ml-auto">Срок изменен<WarningIcon className="ml-[5px] cursor-pointer" /></div>
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