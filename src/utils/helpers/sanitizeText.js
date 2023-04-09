export const sanitizeText = (text) => {
  return text.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
};
