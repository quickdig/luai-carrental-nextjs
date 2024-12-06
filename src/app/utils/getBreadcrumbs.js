import { translations } from "./urlTranslations";


export function getBreadcrumb(pathname) {
    const paths = pathname.split('/').filter((segment) => segment);

    // checking language
    const isLocalized = paths[0].length === 2;
    const lang = isLocalized ? paths[0] : null;
    const breadcrumbPaths = isLocalized ? paths.slice(1) : paths;

    return [
        { href: lang ? `/${lang}` : '/', name: translations[lang]?.home || 'Home' },
        ...breadcrumbPaths.map((segment, index) => {
            const href =
                (lang ? `/${lang}` : '') +
                '/' +
                breadcrumbPaths.slice(0, index + 1).join('/');
            const name = translations[lang]?.[segment] || segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            return { href, name };
        }),
    ];
}