// browser.js
export function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown browser";
    let browserVersion = "Unknown version";

    if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1) {
        browserName = "Google Chrome";
        browserVersion = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || browserVersion;
    } else if (userAgent.indexOf("Edg") > -1) {
        browserName = "Microsoft Edge";
        browserVersion = userAgent.match(/Edg\/([0-9.]+)/)?.[1] || browserVersion;
    } else if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        browserVersion = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || browserVersion;
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
        browserName = "Apple Safari";
        browserVersion = userAgent.match(/Version\/([0-9.]+)/)?.[1] || browserVersion;
    }

    return { name: browserName, version: browserVersion };
}
