import translations from './language-zh';
export default function customTranslate(template, replacements) {
    replacements = replacements || {};
    // Translate
    template = translations[template] || template;
    // Replace
    return template.replace(/{([^}]+)}/g, function(_, key) {
        return replacements[key] || '{' + key + '}';
    });
}