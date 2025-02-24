export const presets = [
    ['@babel/preset-env', {
        targets: {
            node: '18',
            browsers: '> 0.25%, not dead'
        },
        modules: 'auto'
    }],
    '@babel/preset-typescript'
];