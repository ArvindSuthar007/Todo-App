function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C_pfG8MC.js","assets/index-1cifxmob.js","assets/index-Cw5F4ScL.css","assets/index-DmQEiZjM.js","assets/index-B6FP9k_I.js","assets/index-gdzYDYXt.js","assets/index-z3dOQ0jk.js","assets/index-BxC3FsWc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-1cifxmob.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C_pfG8MC.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DmQEiZjM.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B6FP9k_I.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-gdzYDYXt.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-z3dOQ0jk.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BxC3FsWc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
