<template>
  <div
    :class="[
      'd-flex',
      align === 'left' ? 'justify-start' : '',
      align === 'center' ? 'justify-center' : '',
      align === 'right' ? 'justify-end' : '',
    ]"
  >
    <button
      :class="[
        className,
        fullWidth ? 'w-full' : 'w-auto',
        clsx(
          isPrimary
            ? 'bg-tw-primary text-tw-white rounded-tw-sm text-tw-base'
            : ''
        ),
      ]"
      :type="type"
      :disabled="isDisabled"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import clsx from "clsx";

defineEmits<{
  (e: "click"): void;
}>();

defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"button" | "submit" | "reset" | undefined>,
    default: "button",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: "",
  },
  align: {
    type: String as PropType<"left" | "center" | "right">,
    default: "center",
  },
  fullWidth: {
    type: Boolean,
    default: true,
  },
  isPrimary: {
    type: Boolean,
    default: true,
  },
});
</script>
