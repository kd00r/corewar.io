;redcode-88
;name Nameless
;author Blameless
ORG	0
SPL.B	$5,	$0
JMP.B	$17,	$0
DAT.F	#0,	#26
DAT.F	#0,	#32
MOV.AB	#32,	$-1
MOV.I	$8,	@-2
ADD.AB	#16,	$-3
JMN.B	$-2,	$-4
MOV.AB	#26,	$-6
MOV.I	$-6,	@-7
ADD.AB	#2,	$-8
JMN.B	$-2,	$-9
JMP.B	$-8,	$0
SPL.B	$0,	$0
DAT.F	#0,	#0
DAT.F	#0,	#0
DAT.F	#0,	#0
MOV.AB	#-32,	$10
MOV.I	$8,	@9
SUB.AB	#16,	$8
JMN.B	$-2,	$7
MOV.AB	#-26,	$6
MOV.I	$5,	@5
SUB.AB	#2,	$4
JMN.B	$-2,	$3
JMP.B	$-8,	$0
SPL.B	$0,	$0
DAT.F	#0,	#-32
