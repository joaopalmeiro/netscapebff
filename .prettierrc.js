module.exports = {
    ...require("@feedzai/prettier-config"),
    overrides: [
        {
            files: ["*.md", "*.yaml", "*.yml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
