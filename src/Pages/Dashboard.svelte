<script lang="ts">
  import { timer, time, isCycleComplete } from '../stores/countdown';

  timer.start();

  isCycleComplete.subscribe(value => {
    if (value) {
      // Call marcys-link for updated information
    }
  });
</script>

<div class="dashboard">
  <div class="title">
    <h1>Dashboard</h1>
    <h2>Refreshing in {$time} seconds</h2>
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
