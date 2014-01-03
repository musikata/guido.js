

define([], function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"score":3,"init_stream":4,"scorebody":5,"STARTCHORD":6,"begin_segment":7,"ENDCHORD":8,"voicelist":9,"voice":10,"append_sequence":11,"SEP":12,"STARTSEQ":13,"begin_sequence":14,"symbols":15,"ENDSEQ":16,"music":17,"tag":18,"chord":19,"positiontag":20,"tag_end":21,"rangetag":22,"tagid":23,"tag_add":24,"STARTPARAM":25,"tagparams":26,"ENDPARAM":27,"STARTRANGE":28,"tag_range":29,"ENDRANGE":30,"tagname":31,"TAGNAME":32,"IDSEP":33,"number":34,"BAR":35,"tagarg":36,"signednumber":37,"floatn":38,"UNIT":39,"STRING":40,"id":41,"tagparam":42,"EQUAL":43,"begin_chord":44,"chordsymbols":45,"chord_begin_note":46,"tagchordsymbol":47,"chordsymbol":48,"taglist":49,"rangechordtag":50,"note":51,"rest":52,"RESTT":53,"begin_rest":54,"duration":55,"dots":56,"NUMBER":57,"noteid":58,"octave":59,"accidentals":60,"notename":61,"DIATONIC":62,"CHROMATIC":63,"SOLFEGE":64,"EMPTYT":65,"accidental":66,"SHARPT":67,"FLATT":68,"MULT":69,"DIV":70,"MLS":71,"DOT":72,"DDOT":73,"TDOT":74,"IDT":75,"pnumber":76,"PNUMBER":77,"nnumber":78,"NNUMBER":79,"FLOAT":80,"$accept":0,"$end":1},
terminals_: {2:"error",6:"STARTCHORD",8:"ENDCHORD",12:"SEP",13:"STARTSEQ",16:"ENDSEQ",25:"STARTPARAM",27:"ENDPARAM",28:"STARTRANGE",30:"ENDRANGE",32:"TAGNAME",33:"IDSEP",35:"BAR",39:"UNIT",40:"STRING",43:"EQUAL",53:"RESTT",57:"NUMBER",62:"DIATONIC",63:"CHROMATIC",64:"SOLFEGE",65:"EMPTYT",67:"SHARPT",68:"FLATT",69:"MULT",70:"DIV",71:"MLS",72:"DOT",73:"DDOT",74:"TDOT",75:"IDT",77:"PNUMBER",79:"NNUMBER",80:"FLOAT"},
productions_: [0,[3,2],[5,3],[5,4],[5,2],[9,2],[9,4],[10,4],[15,0],[15,2],[15,2],[15,2],[18,2],[18,2],[20,2],[20,5],[22,5],[31,1],[23,1],[23,3],[23,1],[36,1],[36,1],[36,2],[36,2],[36,1],[36,1],[42,1],[42,3],[26,1],[26,3],[19,4],[45,2],[45,4],[47,1],[47,2],[47,2],[47,3],[48,1],[48,1],[50,6],[49,2],[49,3],[17,1],[17,1],[52,4],[52,7],[51,4],[51,5],[58,1],[58,4],[61,1],[61,1],[61,1],[61,1],[60,1],[60,2],[66,1],[66,1],[59,0],[59,1],[55,0],[55,4],[55,2],[55,3],[55,2],[56,0],[56,1],[56,1],[56,1],[41,1],[34,1],[76,1],[78,1],[38,1],[37,1],[37,1],[37,1],[4,0],[11,0],[7,0],[14,0],[21,0],[24,0],[44,0],[46,0],[54,0],[29,0]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
   yy.stream.push(['segment:end']);
   yy.stream.push(['score:end']);
   return yy.stream; 
 
break;
case 7: yy.stream.push(['sequence:end']); 
break;
case 9: yy.stream.push(['sequence:appendNote']); 
break;
case 11: yy.stream.push(['sequence:appendChord']); 
break;
case 17: this.$ = yytext.substring(1); 
break;
case 18: yy.stream.push(['tag:start', $$[$0], 0]); 
break;
case 19: yy.stream.push(['tag:start', $$[$0-2], $$[$0]]); 
break;
case 20: yy.stream.push(['tag:start', "\\bar", 0]); 
break;
case 21: yy.stream.push(['tag:arg', $$[$0]]); 
break;
case 22: yy.stream.push(['tag:arg', $$[$0]]); 
break;
case 23:
  yy.stream.push(['tag:arg', $$[$0-1]]); 
  yy.stream.push(['tag:arg:unit', yytext]); 
 
break;
case 24:
  yy.stream.push(['tag:arg'], $$[$0-1]);
  yy.stream.push(['tag:arg:unit', yytext]);
 
break;
case 25: yy.stream.push(['tag:arg', yytext]); 
break;
case 26: yy.stream.push(['tag:arg', $$[$0]]); 
break;
case 27: yy.stream.push(['tag:addArg', ""]); 
break;
case 28: yy.stream.push(['tag:addArg', $$[$0-2]]); 
break;
case 38: yy.stream.push(['chord:appendNote']); 
break;
case 51: yy.stream.push(['note:begin', yytext]); 
break;
case 52: yy.stream.push(['note:begin', yytext]); 
break;
case 53: yy.stream.push(['note:begin', yytext]); 
break;
case 54: yy.stream.push(['note:begin', yytext]); 
break;
case 57: yy.stream.push(['accidental', 'sharp']); 
break;
case 58: yy.stream.push(['accidental', 'flat']); 
break;
case 60: yy.stream.push(['octave', $$[$0]]); 
break;
case 62: 
  yy.stream.push(['note:enum', $$[$0-2]]); 
  yy.stream.push(['note:denom', $$[$0]]); 
 
break;
case 63: yy.stream.push(['note:enum', $$[$0]]); 
break;
case 64: yy.stream.push(['note:absDur', $$[$0-1]]); 
break;
case 65: yy.stream.push(['note:denom', $$[$0]]); 
break;
case 67: yy.stream.push(['note:dot']); 
break;
case 68: yy.stream.push(['note:ddot']); 
break;
case 69: yy.stream.push(['note:tdot']); 
break;
case 70: this.$ = yytext; 
break;
case 71: this.$ = parseFloat(yytext); 
break;
case 72: this.$ = parseFloat(yytext); 
break;
case 73: this.$ = parseFloat(yytext); 
break;
case 74: this.$ = parseFloat(yytext); 
break;
case 75: this.$ = $$[$0]; 
break;
case 76: this.$ = $$[$0]; 
break;
case 77: this.$ = $$[$0]; 
break;
case 78:
  yy.stream = [];
  yy.stream.push(['score:begin']);
 
break;
case 79: yy.stream.push(['segment:appendSequence']); 
break;
case 80:yy.stream.push(['segment:begin']); 
break;
case 81: yy.stream.push(['sequence:begin']); 
break;
case 82: yy.stream.push(['tag:end']); 
break;
case 83: yy.stream.push(['tag:add']) 
break;
case 84: yy.stream.push(['chord:begin']); 
break;
case 85: yy.stream.push(['chord:beginNote']); 
break;
case 86: yy.stream.push(['note:begin'], '_'); 
break;
case 87: yy.stream.push(['tag:range']); 
break;
}
},
table: [{3:1,4:2,6:[2,78],13:[2,78]},{1:[3]},{5:3,6:[1,4],7:5,13:[2,80]},{1:[2,1]},{7:6,8:[2,80],13:[2,80]},{10:7,13:[1,8]},{8:[1,9],9:10,10:11,13:[1,8]},{1:[2,4]},{6:[2,81],14:12,16:[2,81],32:[2,81],35:[2,81],53:[2,81],62:[2,81],63:[2,81],64:[2,81],65:[2,81]},{1:[2,2]},{8:[1,13],12:[1,14]},{8:[2,79],11:15,12:[2,79]},{6:[2,8],15:16,16:[2,8],32:[2,8],35:[2,8],53:[2,8],62:[2,8],63:[2,8],64:[2,8],65:[2,8]},{1:[2,3]},{10:17,13:[1,8]},{8:[2,5],12:[2,5]},{6:[1,26],16:[1,18],17:19,18:20,19:21,20:24,22:25,23:29,31:31,32:[1,37],35:[1,32],51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{8:[2,79],11:38,12:[2,79]},{1:[2,7],8:[2,7],12:[2,7]},{6:[2,9],16:[2,9],30:[2,9],32:[2,9],35:[2,9],53:[2,9],62:[2,9],63:[2,9],64:[2,9],65:[2,9]},{6:[2,10],16:[2,10],30:[2,10],32:[2,10],35:[2,10],53:[2,10],62:[2,10],63:[2,10],64:[2,10],65:[2,10]},{6:[2,11],16:[2,11],30:[2,11],32:[2,11],35:[2,11],53:[2,11],62:[2,11],63:[2,11],64:[2,11],65:[2,11]},{6:[2,43],8:[2,43],12:[2,43],16:[2,43],30:[2,43],32:[2,43],35:[2,43],53:[2,43],62:[2,43],63:[2,43],64:[2,43],65:[2,43]},{6:[2,44],8:[2,44],12:[2,44],16:[2,44],30:[2,44],32:[2,44],35:[2,44],53:[2,44],62:[2,44],63:[2,44],64:[2,44],65:[2,44]},{6:[2,82],16:[2,82],21:39,28:[1,40],30:[2,82],32:[2,82],35:[2,82],53:[2,82],62:[2,82],63:[2,82],64:[2,82],65:[2,82]},{6:[2,82],16:[2,82],21:41,30:[2,82],32:[2,82],35:[2,82],53:[2,82],62:[2,82],63:[2,82],64:[2,82],65:[2,82]},{32:[2,84],35:[2,84],44:42,53:[2,84],62:[2,84],63:[2,84],64:[2,84],65:[2,84]},{6:[2,59],8:[2,59],12:[2,59],16:[2,59],30:[2,59],32:[2,59],34:47,35:[2,59],37:45,53:[2,59],57:[1,52],59:43,60:44,62:[2,59],63:[2,59],64:[2,59],65:[2,59],66:46,67:[1,50],68:[1,51],69:[2,59],70:[2,59],72:[2,59],73:[2,59],74:[2,59],76:48,77:[1,53],78:49,79:[1,54]},{6:[2,86],8:[2,86],12:[2,86],16:[2,86],25:[2,86],30:[2,86],32:[2,86],35:[2,86],53:[2,86],54:55,62:[2,86],63:[2,86],64:[2,86],65:[2,86],69:[2,86],70:[2,86],72:[2,86],73:[2,86],74:[2,86]},{6:[2,83],8:[2,83],12:[2,83],16:[2,83],24:56,25:[1,57],28:[2,83],30:[2,83],32:[2,83],35:[2,83],53:[2,83],62:[2,83],63:[2,83],64:[2,83],65:[2,83]},{6:[2,49],8:[2,49],12:[2,49],16:[2,49],25:[1,58],30:[2,49],32:[2,49],35:[2,49],53:[2,49],57:[2,49],62:[2,49],63:[2,49],64:[2,49],65:[2,49],67:[2,49],68:[2,49],69:[2,49],70:[2,49],72:[2,49],73:[2,49],74:[2,49],77:[2,49],79:[2,49]},{6:[2,18],8:[2,18],12:[2,18],16:[2,18],25:[2,18],28:[2,18],30:[2,18],32:[2,18],33:[1,59],35:[2,18],53:[2,18],62:[2,18],63:[2,18],64:[2,18],65:[2,18]},{6:[2,20],8:[2,20],12:[2,20],16:[2,20],25:[2,20],28:[2,20],30:[2,20],32:[2,20],35:[2,20],53:[2,20],62:[2,20],63:[2,20],64:[2,20],65:[2,20]},{6:[2,51],8:[2,51],12:[2,51],16:[2,51],25:[2,51],30:[2,51],32:[2,51],35:[2,51],53:[2,51],57:[2,51],62:[2,51],63:[2,51],64:[2,51],65:[2,51],67:[2,51],68:[2,51],69:[2,51],70:[2,51],72:[2,51],73:[2,51],74:[2,51],77:[2,51],79:[2,51]},{6:[2,52],8:[2,52],12:[2,52],16:[2,52],25:[2,52],30:[2,52],32:[2,52],35:[2,52],53:[2,52],57:[2,52],62:[2,52],63:[2,52],64:[2,52],65:[2,52],67:[2,52],68:[2,52],69:[2,52],70:[2,52],72:[2,52],73:[2,52],74:[2,52],77:[2,52],79:[2,52]},{6:[2,53],8:[2,53],12:[2,53],16:[2,53],25:[2,53],30:[2,53],32:[2,53],35:[2,53],53:[2,53],57:[2,53],62:[2,53],63:[2,53],64:[2,53],65:[2,53],67:[2,53],68:[2,53],69:[2,53],70:[2,53],72:[2,53],73:[2,53],74:[2,53],77:[2,53],79:[2,53]},{6:[2,54],8:[2,54],12:[2,54],16:[2,54],25:[2,54],30:[2,54],32:[2,54],35:[2,54],53:[2,54],57:[2,54],62:[2,54],63:[2,54],64:[2,54],65:[2,54],67:[2,54],68:[2,54],69:[2,54],70:[2,54],72:[2,54],73:[2,54],74:[2,54],77:[2,54],79:[2,54]},{6:[2,17],8:[2,17],12:[2,17],16:[2,17],25:[2,17],28:[2,17],30:[2,17],32:[2,17],33:[2,17],35:[2,17],53:[2,17],62:[2,17],63:[2,17],64:[2,17],65:[2,17]},{8:[2,6],12:[2,6]},{6:[2,12],16:[2,12],30:[2,12],32:[2,12],35:[2,12],53:[2,12],62:[2,12],63:[2,12],64:[2,12],65:[2,12]},{6:[2,87],29:60,30:[2,87],32:[2,87],35:[2,87],53:[2,87],62:[2,87],63:[2,87],64:[2,87],65:[2,87]},{6:[2,13],16:[2,13],30:[2,13],32:[2,13],35:[2,13],53:[2,13],62:[2,13],63:[2,13],64:[2,13],65:[2,13]},{32:[2,85],35:[2,85],45:61,46:62,53:[2,85],62:[2,85],63:[2,85],64:[2,85],65:[2,85]},{6:[2,61],8:[2,61],12:[2,61],16:[2,61],30:[2,61],32:[2,61],35:[2,61],53:[2,61],55:63,62:[2,61],63:[2,61],64:[2,61],65:[2,61],69:[1,64],70:[1,65],72:[2,61],73:[2,61],74:[2,61]},{6:[2,59],8:[2,59],12:[2,59],16:[2,59],30:[2,59],32:[2,59],34:47,35:[2,59],37:45,53:[2,59],57:[1,52],59:66,62:[2,59],63:[2,59],64:[2,59],65:[2,59],66:67,67:[1,50],68:[1,51],69:[2,59],70:[2,59],72:[2,59],73:[2,59],74:[2,59],76:48,77:[1,53],78:49,79:[1,54]},{6:[2,60],8:[2,60],12:[2,60],16:[2,60],30:[2,60],32:[2,60],35:[2,60],53:[2,60],62:[2,60],63:[2,60],64:[2,60],65:[2,60],69:[2,60],70:[2,60],72:[2,60],73:[2,60],74:[2,60]},{6:[2,55],8:[2,55],12:[2,55],16:[2,55],30:[2,55],32:[2,55],35:[2,55],53:[2,55],57:[2,55],62:[2,55],63:[2,55],64:[2,55],65:[2,55],67:[2,55],68:[2,55],69:[2,55],70:[2,55],72:[2,55],73:[2,55],74:[2,55],77:[2,55],79:[2,55]},{6:[2,75],8:[2,75],12:[2,75],16:[2,75],27:[2,75],30:[2,75],32:[2,75],35:[2,75],39:[2,75],53:[2,75],62:[2,75],63:[2,75],64:[2,75],65:[2,75],69:[2,75],70:[2,75],72:[2,75],73:[2,75],74:[2,75]},{6:[2,76],8:[2,76],12:[2,76],16:[2,76],27:[2,76],30:[2,76],32:[2,76],35:[2,76],39:[2,76],53:[2,76],62:[2,76],63:[2,76],64:[2,76],65:[2,76],69:[2,76],70:[2,76],72:[2,76],73:[2,76],74:[2,76]},{6:[2,77],8:[2,77],12:[2,77],16:[2,77],27:[2,77],30:[2,77],32:[2,77],35:[2,77],39:[2,77],53:[2,77],62:[2,77],63:[2,77],64:[2,77],65:[2,77],69:[2,77],70:[2,77],72:[2,77],73:[2,77],74:[2,77]},{6:[2,57],8:[2,57],12:[2,57],16:[2,57],30:[2,57],32:[2,57],35:[2,57],53:[2,57],57:[2,57],62:[2,57],63:[2,57],64:[2,57],65:[2,57],67:[2,57],68:[2,57],69:[2,57],70:[2,57],72:[2,57],73:[2,57],74:[2,57],77:[2,57],79:[2,57]},{6:[2,58],8:[2,58],12:[2,58],16:[2,58],30:[2,58],32:[2,58],35:[2,58],53:[2,58],57:[2,58],62:[2,58],63:[2,58],64:[2,58],65:[2,58],67:[2,58],68:[2,58],69:[2,58],70:[2,58],72:[2,58],73:[2,58],74:[2,58],77:[2,58],79:[2,58]},{6:[2,71],8:[2,71],12:[2,71],16:[2,71],25:[2,71],27:[2,71],28:[2,71],30:[2,71],32:[2,71],35:[2,71],39:[2,71],53:[2,71],62:[2,71],63:[2,71],64:[2,71],65:[2,71],69:[2,71],70:[2,71],71:[2,71],72:[2,71],73:[2,71],74:[2,71]},{6:[2,72],8:[2,72],12:[2,72],16:[2,72],27:[2,72],30:[2,72],32:[2,72],35:[2,72],39:[2,72],53:[2,72],62:[2,72],63:[2,72],64:[2,72],65:[2,72],69:[2,72],70:[2,72],72:[2,72],73:[2,72],74:[2,72]},{6:[2,73],8:[2,73],12:[2,73],16:[2,73],27:[2,73],30:[2,73],32:[2,73],35:[2,73],39:[2,73],53:[2,73],62:[2,73],63:[2,73],64:[2,73],65:[2,73],69:[2,73],70:[2,73],72:[2,73],73:[2,73],74:[2,73]},{6:[2,61],8:[2,61],12:[2,61],16:[2,61],25:[1,69],30:[2,61],32:[2,61],35:[2,61],53:[2,61],55:68,62:[2,61],63:[2,61],64:[2,61],65:[2,61],69:[1,64],70:[1,65],72:[2,61],73:[2,61],74:[2,61]},{6:[2,14],8:[2,14],12:[2,14],16:[2,14],28:[2,14],30:[2,14],32:[2,14],35:[2,14],53:[2,14],62:[2,14],63:[2,14],64:[2,14],65:[2,14]},{26:70,34:47,36:72,37:74,38:75,40:[1,76],41:73,42:71,57:[1,52],75:[1,77],76:48,77:[1,53],78:49,79:[1,54],80:[1,78]},{57:[1,79]},{34:80,57:[1,52]},{6:[2,8],15:81,30:[2,8],32:[2,8],35:[2,8],53:[2,8],62:[2,8],63:[2,8],64:[2,8],65:[2,8]},{8:[1,82],12:[1,83]},{17:87,20:89,23:29,31:31,32:[1,37],35:[1,32],47:84,48:85,49:86,50:88,51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{6:[2,66],8:[2,66],12:[2,66],16:[2,66],30:[2,66],32:[2,66],35:[2,66],53:[2,66],56:90,62:[2,66],63:[2,66],64:[2,66],65:[2,66],72:[1,91],73:[1,92],74:[1,93]},{34:94,57:[1,52]},{34:95,57:[1,52]},{6:[2,61],8:[2,61],12:[2,61],16:[2,61],30:[2,61],32:[2,61],35:[2,61],53:[2,61],55:96,62:[2,61],63:[2,61],64:[2,61],65:[2,61],69:[1,64],70:[1,65],72:[2,61],73:[2,61],74:[2,61]},{6:[2,56],8:[2,56],12:[2,56],16:[2,56],30:[2,56],32:[2,56],35:[2,56],53:[2,56],57:[2,56],62:[2,56],63:[2,56],64:[2,56],65:[2,56],67:[2,56],68:[2,56],69:[2,56],70:[2,56],72:[2,56],73:[2,56],74:[2,56],77:[2,56],79:[2,56]},{6:[2,66],8:[2,66],12:[2,66],16:[2,66],30:[2,66],32:[2,66],35:[2,66],53:[2,66],56:97,62:[2,66],63:[2,66],64:[2,66],65:[2,66],72:[1,91],73:[1,92],74:[1,93]},{57:[1,98]},{12:[1,100],27:[1,99]},{12:[2,29],27:[2,29]},{12:[2,27],27:[2,27]},{12:[2,26],27:[2,26],43:[1,101]},{12:[2,21],27:[2,21],39:[1,102]},{12:[2,22],27:[2,22],39:[1,103]},{12:[2,25],27:[2,25]},{12:[2,70],27:[2,70],43:[2,70]},{12:[2,74],27:[2,74],39:[2,74]},{27:[1,104]},{6:[2,19],8:[2,19],12:[2,19],16:[2,19],25:[2,19],28:[2,19],30:[2,19],32:[2,19],35:[2,19],53:[2,19],62:[2,19],63:[2,19],64:[2,19],65:[2,19]},{6:[1,26],17:19,18:20,19:21,20:24,22:25,23:29,30:[1,105],31:31,32:[1,37],35:[1,32],51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{6:[2,31],16:[2,31],30:[2,31],32:[2,31],35:[2,31],53:[2,31],62:[2,31],63:[2,31],64:[2,31],65:[2,31]},{32:[2,85],35:[2,85],46:106,53:[2,85],62:[2,85],63:[2,85],64:[2,85],65:[2,85]},{8:[2,32],12:[2,32]},{8:[2,34],12:[2,34],20:108,23:29,30:[2,34],31:31,32:[1,37],35:[1,32],49:107},{17:87,20:110,23:29,31:31,32:[1,37],35:[1,32],48:109,50:88,51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{8:[2,38],12:[2,38],30:[2,38],32:[2,38],35:[2,38]},{8:[2,39],12:[2,39],30:[2,39],32:[2,39],35:[2,39]},{21:111,28:[1,112],32:[2,82],35:[2,82],53:[2,82],62:[2,82],63:[2,82],64:[2,82],65:[2,82]},{6:[2,47],8:[2,47],12:[2,47],16:[2,47],30:[2,47],32:[2,47],35:[2,47],53:[2,47],62:[2,47],63:[2,47],64:[2,47],65:[2,47]},{6:[2,67],8:[2,67],12:[2,67],16:[2,67],30:[2,67],32:[2,67],35:[2,67],53:[2,67],62:[2,67],63:[2,67],64:[2,67],65:[2,67]},{6:[2,68],8:[2,68],12:[2,68],16:[2,68],30:[2,68],32:[2,68],35:[2,68],53:[2,68],62:[2,68],63:[2,68],64:[2,68],65:[2,68]},{6:[2,69],8:[2,69],12:[2,69],16:[2,69],30:[2,69],32:[2,69],35:[2,69],53:[2,69],62:[2,69],63:[2,69],64:[2,69],65:[2,69]},{6:[2,63],8:[2,63],12:[2,63],16:[2,63],30:[2,63],32:[2,63],35:[2,63],53:[2,63],62:[2,63],63:[2,63],64:[2,63],65:[2,63],70:[1,113],71:[1,114],72:[2,63],73:[2,63],74:[2,63]},{6:[2,65],8:[2,65],12:[2,65],16:[2,65],30:[2,65],32:[2,65],35:[2,65],53:[2,65],62:[2,65],63:[2,65],64:[2,65],65:[2,65],72:[2,65],73:[2,65],74:[2,65]},{6:[2,66],8:[2,66],12:[2,66],16:[2,66],30:[2,66],32:[2,66],35:[2,66],53:[2,66],56:115,62:[2,66],63:[2,66],64:[2,66],65:[2,66],72:[1,91],73:[1,92],74:[1,93]},{6:[2,45],8:[2,45],12:[2,45],16:[2,45],30:[2,45],32:[2,45],35:[2,45],53:[2,45],62:[2,45],63:[2,45],64:[2,45],65:[2,45]},{27:[1,116]},{6:[2,83],8:[2,83],12:[2,83],16:[2,83],24:117,28:[2,83],30:[2,83],32:[2,83],35:[2,83],53:[2,83],62:[2,83],63:[2,83],64:[2,83],65:[2,83]},{34:47,36:72,37:74,38:75,40:[1,76],41:73,42:118,57:[1,52],75:[1,77],76:48,77:[1,53],78:49,79:[1,54],80:[1,78]},{34:47,36:119,37:74,38:75,40:[1,76],41:120,57:[1,52],75:[1,77],76:48,77:[1,53],78:49,79:[1,54],80:[1,78]},{12:[2,23],27:[2,23]},{12:[2,24],27:[2,24]},{6:[2,50],8:[2,50],12:[2,50],16:[2,50],30:[2,50],32:[2,50],35:[2,50],53:[2,50],57:[2,50],62:[2,50],63:[2,50],64:[2,50],65:[2,50],67:[2,50],68:[2,50],69:[2,50],70:[2,50],72:[2,50],73:[2,50],74:[2,50],77:[2,50],79:[2,50]},{6:[2,16],16:[2,16],30:[2,16],32:[2,16],35:[2,16],53:[2,16],62:[2,16],63:[2,16],64:[2,16],65:[2,16]},{17:87,20:89,23:29,31:31,32:[1,37],35:[1,32],47:121,48:85,49:86,50:88,51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{8:[2,36],12:[2,36],20:122,23:29,30:[2,36],31:31,32:[1,37],35:[1,32]},{8:[2,82],12:[2,82],21:111,30:[2,82],32:[2,82],35:[2,82]},{8:[2,35],12:[2,35],20:108,23:29,30:[2,35],31:31,32:[1,37],35:[1,32],49:123},{21:124,28:[1,112],32:[2,82],35:[2,82],53:[2,82],62:[2,82],63:[2,82],64:[2,82],65:[2,82]},{8:[2,41],12:[2,41],30:[2,41],32:[2,41],35:[2,41],53:[2,41],62:[2,41],63:[2,41],64:[2,41],65:[2,41]},{29:125,32:[2,87],35:[2,87],53:[2,87],62:[2,87],63:[2,87],64:[2,87],65:[2,87]},{34:126,57:[1,52]},{6:[2,64],8:[2,64],12:[2,64],16:[2,64],30:[2,64],32:[2,64],35:[2,64],53:[2,64],62:[2,64],63:[2,64],64:[2,64],65:[2,64],72:[2,64],73:[2,64],74:[2,64]},{6:[2,48],8:[2,48],12:[2,48],16:[2,48],30:[2,48],32:[2,48],35:[2,48],53:[2,48],62:[2,48],63:[2,48],64:[2,48],65:[2,48]},{6:[2,61],8:[2,61],12:[2,61],16:[2,61],30:[2,61],32:[2,61],35:[2,61],53:[2,61],55:127,62:[2,61],63:[2,61],64:[2,61],65:[2,61],69:[1,64],70:[1,65],72:[2,61],73:[2,61],74:[2,61]},{6:[2,15],8:[2,15],12:[2,15],16:[2,15],28:[2,15],30:[2,15],32:[2,15],35:[2,15],53:[2,15],62:[2,15],63:[2,15],64:[2,15],65:[2,15]},{12:[2,30],27:[2,30]},{12:[2,28],27:[2,28]},{12:[2,26],27:[2,26]},{8:[2,33],12:[2,33]},{8:[2,82],12:[2,82],21:124,30:[2,82],32:[2,82],35:[2,82]},{8:[2,37],12:[2,37],20:122,23:29,30:[2,37],31:31,32:[1,37],35:[1,32]},{8:[2,42],12:[2,42],30:[2,42],32:[2,42],35:[2,42],53:[2,42],62:[2,42],63:[2,42],64:[2,42],65:[2,42]},{17:87,20:89,23:29,31:31,32:[1,37],35:[1,32],47:128,48:85,49:86,50:88,51:22,52:23,53:[1,28],58:27,61:30,62:[1,33],63:[1,34],64:[1,35],65:[1,36]},{6:[2,62],8:[2,62],12:[2,62],16:[2,62],30:[2,62],32:[2,62],35:[2,62],53:[2,62],62:[2,62],63:[2,62],64:[2,62],65:[2,62],72:[2,62],73:[2,62],74:[2,62]},{6:[2,66],8:[2,66],12:[2,66],16:[2,66],30:[2,66],32:[2,66],35:[2,66],53:[2,66],56:129,62:[2,66],63:[2,66],64:[2,66],65:[2,66],72:[1,91],73:[1,92],74:[1,93]},{30:[1,130]},{6:[2,46],8:[2,46],12:[2,46],16:[2,46],30:[2,46],32:[2,46],35:[2,46],53:[2,46],62:[2,46],63:[2,46],64:[2,46],65:[2,46]},{8:[2,82],12:[2,82],21:131,30:[2,82],32:[2,82],35:[2,82]},{8:[2,40],12:[2,40],30:[2,40],32:[2,40],35:[2,40]}],
defaultActions: {3:[2,1],7:[2,4],9:[2,2],13:[2,3]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var nested = 0;

var unescape = function(str){
  return str.replace(/\\(\\|")/g, "$1");
};

var unquote = function(str){
  return str.substring(1, str.length - 1);
}

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 57;
break;
case 1:return 77;
break;
case 2:return 79;
break;
case 3:return 80;
break;
case 4:return 80;
break;
case 5:return 80;
break;
case 6:this.begin('CMNTLN');
break;
case 7:return;
break;
case 8:this.begin('INITIAL');
break;
case 9:nested=1; this.begin('COMMENT');
break;
case 10:return;
break;
case 11:nested++;
break;
case 12:if (--nested==0) this.begin('INITIAL');
break;
case 13:return 6;
break;
case 14:return 8;
break;
case 15:return 12;
break;
case 16:return 33;
break;
case 17:return 13;
break;
case 18:return 16;
break;
case 19:return 28;
break;
case 20:return 30;
break;
case 21:return 35;
break;
case 22:return 72;
break;
case 23:return 73;
break;
case 24:return 74;
break;
case 25:return 67;
break;
case 26:return 68;
break;
case 27:return 69;
break;
case 28:return 70;
break;
case 29:return 43;
break;
case 30:return 71;
break;
case 31:return 'SEC';
break;
case 32:return 39;
break;
case 33:this.begin('PARAM'); return 25;
break;
case 34:return 75;
break;
case 35:this.begin('INITIAL'); return 27;
break;
case 36:return 32;
break;
case 37:return 64;
break;
case 38:return 63;
break;
case 39:return 62;
break;
case 40:return 65;
break;
case 41:return 53;
break;
case 42:
  yy_.yytext = unescape(yy_.yytext); 
  yy_.yytext = unquote(yy_.yytext); 
  return 40;

break;
case 43:return;
break;
case 44:console.log("extra text is: %s\n", yy_.yytext); return 'EXTRA';
break;
}
},
rules: [/^(?:([0-9])+)/,/^(?:\+([0-9])+)/,/^(?:-([0-9])+)/,/^(?:([0-9])*\.([0-9])+)/,/^(?:\+([0-9])*\.([0-9])+)/,/^(?:-([0-9])*\.([0-9])+)/,/^(?:([ \t\x0a\x0d])*%)/,/^(?:.)/,/^(?:([\x0a\x0d])+)/,/^(?:([ \t\x0a\x0d])*\(\*)/,/^(?:.|([\x0a\x0d])*)/,/^(?:\(\*)/,/^(?:\*\))/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?::)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:\|)/,/^(?:\.)/,/^(?:\.\.)/,/^(?:\.\.\.)/,/^(?:#)/,/^(?:&)/,/^(?:\*)/,/^(?:\/)/,/^(?:=)/,/^(?:ms\b)/,/^(?:s\b)/,/^(?:m|cm|mm|in|pt|pc|hs|rl\b)/,/^(?:<)/,/^(?:([$a-z_A-Z][a-z_A-Z0-9]*))/,/^(?:>)/,/^(?:\\([$a-z_A-Z][a-z_A-Z0-9]*))/,/^(?:do|re|mi|fa|sol|la|si|ti\b)/,/^(?:cis|dis|fis|gis|ais\b)/,/^(?:([abcdefgh]))/,/^(?:empty\b)/,/^(?:_\b)/,/^(?:"(\\\\|\\.|[^\\\"])*")/,/^(?:([ \t\x0a\x0d])+)/,/^(?:.)/],
conditions: {"PARAM":{"rules":[0,1,2,3,4,5,6,9,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true},"COMMENT":{"rules":[10,11,12],"inclusive":false},"CMNTLN":{"rules":[7,8],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,9,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,38,39,40,41,42,43,44],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
return parser;
});