<script lang="ts">
  import { counter, countdown } from '../stores/countdown';
  import { machines } from '../stores/machines';

  counter.subscribe((value: number): void => {
    if (value === 0) {
      // Call marcys-link for updated information
    }
  });
  countdown();

  $: console.log('machines', $machines);
</script>

<div class="dashboard">
  <div class="title">
    <h1>Dashboard</h1>
    <h2>Refreshing in {$counter} seconds</h2>
  </div>
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
