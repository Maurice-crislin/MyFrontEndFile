import myFetch from 'MyFetch'


myFetch('https://api.github.com/users/ruanyf').then(res=>res.json()).then(res=>console.log(res)).catch(err=>console.log('err',err))