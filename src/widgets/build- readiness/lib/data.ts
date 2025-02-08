export interface reasonsMeasures {
    id: number;
    name: string;
    planWeek:  string;
    faktWeek: string;
    planMonth: string;
    faktMonth: string;
    planClassName: string;
    faktClassName: string;
  }
  
  export const reasonsMeasuresItems: reasonsMeasures[] = [
    {
        id: 1,
        name: 'Строительная готовность',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%]',
        faktClassName: 'w-[77%]'
    },
    {
        id: 2,
        name: 'Конструктив',
        planWeek: '+1%',
        faktWeek: '-2%',
        planMonth: '+1%',
        faktMonth: '+0%',
        planClassName: 'w-[76%]',
        faktClassName: 'w-[77%]'
    },
    {
        id: 3,
        name: 'Стены и перегородки',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%]',
        faktClassName: 'w-[77%]'
    },
    {
        id: 4,
        name: 'Фасад',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%]',
        faktClassName: 'w-[77%]'
    },
    {
        id: 5,
        name: 'Устройство надземной части',
        planWeek: '+1%',
        faktWeek: '+1%',
        planMonth: '+2%',
        faktMonth: '+2%',
        planClassName: 'w-[76%]',
        faktClassName: 'w-[77%]'
    },
    
  ];