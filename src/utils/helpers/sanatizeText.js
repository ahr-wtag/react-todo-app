export const sanatizeText = (text) => {
  return text.trim().replaceAll(/<\/?[^>]+(>|$)/gi, "");
};
