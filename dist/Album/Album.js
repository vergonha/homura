"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class Album extends index_1.Homura {
    constructor(key) {
        super(key);
    }
    getInfo(artist, album, lang) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign({ artist: artist, album: album, method: "album.getInfo" }, (lang ? { lang: lang } : {})));
        });
    }
    getTags(artist, album, username) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch({
                artist: artist,
                album: album,
                username: username,
                method: "album.getTags",
            });
        });
    }
    getTopTags(artist, album) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch({
                artist: artist,
                album: album,
                method: "album.getTopTags",
            });
        });
    }
    search(album, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign({ format: "json", album: album, method: "album.search" }, (limit ? { limit: limit } : null)), (page ? { page: page } : null)));
        });
    }
}
exports.default = Album;
//# sourceMappingURL=Album.js.map