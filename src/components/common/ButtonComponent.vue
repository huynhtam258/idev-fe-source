<template>
  <input :value="modelValue" class="form-control" :type="type" :placeholder="placeholder" :required="required" />
</template>
<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String || Number,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false,
  },
});
</script>
<style lang="scss" scoped>
.form-control {
  display: block;
  width: 100%;
  height: 44px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
  color: var(--gray-2);
  background-color: var(--white);
  background-clip: padding-box;
  border: 1px solid var(--white-1);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border: 1px solid var(--primary-color);
    box-shadow: unset !important;
  }
  &:focus-visible {
    outline: unset;
  }
}
</style>
