function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D8aiPClv.js","assets/index-bGySWuyX.js","assets/index-C2JdQy28.css","assets/index-ZbfXm3Nm.js","assets/index-BvBIvyBA.js","assets/index-BjBuhoQk.js","assets/index-RP2bFi9L.js","assets/index-DuU8_saz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-bGySWuyX.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D8aiPClv.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-ZbfXm3Nm.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BvBIvyBA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BjBuhoQk.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-RP2bFi9L.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DuU8_saz.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
