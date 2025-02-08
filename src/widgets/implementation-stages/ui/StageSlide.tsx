export interface stageSlidesProps {
    name: string;
    lineClassName: string;
    blockClassName: string;
}

export const StageSlide = ({name, lineClassName, blockClassName }: stageSlidesProps) => {
    return (
        <div className={blockClassName}>
            <div className="flex items-center h-full">
                <p className="text-[14px]/[18px] font-medium text-center">{name}</p>
            </div>
            <div className="w-full h-[6px] bg-[#D9D9D9] mt-[8px]">
                <div className={lineClassName} />
            </div>
        </div>
    );
};

