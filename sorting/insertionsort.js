const arr=[5,2,4,8,0 ]

const insertion=(arr)=>{
    let key
    let j
    for(let i=1;i<arr.length;i++){
        key=arr[i]
        j=i-1

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=key
    }
    return arr
}
console.log(arr);
insertion(arr)
console.log(arr);
