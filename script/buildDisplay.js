
function buildDisplay(text) {
    return !text ? ""
                :text
                    .replace("<",  "&lt;")
                    .replace("-L", "&lt;")
                    .replace(">",  "&gt;")
                    .replace("-R", "&gt;")
                    .replace(/-/g, " ");
}

module.exports = buildDisplay;
