/**
 * Toys
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.point-b.co.uk/
 * $copyright    Copyright (c) 2014, point-b.co.uk. All rights reserved.
 *
 * $notes        Notes
 */

var requireLocalized = requireLocalized || {};

define(['p5'], function() {
    'use strict';

    function Star() {

        this.radius1;
        this.radius2;
        this.points;

        //create shape function
        this.createStar = function(_x, _y, starRadius1, starRadius2, starPoints) {

            var arc = TWO_PI / (starPoints);
            var opacity = random(0, 50);

            beginShape();
            translate(_x,_y);
            fill(255, 255, 255, opacity);
            noStroke();

            var offsetX;
            var offsetY;
            var stepAngle = TWO_PI / (starPoints*2);

            for ( var i = 0; i < starPoints*2; i++ ) {

                var x = cos( stepAngle * i ) * starRadius1;
                var y = sin( stepAngle * i ) * starRadius1;

                var cx = cos( stepAngle * i ) * starRadius2;
                var cy = sin( stepAngle * i ) * starRadius2;

                if ( i%2 == 0 ) {
                    vertex( x, y );
                } else {
                    vertex( cx, cy);
                }
            }
            endShape(CLOSE);
        };

        this.paint = function() {
            radius1 = random(30, 4);
            radius2 = random(15, 2);
            points = random(3, 13);

            var t = millis();

            fill(255);
            translate(pmouseX, pmouseY);
            rotate((t*0.0003)+TWO_PI/360);
            this.createStar(0,0,radius1,radius2,points);
        }
    };

    var star;

    function setup() {
        createCanvas(800,600);
        star = new Star();
        background(0,0,0);
    }

    function draw() {
        star.paint();
    }

});