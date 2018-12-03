export default{
    install(Vue){
        Vue.filter("formatDate",(value,params="day")=>{
            let date = new Date(value);
            if(params=="day"){
                let month = date.getMonth() + 1;
                let day = date.getDate();
                return month+"月"+ day +"日";
            }else if(params == "week"){
                const weekArr = ["日","一","二","三","四","五","六"];
                let week = date.getDay();
                return "星期" + weekArr[week];
            }
            
        })
    }
}