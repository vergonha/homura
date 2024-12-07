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
class User extends index_1.Homura {
    constructor(key) {
        super(key);
    }
    getFriends(user, recenttracks, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign({ method: "user.getFriends", user: user }, (recenttracks ? { recenttracks: recenttracks } : null)), (limit ? { limit: limit } : null)));
        });
    }
    getInfo(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch({
                method: "user.getInfo",
                user: user,
            });
        });
    }
    getRecentTracks(user, limit, page, from, to, extended) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ method: "user.getRecentTracks", user: user }, (limit ? { limit: limit } : null)), (page ? { page: page } : null)), (from ? { from: from } : null)), (to ? { to: to } : null)), (extended ? { extended: extended } : null)));
        });
    }
    getTopAlbums(user, period, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign(Object.assign({ method: "user.getTopAlbums", user: user }, (period ? { period: period } : null)), (limit ? { limit: limit } : null)), (page ? { page: page } : null)));
        });
    }
    getTopTracks(user, period, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._fetch(Object.assign(Object.assign(Object.assign({ method: "user.getTopTracks", user: user }, (period ? { period: period } : null)), (limit ? { limit: limit } : null)), (page ? { page: page } : null)));
        });
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map