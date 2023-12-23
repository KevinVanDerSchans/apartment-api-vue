<template>
  <select v-model="selected" @change="handleChange">
    <option value="">Todos los barrios</option>
    <option v-for="neighborhood in neighborhoods" :key="neighborhood.id" :value="neighborhood.id">
      {{ neighborhood.name }}
    </option>
  </select>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    neighborhoods: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selected = ref(props.modelValue);

    watch(() => {
      emit('update:modelValue', selected.value);
    });

    const handleChange = () => {
      emit('update:modelValue', selected.value);
    };

    return {
      selected,
      handleChange,
    };
  },
};
</script>
