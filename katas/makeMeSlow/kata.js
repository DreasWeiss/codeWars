function makeMeSlow(to = Date.now() + 7000) {
    while (to > Date.now());
}