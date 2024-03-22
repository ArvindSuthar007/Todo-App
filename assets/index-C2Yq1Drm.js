function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cp5Bb1MR.js","assets/index-C-z5ITPX.js","assets/index-kZOMMLUu.css","assets/index-DtDiluBb.js","assets/index-CG42ajUl.js","assets/index-CqZKARQF.js","assets/index-BUNUFKRn.js","assets/index-DG-5zsKt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C-z5ITPX.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cp5Bb1MR.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DtDiluBb.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CG42ajUl.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CqZKARQF.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BUNUFKRn.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DG-5zsKt.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
