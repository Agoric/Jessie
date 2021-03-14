(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.lib = {}));
}(this, (function (exports) { 'use strict';

	// @ts-check
	/// <reference types="ses" />

	// TODO: Typing these would be laudable, but harder than it looks.
	const makePromise = harden((executor) => harden(new Promise(executor)));
	const makeMap = harden((entriesOrIterable) => harden(new Map(entriesOrIterable)));
	const makeSet = harden((values) => harden(new Set(values)));
	const makeWeakMap = harden((entries) => harden(new WeakMap(entries)));
	const makeWeakSet = harden((values) => harden(new WeakSet(values)));

	exports.makeMap = makeMap;
	exports.makePromise = makePromise;
	exports.makeSet = makeSet;
	exports.makeWeakMap = makeWeakMap;
	exports.makeWeakSet = makeWeakSet;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
