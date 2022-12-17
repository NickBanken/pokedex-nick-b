<template>
  <article class="mb-6 w-full max-w-[400px] justify-self-center">
    <h3 class="mb-[10px] font-text text-[12px] font-bold text-white">
      <slot name="title"></slot>
    </h3>
    <div class="p-5 bg-white rounded-lg">
      <slot name="content"></slot>
    </div>
  </article>
</template>
