import { IClenerItem } from "../inteface";

export const TableItem = ({
    customerName,
    cleanerName,
    time,
    level,
    handleToggle,
    id
  }: IClenerItem) => {
    return (
      <>
        <tr className="tr-cleaner">
          <td>{cleanerName}</td>
          <td>{customerName}</td>
          <td>{time}</td>
          <td>{level}</td>
          <td>
            <button onClick={()=>handleToggle(id)}>Done</button>
          </td>
        </tr>
      </>
    );
  };
  