<template>
  <div
    class="w-[320px] h-full md:w-[220px] rounded-2xl bg-card_background_second p-3"
  >
    <div class="relative w-full h-full">
      <Tag :value="tag" class="absolute top-0 right-0 text-lg md:text-sm" />
      <Image
        src="/images/producto_1.jpg"
        image-class="rounded-2xl w-full h-[300px] md:h-[200px] object-cover aspect-square"
      />
    </div>
    <div class="flex flex-col items-center gap-3 md:gap-1 my-3">
      <span class="font-paragraph text-lg md:text-sm text-cart_title_second">{{
        category
      }}</span>
      <h3
        class="font-semibold font-subtitle text-cart_text_second text-xl md:text-lg"
      >
        {{ title }}
      </h3>
      <div class="flex justify-center items-center gap-2">
        <span
          v-if="hasDiscount"
          class="font-paragraph text-text_links text-lg md:text-lg font-bold"
        >
          {{ formatCurrency(priceDiscount) }}
        </span>
        <span
          class="font-paragraph text-cart_text_second text-lg md:text-sm"
          :class="{ 'line-through ': hasDiscount }"
        >
          {{ formatCurrency(price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  category: string;
  title: string;
  tag?: string;
  price: number;
  hasDiscount?: boolean;
  priceDiscount?: number;
}

withDefaults(defineProps<Partial<Props>>(), {
  category: "Café",
  title: "Leche Manchada",
  tag: "Nuevo",
  price: 2.5,
  hasDiscount: false,
  priceDiscount: 0,
});
</script>

<style></style>
