function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-Ckg08wiI.js","assets/index-C8cr7QL_.js","assets/index-BE_I1Yji.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C8cr7QL_.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-Ckg08wiI.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};