import React, { useEffect, useState, ReactElement } from 'react';
import { getCleaners } from '../api';

const CleanerList = () => {
  const [cleanerElements, setCleanerElements] = useState<ReactElement[]>([]);

  useEffect(() => {
    const fetchCleaners = async () => {
      const names = await getCleaners();
      if (names) {
        const elements = names.map((name) => <option>{name}</option>);
        setCleanerElements(elements);
      }
    }
    fetchCleaners();
  }, []);

  return (
    <>
    {cleanerElements}
    </>
   
  );
}

export default CleanerList;