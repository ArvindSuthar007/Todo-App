function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BG1_Og50.js","assets/index-BxAKral4.js","assets/index-B4gdffVT.css","assets/index-b_bDILDw.js","assets/index-DzasZHrC.js","assets/index-CNUTsf9x.js","assets/index-7wfmxB_i.js","assets/index-DmA-jWIi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BxAKral4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BG1_Og50.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-b_bDILDw.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DzasZHrC.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CNUTsf9x.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-7wfmxB_i.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DmA-jWIi.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
