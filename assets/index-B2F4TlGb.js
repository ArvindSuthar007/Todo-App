function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-DK6t353O.js","assets/index-C-z5ITPX.js","assets/index-kZOMMLUu.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C-z5ITPX.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DK6t353O.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
