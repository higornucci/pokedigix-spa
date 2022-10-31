<script>
export default {
  name: "mensagem-erro",
  props: {
    mensagemDeErro: String,
  },
};
</script>

<template>
  <div class="toast-container position-absolute top-0 end-0 mt-5 p-3">
    <div
      id="liveToast"
      class="toast bg-danger text-white"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body">
        {{ mensagemDeErro }}
      </div>
    </div>
  </div>
</template>