<script setup lang="ts">
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, defineProps } from "vue";
import type { Ref } from "vue";

const visibleRef = ref(false);
const indexRef = ref(0); // default 0
const imgsRef: Ref<string> = ref<string>("");

const props = defineProps(["img"]);

const onShow = () => {
  visibleRef.value = true;
};
const showSingle = () => {
  imgsRef.value = props.img;
  onShow();
};

const onHide = () => (visibleRef.value = false);
</script>

<template>
  <button @click="showSingle">
    <slot></slot>
  </button>

  <VueEasyLightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="onHide"
  ></VueEasyLightbox>
</template>
