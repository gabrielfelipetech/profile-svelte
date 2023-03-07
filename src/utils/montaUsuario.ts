import type IRepositorio from "../interfaces/IRepositorio";
import type IUser from "../interfaces/IUser";

export function montaUsuario(dataUser: any, dataRepositories:any):IUser{
    const repositorios_recentes = dataRepositories.map((repositories) => {
        return {
            nome: repositories.name,
            url: repositories.url
        } as IRepositorio
    })
    return {
        avatar_url: dataUser.avatar_url,
        login: dataUser.login,
        nome: dataUser.name,
        perfil_url: dataUser.html_url,
        repositorios_publicos: dataUser.public_repos,
        seguidores: dataUser.followers,
        repositorios_recentes
    }
}