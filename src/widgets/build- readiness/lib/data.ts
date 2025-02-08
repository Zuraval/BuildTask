export interface buildReadlines {
    id: number;
    name: string;
    planWeek:  string;
    faktWeek: string;
    faktWeekClassName: string;
    planMonth: string;
    faktMonth: string;
    faktMonthClassName: string;
    planClassName: string;
    faktClassName: string;
    progressPlan: string;
    progressFakt: string;
}
  
  export const buildReadlinesItems: buildReadlines[] = [
    {
        id: 1,
        name: 'Строительная готовность',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '76%',
        progressFakt: '77%',
        faktClassName: 'w-[77%] h-full custom-gradient-line-green rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]'
    },
    {
        id: 2,
        name: 'Конструктив',
        planWeek: '+1%',
        faktWeek: '-2%',
        planMonth: '+1%',
        faktMonth: '+0%',
        planClassName: 'w-[89%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '89%',
        progressFakt: '80%',
        faktClassName: 'w-[80%] h-full custom-gradient-line-red rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#808080]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#C00000]'
    },
    {
        id: 3,
        name: 'Стены и перегородки',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[50%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '50%',
        progressFakt: '50%',
        faktClassName: 'w-[50%] h-full custom-gradient-line-green rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]'
    },
    {
        id: 4,
        name: 'Фасад',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '76%',
        progressFakt: '77%',
        faktClassName: 'w-[77%] h-full custom-gradient-line-green rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]'
    },
    {
        id: 5,
        name: 'Фасад',
        planWeek: '+1%',
        faktWeek: '-2%',
        planMonth: '+1%',
        faktMonth: '+0%',
        planClassName: 'w-[89%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '89%',
        progressFakt: '80%',
        faktClassName: 'w-[80%] h-full custom-gradient-line-red rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#808080]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#C00000]'
    },
    {
        id: 6,
        name: 'Стены и перегородки',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[50%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '50%',
        progressFakt: '50%',
        faktClassName: 'w-[50%] h-full custom-gradient-line-green rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]'
    },
    {
        id: 7,
        name: 'Фасад',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[60%] h-full custom-gradient-line-gray rounded-[10px]',
        progressPlan: '60%',
        progressFakt: '60%',
        faktClassName: 'w-[60%] h-full custom-gradient-line-green rounded-[10px]',
        faktMonthClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]',
        faktWeekClassName: 'text-[20px]/[20px] font-semibold text-[#00863D]'
    }
  ];