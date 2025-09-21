/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/03/18/etc/hello-world/index.html","35a6d7a3d8bd894a5d3b5fb180e2d242"],["/2025/03/18/research/Wi-Fi Backscatter communication/index.html","4aacad051ae4bcd26ed823abcdae9963"],["/2025/04/02/research/Channel-state-info/index.html","461295317078d11c808994dc6256fdf7"],["/2025/04/02/research/Knowing_5G/index.html","0b5b3491cf5e724711dc3c324e837caf"],["/2025/04/24/research/AOA_Positioning/index.html","0355ad212227bce81d97a65fe820b6e8"],["/2025/05/20/research/3D_Positioning_estimation/index.html","56675e8902e94e2cb443d143041c287e"],["/2025/05/23/study/How_use_mqtt_in_LuatOS/index.html","4a2c2ce6bc91ff6027c5adf1336fecd2"],["/2025/05/23/study/K_Means/index.html","432a439ad2adee7fd1318c98be43e4ec"],["/2025/05/24/study/Bayes/index.html","ad85460ec272f406377e30420e2d4039"],["/2025/05/29/study/Fisher/index.html","46ed3c5f42f53d8dc4898c22503bac31"],["/2025/05/29/study/SVM/index.html","b69552befd5839e30ec53e14693ec18c"],["/2025/05/29/study/基于CIFAR数据集的图像识别/index.html","6971cfc0abedb4698140357454aced70"],["/2025/05/30/research/picoscenes_use_instruction/index.html","30d2e7ab8167dc89294fafe7af25749f"],["/2025/06/01/study/人工智能/index.html","f432c93011926fd1b1c77b0464d88a08"],["/2025/06/06/research/usrp_uhd_download/index.html","cfdf3a75ecd91cb545b615225c5774e6"],["/2025/09/07/study/通信原理_模拟调制/index.html","aefb416b0f00c0f1797efd22dacda5b7"],["/2025/09/09/study/Simulink仿真/index.html","86d8cf026230455653e2b55394b76fdc"],["/2025/09/18/research/Adapose-By-yunjiao-zhou/index.html","3baa355875dc1ba81b369d75adc43a26"],["/2025/09/19/research/Densepose-from-wifi-By-jiaqi-gen/index.html","1a2cfb0eeea246dec3d851f4e0c9fbf8"],["/2025/09/19/research/leggiero-by-yuan-he/index.html","ded3f13206e185f1c255ffdb926595ae"],["/2025/09/19/research/multiformer-By-wenhui-xiong/index.html","512688567a837eedaf4834e98db6b3d4"],["/2025/09/20/research/Unsupervised-adversarial-domain-adaptation-By-han/index.html","a430903f52502987088ba66c2dc6c20d"],["/2025/09/21/research/survey-on-wifi-sensing-generalization/index.html","0275206a0e38d1fd6345444c84a5315c"],["/archives/2025/03/index.html","120cbbbf80359fcfe49e50514f240355"],["/archives/2025/04/index.html","35054088ea1690e85fcde1cad08c367c"],["/archives/2025/05/index.html","69ebb3b2317b70e6a315aa14b331a08b"],["/archives/2025/06/index.html","06a0dee2ecc68cf1ff82cf45d5d188bc"],["/archives/2025/09/index.html","61e3f039035598679a9b2b5ddfa297fe"],["/archives/2025/index.html","d5e0b84f52a07cc0a69b2b22e76b0e2c"],["/archives/2025/page/2/index.html","a1f8e8419a5a25aefb62728ecd81d915"],["/archives/2025/page/3/index.html","66448b37197de2c6ffa18b678d4b7b3c"],["/archives/index.html","9e2353b45a941aa4c983a93af9051dd8"],["/archives/page/2/index.html","9275350f769a8707d0ee5b2ecbee92b1"],["/archives/page/3/index.html","cf8816964c6b39fcf453a7850af7878c"],["/categories/5G/index.html","869507ed948370bcc6f76e10ff1412a4"],["/categories/5G/通感/index.html","3853a953ee639ab4e67881af01ded100"],["/categories/AI/index.html","307a6677236fc1f7fc9216a253fad5b3"],["/categories/Algorithm/Review/index.html","5c43a83e65d7751d47ef84fd3a9ae7c7"],["/categories/Algorithm/index.html","15f39ad07c14a328e195c131ee6e39e1"],["/categories/Communication/LuatOS-learning/index.html","260702853782b36c1d1791afd28a547a"],["/categories/Communication/index.html","71e523f8fda7f0faf5185f1fbfe461be"],["/categories/Linux/Ubuntu/index.html","099685cd9de1cfa724811f447aa18def"],["/categories/Linux/index.html","38030039230670e89473278c41dd1762"],["/categories/Reading-and-Thinking/index.html","ecaed0643cc5bfd701f1dcd6a0f98d1f"],["/categories/Tools/index.html","7a1d002d91f2a283281a2e5e24935ff9"],["/categories/通信原理/MATLAB/Simulink/index.html","1e1c2a1100442fd5b24d1f8dd89fdebf"],["/categories/通信原理/MATLAB/index.html","d28d2f21d834675a78cc13f23fcd725a"],["/categories/通信原理/index.html","0660c012459916883a266268b0feb0b2"],["/css/avatar_bg.css","160323a0a6962642c50b8a6c6d78a352"],["/css/background_card.css","1c8550fe106832d25b8f5a9f260cde1f"],["/css/custom_nav.css","6d931c95bcb734e39f81a2f84464e79c"],["/css/index.css","f5a5fcdaed26047129f9b6f1697264bb"],["/css/swiper.min.css","21b70942d56c99faef25bec8db671e10"],["/css/swiperstyle.css","7ab49d7794f1a550254a04a9124bf4ed"],["/css/universe.css","4717a52a44176b9e02139ec5633b83a3"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Dirty_work_Karina_1.jpg","c05eb3521f76a17f17ad949bd4b8022b"],["/img/Dirty_work_Karina_2.jpg","8ba7b847a2f538ffb72e43e57cb35f88"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/cute.jpg","4e6a25647205d8b847021587a96c2b07"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/karina_avatar.jpg","cb8ab2b15ec24e89aae23327937ae18e"],["/img/nav_logo.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/rich_man_karina_1.jpg","318ad562e52ddf97a85f7c92a8b1ce46"],["/img/rich_man_karina_2.jpg","4d0c228a8bd9117c3fd2dc6419c7c6cc"],["/img/rich_man_karina_3.jpg","e96add24291524a7facc3c2f67b5b012"],["/img/scene.jpg","a382d1ffdfc91f392c922eeec31e9755"],["/img/star_karina.jpg","e7e787d4a244c2cd6ace67d7cb309e0f"],["/index.html","05a8bd633fec82a609029b7f593aef4e"],["/js/calendar.js","8b89e8ba2aeaab057ba56000d821889f"],["/js/custom_footer.js","81007c627d3a195ecbc58f9b13d76b0f"],["/js/jquery.js","00727d1d5d9c90f7de826f1a4a9cc632"],["/js/language.js","25d8e541ec9d26d671026f1264574eba"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiper.min.js","f59359e375b6af9540fd3f197c29d7c5"],["/js/swiper_init.js","c0e03b483febcd168ecbe2031c2ce672"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","72ec25f552e70e93411477988aa33d5e"],["/js/utils.js","a789af3392757ad42be0868c8ad7e3f7"],["/page/2/index.html","370947dd4297eb678dc61800599bd587"],["/page/3/index.html","0ace38809ef16b69a62ab708c7a25dfe"],["/sw-register.js","dbae413e5b1f3ac034a60fe863f5a6cc"],["/tags/5G/index.html","f427977482e76c99ae9986144c859243"],["/tags/AI/index.html","da1453d4fc8e2b30a4f236a6d78b7d37"],["/tags/BackScatter/index.html","28c730aa15cc7e3e52fc9887f5d9d92b"],["/tags/CSI/index.html","2a0839e0dfc2cf244de906c83b903888"],["/tags/Channel-state-infomation-CSI/index.html","53d8ea1a70b71ac3b10617178f4cfddc"],["/tags/Deep-Learning/index.html","e9eac2475480dffef781e96a3be87d39"],["/tags/Environment-Generalization/index.html","9641908c48f03a6bec37eba60fc87cfd"],["/tags/Knowledge/index.html","9be9748f1d9a3e492eaa105c62b6a584"],["/tags/Linux/index.html","f77dc46ebe89f011ae6017c7d568824a"],["/tags/Low-power-consumption/index.html","4d2fb2b93a2ab1b7dcc8d50a305e1083"],["/tags/Lua/index.html","a360d40ddb12ff297a117254213da43f"],["/tags/MATLAB/index.html","a5b522319cf556b0c69413fac117d1fb"],["/tags/ML/index.html","b3b0f094db8c40eb9acc77f53a7cbefb"],["/tags/MQTT/index.html","572ffd8805894b5462844ee3cf3fbada"],["/tags/Pose-Estimation/index.html","4b6386d9f80beb49b98734ab866d7f79"],["/tags/Positioning/index.html","c2eab9d626bf5b6b4d36fccc44b2e5af"],["/tags/Python/index.html","179014f72ef79c2aac93da658f602635"],["/tags/UHD/index.html","5c1a62b98e32c7ae05e379d4f6660ecf"],["/tags/USRP/index.html","308ec8ef4fc0bf36399e7c625ceaf055"],["/tags/WiFi-Backscatter/index.html","5ba786f0d42fed94acc1071c5202e826"],["/tags/WiFi-Sensing/index.html","6392f3596f0896dda584da1374b36a14"],["/tags/WiFi/index.html","788cd7976b2c65c5de75e23a534fbd3a"],["/tags/communication/index.html","b56ccae1f13947b46ac056a5fe8c3eb4"],["/tags/通感/index.html","da9a834876679cdcaa33165e31c01459"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
