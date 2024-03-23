function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BuZ96mGe.js","assets/index-CTre6aJV.js","assets/index-D9V8jYjy.css","assets/index-BDWEYvBk.js","assets/index-BKhv0_Fu.js","assets/index-BPfxyVhC.js","assets/index-Da_29JA2.js","assets/index-DvTdjrti.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CTre6aJV.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BuZ96mGe.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BDWEYvBk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BKhv0_Fu.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BPfxyVhC.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Da_29JA2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DvTdjrti.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
