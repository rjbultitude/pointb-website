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

define(['pfive'], function(p5) {
    'use strict';

    var circles = [];

    function findPixel() {
        return createVector(x,y);
    }

    function Circle(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.damp = random(0.002, 0.02);
        this.dpos = createVector(0,0);

        this.update = function() {
            this.dpos.x += random(-10, 10);
            this.dpos.y += random(-10, 10);
            this.x += (this.dpos.x - this.x) * this.damp;
            this.y += (this.dpos.y - this.y) * this.damp;

            return 'update';
        };

        this.paint = function() {
            fill(255,255,255,random(50,150));
            radius = random(4, 8);
            noStroke();
            ellipse(this.x, this.y, radius, radius);

            return 'paint';
        };
    }


    function setup() {
        var myCanvas = createCanvas(800,600);
        myCanvas.parent('toy1');

        for (var i = 0; i < 2000; i++) {
            var circ = new Circle(random(width), random(height));
            circles.push(circ);
        }
    }

    function draw() {
        background(0,0,0);
        var position = createVector(mouseX, mouseY);

        var circle1 = new Circle(random(width), random(height));
        for (var circ in circles) {
          var d = dist(mouseX, mouseY, circ.dposx, circ.dposy);
          if (d < 90) {
            var m = new Vector(circ.dposx - mouseX, circ.dposy - mouseY);
            m.normalize();
            m.mult(-10);
            circ.dpos.add(m);
          }
        }

        var circlesLength = circles.length;

        for (var i = 0; i < circlesLength; i++) {
            circles[i].update();
            circles[i].paint();
        }
    }

});