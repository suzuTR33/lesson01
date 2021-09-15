var month = Number(process.argv[2])
switch(((month-2+12)/3|0)%4){
    case 0:
        console.log('春')
        break
    case 1:
        console.log('夏')
        break
    case 2:
        console.log('秋')
        break
    case 3:
        console.log('冬')
        break
    default:
        console.log('error')
}

/*
season = ['春','夏','秋','冬']
console.log(((month-2+12)/3|0)%4)
*/