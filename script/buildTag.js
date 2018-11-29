
function buildTag(item) {
    return item.tag ? item.tag : item.name;
}

module.exports = buildTag;
