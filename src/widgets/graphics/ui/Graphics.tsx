import Graph1 from '../../../shared/assets/images/graph-1.png';
import Graph2 from '../../../shared/assets/images/graph-2.png';

export const Graphics = () => {
    return (
      <div className="shadow-[0_10px_50px_0_#d2d4d8] w-[870px] rounded-[12px]">
        <div className="p-[36px] bg-white rounded-[12px] w-[870px]">
            <div className="text-[24px]/[24px] font-semibold ">Мониторинг ресурсов на строительной площадке</div>
            <div className="flex gap-[32px] pt-[36px]">
                <img src={Graph1} alt="grapic"/>
                <img src={Graph2} alt="grapic"/>
            </div>
        </div>
      </div>  
    );
}