function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-hO8m8rRo.js","assets/index-1cifxmob.js","assets/index-Cw5F4ScL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-1cifxmob.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-hO8m8rRo.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
