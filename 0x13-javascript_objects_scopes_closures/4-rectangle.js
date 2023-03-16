#!/usr/bin/node
class Rectangle {
        constructor (w, h) {
                if ((w > 0) && (h > 0)) {
                        this.width = w;
                        this.height = h;
                }
        }

        print () {
                for (let i = 0; i < this.width; i++) {
                        let s = '';
                        for (let j = 0; j < this.height; j++) {
                                s += 'X';
                        }
                        console.log(s);
                }
        }

	rotate () {
		const aux = this.width;
		this.width = this.height;
		this.height = aux;
	}

	double () {
		this.height *= 2;
		this.width *= 2;
	}
}

module.exports = Rectangle;
