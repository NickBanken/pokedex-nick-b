<template>
  <article>
    <h3 class="text-white"><slot name="title"></slot></h3>
    <div class="p-5 bg-white rounded-lg">
      <slot name="content"></slot>
    </div>
  </article>
</template>
