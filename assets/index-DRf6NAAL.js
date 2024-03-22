function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BR-2NZ1e.js","assets/index-DND7Obpd.js","assets/index-Cs6pRUNM.css","assets/index-DcRYzRei.js","assets/index-BBOUsAMc.js","assets/index-eaebM2XC.js","assets/index-BEOZP4Sa.js","assets/index-DFSoKNoR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DND7Obpd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BR-2NZ1e.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DcRYzRei.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BBOUsAMc.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-eaebM2XC.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BEOZP4Sa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DFSoKNoR.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
