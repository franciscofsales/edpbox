>D

>BS

smlj=0
tper=60

->sensor53 r

>R

smlj=0

>S

if upsecs>30
then
smlj=1
endif

>M 1

+1,14,m,1,9600,EB1,5,15,r010400010001,r0104006C0007,r010400730007,r0104007B0005,r010400260003,r010400160002,r010400180004,r010400850002

; 01 count 1

1,01040Cxxxxxxxxxxuu@i0:1,Clock ,h,Clock_H,16
1,01040Cxxxxxxxxxxxxuu@i0:1,Clock ,m,Clock_M,16
1,01040Cxxxxxxxxxxxxxxuu@i0:1,Clock ,s,Clock_S,16

1,=h<hr>

; 6C count 7

1,01040EUUuu@i1:10,Tensão L1 ,V,Voltage_L1,1
1,01040ExxxxxxxxUUuu@i1:10,Tensão L2 ,V,Voltage_L2,1
1,01040ExxxxxxxxxxxxxxxxUUuu@i1:10,Tensão L3 ,V,Voltage_L3,1

1,=h<hr>

1,01040ExxxxxxxxxxxxxxxxxxxxxxxxUUuu@i1:10,Corrente Total ,A,Current_Sum,17

1,01040ExxxxUUuu@i1:10,Corrente L1 ,A,Current_L1,17
1,01040ExxxxxxxxxxxxUUuu@i1:10,Corrente L2 ,A,Current_L2,17
1,01040ExxxxxxxxxxxxxxxxxxxxUUuu@i1:10,Corrente L3 ,A,Current_L3,17

1,=h<hr>

; 73 count 7

1,01041CxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i2:1,Potência Activa ,W,Power,16

1,01041CUUuuUUuu@i2:1,Potência L1 ,W,Power_L1,16
1,01041CxxxxxxxxxxxxxxxxUUuuUUuu@i2:1,Potência L2 ,W,Power_L2,16
1,01041CxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i2:1,Potência L3 ,W,Power_L3,16

1,=h<hr>

; 7B count 5

1,01040AUUuu@i3:1000,Factor de Potência ,pu,PFactor,19
1,01040AxxxxUUuu@i3:1000,PFactor L1 ,pu,PFactor_L1,19
1,01040AxxxxxxxxUUuu@i3:1000,PFactor L2 ,pu,PFactor_L2,19
1,01040AxxxxxxxxxxxxUUuu@i3:1000,PFactor L3 ,pu,PFactor_L3,19
1,01040AxxxxxxxxxxxxxxxxUUuu@i3:10,Frequência ,Hz,Frequency,1

1,=h<hr>

; 26 count 3

1,01040CUUuuUUuu@i4:1000,Energia T1 Vazio ,kWh,Energy_R1,1
1,01040CxxxxxxxxUUuuUUuu@i4:1000,Energia T2 Ponta ,kWh,Energy_R2,1
1,01040CxxxxxxxxxxxxxxxxUUuuUUuu@i4:1000,Energia T3 Cheia ,kWh,Energy_R3,1

1,=h<hr>

; 16 count 2

1,010408UUuuUUuu@i5:1000,Energia Importada ,kWh,Energy_Sum,1
1,010408xxxxxxxxUUuuUUuu@i5:1000,Energia Exportada ,kWh,Energy_Export,3

1,=h<hr>

; 18 count 4

1,010410UUuuUUuu@i6:1000,Energia Q1 +Ri ,kVAr,Energy_Q1,1
1,010410xxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i6:1000,Energia Q4 +Rc ,kVAr,Energy_Q4,2

1,=h<hr>

; 85 count 2

1,010408UUuuUUuu@i7:1,Disconnector Q , ,Disconnector_Q,0
1,010408xxxxxxxxUUuuUUuu@i7:1,Disconnector K ,%%,Disconnector_K,0

; dev

#
