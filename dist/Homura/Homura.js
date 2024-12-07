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
class Homura {
    constructor(key) {
        this._URL = "https://ws.audioscrobbler.com/2.0/?";
        this._ApiKey = key;
    }
    _fetch(_parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            _parameters.format = "json";
            _parameters.authocorrect = "1";
            _parameters.api_key = this._ApiKey;
            const parameters = this.generateParameters(_parameters);
            const response = yield fetch(this._URL + parameters, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = yield response.json();
            if ("error" in data)
                return data;
            return data;
        });
    }
    generateParameters(parameters) {
        return new URLSearchParams(parameters).toString();
    }
}
exports.default = Homura;
//# sourceMappingURL=Homura.js.map