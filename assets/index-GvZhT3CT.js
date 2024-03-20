function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BNSx9PuY.js","assets/index-Dusn9Eaa.js","assets/index-F3UwG_r5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Dusn9Eaa.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BNSx9PuY.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
