<template>
    <div>
      <div v-if="name === 'admin'">
        <p>{{ text }}</p>
      </div>
      <div v-else>
        <div>
          <span v-if="owner">ВЫ-</span>
          <span>{{ name }}</span>
          <p>{{ text }}</p>
          <span>Дата - {{ time }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    time: String,
    owner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  }
}
</script>