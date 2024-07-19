import { defineAsyncComponent, onMounted, onUnmounted, shallowRef } from 'vue';

export function useLayout() {
  const layout = shallowRef();

  const updateLayout = () => {
    const width = window.innerWidth;
    if (width < 768) {
      layout.value = defineAsyncComponent(() =>
        import('@/components/default/LayoutSmall.vue'),
      );
    } else if (width < 1200) {
      layout.value = defineAsyncComponent(() =>
        import('@/components/default/LayoutMedium.vue'),
      );
    } else {
      layout.value = defineAsyncComponent(() =>
        import('@/components/default/LayoutLarge.vue'),
      );
    }
  };

  onMounted(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateLayout);
  });

  return { layout };
}