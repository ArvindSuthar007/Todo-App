function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CthY80Up.js","assets/index-DJ5bZ5t0.js","assets/index-LMzXDJ2K.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DJ5bZ5t0.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CthY80Up.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};