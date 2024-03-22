function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-VCZ-VQ_g.js","assets/index-C8cr7QL_.js","assets/index-BE_I1Yji.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-C8cr7QL_.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-VCZ-VQ_g.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
