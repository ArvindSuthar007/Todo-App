function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-jVGZApum.js","assets/index-DJ5bZ5t0.js","assets/index-LMzXDJ2K.css","assets/index-gKAl2L5u.js","assets/index-B90EAuhM.js","assets/index-BKN-hExh.js","assets/index-pgmzLvkg.js","assets/index-CSltOpMG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DJ5bZ5t0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-jVGZApum.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-gKAl2L5u.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B90EAuhM.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BKN-hExh.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-pgmzLvkg.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CSltOpMG.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
