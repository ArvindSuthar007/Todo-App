function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dt-8NihX.js","assets/index-C8cr7QL_.js","assets/index-BE_I1Yji.css","assets/index-B9T_lW0p.js","assets/index-Ddks11Z1.js","assets/index-Ba8yAeRx.js","assets/index-BCz1yRSx.js","assets/index-DQyO2a-B.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C8cr7QL_.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Dt-8NihX.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B9T_lW0p.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ddks11Z1.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Ba8yAeRx.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BCz1yRSx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DQyO2a-B.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};