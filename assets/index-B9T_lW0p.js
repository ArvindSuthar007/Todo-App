function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-fe1VJsCN.js","assets/index-C8cr7QL_.js","assets/index-BE_I1Yji.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C8cr7QL_.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-fe1VJsCN.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
