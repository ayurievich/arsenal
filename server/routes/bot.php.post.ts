type FormBody = {
  name?: string;
  phone?: string;
  message?: string;
};

export default defineEventHandler(async (e) => {
  const config = useRuntimeConfig();
  const token = String(config.telegramBotToken || "").trim();
  const chatId = String(config.telegramChatId || "").trim();

  if (!token || !chatId) {
    setResponseStatus(e, 503);
    return {
      status: "error",
      message: "Сервис заявок временно недоступен.",
    };
  }

  const body = (await readBody<FormBody>(e).catch(() => ({}))) as FormBody;
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone) {
    setResponseStatus(e, 400);
    return {
      status: "error",
      message: "Укажите имя и телефон.",
    };
  }

  const text =
    "Новое сообщение с сайта:\nИмя: " +
    name +
    "\nТелефон: " +
    phone +
    "\nСообщение: " +
    message;

  const url =
    "https://api.telegram.org/bot" +
    token +
    "/sendMessage?chat_id=" +
    encodeURIComponent(chatId) +
    "&text=" +
    encodeURIComponent(text);

  try {
    await $fetch(url);
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
