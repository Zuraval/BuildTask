export interface reasonsMeasures {
    id: number;
    name: string;
    reason: string;
    event: string;
    executor: string;
    measure: string;
    term: string;
    status: string;
    classNameBlcok: string;
  }
  
  export const reasonsMeasuresItems: reasonsMeasures[] = [
    {
        id: 1,
        name: 'Устройство надземной части',
        reason: 'Недостаточное кол-во рабочей силы при возведении внутренних перегородок',
        event: 'Мобилизовать 100 человек',
        executor: 'ООО "ГП-МФС"',
        measure: '04.10.2024 направлено предписание Статус претензионной работы: в работе Сумма штрафа: 750 тыс. руб',
        term: '04.11.2024',
        classNameBlcok: 'border border-[#C00000] bg-[#F8E4E4] flex gap-[22.5px] rounded-[8px] text-[16px]/16px text-[#000000] items-center p-[20px] pl-[24px]',
        status: 'В работе'
    },
    {
        id: 2,
        name: 'Устройство инженерных систем',
        reason: 'Аварийное состояние существующих трубопроводов тепловой сети',
        event: 'Проведение дополнительных работ по переустройству тепловых сетей до безаварийного участка',
        executor: 'РСО',
        measure: 'Отсутствуют',
        term: '20.12.2024',
        classNameBlcok: 'border border-[#BF9000] bg-[#FFF7E0] flex gap-[22.5px] rounded-[8px] text-[16px]/16px text-[#000000] items-center p-[20px] pl-[24px]',
        status: 'В работе'
    },
    {
        id: 3,
        name: 'Отделочные работы',
        reason: 'Низкие темпы работы',
        event: 'Мобилизовать 100 человек',
        executor: 'ООО "ГП-МФС"',
        measure: '20.12.2024 направлено предписание Статус претензионной работы: не начато',
        term: '29.12.2024 ',
        classNameBlcok: 'border border-[#7D7D7D] bg-white flex gap-[22.5px] rounded-[8px] text-[16px]/16px text-[#000000] items-center p-[20px] pl-[24px]',
        status: 'Не отработано'
    },
    {
        id: 4,
        name: 'Благоустройство территории',
        reason: 'Невыполнение СМР в полном объеме для старта работ по благоустройству',
        event: 'Ускорить завершение предыдущих этапов реализации для выравнивания хода работ',
        executor: 'ООО "ГП-МФС"',
        measure: 'Отсутствуют',
        term: '29.12.2024',
        classNameBlcok: 'border border-[#7D7D7D] bg-white flex gap-[22.5px] rounded-[8px] text-[16px]/16px text-[#000000] items-center p-[20px] pl-[24px]',
        status: 'Не отработано'
    },
    {
        id: 5,
        name: 'Получение положительного заключения МГЭ',
        reason: 'Задержка в согласовании проектной документации (снятие замечаний экспертизы)',
        event: 'Корректировка и повторное согласование проектной документации',
        executor: 'ООО "ГП-МФС"',
        measure: 'Отсутствуют',
        term: '04.11.2024',
        classNameBlcok: 'border border-[#00863D] bg-[#ECFFF5] flex gap-[22.5px] rounded-[8px] text-[16px]/16px text-[#000000] items-center p-[20px] pl-[24px]',
        status: 'Выполнено'
    },
  ];