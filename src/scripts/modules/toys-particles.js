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
    var thisSound;

    var myp5 = new p5(function(sketch) {
        thisSketch = sketch;
        mySketch();
    },'toy1');

    function mySketch() {
        thisSketch.setup = setup;
        thisSketch.draw = draw;
        handleClick();

        //set vars
        var particles = [];
        var numParticles = 500;
        var defaultRadius = 10;
        var dposRange = 20;
        var mouseRadius = 50;
        var outerBorder = 1;

        function setup() {
            var myCanvas = thisSketch.createCanvas(600, 300);
            myCanvas.parent('toy1');
            //soundFormats('wav');

            for (var i = 0; i < numParticles; i++) {
                var particle = new Particle(thisSketch.random(0, thisSketch.width), thisSketch.random(0, thisSketch.height));
                particles.push(particle);
            }

            //soundFile = thisSketch.loadSound('/sounds/emb_samp.wav', soundLoaded);
            //soundFile.play();
        }

        function draw() {
            thisSketch.background(0, 0, 0);

            for (var i = 0; i < particles.length; i++) {
                var distance = thisSketch.dist(thisSketch.mouseX, thisSketch.mouseY, particles[i]['dpos']['x'], particles[i]['dpos']['y']);
                if (distance < mouseRadius) {
                    particles[i]['isInMouseRange'] = true;
                    var newVector = thisSketch.createVector(particles[i]['dpos']['x'] - thisSketch.mouseX, particles[i]['dpos']['y'] - thisSketch.mouseY);
                    newVector.normalize();
                    newVector.mult(-10);
                    var particleDpos = particles[i]['dpos'];
                    particleDpos.add(newVector);
                }
                else {
                    particles[i]['isInMouseRange'] = false;
                }
            }

            for (var i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].paint();
            }
        }

        function handleClick() {
            document.addEventListener('click', function(e) {
                for (var i = 0; i < particles.length; i++) {
                    particles[i].setDest(thisSketch.random(thisSketch.width), thisSketch.random(thisSketch.height));
                }
            });
        }

        function Particle(x, y) {
            this.isInMouseRange = false;
            this.pRadius = defaultRadius;
            this.smallestRadius = 5;
            this.x = x;
            this.y = y;
            this.dpos = thisSketch.createVector(x,y);
            this.col = thisSketch.color(thisSketch.random(150, 255), thisSketch.random(150, 255), thisSketch.random(150, 255), thisSketch.random(100, 200));
            this.damp = thisSketch.random(0.002, 0.008);

            this.setDest = function(x, y) {
                this.dpos.set(x, y);
            }

            this.update = function() {
                if (this.isInMouseRange) {
                    if (this.pRadius > this.smallestRadius) {
                        this.pRadius = this.pRadius -1;
                    }
                    else {
                        this.pRadius = this.smallestRadius;
                    }
                }
                else {
                    this.pRadius = defaultRadius;
                }
                //this.pRadius 
                this.dpos.x += thisSketch.random(-dposRange, dposRange);
                this.dpos.y += thisSketch.random(-dposRange, dposRange);

                //particle pos is off canvas right
                // if (this.x >= thisSketch.width + outerBorder) {
                //     this.x -= (this.dpos.x - this.x) * this.damp;
                // }
                // //particle pos is off canvas left
                // else if (this.x <= -outerBorder) {
                //     this.x += (this.dpos.x - this.x) * this.damp;
                // }
                // else {
                    this.x += (this.dpos.x - this.x) * this.damp;
                //}
                //particle pos is off canvas bottom
                // if (this.y >= thisSketch.height + outerBorder) {
                //     this.y -= (this.dpos.y - this.y) * this.damp;
                // }
                // //particle pos is off canvas top
                // else if (this.y <= -outerBorder) {
                //     this.y += (this.dpos.y - this.y) * this.damp;
                // }
                // else {
                    this.y += (this.dpos.y - this.y) * this.damp;
                //}

                //this.pRadius += thisSketch.sin(thisSketch.random(0.1, 0.9)) * this.damp;

                return 'update';
            }

            this.paint = function() {
                thisSketch.fill(this.col);
                thisSketch.noStroke();
                thisSketch.ellipse(this.x, this.y, this.pRadius, this.pRadius);

                return 'paint';
            }
        }
    }
});