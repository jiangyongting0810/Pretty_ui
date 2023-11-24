<template>
  <div class="topnav">
      <Topnav/>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
</template>
<script lang="ts">
  import Topnav from "../components/Topnav.vue"
  export default {
    components:{
      Topnav
    }
  }
</script>