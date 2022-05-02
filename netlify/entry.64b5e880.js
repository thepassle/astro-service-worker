navigator.serviceWorker.register("/sw.js");let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(window.location.reload(),e=!0)});
