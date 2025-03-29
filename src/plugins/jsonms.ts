import JsonMs from '@jsonms/vue3'
import { type JmsLocale, type JmsObject, defaultJmsObject } from '@/interfaces';
import {inject} from 'vue';
import { type JSONmsProvider } from '@jsonms/vue3';

export default JsonMs<JmsObject, JmsLocale>(defaultJmsObject)

type JmsProviderSet = JSONmsProvider<JmsObject, JmsLocale, string>

export const useJsonMs = (): JmsProviderSet => {
  const jms = inject<JmsProviderSet>('jms');
  if (jms) {
    return jms;
  }
  return {
    data: ref(defaultJmsObject),
    locale: ref('en-US'),
    section: ref('home'),
  }
}
