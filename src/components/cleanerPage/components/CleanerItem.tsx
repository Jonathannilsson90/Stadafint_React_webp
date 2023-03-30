 import '../css/ClenerItem.css' 

interface IClenerItem {
  customerName: string;
  cleanerName: string;
  time: string;
  level: string;
  status: boolean;
  handleToggle: (id: string) =>void 
  id: string;
}

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
