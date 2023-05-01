import DOMPurify from "dompurify";
export const sanitizeText = (text) => DOMPurify.sanitize(text);
