import JsonMs from '@jsonms/vue3'
import { inject } from 'vue';
import defaultJmsObject, { type JmsSection, type JmsLocale, type JmsObject } from '@/interfaces';
import { type JSONmsProvider } from '@jsonms/vue3';

const defaultSection: JmsSection = 'home';
const defaultLocale: JmsLocale = 'en-US';

export default JsonMs<JmsObject, JmsLocale>(defaultJmsObject, defaultSection, defaultLocale)

type JmsProviderSet = JSONmsProvider<JmsObject, JmsLocale, string>

export const useJsonMs = (): JmsProviderSet => {
  const jms = inject<JmsProviderSet>('jms');
  if (jms) {
    return jms;
  }
  return {
    data: ref(defaultJmsObject),
    section: ref(defaultSection),
    locale: ref(defaultLocale),
  }
}
