function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DvG7tI3M.js","assets/Ranges-BQRX2W5z.js","assets/index-C-z5ITPX.js","assets/index-kZOMMLUu.css","assets/index-SEDb4N7j.js","assets/OptionsColor-0fvbtoNX.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C-z5ITPX.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DvG7tI3M.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
