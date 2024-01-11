import { customRef } from 'vue';

export default function debounceRef<T>(value: T, delay = 1000) {
  let timer: ReturnType<typeof setTimeout>;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = val;
          trigger();
        }, delay);
      },
    };
  });
}
