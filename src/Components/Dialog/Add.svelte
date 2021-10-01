<script lang="ts">
  import { slide } from 'svelte/transition';
  import { machines, machine } from '../../stores/machines';
  import { createNotification } from '../../stores/notification';
  import * as api from '../../api/machines';

  import Input from '../Input.svelte';
  import Button from '../Button.svelte';

  export let show: boolean = false;

  const close = (): boolean => (show = false);

  $: show;

  let machineNickname: string;
  let machineIp: string;

  const addMachine = async () => {
    const result = await api.addMachine({
      nickname: machineNickname,
      ip: machineIp
    });

    if (result.ok) {
      if (!$machines.includes(machineNickname)) {
        machines.update(machines => [machineNickname, ...machines]);
        machine.update(_ => machineNickname);
      }
      createNotification(result.message, 'success');
    } else {
      createNotification(result.message, 'error');
    }

    close();
  };
</script>

{#if show}
  <div transition:slide class="dialog-add">
    <h1>Let’s add a new machine into our party! 🎉</h1>
    <p>
      It will add the machine you specify into the databasee, and then the
      system will monitor it.
    </p>

    <div class="form">
      <label for="machine-nickname">Machine name</label>
      <Input
        bind:value={machineNickname}
        name="machine-nickname"
        placeholder="localhost"
        style="margin-top: 5px; margin-bottom: 25px;"
      />

      <label for="machine-ip-address">Machine IP address</label>
      <Input
        bind:value={machineIp}
        name="machine-ip-address"
        placeholder="127.0.0.1"
        style="margin-top: 5px; margin-bottom: 25px;"
      />
    </div>

    <div class="call-to-action">
      <Button variant="simple" style="margin-left:25px;" on:click={close}
        >Cancel</Button
      >
      <Button on:click={addMachine}>Continue</Button>
    </div>
  </div>
{/if}

<style>
  .dialog-add {
    position: absolute;

    background-color: #17181a;

    width: 522px;
    padding: 30px;

    border: 0.4px solid #28292d;
    box-sizing: border-box;
    border-radius: 10px;

    filter: drop-shadow(4px 4px 10px rgba(19, 20, 22, 0.15));

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  .form label {
    color: #989898;
    font-weight: 500;
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
