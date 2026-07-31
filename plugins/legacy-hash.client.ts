export default defineNuxtPlugin(() => {
  if (!import.meta.client) return;
  if (window.location.hash === "#about") {
    history.replaceState(null, "", `${window.location.pathname}${window.location.search}#form`);
  }
});
