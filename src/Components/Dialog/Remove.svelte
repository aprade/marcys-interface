<script lang="ts">
  import { slide } from 'svelte/transition';
  import { machines, machine } from '../../stores/machines';

  import Button from '../Button.svelte';

  export let show: boolean = false;

  const close = (): boolean => (show = false);

  $: show;

  const removeMachine = () => {
    machines.update(machines => machines.filter(value => value !== $machine));
    machine.update(_ => $machines[0]);

    close();
  };
</script>

{#if show}
  <div transition:slide class="dialog-remove">
    <div>
      <h1>Oh, do you really want to remove this machine ? ️😞</h1>
      <p>
        After we remove it from the database you wont be able to see it again.
      </p>
    </div>

    <div class="call-to-action">
      <Button variant="simple" style="margin-left:25px;" on:click={close}
        >Cancel</Button
      >
      <Button on:click={removeMachine}>Continue</Button>
    </div>
  </div>
{/if}

<style>
  .dialog-remove {
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

  p {
    color: #636363;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  .call-to-action {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1650px) {
    h1 {
      font-size: 23px;
    }
  }
</style>
