<script lang="ts">
  import { counter, countdown } from '../stores/countdown';
  import { machine } from '../stores/machines';
  import { isApiUp } from '../stores/api';
  import { checkApiUp } from '../remote';
  import { getMachine } from '../api/machines';

  import WarningDialog from '../Components/Dialog/Warning.svelte';
  import Notification from '../Components/Notification.svelte';

  import LoadAversion from '../components/CPU/LoadAverage.svelte';

  counter.subscribe(async (value: number): Promise<void> => {
    if (value === 0) {
      checkApiUp();
      getMachine($machine);
    }
  });

  countdown();
  checkApiUp();
  getMachine($machine);
</script>

<div class="dashboard">
  <div class="title">
    <h1>Dashboard</h1>
    <h2>Refreshing in {$counter} seconds</h2>
  </div>
  <div class="info">
    <LoadAversion />
  </div>

  {#if !$isApiUp && process.env.NODE_ENV !== 'development'}
    <WarningDialog
      message="Our API is offline, please wait until it comes back to life. 😞"
    />
  {/if}
  <Notification />
</div>

<style>
  .dashboard {
    flex-grow: 1;

    padding: 25px;
  }

  .title {
    display: flex;
    align-items: flex-end;
  }

  .title h1 {
    color: white;
  }

  .title h2 {
    color: rgba(255, 255, 255, 0.15);

    margin-left: 15px;
  }

  .info {
    margin-top: 85px;
  }
</style>
