<template>
  <button 
    class="pretty-button"
    :class="{[`theme-${theme}`] : theme}"
  >
    <slot/>
  </button>
</template>

<script>
export default{
  inheritAttrs:false,
  props:{
    theme:{
      type:String,
      default:'button'
    }
  },
  setup(props,context){
    const {size,...rest} = context.attrs
    return {
      size,rest
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  border: 1px solid red;
}
</style>