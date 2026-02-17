const BOT_TOKEN = "7654862177:AAGCmGtrQMxanhALFq_a4oaQhIwN_0kT0Jo";
const CHAT_ID = "-1002493657391";

export default defineEventHandler(async (e) => {
  const body = await readBody<{ name?: string; phone?: string; message?: string }>(e).catch(
    () => ({})
  );
  const name = String(body?.name ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const message = String(body?.message ?? "").trim();

  const text =
    "Новое сообщение с сайта:\nИмя: " +
    name +
    "\nТелефон: " +
    phone +
    "\nСообщение: " +
    message;

  const url =
    "https://api.telegram.org/bot" +
    BOT_TOKEN +
    "/sendMessage?chat_id=" +
    CHAT_ID +
    "&text=" +
    encodeURIComponent(text);

  try {
    const res = await $fetch(url);
    return {
      status: "success",
      message: "Спасибо за ваше сообщение! Мы скоро с вами свяжемся.",
    };
  } catch {
    setResponseStatus(e, 500);
    return {
      status: "error",
      message: "Произошла ошибка при отправке сообщения.",
    };
  }
});
