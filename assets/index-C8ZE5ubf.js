function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-7z8OrRvN.js","assets/index-BxAKral4.js","assets/index-B4gdffVT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BxAKral4.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-7z8OrRvN.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
