import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

function useRegionsLogic() {
  const [regionsList, setRegionsList] = useState<any>(null);

  async function getRegions() {
    const response = await axios.get(`http://back-wb-helper.ru/api/v1/wb/regions/`, {
      headers: {
        Authorization: 'Bearer ' + getCookie('token'),
        'Content-Type': 'application/json',
      },
    });

    setRegionsList(response.data);
  }

  useEffect(() => {
    getRegions();
  }, []);

  return {
    regionsList,
  };
}

export default useRegionsLogic;
