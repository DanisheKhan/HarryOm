import { useEffect } from 'react';

const NetworkOptimizer = () => {
  useEffect(() => {
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const updateNetworkData = () => {
      const network = connection?.effectiveType || 'unknown';
      const saveData = connection?.saveData ? 'on' : 'off';

      document.documentElement.setAttribute('data-network', network);
      document.documentElement.setAttribute('data-save-data', saveData);
    };

    updateNetworkData();

    if (connection?.addEventListener) {
      connection.addEventListener('change', updateNetworkData);
      return () => connection.removeEventListener('change', updateNetworkData);
    }

    return undefined;
  }, []);

  return null;
};

export default NetworkOptimizer;
