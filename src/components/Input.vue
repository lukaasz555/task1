<template>
  <div>
    <v-text-field
      v-model="inputValue"
      :placeholder="placeholder"
      :label="label"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :variant="variant"
      hide-details
      :class="className"
      density="compact"
    ></v-text-field>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";

const emit = defineEmits<{
  (event: "update:modelValue", val: string): void;
}>();

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<
      | "outlined"
      | "underlined"
      | "filled"
      | "plain"
      | "solo"
      | "solo-inverted"
      | "solo-filled"
      | undefined
    >,
    default: "outlined",
  },
});

const inputValue = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>

<style lang="scss" scoped></style>
