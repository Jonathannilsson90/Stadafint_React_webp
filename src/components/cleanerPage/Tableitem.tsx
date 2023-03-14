import "./tableitem.css";

interface ITableItem {
  customername: string;
  cleanername: string;
  time: string;
  level: string;
  status: boolean;
/*   handleToggle: (customername: string) =>void */
}

export const TableItem = ({
  customername,
  cleanername,
  time,
  level,
  status,
/*   handleToggle */
}: ITableItem) => {
  return (
    <>
      <tr>
        <td>{cleanername}</td>
        <td>{customername}</td>
        <td>{time}</td>
        <td>{level}</td>
        <td>
          <button /*  onClick={()=>handleToggle(customername)} */>Done</button>
        </td>
      </tr>
    </>
  );
};
export const TableItemd = ({
  customername,
  cleanername,
  time,
  level, 
/*   handleToggle */
}: ITableItem) => {
  return (
    <>
      <tr>
        <td>{cleanername}</td>
        <td>{customername}</td>
        <td>{time}</td>
        <td>{level}</td>
        <td>Cleaned</td>
      </tr>
    </>
  );
};
