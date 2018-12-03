/**
 * 轮播图接口
 * 参数：
 * __t:时间戳
 */
const BANNER_API = "/v4/api/billboard/home";


/**
 * 正在热映数据接口
 * 参数：
 * __t:时间戳
 * page:页数
 * count：每次请求的数量
 */
const NOW_PLAYING_API = "/v4/api/film/now-playing";


/**
 * 即将上映数据接口
 * 参数：
 * __t:时间戳
 * page:页数
 * count：每次请求的数量
 */
const COMING_SOON_API = "/v4/api/film/coming-soon";


export default{
    BANNER_API,
    NOW_PLAYING_API,
    COMING_SOON_API
}