<script lang="ts">
  import { fade, slide } from 'svelte/transition';

  export let message: string;
</script>

<div transition:fade class="dialog-bg">
  <div transition:slide class="dialog-warning">
    <div>
      <h1>{message}</h1>
    </div>
  </div>
</div>
  
<style>
  .dialog-bg {
    position: absolute;

    top: 0;
    left: 0;
  
    width: 100vw;
    height: 100vh;

    background-color: rgba(19, 20, 22, .4);
    backdrop-filter: saturate(100%) blur(10px);
  }

  .dialog-warning {
    position: absolute;

    background-color: #17181a;

    width: 334px;
    padding: 30px;

    border: 0.4px solid #28292d;
    box-sizing: border-box;
    border-radius: 10px;

    filter: drop-shadow(4px 4px 10px rgba(19, 20, 22, 0.15));

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1 {
    color: white;
    font-size: 20px;
  }

  @media screen and (min-width: 1650px) {
    h1 {
      font-size: 23px;
    }
  }
</style>
