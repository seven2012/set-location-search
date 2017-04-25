window.$ = function(){
    let array=[]
    return array
}
$.bom = {
    openAtCenter: function(width,height,url){
        window.open(url,'_blank', `
        width=${width}px,height=${height}px,
        screenX=${screen.width/2-width/2}px,
        screenY=${screen.height/2-height/2}px
        `)
    },
    search: function(name,value){
          let searchAll = function(){
                let result = {}
                let search = window.location.search
                //去掉问号
                if(search[0] === '?'){
                    search = search.slice(1)
                //  console.log('search:')
                // console.log(search)
                }
                //用 & 分割成数组
                let searchArray = search.split('&')
            // console.log('searchArray:')
            // console.log(searchArray)
                //遍历数组
                for(var i=0;i<searchArray.length;i++){
                //  console.log('searchArray[i]:')
                // console.log(searchArray[i])
                    let parts = searchArray[i].split('=')
                // console.log('parts:')
                // console.log(parts)
                    result[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || "")
                    //parts[0] === 'a'
                    //parts[1] === '1'
                    //result['a'] === '1'
                }
                return result
               // console.log(result)
             }
        let result = searchAll()
        if(value === undefined){
           return result[name] 
        }else{
            //当已经有a=xxx字样
            if(result[name] === undefined){
                location.search += `&${encodeURIComponent(name)}=${encodeURIComponent(value)}`
            }else{
                result[name] = encodeURIComponent(value)
                let newSearch = '?'
                for(let key in result){
                    newSearch += `${encodeURIComponent(key)} = ${encodeURIComponent(result[key])}&`
                }
                location.search = newSearch
            }
        }
    }
}