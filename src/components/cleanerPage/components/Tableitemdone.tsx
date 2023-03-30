import { IClenerItem } from "../inteface";

export const TableItemdone = ({
    customerName,
    cleanerName,
    time,
    level, 
  /*   handleToggle */
  }: IClenerItem) => {
    return (
      <>
        <tr>
          <td>{cleanerName}</td>
          <td>{customerName}</td>
          <td>{time}</td>
          <td>{level}</td>
          <td>Cleaned</td>
        </tr>
      </>
    );
  };
  