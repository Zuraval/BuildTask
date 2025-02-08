export interface buildReadlinesProps {
    name: string;
    planWeek:  string;
    faktWeek: string;
    planMonth: string;
    faktMonth: string;
    planClassName: string;
    progressPlan: string;
    progressFakt: string;
    faktClassName: string;
    faktWeekClassName: string;
    faktMonthClassName: string;
}

export const ConstructionStages = ({ name, faktClassName, faktMonth, faktWeek, planClassName, planMonth, planWeek, progressFakt, progressPlan, faktMonthClassName, faktWeekClassName }: buildReadlinesProps) => {
    return (
      <div className="">
        <div className="p-[16px] border-[2px] border-[#E5E7EB] rounded-[10px]">
            <div>
                <p className="text-[16px]/[16px] font-normal">{name}</p>
            </div>
            <div className="flex pt-[18px]">
                <div>
                    <p className="text-[14px]/[14px] font-normal text-[#505050] text-center">Неделя</p>
                    <div className="flex items-center pt-[8px] gap-[8px]">
                        <p className='text-[20px]/[20px] font-semibold'>{planWeek}</p>
                        <p className="text-[14px]/[14px] font-normal">план</p>
                    </div>
                    <div className="flex items-center pt-[8px] gap-[8px]">
                        <p className={faktWeekClassName}>{faktWeek}</p>
                        <p className="text-[14px]/[14px] font-normal">факт</p>
                    </div>
                </div>
                <div className="pl-[36px]">
                    <p className="text-[14px]/[14px] font-normal text-[#505050] text-center">Месяц</p>
                    <div className="flex items-center pt-[8px] gap-[8px]">
                        <p className='text-[20px]/[20px] font-semibold'>{planMonth}</p>
                        <p className="text-[14px]/[14px] font-normal">план</p>
                    </div>
                    <div className="flex items-center pt-[8px] gap-[8px]">
                        <p className={faktMonthClassName}>{faktMonth}</p>
                        <p className="text-[14px]/[14px] font-normal">факт</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end pl-[23px] gap-[15px]">
                    <div className="flex items-center gap-[16px]">
                        <p className="text-[14px]/[14px] font-normal">План</p>
                        <div className="w-[400px] h-[14px] bg-[#E7E9ED] rounded-[20px]">
                            <div className={planClassName} />
                        </div>
                        <p className="text-[14px]/[14px] font-semibold">{progressPlan}</p>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <p className="text-[14px]/[14px] font-normal">Факт</p>
                        <div className="w-[400px] h-[14px] bg-[#E7E9ED] rounded-[20px]">
                            <div className={faktClassName} />
                        </div>
                        <p className="text-[14px]/[14px] font-semibold">{progressFakt}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

