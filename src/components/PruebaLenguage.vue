<template>
  <q-page class="flex flex-center">

    <span>{{ t("signUp") }}</span>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "PageIndex",

  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>
