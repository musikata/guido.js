/* Guido Lexical Grammar */

%{
var nested = 0;

var unescape = function(str){
  return str.replace(/\\(\\|")/g, "$1");
};

var unquote = function(str){
  return str.substring(1, str.length - 1);
}
%}

%x CMNTLN
%x COMMENT
%s PARAM

DIGIT	[0-9]
ID		[$a-z_A-Z][a-z_A-Z0-9]*
LETTER	[a-zA-Z]
NOTE	[abcdefgh]
SPACE	[ \t\x0a\x0d]
EOL		[\x0a\x0d]

%%
{DIGIT}+					  return 'NUMBER';
"+"{DIGIT}+					return 'PNUMBER';
"-"{DIGIT}+					return 'NNUMBER';

{DIGIT}*"."{DIGIT}+			  return 'FLOAT';
"+"{DIGIT}*"."{DIGIT}+		return 'FLOAT';
"-"{DIGIT}*"."{DIGIT}+		return 'FLOAT';

{SPACE}*"%"			this.begin('CMNTLN');
<CMNTLN>. return;
<CMNTLN>{EOL}+	this.begin('INITIAL');

{SPACE}*"(*"		nested=1; this.begin('COMMENT');
<COMMENT>.|{EOL}* return;
<COMMENT>"(*"		nested++;
<COMMENT>"*)"		if (--nested==0) this.begin('INITIAL');

"{"					return 'STARTCHORD';
"}"					return 'ENDCHORD';
","					return 'SEP';
":"					return 'IDSEP';
"["         return 'STARTSEQ';
"]"         return 'ENDSEQ';
"("         return 'STARTRANGE';
")"         return 'ENDRANGE';
"|"					return 'BAR';

"."					return 'DOT';
".."				return 'DDOT';
"..."				return 'TDOT';
"#"					return 'SHARPT';
"&"					return 'FLATT';
"*"					return 'MULT';
"/"					return 'DIV';
"="					return 'EQUAL';

"ms"				return 'MLS';
"s"					return 'SEC';
"m"|"cm"|"mm"|"in"|"pt"|"pc"|"hs"|"rl"		return 'UNIT';

"<"					this.begin('PARAM'); return 'STARTPARAM';
<PARAM>{ID}			return 'IDT';
<PARAM>">"			this.begin('INITIAL'); return 'ENDPARAM';

"\\"{ID}			return 'TAGNAME';

"do"|"re"|"mi"|"fa"|"sol"|"la"|"si"|"ti"	return 'SOLFEGE';
"cis"|"dis"|"fis"|"gis"|"ais"				return 'CHROMATIC';
{NOTE}				return 'DIATONIC';
"empty"				return 'EMPTYT';
"_"					return 'RESTT';

\"(\\\\|\\.|[^\\\"])*\" %{
  yytext = unescape(yytext); 
  yytext = unquote(yytext); 
  return 'STRING';
%}

{SPACE}+ return;
.				console.log("extra text is: %s\n", yytext); return 'EXTRA';
