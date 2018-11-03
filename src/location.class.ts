'use strict';

const Point = require('./point');
const Area = require('./region');
const checks = require('./util/checks');

export class Location {
    constructor() {
    }

    static centerOf(target: Region) {
        const x = Math.floor(target.left + target.width / 2);
        const y = Math.floor(target.top + target.height / 2);

        return new Point(x, y);
    }

    static randomPointIn(target: Region) {
        const x = Math.floor(target.left + Math.random() * target.width);
        const y = Math.floor(target.top + Math.random() * target.height);

        return new Point(x, y);
    }
}