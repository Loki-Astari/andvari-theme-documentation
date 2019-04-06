
function buildTag(item) {
    return (item.tag ? item.tag : item.name).replace(/ /g,"");;
}

module.exports = buildTag;
