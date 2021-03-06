"use strict";
/// <reference path="IResolver.ts" />
/// <reference path="IResolutionContext.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CombinedResolver = (function () {
    function CombinedResolver(key, resolvers) {
        this.key = key;
        this.resolvers = resolvers;
    }
    CombinedResolver.prototype.resolve = function (context) {
        throw new Error("Attempted to resolve a single " + this.key + " but it has multiple implementations");
    };
    CombinedResolver.prototype.resolveMany = function (context) {
        var resolutions = this.resolvers.map(function (resolver) { return resolver.resolveMany(context); });
        return Array.prototype.concat.apply([], resolutions);
    };
    return CombinedResolver;
}());
exports.default = CombinedResolver;
