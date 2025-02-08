import { ArrowIcon } from 'shared/assets/icons/arrow-icon';

import { reasonsMeasuresItems } from '../lib'

import { InformationBlock } from './InformationBlock';

export const ReasonsMeasures = () => {
    return (
        <div className="container bg-white rounded-[12px] text-[#161616]">
            <div className="p-[36px]">
                <div className="flex gap-[10px] items-center">
                    <p className="text-[24px]/[16px] font-semibold">Причины срыва сроков и мероприятия по их устранению</p>
                    <div className="flex gap-[10px]">
                        <div className="flex gap-[10px] px-[23px] py-[5px] rounded-[7px] border border-[#7D7D7D] items-center">
                            <p className="text-[16px]/[16px] font-normal">Всего</p>
                            <p className="text-[20px]/[20px] font-semibold">5</p>
                        </div>
                        <div className="flex gap-[10px] px-[23px] py-[5px] rounded-[7px] border border-[#7D7D7D] items-center">
                            <p className="text-[16px]/[16px] font-normal">Не отработано</p>
                            <p className="text-[20px]/[20px] font-semibold">2</p>
                        </div>
                        <div className="flex gap-[10px] px-[23px] py-[5px] rounded-[7px] border border-[#7D7D7D] items-center">
                            <p className="text-[16px]/[16px] font-normal">В работе</p>
                            <p className="text-[20px]/[20px] font-semibold">2</p>
                        </div>
                        <div className="flex gap-[10px] px-[23px] py-[5px] rounded-[7px] border border-[#7D7D7D] items-center">
                            <p className="text-[16px]/[16px] font-normal">Выполнено</p>
                            <p className="text-[20px]/[20px] font-semibold">1</p>
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <ArrowIcon className='h-[8px] w-[24px] text-[#505050]'/>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[24px] ml-[24px] mt-[60px] text-[18px]/[18px] font-medium items-center">
                        <p className='w-[180px]'>Этап работ</p>
                        <p className='w-[243px]'>Причина срыва сроков</p>
                        <p className='w-[295px]'>Мероприятия по устранению</p>
                        <p className='w-[195px]'>Исполнитель</p>
                        <p className='w-[295px]'>Предпринятые меры</p>
                        <p className='w-[100px]'>Срок устранения </p>
                        <p className='w-[120px]'>Статус</p>
                    </div>
                    <div className='flex flex-col gap-[20px] h-[250px] mt-[32px] overflow-y-auto scroll-bar'>
                        {reasonsMeasuresItems.map((item) => (
                            <InformationBlock key={item.id} event={item.event} executor={item.executor} measure={item.measure} name={item.name} reason={item.reason} status={item.status} term={item.term} classNameBlock={item.classNameBlcok} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}