<template>
  <SWUpdatePopup>
    <div
    v-if="enabled"
      slot-scope="{ enabled, reload, message, buttonText }"
      class="my-sw-update-popup">
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: white;
  font-size: 20px;
  padding: 10px;
  border: 2px solid #ccc;
}

.my-sw-update-popup button {
  border: 1px solid #fefefe;
}
</style>