import { useEffect, useState,} from 'react';
import { getCleaners } from '../api';

const CleanerList = () => {
  const [cleanerNames, setCleanerNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchCleaners = async () => {
      const names = await getCleaners();
      if (names) {
        setCleanerNames(names);
      }
    }
    fetchCleaners();
  }, []);

  return (
    <>
    {cleanerNames.map((name) => (
        <option key={name}>{name}</option>
    ))}
    </>
   
  );
}

export default CleanerList;