import { buildReadlinesItems } from "../lib";

import { ConstructionStages } from "./ConstructionStages";

export const BuildReadiness = () => {
    return (
      <div>
        <div>
          <div className="flex flex-col gap-[8px] px-[24px] pt-[24px] rounded-[12px] bg-white overflow-y-scroll scroll-bar-2 h-[693px] shadow-[0_10px_50px_0_#d2d4d8]">
            {buildReadlinesItems.map((item) => (
              <ConstructionStages faktMonthClassName={item.faktMonthClassName} faktWeekClassName={item.faktWeekClassName} faktClassName={item.faktClassName} faktMonth={item.faktMonth} faktWeek={item.faktWeek} name={item.name} planClassName={item.planClassName} planMonth={item.planMonth} planWeek={item.planWeek} progressFakt={item.progressFakt} progressPlan={item.progressPlan}/>
            ))}
          </div>
        </div>
      </div>  
    );
}