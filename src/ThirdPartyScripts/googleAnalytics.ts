export const loadScript = () => {
  if(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY){

    (function(w:any,d:any,s:any,l:any,i:any){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);

    let myScriptBody = document.createElement("iframe");
    let noScript = document.createElement('noscript')
    myScriptBody.width = "0";
    myScriptBody.height = "0";
    myScriptBody.style.display = "none";
    myScriptBody.style.visibility = "hidden";
    myScriptBody.src = `https://www.googletagmanager.com/ns.html?id=${process.env.REACT_APP_GOOGLE_ANALYTICS_KEY}`
    noScript.appendChild(myScriptBody)
    document.body.insertBefore(noScript, document.body.firstChild);
  }
}