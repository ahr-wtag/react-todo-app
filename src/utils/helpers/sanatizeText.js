export const sanatizeText = (text) => {
  text = text.trim();
  text = text.replaceAll(/<\/?[^>]+(>|$)/gi, "");
  return text;
};
