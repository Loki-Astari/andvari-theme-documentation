
function identifier(name) {
    return name.toLowerCase().replace(/\./g, '-');
}

module.exports = identifier;
