function domainName(url) {
    return url.replace(/https?:\/\/(?:www\.)?|(www\.)/, "").split(".")[0]
}

console.log(domainName("http://google.com")); // "google"
console.log(domainName("http://google.co.jp")); // "google"
console.log(domainName("www.xakep.ru")); // "xakep"
console.log(domainName("https://youtube.com")); // "youtube"