// Custom remark plugin adding quick explanations to frequently used terms.
// Inspired by https://github.com/freesewing/freesewing/tree/develop/packages/remark-jargon.

const visit = require('unist-util-visit');

const DEFINITIONS = {
    'data management service': `Forge service used to manage your application's and your user's design data.`
};

function isJargon(node) {
    return (
        node.children.length === 1
        && node.children[0].type === 'text'
        && Object.keys(DEFINITIONS).indexOf(node.children[0].value.toLowerCase()) !== -1
    );
}

const plugin = (options) => {
    const transformer = async (ast) => {
        visit(ast, 'emphasis', (node) => {
            if (isJargon(node)) {
                const term = node.children[0].value;
                const html = DEFINITIONS[term.toLowerCase()];
                const value = `<span class="jargon-term">${term}<span class="jargon-info">${html}</span></span>`;
                const position = node.children[0].position;
                position.end.column = position.end.column + value.length - term.length;
                position.end.offset = position.end.column - 1;
                node.children = [
                    {
                        type: 'html',
                        value,
                        position,
                        indent: node.children[0].indent
                    }
                ];
            }
        });
    };
    return transformer;
};

module.exports = plugin;
