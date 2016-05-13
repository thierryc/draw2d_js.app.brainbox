// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_alu_FullAdder = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_alu_FullAdder",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:70,height:78.125},attr), setter, getter);
        var port;
        // output_s
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.17942857142874, 23.12));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_s");
        port.setMaxFanOut(20);
        // output_c
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.60800000000017, 77.27910399999993));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_c");
        port.setMaxFanOut(20);
        // input_a
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.3188571428573985, 16.72));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_a");
        port.setMaxFanOut(20);
        // input_b
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.3188571428573985, 51.28966400000034));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_b");
        port.setMaxFanOut(20);
        // input_c
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.3188571428573985, 81.11910399999994));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_c");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 70;
        this.originalHeight= 78.125;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L70,0 L70,78.125 L0,78.125");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,5.140100000000075Q0,4.140100000000075 1, 4.140100000000075L69,4.140100000000075Q70,4.140100000000075 70, 5.140100000000075L70,73.14010000000007Q70,74.14010000000007 69, 74.14010000000007L1,74.14010000000007Q0,74.14010000000007 0, 73.14010000000007L0,5.140100000000075');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'Full');
        shape.attr({"x":24.65625,"y":32.625,"text-anchor":"start","text":"Full","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Adder');
        shape.attr({"x":21.7170000000001,"y":45.87429999999995,"text-anchor":"start","text":"Adder","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'A');
        shape.attr({"x":5,"y":13,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'B');
        shape.attr({"x":6,"y":41.125,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'S');
        shape.attr({"x":52.34375,"y":19,"text-anchor":"start","text":"S","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C');
        shape.attr({"x":52.34375,"y":60.125,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C');
        shape.attr({"x":6,"y":63.37429999999995,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'in');
        shape.attr({"x":16.7170000000001,"y":67.125,"text-anchor":"start","text":"in","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_alu_FullAdder = draw2d_circuit_alu_FullAdder.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var a = this.getInputPort("input_a").getValue();
        var b = this.getInputPort("input_b").getValue();
        var c = this.getInputPort("input_c").getValue();

        // s = a XOR b XOR  c
        this.getOutputPort("output_s").setValue(a ^ b ^ c);

        // c = (at least two bits are set)
        this.getOutputPort("output_c").setValue((a+b+c)>1);
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
draw2d_circuit_alu_FullAdder.github="./shapes/org/draw2d/circuit/alu/FullAdder.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_alu_FullAdder4Bit = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_alu_FullAdder4Bit",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:81.71875,height:200},attr), setter, getter);
        var port;
        // output_as
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.24429827915878, 9.43359375));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_as");
        port.setMaxFanOut(20);
        // output_c
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.12045889101339, 89.72807499999999));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_c");
        port.setMaxFanOut(20);
        // input_a1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8864550669216792, 9.78125));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_a1");
        port.setMaxFanOut(20);
        // input_b1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.7924741873807892, 19.785025000000132));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_b1");
        port.setMaxFanOut(20);
        // input_c1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8864550669216792, 29.687149999999974));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_c1");
        port.setMaxFanOut(20);
        // input_d1
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.7924741873807892, 39.67337500000008));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_d1");
        port.setMaxFanOut(20);
        // input_a2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8864550669216792, 49.614675000000034));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_a2");
        port.setMaxFanOut(20);
        // input_b2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8903709369026886, 59.663724999999886));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_b2");
        port.setMaxFanOut(20);
        // input_c2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8903709369026886, 69.671875));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_c2");
        port.setMaxFanOut(20);
        // input_d2
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8903709369026886, 79.671875));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_d2");
        port.setMaxFanOut(20);
        // input_cin
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.8903709369026886, 89.72807499999999));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_cin");
        port.setMaxFanOut(20);
        // output_bs
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.24429827915878, 19.6171875));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_bs");
        port.setMaxFanOut(20);
        // output_cs
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.24429827915878, 29.687149999999974));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_cs");
        port.setMaxFanOut(20);
        // output_ds
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.24429827915878, 39.67337500000008));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_ds");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 81.71875;
        this.originalHeight= 200;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L81.71875,0 L81.71875,200 L0,200");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,1Q0,0 1, 0L79,0Q80,0 80, 1L80,199Q80,200 79, 200L1,200Q0,200 0, 199L0,1');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'FA');
        shape.attr({"x":31.538024999999834,"y":81.72956250000016,"text-anchor":"start","text":"FA","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'A1');
        shape.attr({"x":6.27559999999994,"y":21.5,"text-anchor":"start","text":"A1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'B1');
        shape.attr({"x":7.77559999999994,"y":40.625,"text-anchor":"start","text":"B1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'As');
        shape.attr({"x":58.11934999999994,"y":19,"text-anchor":"start","text":"As","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C');
        shape.attr({"x":53.93184999999994,"y":178.34375,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C1');
        shape.attr({"x":7.77559999999994,"y":60.234375,"text-anchor":"start","text":"C1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'4 Bit');
        shape.attr({"x":27.5,"y":97.34675000000016,"text-anchor":"start","text":"4 Bit","font-family":"\"Arial\"","font-size":14,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'D1');
        shape.attr({"x":7.27559999999994,"y":80.72956250000016,"text-anchor":"start","text":"D1","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'A2');
        shape.attr({"x":7.27559999999994,"y":100.203125,"text-anchor":"start","text":"A2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'B2');
        shape.attr({"x":7.27559999999994,"y":120.4375,"text-anchor":"start","text":"B2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C2');
        shape.attr({"x":7.27559999999994,"y":140.671875,"text-anchor":"start","text":"C2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'D2');
        shape.attr({"x":8.352399999999761,"y":160.40625,"text-anchor":"start","text":"D2","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C');
        shape.attr({"x":8.27559999999994,"y":182.640625,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'in');
        shape.attr({"x":17.772399999999834,"y":185.7109375,"text-anchor":"start","text":"in","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'out');
        shape.attr({"x":62.71875,"y":185.7109375,"text-anchor":"start","text":"out","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Bs');
        shape.attr({"x":57.46309999999994,"y":38.5625,"text-anchor":"start","text":"Bs","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Cs');
        shape.attr({"x":57.46309999999994,"y":59.37429999999995,"text-anchor":"start","text":"Cs","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Ds');
        shape.attr({"x":58.11934999999994,"y":79.22956250000016,"text-anchor":"start","text":"Ds","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_alu_FullAdder4Bit = draw2d_circuit_alu_FullAdder4Bit.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {

        var input = [];
        var output = [];

        input.push(this.getInputPort("input_a1").getValue());
        input.push(this.getInputPort("input_b1").getValue());
        input.push(this.getInputPort("input_c1").getValue());
        input.push(this.getInputPort("input_d1").getValue());

        input.push(this.getInputPort("input_a2").getValue());
        input.push(this.getInputPort("input_b2").getValue());
        input.push(this.getInputPort("input_c2").getValue());
        input.push(this.getInputPort("input_d2").getValue());

        input.push(this.getInputPort("input_cin").getValue());

        var carry = input[8];

        for (var i=0; i<4 ; i++){
            // calculate with the carry
            if(carry){
                if(input[i] && input[i+4]){
                    output[i]=true;
                }
                else if(input[i] || input[i+4]){
                    output[i]=false;
                }
                else{
                    output[i]=true;
                    carry=false;
                }
            }
            else{
                if(input[i] && input[i+4]){
                    output[i]=false;
                    carry = true;
                }
                else if(input[i] || input[i+4]){
                    output[i]=true;
                }
                else{
                    output[i]=false;
                }
            }
        }
        output[4]=carry;

        this.getOutputPort("output_as").setValue(output[0]);
        this.getOutputPort("output_bs").setValue(output[1]);
        this.getOutputPort("output_cs").setValue(output[2]);
        this.getOutputPort("output_ds").setValue(output[3]);
        this.getOutputPort("output_c").setValue(output[4]);
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
draw2d_circuit_alu_FullAdder4Bit.github="./shapes/org/draw2d/circuit/alu/FullAdder4Bit.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_alu_HalfAdder = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_alu_HalfAdder",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:70,height:65.125},attr), setter, getter);
        var port;
        // output_s
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.17942857142859, 21.593090211132438));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_s");
        port.setMaxFanOut(20);
        // output_c
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.60800000000002, 81.95669865642991));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("output_c");
        port.setMaxFanOut(20);
        // input_a
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.318857142857155, 20.057581573896353));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_a");
        port.setMaxFanOut(20);
        // input_b
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-2.7474285714285838, 83.30134357005758));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("input_b");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 70;
        this.originalHeight= 65.125;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L70,0 L70,65.125 L0,65.125");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,5.14009999999999Q0,4.14009999999999 1, 4.14009999999999L69,4.14009999999999Q70,4.14009999999999 70, 5.14009999999999L70,63.14009999999999Q70,64.14009999999999 69, 64.14009999999999L1,64.14009999999999Q0,64.14009999999999 0, 63.14009999999999L0,5.14009999999999');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'Half');
        shape.attr({"x":21.65625,"y":22.625,"text-anchor":"start","text":"Half","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Adder');
        shape.attr({"x":20.716999999999985,"y":32.87429999999998,"text-anchor":"start","text":"Adder","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'A');
        shape.attr({"x":5,"y":13,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'B');
        shape.attr({"x":5,"y":52.125,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'S');
        shape.attr({"x":52.34375,"y":13,"text-anchor":"start","text":"S","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'C');
        shape.attr({"x":52.34375,"y":52.125,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_alu_HalfAdder = draw2d_circuit_alu_HalfAdder.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var a = this.getInputPort("input_a").getValue();
        var b = this.getInputPort("input_b").getValue();

        // s = a XOR b
        this.getOutputPort("output_s").setValue(( a ? !b : b ));

        // c = a AND b
        this.getOutputPort("output_c").setValue(( a & b ));
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});
draw2d_circuit_alu_HalfAdder.github="./shapes/org/draw2d/circuit/alu/HalfAdder.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_display_7Segment = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_display_7Segment",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:65,height:102},attr), setter, getter);
        var port;
        // port_a
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(4.13923076923031, 5.791568627451031));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_a");
        port.setMaxFanOut(20);
        // port_b
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(2.6007692307687718, 20.098039215686274));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_b");
        port.setMaxFanOut(20);
        // port_c
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(1.0623076923072334, 34.80392156862745));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_c");
        port.setMaxFanOut(20);
        // port_d
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0.29307692307646416, 49.509803921568626));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_d");
        port.setMaxFanOut(20);
        // port_e
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.4761538461543051, 64.2156862745098));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_e");
        port.setMaxFanOut(20);
        // port_f
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-2.0146153846158437, 78.92156862745098));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_f");
        port.setMaxFanOut(20);
        // port_g
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-3.5530769230773824, 93.62745098039215));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#37B1DE");
        port.setName("port_g");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 65;
        this.originalHeight= 102;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L65,0 L65,102 L0,102");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // circle
        shape = this.canvas.paper.path('M5.771330394834047,1.9966776925255942Q5.886561433060251,0 7.886561433060251, 1.538558276800327e-14L63,4.3936176811846085e-13Q65,4.547473508864641e-13 64.87993486650917, 1.9963928380260398L58.98567946409698,100.00360716197441Q58.86561433060615,102 56.86561433060615, 102L2,102Q0,102 0.11523103822620406, 100.0033223074744L5.771330394834047,1.9966776925255942');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");

        // seg_a
        shape = this.canvas.paper.path('M18.483499999999367,7Q18.483499999999367,6 19.483499999999367, 6L53.48349999999937,6Q54.48349999999937,6 54.48349999999937, 7L54.48349999999937,11Q54.48349999999937,12 53.48349999999937, 12L19.483499999999367,12Q18.483499999999367,12 18.483499999999367, 11L18.483499999999367,7');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_a");

        // seg_b
        shape = this.canvas.paper.path('M55.616420692729506,14.497864311373519Q55.68174156295527,13.5 56.6807499014086, 13.544523473592088L59.5879916615462,13.67409246391073Q60.586999999999534,13.718615937502818 60.52123174129865, 14.716450861800148L58.55802669574469,44.50216507570267Q58.4922584370438,45.5 57.4922584370438, 45.5L54.586999999999534,45.5Q53.586999999999534,45.5 53.652320870225296, 44.50213568862648L55.616420692729506,14.497864311373519');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_b");

        // seg_c
        shape = this.canvas.paper.path('M52.71992069272967,57.99786431137352Q52.785241562955434,57 53.78424990140877, 57.044523473592086L56.691491661546365,57.17409246391073Q57.6904999999997,57.21861593750282 57.62473174129882, 58.21645086180015L55.661526695744854,88.00216507570266Q55.59575843704397,89 54.59575843704397, 89L51.6904999999997,89Q50.6904999999997,89 50.75582087022546, 88.00213568862648L52.71992069272967,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_c");

        // seg_d
        shape = this.canvas.paper.path('M13.190499999999702,93Q13.190499999999702,92 14.190499999999702, 92L48.1904999999997,92Q49.1904999999997,92 49.1904999999997, 93L49.1904999999997,97Q49.1904999999997,98 48.1904999999997, 98L14.190499999999702,98Q13.190499999999702,98 13.190499999999702, 97L13.190499999999702,93');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_d");

        // seg_e
        shape = this.canvas.paper.path('M9.219920692729675,57.99786431137352Q9.285241562955434,57 10.28424990140877, 57.044523473592086L13.191491661546365,57.17409246391073Q14.190499999999702,57.21861593750282 14.12473174129882, 58.21645086180015L12.16152669574485,88.00216507570266Q12.095758437043969,89 11.095758437043969, 89L8.190499999999702,89Q7.190499999999702,89 7.255820870225461, 88.00213568862648L9.219920692729675,57.99786431137352');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_e");

        // seg_f
        shape = this.canvas.paper.path('M11.654599822503915,15.40312862274709Q11.785241562955434,13.407400000000052 13.783258239862105, 13.496446947184229L14.69248332309303,13.536968990318694Q16.6904999999997,13.62601593750287 16.55896348259794, 15.621685786097526L14.727294954445732,43.41173015140539Q14.595758437043969,45.40740000000005 12.595758437043969, 45.40740000000005L11.690499999999702,45.40740000000005Q9.690499999999702,45.40740000000005 9.821141740451221, 43.411671377253015L11.654599822503915,15.40312862274709');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_f");

        // seg_g
        shape = this.canvas.paper.path('M16.086999999999534,49.5Q16.086999999999534,48.5 17.086999999999534, 48.5L51.086999999999534,48.5Q52.086999999999534,48.5 52.086999999999534, 49.5L52.086999999999534,53.5Q52.086999999999534,54.5 51.086999999999534, 54.5L17.086999999999534,54.5Q16.086999999999534,54.5 16.086999999999534, 53.5L16.086999999999534,49.5');
        shape.attr({"stroke":"#D6D6D6","stroke-width":1,"fill":"#C21B7A","opacity":1});
        shape.data("name","seg_g");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_display_7Segment = draw2d_circuit_display_7Segment.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        // ensure that the ports has the same order as the segments
        //
        this.portLockup = [];
        this.portLockup.push({ p:this.getPort("port_a"), s:"seg_a"});
        this.portLockup.push({ p:this.getPort("port_b"), s:"seg_b"});
        this.portLockup.push({ p:this.getPort("port_c"), s:"seg_c"});
        this.portLockup.push({ p:this.getPort("port_d"), s:"seg_d"});
        this.portLockup.push({ p:this.getPort("port_e"), s:"seg_e"});
        this.portLockup.push({ p:this.getPort("port_f"), s:"seg_f"});
        this.portLockup.push({ p:this.getPort("port_g"), s:"seg_g"});

    },

    calculate:function()
    {
        var _this = this;
        this.portLockup.forEach(function(element, index){
            _this.layerAttr(element.s, { fill:element.p.getValue()?"#C21B7A":null});
        });
    }

});
draw2d_circuit_display_7Segment.github="./shapes/org/draw2d/circuit/display/7Segment.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_display_Led = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_display_Led",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:30,height:32},attr), setter, getter);
        var port;
        // Port
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-3.3333333333333335, 51.5625));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("Port");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 30;
        this.originalHeight= 32;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L30,0 L30,32 L0,32");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":15,"ry":16,"cx":15,"cy":16,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","circle");

        // Line_shadow
        shape = this.canvas.paper.path('M5.5 5.5L15.5,16.5L24.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M5.5 5.5L15.5,16.5L24.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");

        // Line_shadow
        shape = this.canvas.paper.path('M25.5 5.5L5.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M25.5 5.5L5.5,27.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_display_Led = draw2d_circuit_display_Led.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    calculate: function()
    {
        if(this.getInputPort(0).getValue()){
            this.layerAttr("circle",{fill:"#C21B7A"});
        }
        else{
            this.layerAttr("circle",{fill:"#f0f0f0"});
        }
    }
});
draw2d_circuit_display_Led.github="./shapes/org/draw2d/circuit/display/Led.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_flipflop_DFlipFlop = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_flipflop_DFlipFlop",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:41.5,height:53.05297500000006},attr), setter, getter);
        var port;
        // output_q
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.42921686746949, 20.526652840863044));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output_q");
        port.setMaxFanOut(20);
        // output_q_not
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.42921686746949, 79.9873852503084));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output_q_not");
        port.setMaxFanOut(20);
        // input_d
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0, 20.526652840863044));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input_d");
        port.setMaxFanOut(20);
        // input_t
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0, 79.9873852503084));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input_t");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 41.5;
        this.originalHeight= 53.05297500000006;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L41.5,0 L41.5,53.05297500000006 L0,53.05297500000006");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M1.5,2Q1.5,1 2.5, 1L40.5,1Q41.5,1 41.5, 2L41.5,50Q41.5,51 40.5, 51L2.5,51Q1.5,51 1.5, 50L1.5,2');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'D');
        shape.attr({"x":4,"y":10.6796875,"text-anchor":"start","text":"D","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":28.28125,"y":11.1796875,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'Q');
        shape.attr({"x":27.78125,"y":42.37328750000006,"text-anchor":"start","text":"Q","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Rectangle
        shape = this.canvas.paper.path('M1.5 37.12699999999995L13.541999999999916 42.03299999999899L1.5 47.38499999999976Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"none","opacity":1});
        shape.data("name","Rectangle");

        // Line_shadow
        shape = this.canvas.paper.path('M27.5 36.5L35.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M27.5 36.5L35.5,36.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_flipflop_DFlipFlop = draw2d_circuit_flipflop_DFlipFlop.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.last_t = false;
    },

    calculate:function()
    {
        var d = this.getInputPort("input_d").getValue();
        var t = this.getInputPort("input_t").getValue();

        var q = this.getOutputPort("output_q");
        var q_ = this.getOutputPort("output_q_not");

        var rising = this.last_t===false && t===true;

        if(rising===true){
            q.setValue(d);
            q_.setValue(!d)
        }
        this.last_t = t;
    }
});
draw2d_circuit_flipflop_DFlipFlop.github="./shapes/org/draw2d/circuit/flipflop/DFlipFlop.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_AND = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_gate_AND",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:30,height:40},attr), setter, getter);
        var port;
        // input01
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 22.5));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input01");
        port.setMaxFanOut(20);
        // input02
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.6666666666666667, 77.5));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input02");
        port.setMaxFanOut(20);
        // out
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(104.42708333333334, 50));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("out");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 30;
        this.originalHeight= 40;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L30,0 L30,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":9,"y":20,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_AND = draw2d_circuit_gate_AND.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);

        o1.setValue(i1.getValue() & i2.getValue());
    }
});
draw2d_circuit_gate_AND.github="./shapes/org/draw2d/circuit/gate/AND.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NAND = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_gate_NAND",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:41,height:40},attr), setter, getter);
        var port;
        // input01
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0, 20));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input01");
        port.setMaxFanOut(20);
        // input02
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0, 80));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input02");
        port.setMaxFanOut(20);
        // output
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.4390243902439, 48.75));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 41;
        this.originalHeight= 40;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L41,0 L41,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'&');
        shape.attr({"x":9,"y":20,"text-anchor":"start","text":"&","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":35,"cy":19.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Circle");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NAND = draw2d_circuit_gate_NAND.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);

        o1.setValue(!(i1.getValue() & i2.getValue()));
    }
});
draw2d_circuit_gate_NAND.github="./shapes/org/draw2d/circuit/gate/NAND.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NOR = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_gate_NOR",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:40,height:40},attr), setter, getter);
        var port;
        // input01
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-1.25, 20));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input01");
        port.setMaxFanOut(20);
        // input02
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-2.5, 80));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input02");
        port.setMaxFanOut(20);
        // output
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.5, 51.25));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 40;
        this.originalHeight= 40;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L40,0 L40,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":4,"y":20,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":34,"cy":20.5,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FCFFFF","opacity":1});
        shape.data("name","Circle");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NOR = draw2d_circuit_gate_NOR.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);

        o1.setValue(!(i1.getValue() | i2.getValue()));
    }
});
draw2d_circuit_gate_NOR.github="./shapes/org/draw2d/circuit/gate/NOR.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_NOT = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_gate_NOT",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:40,height:42.5},attr), setter, getter);
        var port;
        // input01
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(0, 54.11764705882353));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input01");
        port.setMaxFanOut(20);
        // output
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.5, 54.11764705882353));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 40;
        this.originalHeight= 42.5;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L40,0 L40,42.5 L0,42.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,5.5Q0,2.5 3, 2.5L27,2.5Q30,2.5 30, 5.5L30,39.5Q30,42.5 27, 42.5L3,42.5Q0,42.5 0, 39.5L0,5.5');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":10,"y":15,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":6,"ry":6,"cx":34,"cy":23,"stroke":"#1B1B1B","stroke-width":1,"fill":"#FCFFFF","opacity":1});
        shape.data("name","Circle");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_NOT = draw2d_circuit_gate_NOT.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var o1 = this.getOutputPort(0);

        o1.setValue(!i1.getValue());
    }
});
draw2d_circuit_gate_NOT.github="./shapes/org/draw2d/circuit/gate/NOT.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_gate_OR = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_gate_OR",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:31,height:40},attr), setter, getter);
        var port;
        // input01
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-3.225806451612903, 22.5));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input01");
        port.setMaxFanOut(20);
        // input02
        port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-3.225806451612903, 78.75));
        port.setConnectionDirection(3);
        port.setBackgroundColor("#1C9BAB");
        port.setName("input02");
        port.setMaxFanOut(20);
        // output
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(116.12903225806451, 50));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("output");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 31;
        this.originalHeight= 40;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L31,0 L31,40 L0,40");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M0,3Q0,0 3, 0L27,0Q30,0 30, 3L30,37Q30,40 27, 40L3,40Q0,40 0, 37L0,3');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'>1');
        shape.attr({"x":4,"y":19.5,"text-anchor":"start","text":">1","font-family":"\"Arial\"","font-size":20,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_gate_OR = draw2d_circuit_gate_OR.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

    },

    calculate:function()
    {
        var i1 = this.getInputPort(0);
        var i2 = this.getInputPort(1);
        var o1 = this.getOutputPort(0);

        o1.setValue(i1.getValue() | i2.getValue());
    }
});
draw2d_circuit_gate_OR.github="./shapes/org/draw2d/circuit/gate/OR.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_pulse_10hz = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_pulse_10hz",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:34,height:49.5},attr), setter, getter);
        var port;
        // Port
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(103.4466911764706, 69.67272727272693));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("Port");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 34;
        this.originalHeight= 49.5;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L34,0 L34,49.5 L0,49.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M33.671875 49.5L3.671875 49.5L3.671875 19.5L33.671875 19.5Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'10Hz');
        shape.attr({"x":4,"y":10.5,"text-anchor":"start","text":"10Hz","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M6.5 41.5L13.5,41.5L13.5,28.5L24.5,28.5L24.5,41.5L30.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M6.5 41.5L13.5,41.5L13.5,28.5L24.5,28.5L24.5,41.5L30.5,41.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_pulse_10hz = draw2d_circuit_pulse_10hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.hz = 10;
        this.running=false;
// only for test purpose        
//        this.onStart();
    },

    calculate:function()
    {
        this.getOutputPort(0).setValue(this.value);
    },

    onStart:function()
    {
        var _this = this;
        this.running=true;
        var tick = function() {
            setTimeout(function() {
                if(_this.running){
                    requestAnimationFrame(tick);
                }
                _this.value = !_this.value;
            }, 1000 / _this.hz);
        }
        tick();
    },

    onStop:function()
    {
        this.running = false;
    }

});
draw2d_circuit_pulse_10hz.github="./shapes/org/draw2d/circuit/pulse/10hz.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_pulse_50hz = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_pulse_50hz",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:32,height:48.60950000000048},attr), setter, getter);
        var port;
        // circle
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.0751953125, 69.8754358715884));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#1C9BAB");
        port.setName("circle");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 32;
        this.originalHeight= 48.60950000000048;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L32,0 L32,48.60950000000048 L0,48.60950000000048");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M1.6640625 18.60950000000048L31.6640625 18.60950000000048L31.6640625 48.60950000000048L1.6640625 48.60950000000048Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","Rectangle");

        // Label
        shape = this.canvas.paper.text(0,0,'50Hz');
        shape.attr({"x":4,"y":10.578125,"text-anchor":"start","text":"50Hz","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Line_shadow
        shape = this.canvas.paper.path('M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":1,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M3.5 41.5L10.5,41.5L10.5,30.5L22.5,30.5L22.5,40.5L28.5,40.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":1,"opacity":1});
        shape.data("name","Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_pulse_50hz = draw2d_circuit_pulse_50hz.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.hz = 50;
        this.running=false;
// only for test purpose        
//        this.onStart();
    },

    calculate:function()
    {
        this.getOutputPort(0).setValue(this.value);
    },

    onStart:function()
    {
        var _this = this;
        this.running=true;
        var tick = function() {
            setTimeout(function() {
                if(_this.running){
                    requestAnimationFrame(tick);
                }
                _this.value = !_this.value;
            }, 1000 / _this.hz);
        }
        tick();
    },

    onStop:function()
    {
        this.running = false;
    }

});
draw2d_circuit_pulse_50hz.github="./shapes/org/draw2d/circuit/pulse/50hz.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_HighLow = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_switch_HighLow",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:42,height:43.5},attr), setter, getter);
        var port;
        // Port
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(98.80952380952381, 51.72413793103448));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("Port");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 42;
        this.originalHeight= 43.5;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L42,0 L42,43.5 L0,43.5");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Label
        shape = this.canvas.paper.text(0,0,'1');
        shape.attr({"x":4.5,"y":10.5,"text-anchor":"start","text":"1","font-family":"\"Arial\"","font-size":11,"stroke":"none","fill":"#C21B7A","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Label
        shape = this.canvas.paper.text(0,0,'0');
        shape.attr({"x":4,"y":32.5,"text-anchor":"start","text":"0","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":3,"ry":3.5,"cx":39,"cy":22.5,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");

        // high_shadow
        shape = this.canvas.paper.path('M39.5 22.5L13.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","high_shadow");

        // high
        shape = this.canvas.paper.path('M39.5 22.5L13.5,11.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","high");

        // low_shadow
        shape = this.canvas.paper.path('M38.5 22.5L13.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","low_shadow");

        // low
        shape = this.canvas.paper.path('M38.5 22.5L13.5,32.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","low");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_HighLow = draw2d_circuit_switch_HighLow.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        var _this = this;

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.value = false;
        this.on("click",function(){
            _this.value = !_this.value;
            _this.layerShow("low" , !_this.value, 100);
            _this.layerShow("high",  _this.value, 100);
            _this.getOutputPort(0).setValue(_this.value);
        });

        this.on("added",function(){
            _this.layerShow("low" , !_this.value);
            _this.layerShow("high",  _this.value);
            _this.getOutputPort(0).setValue(_this.value);
        });
    },

    calculate: function()
    {
        // do nothing per default;
    }

});
draw2d_circuit_switch_HighLow.github="./shapes/org/draw2d/circuit/switch/HighLow.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_HighLowArray = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_switch_HighLowArray",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:20,height:160},attr), setter, getter);
        var port;
        // port01
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 6.24381249999999));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port01");
        port.setMaxFanOut(20);
        // port02
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 19.375));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port02");
        port.setMaxFanOut(20);
        // port03
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 31.25));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port03");
        port.setMaxFanOut(20);
        // port04
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 43.75));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port04");
        port.setMaxFanOut(20);
        // port05
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 56.122437500000046));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port05");
        port.setMaxFanOut(20);
        // port06
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 68.72787499999987));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port06");
        port.setMaxFanOut(20);
        // port07
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 81.1621875000003));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port07");
        port.setMaxFanOut(20);
        // port08
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(120, 93.93256250000007));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("port08");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 20;
        this.originalHeight= 160;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L20,0 L20,160 L0,160");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // rect01
        shape = this.canvas.paper.path('M20 20L0 20L0 0L20 0Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect01");

        // rect02
        shape = this.canvas.paper.path('M20 40L0 40L0 20L20 20Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect02");

        // rect03
        shape = this.canvas.paper.path('M20 60L0 60L0 40L20 40Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect03");

        // rect04
        shape = this.canvas.paper.path('M20 80L0 80L0 60L20 60Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect04");

        // rect05
        shape = this.canvas.paper.path('M20 100L0 100L0 80L20 80Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect05");

        // rect06
        shape = this.canvas.paper.path('M20 120L0 120L0 100L20 100Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect06");

        // rect07
        shape = this.canvas.paper.path('M20 140L0 140L0 120L20 120Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect07");

        // rect08
        shape = this.canvas.paper.path('M20 160L0 160L0 140L20 140Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","rect08");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_HighLowArray = draw2d_circuit_switch_HighLowArray.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.on("click",function(emitter, event){
            var h = emitter.getHeight();
            var modh = h/8;
            var index = (event.relY/modh)|0;
            var port = emitter.getOutputPort(index);
            port.setValue(!port.getValue());
            emitter.layerAttr("rect0"+(index+1), {fill:port.getValue()?"#C21B7A":null});
        });
    },

    calculate: function()
    {


    }

});
draw2d_circuit_switch_HighLowArray.github="./shapes/org/draw2d/circuit/switch/HighLowArray.shape";
// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var draw2d_circuit_switch_PushButton = draw2d.SetFigure.extend({

    NAME: "draw2d_circuit_switch_PushButton",

    init:function(attr, setter, getter)
    {
        this._super( $.extend({stroke:0, bgColor:null, width:45.35582499999964,height:27.483999999999924},attr), setter, getter);
        var port;
        // Port
        port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(101.81252904119853, 87.26531800320183));
        port.setConnectionDirection(1);
        port.setBackgroundColor("#37B1DE");
        port.setName("Port");
        port.setMaxFanOut(20);
        this.persistPorts=false;
    },

    createShapeElement : function()
    {
        var shape = this._super();
        this.originalWidth = 45.35582499999964;
        this.originalHeight= 27.483999999999924;
        return shape;
    },

    createSet: function()
    {
        this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L45.35582499999964,0 L45.35582499999964,27.483999999999924 L0,27.483999999999924");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Label
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":4.5,"cy":22.983999999999924,"stroke":"none","stroke-width":0,"fill":"#C21B7A","opacity":1});
        shape.data("name","Label");

        // Circle
        shape = this.canvas.paper.ellipse();
        shape.attr({"rx":4.5,"ry":4,"cx":27.5,"cy":23.483999999999924,"stroke":"none","stroke-width":0,"fill":"#000000","opacity":1});
        shape.data("name","Circle");

        // low
        shape = this.canvas.paper.path('M26.125825000000077,8.735999999999876Q24.125825000000077,8.735999999999876 24.125825000000077, 6.735999999999876L24.125825000000077,2Q24.125825000000077,0 22.125825000000077, 0L11.125825000000077,0Q9.125825000000077,0 9.125825000000077, 2L9.125825000000077,6.735999999999876Q9.125825000000077,8.735999999999876 7.125825000000077, 8.735999999999876L2.2994250000001557,8.735999999999876Q0.2994250000001557,8.735999999999876 0.2994250000001557, 10.735999999999876L0.2994250000001557,11.735999999999876Q0.2994250000001557,13.735999999999876 2.2994250000001557, 13.735999999999876L30.299425000000156,13.735999999999876Q32.299425000000156,13.735999999999876 32.299425000000156, 11.735999999999876L32.299425000000156,10.735999999999876Q32.299425000000156,8.735999999999876 30.299425000000156, 8.735999999999876L26.125825000000077,8.735999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","low");

        // high
        shape = this.canvas.paper.path('M22.31382500000018,16.235999999999876Q20.50182500000028,16.235999999999876 21.26817190867477, 14.388647187036133L23.359478091325588,9.347352812963743Q24.125825000000077,7.5 22.125825000000077, 7.5L11.125825000000077,7.5Q9.125825000000077,7.5 9.62777239007231, 9.435987814424376L10.888877609927716,14.3000121855755Q11.39082499999995,16.235999999999876 9.39082499999995, 16.235999999999876L2.2994250000001557,16.235999999999876Q0.2994250000001557,16.235999999999876 0.2994250000001557, 18.235999999999876L0.2994250000001557,19.235999999999876Q0.2994250000001557,21.235999999999876 2.2994250000001557, 21.235999999999876L30.299425000000156,21.235999999999876Q32.299425000000156,21.235999999999876 32.299425000000156, 19.235999999999876L32.299425000000156,18.235999999999876Q32.299425000000156,16.235999999999876 30.299425000000156, 16.235999999999876L26.125825000000077,16.235999999999876Q24.125825000000077,16.235999999999876 22.31382500000018, 16.235999999999876L22.31382500000018,16.235999999999876');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","opacity":1});
        shape.data("name","high");

        // Line_shadow
        shape = this.canvas.paper.path('M30.5 23.5L37.5,23.5L45.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"none","stroke-width":2,"opacity":1});
        shape.data("name","Line_shadow");

        // Line
        shape = this.canvas.paper.path('M30.5 23.5L37.5,23.5L45.5,23.5');
        shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"#000000","stroke-width":2,"opacity":1});
        shape.data("name","Line");


        return this.canvas.paper.setFinish();
    },

    applyAlpha: function()
    {
    },

    layerGet: function(name, attributes)
    {
        if(this.svgNodes===null) return null;

        var result=null;
        this.svgNodes.some(function(shape){
            if(shape.data("name")===name){
                result=shape;
            }
            return result!==null;
        });

        return result;
    },

    layerAttr: function(name, attributes)
    {
        if(this.svgNodes===null) return;

        this.svgNodes.forEach(function(shape){
            if(shape.data("name")===name){
                shape.attr(attributes);
            }
        });
    },

    layerShow: function(name, flag, duration)
    {
        if(this.svgNodes===null) return;

        if(duration){
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){
                        node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                    }
                    else{
                        node.animate({ opacity : 0 }, duration, function () { this.hide() });
                    }
                }
            });
        }
        else{
            this.svgNodes.forEach(function(node){
                if(node.data("name")===name){
                    if(flag){node.show();}
                    else{node.hide();}
                }
            });
        }
    },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
draw2d_circuit_switch_PushButton = draw2d_circuit_switch_PushButton.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);


        this.setResizeable(false);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        var _this = this;

        this.value = false;
        this.on("mousedown",function(){
            _this.layerShow("low" , false, 100);
            _this.layerShow("high", true, 100);
            _this.getOutputPort(0).setValue(true);
        });
        this.on("mouseup",function(){
            _this.value = !_this.value;
            _this.layerShow("low" , true, 100);
            _this.layerShow("high", false, 100);
            _this.getOutputPort(0).setValue(false);
        });

        this.on("added",function(){
            _this.layerShow("low" , true);
            _this.layerShow("high", false);
            _this.getOutputPort(0).setValue(false);
        });
    },

    calculate: function()
    {
        // do nothing per default;
    }

});
draw2d_circuit_switch_PushButton.github="./shapes/org/draw2d/circuit/switch/PushButton.shape";