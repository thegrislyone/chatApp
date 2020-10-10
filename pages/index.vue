<template>
  <div>
    <h1>
      HEADLINE
    </h1>
  </div>
</template>

<script>
export default {
  sockets: {
    connect: function() {
      console.log("Socket connected");
    }
  },
}
</script>
