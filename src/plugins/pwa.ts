// import type { UserModule } from '~/types'
//
// // https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
// export const install: UserModule = ({ isClient, router }) => {
//   if (!isClient)
//     return
//
//   router.isReady().then(async() => {
//     const { registerSW } = await import('virtual:pwa-register')
//     registerSW({ immediate: true })
//   })
// }

import { registerSW } from 'virtual:pwa-register';

// const intervalMS = 60 * 60 * 1000;

registerSW({
  immediate: true,
  // Uncomment if you want Periodic Service Worker Updates - https://vite-plugin-pwa.netlify.app/guide/periodic-sw-updates.html
  // onRegistered(r) {
  //     r && setInterval(() => {
  //         r.update().then()
  //     }, intervalMS)
  // }
});

export default registerSW();
