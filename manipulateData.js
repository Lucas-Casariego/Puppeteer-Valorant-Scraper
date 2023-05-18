const fs = require('fs');
const { readFile } = fs;


const caculateAvgEDPI = (playersData) => {
  const eDPIs = playersData.map(pData => pData.eDPI);
  const avgEDPI = eDPIs.reduce((total, currEDPI) => total + currEDPI, 0) / eDPIs.length;
  return avgEDPI;
};

const getDpiUsage = (playersData) => {
  const dpiUsage = {};
  playersData.forEach(player => {
    if (dpiUsage.hasOwnProperty(player.dpi)) {
      dpiUsage[player.dpi]++;
    } else {
      dpiUsage[player.dpi] = 1;
    }
  });
  return dpiUsage;
};

const avgSensbyDpi = (playersData) => {
  const dpiData = {
    400: { sum: 0, count: 0 },
    800: { sum: 0, count: 0 },
    1600: { sum: 0, count: 0 },
  };

  playersData.forEach(player => {
    
    if(player.dpi === 400 || player.dpi === 800 || player.dpi === 1600){
      dpiData[player.dpi].sum += player.sens;
      dpiData[player.dpi].count++;
    }
  });

  for (const dpi in dpiData) {
    const { sum, count } = dpiData[dpi];
    const avgSens = sum / count;
    console.log(`La sens promedio de los jugadores de ${dpi} dpi es: ${avgSens.toFixed(4)}`);
  }
}


readFile('playersData.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const playersData = JSON.parse(data);


  console.log("\n");
  console.log("el eDPI promedio es: ", caculateAvgEDPI(playersData).toFixed(4));
  console.log("\n");
  console.log("el uso de DPI es: \n", getDpiUsage(playersData));
  console.log("\n");
  avgSensbyDpi(playersData);

});




