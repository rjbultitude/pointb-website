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

define(['p5'], function(p5) {
    'use strict';

    var thisSketch;

    var myp5 = new p5(function(sketch) {
        thisSketch = sketch;
        mySketch();
    },'toy1');

    function mySketch() {
        thisSketch.setup = setup;
        thisSketch.draw = draw;
        //handleClick();

        //set vars

        function setup() {
            var myCanvas = thisSketch.createCanvas(600, 300);
            myCanvas.parent('toy1');

            for (var i = 0; i < numParticles; i++) {
                //
            }

        }

        function draw() {
            thisSketch.background(0, 0, 0);
        }

        function handleClick() {
            document.addEventListener('click', function(e) {
                //do something
            });
        }

        function Particle(x, y) {

            this.update = function() {
                //update

                return 'update';
            }

            this.paint = function() {
                //paint

                return 'paint';
            }
        }
    }
});