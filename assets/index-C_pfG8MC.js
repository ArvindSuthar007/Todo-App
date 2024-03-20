function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-C98XpizJ.js","assets/index-1cifxmob.js","assets/index-Cw5F4ScL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-1cifxmob.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-C98XpizJ.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
