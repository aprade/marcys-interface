<script lang="ts">
  import { state } from '../../stores/machines';
</script>

{#if $state.ok}
  <div class="cpu">
    <div class="load-average">
      <h1 class="title">CPU Load Average</h1>
      <div class="one">
        One<span>{$state.ok.cpu.load_average.one.toFixed(3)}</span>
      </div>
      <div class="five">
        Five<span>{$state.ok.cpu.load_average.five.toFixed(3)}</span>
      </div>
      <div class="fifteen">
        Fifteen<span>{$state.ok.cpu.load_average.fifteen.toFixed(3)}</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .load-average {
    background-color: #17181a;
    color: white;

    width: max-content;

    padding: 33px 33px 33px 33px;

    border: 0.4px solid #28292d;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .load-average h1 {
    font-size: 16px;
    margin-bottom: 28px;
  }

  .load-average div {
    font-weight: 800;

    margin-top: 25px;

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .load-average div span {
    background-color: #272a31;

    padding: 7px 15px;

    border-radius: 10px;
  }
</style>
