import type IRepositorio from "./IRepositorio";

export default interface IUser {
    login: string;
    avatar_url: string;
    perfil_url: string;
    repositorios_publicos: number;
    seguidores: number;
    nome:string;
    repositorios_recentes: IRepositorio[]
}