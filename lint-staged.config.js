module.exports = {
    // Type check TypeScript files
    '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

    // Lint then format TypeScript and JavaScript files
    '**/*.(ts|tsx)': (filenames) => [
        `yarn eslint --fix ${filenames.map(filename => `'${filename}'`).join(' ')}`
    ],

    // Format MarkDown and JSON
    '**/*.(md|json)': (filenames) =>
        `yarn prettier --write ${filenames.map(filename => `'${filename}'`).join(' ')}`,
}