function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-vHB_CfIy.js","assets/index-CTre6aJV.js","assets/index-D9V8jYjy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CTre6aJV.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-vHB_CfIy.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
