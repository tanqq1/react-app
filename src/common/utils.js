    // 深拷贝函数
    // 深拷贝实现方式JSON.parse(JSON.strinfy(obj)), 但是没法复制函数（会返回null）
    export function cloneDeep(obj){
        //  想判断是否是对象类型,是否空对象类型
        if(typeof obj !== 'object' || obj === null){
            return obj;
        }
        let data ;
        // 进一步判断是数组还是对象
        if(obj instanceof Object){
            data = {}
        }
        if(obj instanceof Array){
            data = [];
        }
        for(let v in obj){
            let childData = obj[v];
            data[v] = typeof childData === 'object' ? cloneDeep(childData) : childData;
        }
        return data;
     }


    // 防抖函数，防止短时间内大量请求，在规定时间间隔内再次发起请求的话就继续重新计时
    export function debounce(fn,wait,...args){
        let timeOut = null;
        return function(){
            let context = this;
            let args = arguments;
            if(timeOut) clearTimeout(timeOut);
            timeOut = setTimeout(() => {
                console.log("this",this)
                console.log("context",context)
                fn.apply(context,args);
            }, wait)
        }
    }
    
    // 节流函数，减少调取次数，在规定时间内仅执行一下
    export function throttle(fn, wait){
        let timeID = null;
        return function(){
            let context = this;
            let args = arguments;
            if(!timeID){
                timeID = setTimeout(()=> {
                    timeID = null;
                    fn.apply(context,args)
                },wait)
            }
        }
    }

    //  冒泡排序
    export function bubbleSort(arr){
        for(let i = 0; i < arr.length; i++){
            let count = 0;
            for(let j = 0; j < arr.length; j++){
                if(arr[j + 1] < arr[j]){
                    count++;
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
            if(count === 0) break;
        }
        console.log("排序后返回的数组",arr)
        return arr;
    }

    // 选择排序，每一次循环都是为了找出剩余数组中最小的数值
    export function selectSort(arr){
        for(let i = 0; i < arr.length - 1; i++){
            let minIndex = i;
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[minIndex]){
                    minIndex = j;
                }
            }
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        console.log("选择排序返回数组",arr)
        return arr;
    }

    // 手动实现Promise


    // 手动实现call、apply、bind方法