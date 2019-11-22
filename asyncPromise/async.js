const data = [
    {
        name : 'darshan',
        age : 30
    },
    {
        name : 'Nitin',
        age : 29
    },
    {
        name : 'Vinit',
        age : 35
    },
    {
        name : 'ShivPrasd',
        age : 41
    },
]


module.exports.GetData_Success = function(delay = 1000) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(data)
        }, delay);
    });
}

module.exports.GetData_Failure = function (delay = 1000) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            reject(new Error("Async function failed"))
        }, delay);
    });
}

module.exports.GetData_Blows= function (delay = 1000) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            throw "issue is happened"
        }, delay);
    });
}






