<template>
  <div>
    <div style="font-size: 16px;background: red;color: white;position: absolute;
    padding: 2px;
    top: 0;
    left: -70px;">
      {{item.time}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
</style>
