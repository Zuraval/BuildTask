export const Header = () => {
    return (
        <div className="container bg-white rounded-[12px] text-[#161616]">
            <div className="flex justify-between px-[36px] py-[22px] w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-[22px] items-center">
                        <p className="text-[30px]/[30px] font-bold">Жилой дом</p>
                        <p className="text-[24px] font-normal">ВАО</p>
                        <p className="px-[22.5px] py-[3.5px] text-[16px]/[16px] font-semibold bg-[#F8E4E4] rounded-[7px] border border-[#C00000] text-[#C00000]">Срыв срока</p>
                        <p className="px-[22.5px] py-[3.5px] text-[16px]/[16px] font-semibold bg-[#F8E4E4] rounded-[7px] border border-[#C00000] text-[#C00000]">Высокий риск</p>
                    </div>
                    <div>
                        <p className="text-[20px]/[20px] font-normal">Амурская ул. уч. 1/19 (зоны 1.1, 1.2, 1.5)</p>
                    </div>
                    <div className="flex text-[16px]/[16px] font-normal">
                        <p>УИН</p>
                        <p className="pl-3">TT0000-99-7886-001</p>
                    </div>
                    <div className="flex text-[16px]/[16px] font-normal">
                        <p>Площадь объекта</p>
                        <p className="pl-[16px]">20549,94 м²</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between text-end'>
                    <p className="text-[20px] font-normal">Реновация</p>
                    <div><a href="/some/valid/uri" className="text-[16px] font-medium text-[#C00000]">Ссылка на цифровой паспорт объекта</a></div>
                </div>
            </div>
        </div>
    );
}
