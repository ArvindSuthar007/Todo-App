function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-CvR4KhZO.js","assets/index-C-z5ITPX.js","assets/index-kZOMMLUu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C-z5ITPX.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CvR4KhZO.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
