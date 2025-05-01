import { inject } from "vue";
import { data, type JmsSectionKey, type JmsLocaleKey, type JmsData } from '@/jms';
import JsonMs, { type JSONmsProvider } from '@jsonms/vue3';

const provider = JsonMs<JmsData, JmsSectionKey, JmsLocaleKey>({
  defaultData: data as unknown as JmsData,
  defaultLocale: 'en-US',
  defaultSection: { name: 'home', paths: [] },
})

export function useJsonMs() {
  return inject<JSONmsProvider<JmsData, JmsSectionKey, JmsLocaleKey>>('jms', provider.values);
}

export default provider;
