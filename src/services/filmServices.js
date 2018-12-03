import axios from 'axios'

import API from "../api"

//请求轮播图数据
export function getBannerData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.BANNER_API,{
            params:{
                __t:new Date()
            }
        })
        .then(response=>{
            // console.log("请求成功")
            // console.log(response)
            let data = response.data.data.billboards.map(item=>{
                return{
                    id: item.id,
                    imageUrl:item.imageUrl
                }
            });
            resolve(data);
        })
        .catch(error=>{
            console.log("请求失败")
        })
        
    })
}

//请求正在热映数据
export function getNowPlayingData(page,count){
    return new Promise((resolve,reject)=>{
        axios.get(API.NOW_PLAYING_API,{
            params:{
                __t:new Date(),
                page,
                count
            }
        })
        .then(response=>{
            // console.log("正在热映请求成功")
            console.log(response);
            let data = response.data.data.films.map(item=>{
                return {
                    id: item.id,
                    intro:item.intro,
                    cover: item.cover.origin,
                    grade:item.grade,
                    name: item.name,
                    premiereAt: item.premiereAt,
                    cinemaCount:item.cinemaCount,
                    watchCount:item.watchCount,
                    poster:item.poster.origin
                }
            });
            // console.log(data)
            resolve({data,total:response.data.data.page.total});
        })
        .catch(error=>{
            console.log("正在热映请求失败")
        })
    })
}

//请求即将上映的数据
export function getComingSoonData(page,count){
    return new Promise((resolve,reject)=>{
        axios.get(API.COMING_SOON_API,{
            params:{
                __t:new Date(),
                page,
                count
            }
        })
        .then(res=>{
            // console.log("即将上映数据请求成功");
            // console.log(res)
            let data = res.data.data.films.map(item=>{
                return {
                    id: item.id,
                    cover: item.cover.origin,
                    grade:item.grade,
                    name: item.name,
                    premiereAt: item.premiereAt,
                    cinemaCount:item.cinemaCount,
                    watchCount:item.watchCount,
                    poster:item.poster.origin
                }
            });
            // console.log(data)
            resolve({data,total:res.data.data.page.total});
        })
        .catch(error=>{
            console.log("即将上映数据请求失败");
        })
    })
}