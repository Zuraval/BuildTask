import { BuildInfo,BuildReadiness,Date,Graphics,Header, ReasonsMeasures } from 'widgets';
import { ImplementationStages } from 'widgets/implementation-stages';

export const HomePage = () => {
    return (
        <div className='bg-[#F1F3F7] h-full'>
            <div className='container pt-[50px]'><a href='url/' className='cursor-pointer text-[18px]/[64px] font-medium text-[#C00000]'>Назад в Реестр объектов</a></div>
            <div className='pt-[24px]' />
            <Header />
            <div className='pt-[16px]' />
            <ReasonsMeasures />
            <div className='pt-[24px]' />
            <div className='flex container justify-between'>
                <div className='flex flex-col container'>
                    <BuildInfo />
                    <div className='pt-[16px]' />
                    <Graphics />
                </div>
                <div>
                    <Date />
                    <div className='pt-[16px]' />
                    <BuildReadiness />
                </div>
            </div>
            <div className='pt-[16px]' />
            <ImplementationStages />
            <div className='pt-[56px]' />
        </div>
    );
}
