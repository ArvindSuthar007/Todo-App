function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-xThQLBQd.js","assets/index-CTre6aJV.js","assets/index-D9V8jYjy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CTre6aJV.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-xThQLBQd.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
