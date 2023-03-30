 import '../css/ClenerItem.css' 

interface IClenerItem {
  customerName: string;
  cleanerName: string;
  time: string;
  level: string;
  status: boolean;
  handleToggle: (customerName: string, _id:string) =>void 
  id: string;
}

export const TableItem = ({
  customerName,
  cleanerName,
  time,
  level,
  status,
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
          <button onClick={()=>handleToggle(customerName, id)}>Done</button>
        </td>
      </tr>
    </>
  );
};




export const TableItemd = ({
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
