import { IClenerItem } from "../inteface";

export const TableItemdone = ({
    customerName,
    time,
    level, 
    date,
  /*   handleToggle */
  }: IClenerItem) => {
    return (
      <>
        <tr>
          <td>{customerName}</td>
          <td>{date}</td>
          <td>{time}</td>
          <td>{level}</td>
          <td>Cleaned</td>
        </tr>
      </>
    );
  };
  