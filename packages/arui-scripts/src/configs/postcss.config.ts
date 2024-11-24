import config from './app-configs';
import supportingBrowsers from './supporting-browsers';
/**
 * Функция для создания конфигурационного файла postcss
 * @param {String[]} plugins список плагинов
 * @param {Object} options коллекция конфигураций плагинов, где ключ - название плагина, а значение - аргумент для инициализации
 * @returns {*}
 */
export function createPostcssConfig(
    plugins: string[],
    options: Record<string, unknown>,
): string[] | unknown[] {
    return plugins.map((pluginName) => {
        if (pluginName in options) {
            return [pluginName, options[pluginName]];
        }

        return pluginName;
    });
}

export const postcssPlugins = [
    'postcss-omit-import-tilde',
    'postcss-import',
    'postcss-url',
    'postcss-mixins',
    'postcss-for',
    'postcss-each',
    'postcss-custom-media',
    'postcss-color-mod-function',
    !config.keepCssVars && 'postcss-custom-properties',
    !config.keepCssVars && 'postcss-remove-root',
    'postcss-strip-units',
    'postcss-calc',
    'postcss-color-function',
    'postcss-nested',
    'autoprefixer',
    'postcss-inherit',
    'postcss-discard-comments',
].filter(Boolean) as string[];

export const postcssPluginsOptions = {
    'postcss-import': {
        path: ['./src'],
    },
    'postcss-url': {
        url: 'rebase',
    },
    'postcss-color-mod-function': {
        unresolved: 'warn',
    },
    'postcss-custom-properties': {
        preserve: false,
    },
    autoprefixer: {
        overrideBrowserslist: supportingBrowsers,
    },
};
