function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-2jVexqm7.js","assets/index-Dusn9Eaa.js","assets/index-F3UwG_r5.css","assets/index-BTMTEKOx.js","assets/index-CLQiHVWx.js","assets/index-sWmV5lm4.js","assets/index-BktyrpQ_.js","assets/index-hcsAIy13.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dusn9Eaa.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-2jVexqm7.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BTMTEKOx.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CLQiHVWx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-sWmV5lm4.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BktyrpQ_.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-hcsAIy13.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
