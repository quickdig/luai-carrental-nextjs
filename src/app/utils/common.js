export const setLanguage = (lang) => {
    localStorage.setItem("lang", lang);
};
export const removeTokenSession = () => {
    localStorage.clear();
};
export const getLanguage = () => {
    return localStorage.getItem("lang") || 'en';
};