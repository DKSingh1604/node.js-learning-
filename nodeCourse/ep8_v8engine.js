/*
What V8 engine does:

PARSING

1- Lexical Analysis(Tokenization)
Code -> tokens

2 -> Syntax Analysis(Parsing)
Tokens -> AST(Abstract Syntax Tree)

                       o
                      / \
                     o   o       AST
                    / \ / \
                   o  o o  o

What is a Syntax Error -> When an AST can't be generated of the code.

3 -> AST is given to Interpreter

This interpreter is called Ignition(in Google).

Ignition converts the code into byte code.
(while interpreter is interpretting the code line by line, the compiler(Turbo fan in Google) takes the portion of the code which is repeatedly used and try to optimise the overall performance and then the optimized machine code is given out, which at last is executed).

The repeatitive code is called Hot Code.

Some time De-optimization is also needed(due to wrong assumptions by the compiler).

Then byte code is executed.



Meanwhile Garbage collectors are doing their work all this time.

some of the garbage collectors are:
                                  Orinoco
                                  Oil Pan
                                  Scavenger
                                  MCompact

One of the GC algo -> Mark and Sweep




INTERPRETTED Language -> line by line
                      -> Fast initial execution

COMPILE TIME Language -> first compilation
                      -> initially heavy but execute fast

JS is a interpreted-compiler language. It used JIT compiler(Just In Time)
*/
