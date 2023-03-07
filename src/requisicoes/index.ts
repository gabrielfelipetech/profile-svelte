function buscaUsuraio(userName: string){
    return fetch(
        `https://api.github.com/users/${userName}`
    );
}
function buscaRepositiorios(userName: string){
    return fetch(
        `https://api.github.com/users/${userName}/repos?sort=created&per_page=5`
    );
}
export {buscaUsuraio, buscaRepositiorios}