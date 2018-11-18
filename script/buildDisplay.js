
function buildDisplay(text) {
    return text ? text.replace("-L", "&lt;").replace("-R", "&gt;").replace(/-/g, " ") : "";
}

module.exports = buildDisplay;
