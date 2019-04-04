
function buildTag(item) {
    return (item.tag ? item.tag : item.name).replace(/ /g,"_");;
}

module.exports = buildTag;
