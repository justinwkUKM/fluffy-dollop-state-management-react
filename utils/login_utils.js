export const login = async ({email, password}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === "waqas@thelorry.com" && password === "password"){
                console.log('resolved')
                resolve()
            }else{
                console.log('rejected')
                reject()
            }
        }, 1000);
    })
}

