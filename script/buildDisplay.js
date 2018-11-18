
function buildDisplay(text) {
    return text.replace("-L", "&lt;").replace("-R", "&gt;").replace(/-/g, " ");
}

module.exports = buildDisplay;
