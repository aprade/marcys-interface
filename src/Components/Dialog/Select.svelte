<script lang="ts">
  import { slide } from 'svelte/transition';
  import { machines, machine } from '../../stores/machines';

  export let show: boolean = false;

  const close = (): boolean => (show = false);

  $: show;
</script>

{#if show}
  <div transition:slide class="dialog-select">
    <div class="dialog-header">
      <h1>Select the machine</h1>
      <div class="close-btn" on:click={close}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0.75L8.25 8.25M0.75 8.25L8.25 0.75L0.75 8.25Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <div class="items">
      {#each $machines as mach, index}
        <div
          class="item"
          on:click={() => {
            machine.update(_ => mach);
            close();
          }}
        >
          <span>
            {mach}
            {#if mach === $machine}
              <div class="active" />
            {/if}
          </span>
          {#if index !== $machines.length - 1}
            <div class="border" />
          {/if}
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .dialog-select {
    position: absolute;

    background-color: #17181a;

    width: 334px;
    max-height: 401px;

    /* overflow-y: scroll; */

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

  .dialog-header {
    width: 100%;

    padding: 28px 28px 28px 28px;
  }

  h1 {
    color: white;
    font-size: 20px;
  }

  .close-btn {
    position: absolute;

    top: 8px;
    right: 8px;

    width: 25px;
    height: 25px;

    border-radius: 25px;

    background-color: #272a2f;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.3s ease-in-out;
  }

  .close-btn:hover {
    background-color: #272a31;
    filter: drop-shadow(4px 4px 20px rgba(39, 42, 49, 0.1));
  }

  .items {
    padding: 10px;

    max-height: 350px;

    overflow-y: scroll;
  }

  .items::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
  }

  .items::-webkit-scrollbar {
    width: 2px;
    background-color: transparent;

    overflow: hidden;
  }

  .items::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #28292d;
  }

  .item {
    color: #fff;
    font-weight: 600;
    font-size: 17px;

    height: 74px;

    border-radius: 10px;

    padding: 0 28px;

    display: flex;
    flex-direction: column;

    transition: all 0.3s ease-in-out;
  }

  .item:hover {
    background-color: #272a31;
  }

  .item .active {
    background-color: #007aff;

    width: 10px;
    height: 10px;

    border-radius: 10px;

    margin-left: 15px;
  }

  .item span {
    flex-grow: 1;

    display: flex;
    align-items: center;
  }

  .item .border {
    bottom: 0;

    width: 100%;

    border-bottom: 0.4px solid #28292d;
  }

  @media screen and (min-width: 1650px) {
    h1 {
      font-size: 23px;
    }
  }
</style>
