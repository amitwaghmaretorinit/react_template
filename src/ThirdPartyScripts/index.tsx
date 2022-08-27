import { useEffect } from "react";
import { loadScript } from "./googleAnalytics";
import { insertWalkMe } from "./walkme";

const ThirdPartyScripts = () => {
    useEffect(()=>{
        insertWalkMe();
        loadScript();
    },[])
    return (<></>)
}
export default ThirdPartyScripts;