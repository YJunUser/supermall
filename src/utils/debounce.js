export function debounce(func, delay) {  //防抖函数/节流函数 加了后refresh()函数不会执行那么频繁(用于搜索提示，图片加载等等)
    let timer = null
    return function (...args) {//...代表可以传多个参数
        if (timer) clearTimeout(timer)//有引用(闭包) timer不会被销毁

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
