export const sanatizeText = (text) => {
  return text.replaceAll(/<\/?[^>]+(>|$)/gi, "").trim();
};
