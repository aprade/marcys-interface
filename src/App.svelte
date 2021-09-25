<script lang="ts">
  import { machine } from './stores/machines';

  import Sidebar from './Components/Sidebar.svelte';

  import Dashboard from './Pages/Dashboard.svelte';
</script>

<main>
  <Sidebar />

  <div class="content">
    <header>
      <h1>
        {$machine}
      </h1>
    </header>

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

    padding-left: 20px;

    border: 2px solid #131416;
    box-sizing: border-box;
    border-radius: 0px 0px 0px 10px;

    display: flex;
    align-items: center;
  }

  header h1 {
    color: #FFF;
    font-size: 24px;
    font-weight: 600;
  }
</style>
