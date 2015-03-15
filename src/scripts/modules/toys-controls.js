/**
 * Toys
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.point-b.co.uk/
 * $copyright    Copyright (c) 2015, point-b.co.uk. All rights reserved.
 *
 * $notes        Could be used as pitch controls
 */

define(['p5'], function(p5) {
    'use strict';

    var thisSketch;
    var controlImage;

    var myp5 = new p5(function(sketch) {
        thisSketch = sketch;
        mySketch();
    },'toy1');

    function mySketch() {
        thisSketch.setup = setup;
        thisSketch.draw = draw;
        //handleClick();

        //set vars
        //var offset = thisSketch.width/2;
        var offsetHeight = 150;
        var offsetWidth = 220;
        var mirrorRange = 50;
        var totalCtrls = 50;
        var ctrls = [];
        var index = 1;
        var timeMillis = 0;

        function setup() {
            var myCanvas = thisSketch.createCanvas(600, 300);
            myCanvas.parent('toy1');

            controlImage = thisSketch.loadImage('/images/ctrl.png');

            for (var i = 0; i < totalCtrls; i++) {
                var ctrl = new Control(thisSketch.random(0, thisSketch.width), thisSketch.random(0, thisSketch.height), i);
                ctrls.push(ctrl);
            }
            thisSketch.background(0, 0, 0);
        }

        function draw() {
            //thisSketch.image(controlImage,thisSketch.mouseX - controlImage.width/2, thisSketch.mouseY - controlImage.height/2);
            //thisSketch.image(controlImage,x,y);
            //var posVector = thisSketch.createVector(thisSketch.mouseX, thisSketch.mouseY);
            //console.log(posVector);
            index++;
            timeMillis = thisSketch.millis();

            //var ctrl = new Control(thisSketch.mouseX, thisSketch.mouseY);
            if (ctrls.length < 10) {
                var ctrl = new Control(thisSketch.random(1,thisSketch.width), thisSketch.random(1,thisSketch.height), index);
                ctrls.push(ctrl);
                //removedItem.remove();
                //ctrls = [];
                //console.log('removedItem', removedItem);
                for (var i = 0; i < ctrls.length; i++) {
                    //ctrls[i]
                    ctrls[i].paint();
                };
            }
            else {
                var removedItem = ctrls.shift();
            }
            // for (var i = 0; i < ctrls.length; i++) {
            //     console.log(ctrls.length);
            //     //ctrls[i].update();
            // }
            //ctrl.paint();
        }

        function Control(x,y, id) {
            this.id = id;
            this.posX = x;
            this.posY = y;
            //this.alpha = alpha;
        }
        Control.prototype.update = function() {
            this.posVector.x = thisSketch.mouseX;
            this.posVector.y = thisSketch.mouseY;
            //this.posX = thisSketch.map(thisSketch.mouseX, 0, thisSketch.width, thisSketch.width/2 + offsetWidth, thisSketch.width/2-offsetWidth);
            //this.posY = thisSketch.map(thisSketch.mouseY, 0, thisSketch.height, thisSketch.height/2 - offsetHeight, thisSketch.height/2+offsetHeight);
        };
        Control.prototype.remove = function() {
            thisSketch.tint(255, 0);
        }
        Control.prototype.paint = function() {
            //for (var i = 0; i < totalCtrls.length; i++) {
                thisSketch.tint(255, thisSketch.millis() * thisSketch.random(0.0001, 0.001));
                thisSketch.image(controlImage,this.posX - controlImage.width/2,this.posY - controlImage.height/2 + thisSketch.millis() * 0.01);
                thisSketch.image(controlImage, this.posX + thisSketch.millis() * 0.01, this.posY + thisSketch.mouseY, controlImage/4, controlImage/4);
            //};
        };
    }
});