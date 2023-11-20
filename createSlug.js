module.exports = function (arg, array) {
    if (typeof arg !== "string" || !arg.trim()) {
        throw new Error("Il titolo non è valido");
    }

    // Pulisco il titolo da spazi extra
    arg = arg.trim();

    if (array) {
        let counter = 1;
        let slug = arg.replace(/ /g, '-').toLowerCase();

        while (array.some(post => post.slug === slug)) {
            slug = arg.replace(/ /g, '-').toLowerCase() + counter;
            counter++;
        }

        return slug;
    }

    return arg.replace(/ /g, '-').toLowerCase();
};