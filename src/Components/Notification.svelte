<script lang="ts">
  import { fade } from 'svelte/transition';
  import { notificationData, showNotification } from '../stores/notification';
</script>

{#if $showNotification}
  <div transition:fade class="notification {$notificationData.variant}">
    <p>{$notificationData.message}</p>
  </div>
{/if}

<style>
  .notification {
    position: absolute;

    font-weight: 600;

    top: 25px;
    right: 50px;
    vertical-align: middle;
    align-items: center;

    /* margin: 1rem; */
    padding: 15px 25px 15px 25px;

    border-radius: 10px;
  }

  .success {
    color: white;
    background-color: rgba(87, 170, 88, 0.7);
  }

  .error {
    color: white;
    background-color: #623237;
  }
</style>
