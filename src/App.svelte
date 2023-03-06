<script lang="ts">
  import BarraSuperior from "./components/BarraSuperior.svelte";
    import Form from "./components/Form.svelte";
  import Title from "./components/Title.svelte";
    import User from "./components/User.svelte";
  import type IUser from "./interfaces/IUser";
  
  let usuario: IUser | null = null;
</script>

<div class="app">
  <header>
    <Title />
    <div class="busca-usuario">
      <Form bind:usuario={usuario}/>
    </div>
  </header>
  {#if usuario}
  <User usuario={usuario}/>
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .busca-usuario {
    position: relative;
    width: 70%;
  }
</style>
