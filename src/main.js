import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
// import store from './store';

import components from '@/components/ui';
import router from '@/router';
import directives from '@/directives';
import store from '@/store';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount('#app');
// createApp(App).use(store).use(router).mount('#app');
