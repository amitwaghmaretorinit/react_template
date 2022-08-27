
export const insertWalkMe = () => {
    if (process.env.REACT_APP_ENABLE_WALKME) {
        var walkme = document.createElement('script');
        walkme.type = 'text/javascript';
        walkme.async = true;
        console.log(process.env.REACT_APP_WALKME_ENV);
        if (process.env.REACT_APP_WALKME_ENV == "staging")
            walkme.src =
                'https://cdn.walkme.com/users/643f6ad1d704426d92cd25e64dca21cf/test/walkme_643f6ad1d704426d92cd25e64dca21cf_https.js';
        if (process.env.REACT_APP_WALKME_ENV == "production")
            walkme.src =
                'https://cdn.walkme.com/users/643f6ad1d704426d92cd25e64dca21cf/walkme_643f6ad1d704426d92cd25e64dca21cf_https.js';
        var s = document.getElementsByTagName('script')[0];
        s?.parentNode?.insertBefore(walkme, s);
        //@ts-ignore
        window._walkmeConfig = { smartLoad: true };

    }
}
