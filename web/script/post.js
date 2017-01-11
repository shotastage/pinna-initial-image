

function allocate(str) {
    var type, style, embedded_frame;

    var db = {
        type:           "music provider",
        style:             'width = "0"',
        embedded_frame: '<iframe></iframe>'
    }

    if (str.match("youtube") || str.match("youtu.be")) {
        db["type"] = "youtube";
        db["style"] = 'width="560" height="315"';
        db["embedded_frame"] = '<iframe' + style + 'src="' + str + '" frameborder="0" allowfullscreen></iframe>';
    }

    if (str.match("apple") || str.match("itunes")) {
        db["type"] = "apple";
        db["style"] = 'height="110px" width="100%" frameborder="0"';
        db["embedded_frame"] = '<iframe src="//tools.applemusic.com/embed/v1/song/' + str + '?country=jp"' + style + '></iframe>';
    }

    if (str.match("spotify")) {
        db["type"] = "spotify";
        db["style"] = 'height="110px" width="100%" frameborder="0"';
        db["embedded_frame"] = '<iframe src="//tools.applemusic.com/embed/v1/song/' + str + '?country=jp"' + style + '></iframe>';
    } else {
        db["type"] = "spotify";
        db["style"] = 'height="110px" width="100%"';
        db["embedded_frame"] = '<iframe></iframe>';
    }

    return db;
}
