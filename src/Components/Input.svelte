<script lang="ts">
  export let name: string = '';
  export let placeholder: string = '';
  export let style: string = '';
</script>

<input {name} {placeholder} {style} />

<style>
  input {
    background-color: #232323;
    color: #737373;

    font-size: 16px;

    padding: 10px;

    width: 100%;
    height: 42px;

    border: 0.4px solid #474747;
    box-sizing: border-box;
    border-radius: 10px;

    outline: none;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input::placeholder {
    color: #404040;
  }

  input:focus {
    background-color: #1c1c1d;
  }
</style>
