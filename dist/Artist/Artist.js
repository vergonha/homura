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
class Artist extends index_1.Homura {
    constructor(key) {
        super(key);
    }
    getInfo(artist, lang) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._fetch(Object.assign({ method: "artist.getInfo", format: "json", artist: artist }, (lang ? { lang: lang } : null)));
        });
    }
    getSimilar(artist, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._fetch(Object.assign({ method: "artist.getSimilar", artist: artist }, (limit ? { limit: limit } : null)));
        });
    }
    getTopAlbums(artist, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign({ method: "artist.getTopAlbums", format: "json", artist: artist }, (limit ? { limit: limit } : null)), (page ? { page: page } : null)));
        });
    }
}
exports.default = Artist;
//# sourceMappingURL=Artist.js.map