<script lang="ts">
  import { counter, countdown } from '../stores/countdown';
  import { machines } from '../stores/machines';
  import { isApiUp } from '../stores/api';
  import { checkApiUp } from '../remote';

  import WarningDialog from '../Components/Dialog/Warning.svelte';
  import Notification from '../Components/Notification.svelte';

  counter.subscribe((value: number): void => {
    if (value === 0) {
      checkApiUp();
    }
  });
  countdown();
  checkApiUp();
</script>

<div class="dashboard">
  <div class="title">
    <h1>Dashboard</h1>
    <h2>Refreshing in {$counter} seconds</h2>
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
</style>
