exports.Expires = {
    fileMatch: /^(gif|png|jpg|js|css)$/gi,
    maxAge: 60 * 60 * 24 * 365
};
exports.Compress = {
    match: /css|js|html/gi
};
exports.Welcome = {
    file: "index.html"
};
