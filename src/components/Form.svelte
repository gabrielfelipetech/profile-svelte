<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUser from "../interfaces/IUser";
    import { buscaRepositiorios, buscaUsuraio } from "../requisicoes";
    import { montaUsuario } from "../utils/montaUsuario";

    let valueSearch: string;
    let statusError: null | number = null;
    const dispatch = createEventDispatcher<{
        aoAlterarUsuario: IUser | null;
    }>();
    async function submit() {
        const responseUser = await buscaUsuraio(valueSearch)
        const responseRepositories = await buscaRepositiorios(valueSearch)
        statusError = 404;
        dispatch('aoAlterarUsuario', null)
        if (responseUser.ok && responseRepositories.ok) {
            statusError = responseUser.status && responseRepositories.status;
            const dataUser = await responseUser.json();
            const dataRepositories = await responseRepositories.json()
            dispatch("aoAlterarUsuario", montaUsuario(dataUser, dataRepositories));
        }
        valueSearch = "";
    }
</script>

<form action="" on:submit|preventDefault={submit}>
    <input
        type="text"
        class="input"
        class:erro-input={statusError === 404}
        placeholder="pesquise aqui o usuario"
        bind:value={valueSearch}
    />
    {#if statusError === 404}
        <span class="erro">Usuario não encontrado</span>
    {/if}
    <div class="botao-container">
        <button type="submit" class="botao">Buscar</button>
    </div>
</form>

<style>
    .erro {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }
    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }
    .erro-input {
        border: 1px solid #ff003e;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .botao-container {
        position: absolute;
        width: 9.625rem;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }

    .botao {
        padding: 15px 24px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        line-height: 26px;
        color: #fff;
        font-size: 22px;
        cursor: pointer;

        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: 13px;
    }

    .botao:hover {
        background: #4590ff;
    }
</style>
