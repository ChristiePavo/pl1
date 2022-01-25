# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=-21.136765%2C-175.190297
&destination=Mapu'a+Vaea+Blowholes,Tonga&alternative=true&units=imperial&waypoints=optimize:true%7C-21.19219904454107%2C-175.13026649843147%7Cplace_id:ChIJg5Fzugiw9HERZYtGhUwdVak&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

```

## Next paste the full JSON response to this query here:

```
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ4U2LGPaj9HERdhjRSGA_zSA",
         "types" : [ "premise" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJg5Fzugiw9HERZYtGhUwdVak",
         "types" : [ "establishment", "natural_feature" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJPyXVST6l9HERi6ub_P7SMLM",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJC3wueFaY9HERmwu4OF-1g9U",
         "types" : [ "establishment", "park", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : -21.1352519,
               "lng" : -175.1025094
            },
            "southwest" : {
               "lat" : -21.2380624,
               "lng" : -175.3090496
            }
         },
         "copyrights" : "Map data ©2022",
         "legs" : [
            {
               "distance" : {
                  "text" : "14.9 mi",
                  "value" : 23953
               },
               "duration" : {
                  "text" : "38 mins",
                  "value" : 2305
               },
               "end_address" : "Laulea Beach, Tonga",
               "end_location" : {
                  "lat" : -21.2321994,
                  "lng" : -175.1025094
               },
               "start_address" : "VR66+X3M, Nuku'alofa, Tonga",
               "start_location" : {
                  "lat" : -21.136752,
                  "lng" : -175.1902914
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 438
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : -21.1352519,
                        "lng" : -175.1941834
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e toward \u003cb\u003eFangaloa Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "tg_`Chzgl`@CLUv@wAvEaAhDeAvFq@hA"
                     },
                     "start_location" : {
                        "lat" : -21.136752,
                        "lng" : -175.1902914
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1444
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 166
                     },
                     "end_location" : {
                        "lat" : -21.1461535,
                        "lng" : -175.2016903
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTupoulahi Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "h~~_Crrhl`@nBhAvElCj@Z`DjBr@b@hAt@tD`C~@l@b@XfCbBbCxAlAz@NNj@j@p@NhBn@bHpE~@j@`BdA|@n@hAr@tAz@"
                     },
                     "start_location" : {
                        "lat" : -21.1352519,
                        "lng" : -175.1941834
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 671
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : -21.1440374,
                        "lng" : -175.2076533
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlaivahamama'o Bypass Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "lba`Cpajl`@o@xD_AjFY|AIb@_@fBW`AI\\o@vDERa@bBk@|@kAhA"
                     },
                     "start_location" : {
                        "lat" : -21.1461535,
                        "lng" : -175.2016903
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.4 mi",
                        "value" : 13566
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1296
                     },
                     "end_location" : {
                        "lat" : -21.2011278,
                        "lng" : -175.1566829
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTaufa'ahau Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "fu``Cxfkl`@pC`Bf@^TPz@j@lAx@rBrAr@h@JFp@`@n@b@|AbAZTDBtBtAdBlA\\XFBh@^lAt@~@j@zA|@LFRJrAh@j@TbA^TFfBn@j@TRP@BX`@jA|B`@bAzBhGJV~@jBn@pAn@pAHNvD`HnC`FTb@~BrEBFTn@\\jAx@jD`AhDf@lBrBjI`@`Bj@~BfAjEx@fDDPPTBJNXRZd@b@DD`CzBZT\\Vt@r@fA~@bHjGnBbBJJB@`@`@~@l@dAj@h@Vj@PpDz@vB\\x@L~ARd@FjC^pGp@jEb@XBh@Dd@?`@@p@@h@@j@AZEb@KDAdD}A|@[@Cj@Y`@_@RQ\\]l@k@`@]tBmBRQbAy@vB_Bb@]NMlB_BtAkANKf@_@|BeBVYHKPQx@}@X[x@w@LM|@cABElAoBFMt@qAJS`@}@f@sAx@qBTg@h@aBt@iBVy@^oAj@cCj@kDTgBVaBp@_FRaBLcAjAcKVuB^cD@Ib@cDHk@Z{B@K^eCX_BNmADa@XeCd@yD@CHk@rAaIHi@fBoKp@oEHo@@SLkAHaBBa@\\wFt@iK`@wKPwDLy@hA{Kx@oFV}BBO\\eDxAcPNBNaBRqAt@wDDQL}@nAcI|@mDv@qDLeAb@{Bp@}C|C_LJWj@eAv@{BDI\\q@nAuB\\m@`EgHT_@x@wAXi@`E{Hz@}AJUrCwFPc@Zw@jAwCNc@Xm@^m@|@oAn@eAXo@HSHYV{@T}@l@sBJa@b@}APi@h@mCdBkI|@wF@EVmA`@iBd@_CZwAVmAf@_Cb@wBj@wCFo@H_C@kBCi@Ca@C[GkAUoBMw@a@eCAE"
                     },
                     "start_location" : {
                        "lat" : -21.1440374,
                        "lng" : -175.2076533
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 185
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : -21.2027269,
                        "lng" : -175.1570371
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eTuku'Aho Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "`zk`Cfhal`@x@DjAFbADb@DNB`Ah@"
                     },
                     "start_location" : {
                        "lat" : -21.2011278,
                        "lng" : -175.1566829
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.0 mi",
                        "value" : 6414
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 444
                     },
                     "end_location" : {
                        "lat" : -21.2380624,
                        "lng" : -175.1082301
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTuku'Aho Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "`dl`Cnjal`@h@{@xCwE`CwDbCuDnAqB|AcClByCdDgFzAaCfAcBjH}K^m@lBwCdGoJr@eAt@mAvBeDhIgMjAiBx@qApAoBdBkCT_@lBwCfBqCt@gAhQgXlByCvAyBJOxA{BvAyBbCuD|GkK`A{Aj@}@`AyAvA{BxEqHnQyX`A{AtA{BbCuD~IiNxA{BpFoIjBsCVa@nDuFlBwCrAuBfBqCLSDI?A`AQ"
                     },
                     "start_location" : {
                        "lat" : -21.2027269,
                        "lng" : -175.1570371
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 681
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : -21.2319803,
                        "lng" : -175.1078492
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLiku Rd\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "z`s`Clywk`@{AG{Da@mD]IA_BSYESC[AW@O@iCBU?]?_DF_B@oAHO@"
                     },
                     "start_location" : {
                        "lat" : -21.2380624,
                        "lng" : -175.1082301
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "266 ft",
                        "value" : 81
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : -21.2320119,
                        "lng" : -175.1070701
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "zzq`C`wwk`@BkB@o@"
                     },
                     "start_location" : {
                        "lat" : -21.2319803,
                        "lng" : -175.1078492
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 473
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 115
                     },
                     "end_location" : {
                        "lat" : -21.2321994,
                        "lng" : -175.1025094
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "`{q`Cdrwk`@J{I?e@@KNmIBsBB_A"
                     },
                     "start_location" : {
                        "lat" : -21.2320119,
                        "lng" : -175.1070701
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "3.8 mi",
                  "value" : 6075
               },
               "duration" : {
                  "text" : "12 mins",
                  "value" : 697
               },
               "end_address" : "RV59+4V5, Alaki, Tonga",
               "end_location" : {
                  "lat" : -21.1923319,
                  "lng" : -175.1302522
               },
               "start_address" : "Laulea Beach, Tonga",
               "start_location" : {
                  "lat" : -21.2321994,
                  "lng" : -175.1025094
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 554
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 134
                     },
                     "end_location" : {
                        "lat" : -21.2319803,
                        "lng" : -175.1078492
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e toward \u003cb\u003eLiku Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "f|q`Ctuvk`@C~@CrBOlIAJ?d@KzIAn@CjB"
                     },
                     "start_location" : {
                        "lat" : -21.2321994,
                        "lng" : -175.1025094
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 mi",
                        "value" : 2420
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 268
                     },
                     "end_location" : {
                        "lat" : -21.210703,
                        "lng" : -175.1093681
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLiku Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "zzq`C`wwk`@K@g@DsIx@gMfAK@sIv@cGl@oBTo@LiAV{Cl@aGlAk@He@B{ABuBBeEFiABeBDk@Bu@PuE~@}Cj@O@G?UA}AW}A[o@M_@IoDq@_@Gg@KmAU}AYKCYGUEUGwAa@EAeBc@"
                     },
                     "start_location" : {
                        "lat" : -21.2319803,
                        "lng" : -175.1078492
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 mi",
                        "value" : 2939
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 231
                     },
                     "end_location" : {
                        "lat" : -21.1926013,
                        "lng" : -175.1292104
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "zum`Cp`xk`@ADg@tCCR@JHHNDNDHH@HEJSR}@z@IHiAnAUXA@kClCQNiAhAqCvCMLwAvAoDlDGHgEnEw@v@kDpD]\\aFfFGFsGxGwGbHe@d@sErEWX_CdCYXmCpCkBpBc@`@_C~BiFlFkDnDuAtAOPq@r@eBlBS`@"
                     },
                     "start_location" : {
                        "lat" : -21.210703,
                        "lng" : -175.1093681
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "171 ft",
                        "value" : 52
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : -21.1921374,
                        "lng" : -175.1292211
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eTaufa'ahau Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "vdj`Cp|{k`@c@@w@?"
                     },
                     "start_location" : {
                        "lat" : -21.1926013,
                        "lng" : -175.1292104
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "361 ft",
                        "value" : 110
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : -21.1923319,
                        "lng" : -175.1302522
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTaufa'ahau Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "zaj`Cr|{k`@Nd@J|@HhB"
                     },
                     "start_location" : {
                        "lat" : -21.1921374,
                        "lng" : -175.1292211
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "12.7 mi",
                  "value" : 20458
               },
               "duration" : {
                  "text" : "31 mins",
                  "value" : 1870
               },
               "end_address" : "RMGR+8M4 Mapu'a Vaea Blowholes, Houma, Tonga",
               "end_location" : {
                  "lat" : -21.1737001,
                  "lng" : -175.3086131
               },
               "start_address" : "RV59+4V5, Alaki, Tonga",
               "start_location" : {
                  "lat" : -21.1923319,
                  "lng" : -175.1302522
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "6.7 mi",
                        "value" : 10778
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 897
                     },
                     "end_location" : {
                        "lat" : -21.1807466,
                        "lng" : -175.2276118
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eTaufa'ahau Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "`cj`C`c|k`@Dz@HrBNfD@X@f@@t@BnABvBBdBBfA@rADVFf@XdBPn@n@hBl@~ALl@TzAFb@XxBLhAP~@f@lBj@hBl@tCd@pB\\zAHZR|@f@tBv@~Cp@tC^pANd@j@~@vAnCzBxD|BdEHNbBxCHN`B|Cj@hAr@vAN^H`@l@pDj@vDHh@RhAJf@r@dE?BNr@Nr@Hb@f@jCFVVtAF\\@D`@dCLv@TnBFjABZB`@Bh@AjBI~BGn@k@vCc@vBg@~BWlA[vAe@~Ba@hBWlAAD}@vFeBjIi@lCQh@c@|AK`@m@rBU|@Wz@IXIRYn@o@dA}@nA_@l@Yl@Ob@kAvC[v@Qb@sCvFKT{@|AaEzHYh@y@vAU^aEfH]l@oAtB]p@EHw@zBk@dAKV}C~Kq@|Cc@zBMdAw@pD}@lDoAbIM|@EPu@vDSpAO`BOCyAbP]dDCNW|By@nFiAzKMx@QvDa@vKu@hK]vFC`@I`BMjAARIn@q@nEgBnKIh@sA`IIj@ABe@xDYdCE`@OlAY~A_@dCAJ[zBIj@c@bDAH_@bDWtBkAbKMbAS`Bq@~EW`BUfBk@jDk@bC_@nAWx@u@hBi@`BUf@y@pBg@rAa@|@"
                     },
                     "start_location" : {
                        "lat" : -21.1923319,
                        "lng" : -175.1302522
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 mi",
                        "value" : 5878
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 494
                     },
                     "end_location" : {
                        "lat" : -21.1597081,
                        "lng" : -175.2792487
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLoto Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "tzg`Cpcol`@?@Fb@GhAu@rFOfAg@pDYnBGd@ADw@|EQnAq@pEOx@SjAUhAEPaAvE_@xAeAhEQr@{ArGmBpI{@xDUhAWnAeAjFWlAU`A[zAk@|Bk@dCm@rBw@jC[z@[z@eAjCi@rAADa@|@uBzEIRMZeAhCQ\\CDq@tAo@bAs@hAo@dAa@r@c@fAu@|AO\\}@pBcAjCCFy@hCcAbDm@vBA@GReBzFEPU|@u@xD[rAk@~AQf@yAbEKZm@bBWt@sCvH[x@cCxGcCpGkAzC_A|B?BcAxCm@hBM^}@pCm@fBQf@m@hBq@nBK^_BlEUl@Wp@oAnDCDe@lAe@~@Wd@}@dBQXmA~BEH{@jBOT"
                     },
                     "start_location" : {
                        "lat" : -21.1807466,
                        "lng" : -175.2276118
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 mi",
                        "value" : 3302
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 360
                     },
                     "end_location" : {
                        "lat" : -21.1720169,
                        "lng" : -175.3063391
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "dwc`Chfyl`@pBlDjApB~@`BTf@HXjBfFbApCt@rBr@`Cr@~BjA|Dz@lCbAjDZdA`@tAr@vBt@xBvD|KvA`EfAbDTl@dBvEPf@xBnGN`@lBrFJZ|AxEL`@\\bA`BjFd@nAPd@\\fABJZx@J\\DNDJHFxCvABBz@h@v@n@LJRNJVj@`ARNHDvAt@xA|@eA`BOTsA~BKRu@fA"
                     },
                     "start_location" : {
                        "lat" : -21.1597081,
                        "lng" : -175.2792487
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 223
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : -21.1736161,
                        "lng" : -175.3076096
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "bdf`Cro~l`@bAz@~BtBNLdAp@d@J"
                     },
                     "start_location" : {
                        "lat" : -21.1720169,
                        "lng" : -175.3063391
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "449 ft",
                        "value" : 137
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : -21.1728458,
                        "lng" : -175.3086338
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "bnf`Cpw~l`@kBhC[b@Q\\"
                     },
                     "start_location" : {
                        "lat" : -21.1736161,
                        "lng" : -175.3076096
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "459 ft",
                        "value" : 140
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : -21.1737001,
                        "lng" : -175.3086131
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "hif`C|}~l`@FFDR@TBJFLHFP?LAPKXQv@w@"
                     },
                     "start_location" : {
                        "lat" : -21.1728458,
                        "lng" : -175.3086338
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "tg_`Chzgl`@sDfMeAvFq@hAfIvEjI`F`LlHpEtCz@z@zC~@bJ|F~HdFsCfPw@hDy@tEg@vBk@|@kAhAxD`CpA|@`G~DzE~C~F`E~DdChBdAfBt@lFlB~@f@Zd@lB`EfC`HhD~GfIbOtCvFXv@vAvFhBvGtClLrDdOx@vAhEzD`RjPdCxAtAh@pDz@vB\\xC`@pDf@|MtAjCJzABfAGh@MbFyBl@]t@q@bFuErFiEbFeEfEkD~CcDjAqApAuBjBqD`DoIlAcDjAsEjCuQdC_TnA}JvAmJtAoLhB{KdDcTVmD`@yGt@iK`@wKPwDLy@hA{Kx@oFZmCvBiUNBNaBhAiGRoAnAcI|@mDdAwFtAyGhDwLj@eAv@{Bb@{@dIkNpI{O~CmGl@{AzA{Dx@{AlBuCb@cAdBgGn@_Cz@wDdBkI|@wFXsAzBoKjAwFr@gEJkFGkAKgBc@gDc@kCdCLfBJpAl@hMaSp\\ih@vdAu_BdX{a@~p@ydAh\\wg@R]`AS{AG{Da@wD_@iD_@gEF}DFoDJO@BkBLkKTsNB_AC~@S`MO|LCjBK@{J~@k`@nD_Db@eFdAmHvAaCFkNTk@Bu@PsJjBW@sBY}IeBsFcAqAY}Ac@eBc@ADk@hDJT^JJRY^gAdAmFxFsU~U}`@za@cXrX{NdOwC`DS`@c@@w@?Nd@TfD`@pJJdHFlDFjB`@lC`AxCl@~ALl@\\~Bf@bEx@lDxA~FbAlE|BnJpAfFz@dBzI~OzFpKbAvBv@rEtArIdDnQx@`F\\zDF|@@tCQnDoC|M{BnK_A|FoCxMoB|GaAfDiAtB}A|BqC`HmFnKkH|MmI|N}@dCw@|A}C~Kq@|Cq@`EuB~I}A`K{@hEc@rDOCyAbPa@tDqAlJwAtMs@nQsA`SMbCO~AmDxT}AlJg@|D_@fDi@lDgAxH}AfM_DhWm@hEwAnHw@hC_BjEyCjHFd@GhAu@rFw@xFa@tC}BdO_A`FaBpHwA|F{GhZkCjMgAxEyAxFsAfEaBfEcErJoBvEyChFqAxByAdDuCbHmDfLiC~IqAlG}@fCkDxJwL|[kCxGcA|CgDbK}B`H}E|Mi@rA}@dBcDhGkA`C|D~G~@`B^`AnDxJhBtF~FvRfDlKnRbj@dFjO~BnHv@tBhAjDJZbD~AdChBRNJVj@`ARN`Bz@xA|@eA`BcBtCaAzAbEpDtA~@d@JkBhCm@`ALZD`@PT^Aj@]v@w@"
         },
         "summary" : "Taufa'ahau Rd and Tuku'Aho Rd",
         "warnings" : [],
         "waypoint_order" : [ 1, 0 ]
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
