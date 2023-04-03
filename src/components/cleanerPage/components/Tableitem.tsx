import { IClenerItem } from "../inteface";
import '../css/ClenerItem.css'

export const TableItem = ({
    customerName,
    time,
    level,
    handleToggle,
    id,
    date
  }: IClenerItem) => {
    return (
      <>
        <tr className="tr-cleaner">
          <td>{customerName}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>{level}</td>
          <td>
            <button onClick={()=>handleToggle(id)}>Done</button>
          </td>
        </tr>
      </>
    );
  };
  