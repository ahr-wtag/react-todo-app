export const sanitizeText = (text) =>
  text.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
