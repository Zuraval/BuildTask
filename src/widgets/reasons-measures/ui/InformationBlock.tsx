export interface reasonsMeasuresProps {
    name: string;
    reason: string;
    event: string;
    executor: string;
    measure: string;
    term: string;
    status: string;
    classNameBlock: string;
}

export const InformationBlock = ({ name, reason, event, executor, measure, term, status, classNameBlock }: reasonsMeasuresProps) => {
    return (
      <div className="">
        <div className={classNameBlock}>
          <p className="w-[180px]">{name}</p>
          <p className="w-[250px]">{reason}</p>
          <p className="w-[300px]">{event}</p>
          <p className="w-[200px]">{executor}</p>
          <p className="w-[300px]">{measure}</p>
          <p className="w-[100px]">{term}</p>
          <p className="w-[120px]">{status}</p>
        </div>
      </div>
    );
};

