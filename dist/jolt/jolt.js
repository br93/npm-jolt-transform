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
exports.__jolt = void 0;
const __jolt = (input, spec, sort) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                input,
                spec,
                sort: sort.toString()
            }).toString(),
        };
        const url = 'https://jolt-demo.appspot.com/transform';
        const request = new Request(url, requestOptions);
        const response = yield fetch(request);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const buffer = yield response.arrayBuffer();
        const text = decode('iso-8859-1', buffer);
        return text;
    }
    catch (error) {
        return error;
    }
});
exports.__jolt = __jolt;
function decode(format, buffer) {
    const decoder = new TextDecoder(format);
    const data = decoder.decode(buffer);
    return data;
}
//# sourceMappingURL=jolt.js.map