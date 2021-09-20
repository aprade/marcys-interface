<script lang="ts">
  import Sidebar from './Components/Sidebar.svelte';

  import Dashboard from './Pages/Dashboard.svelte';
</script>

<main>
  <Sidebar />

  <div class="content">
    <header />

    <Dashboard />
  </div>
</main>

<style>
  main {
    display: flex;
  }
  .content {
    flex-grow: 1;
  }

  header {
    flex-grow: 1;
    height: 96px;

    background: #191d20;

    border: 2px solid #131416;
    box-sizing: border-box;
    border-radius: 0px 0px 0px 10px;
  }
</style>
