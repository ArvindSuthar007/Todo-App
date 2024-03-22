function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DdntPaW2.js","assets/index-DND7Obpd.js","assets/index-Cs6pRUNM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DND7Obpd.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DdntPaW2.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
