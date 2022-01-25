# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=-21.136765, -175.190297&destination=place_id:ChIJC3wueFaY9HERmwu4OF-1g9U
RMGR+8M4&alternative=true&mode=bicycling&units=imperial&waypoints=optimize:true%7C-21.19219904454107%2C-175.13026649843147%7Cplace_id:ChIJk0eSB66v9HERhIKxJvGnNSY %7Cplace_id:ChIJg5Fzugiw9HERZYtGhUwdVak&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ03scvT9Rc0sRYay2wSJ437M",
         "types" : [ "street_address" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJI91Q9Puxe0sR6EUAztvjtAI",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJE-YzteglbksR2BO-EDCqDws",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 49.2056977,
               "lng" : -53.18834409999999
            },
            "southwest" : {
               "lat" : 47.450495,
               "lng" : -58.2688469
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "388 mi",
                  "value" : 624365
               },
               "duration" : {
                  "text" : "1 day 9 hours",
                  "value" : 119301
               },
               "end_address" : "Corner Brook, NL, Canada",
               "end_location" : {
                  "lat" : 48.9490147,
                  "lng" : -57.95031700000001
               },
               "start_address" : "38 Main Rd, Salmon Cove, NL A0A 3S0, Canada",
               "start_location" : {
                  "lat" : 47.7530435,
                  "lng" : -53.18834409999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "413 ft",
                        "value" : 126
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 47.7529385,
                        "lng" : -53.1899346
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eMain Rd\u003c/b\u003e toward \u003cb\u003eFreshwater Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "owmbHbjscIJ@@t@@r@?t@@t@@t@?n@"
                     },
                     "start_location" : {
                        "lat" : 47.7530435,
                        "lng" : -53.18834409999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1431
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 343
                     },
                     "end_location" : {
                        "lat" : 47.7426727,
                        "lng" : -53.1990986
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFreshwater Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{vmbH`tscIZCFAH?NIFCFCNQDEXYDATGJCDAXBB@\\ZJJRLPNLH^VDDVR^V^VZTBB^X^XNJNB\\FDAb@Eb@Eb@EHAXF`@H@?bA^JDPPNNJPR\\DFRh@Tj@Th@j@rATj@Th@BDJh@Z`BJb@BJTj@Rj@Rj@Rj@HPLTn@nALRJN\\^Z^rB~BZ^^VLHRFPFNFFBXLHBTPXRDDTTDHZ`@v@bAZ`@Z`@TXDDHJRNBBZP@?XPDBr@b@"
                     },
                     "start_location" : {
                        "lat" : 47.7529385,
                        "lng" : -53.1899346
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 mi",
                        "value" : 2345
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 461
                     },
                     "end_location" : {
                        "lat" : 47.7378121,
                        "lng" : -53.2290512
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eWater St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uvkbHjmucIJNBLDPF^Pz@H\\Jn@Nl@Xx@d@~APp@PhC@Hl@xHVjCRpBXzCNfBHr@NfBPfBN~AZbD`@vCPlA\\dBJ`ARlBBVDZFr@Bx@@b@?L?TAb@A^?NAh@?J?ZAn@?\\?H@bA@x@?VBdA@L@TDXJp@r@fE@HTfBDZFpABbB?DDzCHhB@RNrBNhBFf@PzAF\\BRFr@?BBp@Bt@Br@FlBGjCDbE@p@?bD?t@@n@?BBr@?@Dp@?@Hp@l@lCb@rA@DRb@NTPT`@b@"
                     },
                     "start_location" : {
                        "lat" : 47.7426727,
                        "lng" : -53.1990986
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 522
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 47.7332142,
                        "lng" : -53.2291207
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBeach Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ixjbHph{cITRVJz@Tj@HD?ZF@?D@tB^N@D@bAL`@@d@Bf@?`AAfBWzA]NE`@K^Ib@OZO"
                     },
                     "start_location" : {
                        "lat" : 47.7378121,
                        "lng" : -53.2290512
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "249 ft",
                        "value" : 76
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 47.7325537,
                        "lng" : -53.2289255
                     },
                     "html_instructions" : "Continue onto \u003cb\u003ePowell Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "q{ibH~h{cIJ?JCXOd@OXEPB"
                     },
                     "start_location" : {
                        "lat" : 47.7332142,
                        "lng" : -53.2291207
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "98 ft",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 47.73250669999999,
                        "lng" : -53.2285249
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePond Side Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mwibHxg{cIB_@?MBc@"
                     },
                     "start_location" : {
                        "lat" : 47.7325537,
                        "lng" : -53.2289255
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 mi",
                        "value" : 1217
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 419
                     },
                     "end_location" : {
                        "lat" : 47.722606,
                        "lng" : -53.2281123
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHigh Rd S\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ewibHfe{cI\\_@Z_@NQ|@y@H?NAJCZGLEPEPCNAR@jBKb@Cd@E~Bk@|Bg@z@O^K`@Mb@KLE`@K`@Kb@KTCdAQnB}@j@OdA_@bA_@`@Od@Qd@ORCRATBHBRHB@JJPPV^xBbEn@lAp@lATb@@BNNJJ@@LFNBB?HAJC"
                     },
                     "start_location" : {
                        "lat" : 47.73250669999999,
                        "lng" : -53.2285249
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 811
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 408
                     },
                     "end_location" : {
                        "lat" : 47.7160689,
                        "lng" : -53.2260049
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSaddle Hill\u003c/b\u003e",
                     "polyline" : {
                        "points" : "iygbHtb{cILCFGFE@CBCDGDKDQBIBG@IDSDUBS@G@MDODS@G@KDSBGDKBIDIDI@ADGFGBEHE?AHGHCPEHABAt@OdBKnAMFA\\KnA_@VIrBi@VEb@Gb@Gt@KPAb@?b@?L?v@JjBRzA`@xAj@"
                     },
                     "start_location" : {
                        "lat" : 47.722606,
                        "lng" : -53.2281123
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 836
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 122
                     },
                     "end_location" : {
                        "lat" : 47.7097923,
                        "lng" : -53.22448199999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCathedral St\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "mpfbHnuzcIv@nAf@lAFTJNDHHXNd@DHJNLRDDVV@@ZRB@PFNBH@X@H?XCbASfAYb@KXGFC`@Mb@O`@MHC`Ai@v@g@XSr@m@LO\\]NMLOZa@Z_@LQJQZc@P[DIVg@P_@DGVa@@ATWFGFERIPAVA"
                     },
                     "start_location" : {
                        "lat" : 47.7160689,
                        "lng" : -53.2260049
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 mi",
                        "value" : 1410
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 269
                     },
                     "end_location" : {
                        "lat" : 47.7012024,
                        "lng" : -53.2144797
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCathedral St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-70 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eiebH~kzcIAi@@_A?c@@s@BQF{@H{@Hc@?AJo@@GLy@Lw@PgA@EJq@Lu@X_BJk@?EXaBn@sD^wBBIR}@FUZcA^aAHSLUx@}ANSZc@?Az@{@n@k@j@e@`@WtAs@zAYnBMjEUb@AfAGb@CjAG`CAtACtBC"
                     },
                     "start_location" : {
                        "lat" : 47.7097923,
                        "lng" : -53.22448199999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "269 ft",
                        "value" : 82
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 47.7006924,
                        "lng" : -53.2152737
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oscbHnmxcI\\p@R`@Tb@B@Xb@"
                     },
                     "start_location" : {
                        "lat" : 47.7012024,
                        "lng" : -53.2144797
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 mi",
                        "value" : 1934
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 273
                     },
                     "end_location" : {
                        "lat" : 47.6884794,
                        "lng" : -53.2323554
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "ipcbHlrxcIn@r@NLf@b@t@j@VR^V^V^X~@n@TPHF~@l@`Al@^T^VdAp@|E`DPLLH~@p@|AhAdAn@~@l@jBjAFFz@v@r@hA@?h@fABF^hAj@jBFP`@xAX|@`@pAd@xAhAvDb@zATr@vChJJ@BLZ`At@jCRl@f@dBZbA?B@@p@tBVz@f@xA^jALX@@@BL\\\\n@PZDH\\l@PRL@"
                     },
                     "start_location" : {
                        "lat" : 47.7006924,
                        "lng" : -53.2152737
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 mi",
                        "value" : 2040
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 375
                     },
                     "end_location" : {
                        "lat" : 47.6762428,
                        "lng" : -53.2524538
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "_dabHf}{cILB@?b@fARb@JXHNVf@Xh@rDfIxAdDVh@Rd@dA`CrCtGFLj@rARd@@BVf@Xd@Rb@BBX`@V^Zb@t@dAXb@Z`@Xb@Zb@dAxAHNrAvBPb@^v@`@dAh@vAb@jA\\p@pApCz@~At@vAR\\rCfFhArB`BzCfAnBr@pAhArBjArBj@dA\\j@Zb@PZ`@l@Xb@j@z@EN"
                     },
                     "start_location" : {
                        "lat" : 47.6884794,
                        "lng" : -53.2323554
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 mi",
                        "value" : 6592
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1405
                     },
                     "end_location" : {
                        "lat" : 47.62995429999999,
                        "lng" : -53.29625309999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ow~aHxz_dIGPf@|@R\\DFTf@l@pAdAzBTf@Vh@Vf@JVjAnCvB`FLXl@pAlArCl@pAl@rATf@LXHNVd@p@lAv@`ADFv@n@?@x@b@h@RPFNBl@Jh@BrCLb@B`@BD?`AJP@PD`@L^X@@x@x@FHNZ^r@d@xAJ`@T`AHZn@nCNn@Lh@@DRl@FRb@t@@Bh@j@RJNHNHB?b@Jb@AJ?VCb@GlCYb@Eb@EfAM`@EXEz@BTHTHh@b@BBv@v@JHj@t@rAdBZ`@hBpClAlBFHPXnAhBZb@t@fAXb@t@dAnAjBxAvBbA~At@fAlAlBXb@Z`@lAvAf@b@xAtA^Zz@x@|@v@hC~BLLtDjDtDjDxAtA\\\\|AtA`A|@RPHF~@r@~AjA\\V^XXRDD^X\\X|AnAZX@@\\\\xAxA\\\\ZZ@?\\^Z\\xAzA\\\\x@z@\\^vAxA\\\\JLl@p@Z^RRFLXd@Vd@BFf@lALXDPPl@Rn@xA~GdA~EDPz@nDj@fBFNLXp@nAjBhChClDlC`DnB|B@BrAbBV^@BBd@JxAFbAPx@?Bz@fBJNJPfAt@^?XDh@ZjA`ATAHIVWPIPRvA|AfAlAhAlADDz@`@JDVDh@JZ?b@?b@?b@?D?hCMfAEfAEvAGzAEfACvCI`BS`@Mh@MZOh@SVS^W^WfBoA"
                     },
                     "start_location" : {
                        "lat" : 47.6762428,
                        "lng" : -53.2524538
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.5 mi",
                        "value" : 8852
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1758
                     },
                     "end_location" : {
                        "lat" : 47.58067639999999,
                        "lng" : -53.3847207
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBack Track Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-73 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow NL-73 W\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "evuaHplhdINxA@LJp@VbBHr@F`@@NDd@UhACd@Et@@h@TlAb@pAdAbDhBzFNb@hBnFVt@Pl@~BdHtBfGJXTn@`@pAVn@Nh@Nd@h@|Aj@vATj@t@~BLb@r@|BDHL`@JZX|@Lf@J\\DPLt@Jl@?@h@hEBXFVLn@BNFXBLBLJ^DPRv@Tv@^hAjArDrAbEt@~BNf@@DbC|HPl@Rl@Pj@L`@Vx@Pj@ZdAbAzCRl@v@bCRn@N`@BJZfAX`APl@Vz@z@nC\\bAPl@HTt@`C^hAh@tAXj@xAfCnArBx@xAjB`D^n@bAxBn@`BXx@fAhDX|A`AhFjApGb@lBfAtDtDzLlClI`B~DZp@`@p@hC|DlC|DdBrBpAjAvBzAbMhJHFtA~@z@l@nCjBpBzAzEvDzAlA@@vKpIjA`AzFlF`AdA|ItJhAnAx@fAb@p@hEdHtCnErDzEzFlG|CxCxEtEjAxAz@vANZ\\p@h@tAdArCbArCJXzBhGnBnFnAfDh@tAh@xA|@vCd@hB|@lE@Dz@rE`@fCFXDVn@`E?Dh@lCh@|BVbADRX|@`@`Av@|At@zAXd@f@v@rAdCbB~CJPzCpHhAjD"
                     },
                     "start_location" : {
                        "lat" : 47.62995429999999,
                        "lng" : -53.29625309999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.7 mi",
                        "value" : 15591
                     },
                     "duration" : {
                        "text" : "44 mins",
                        "value" : 2629
                     },
                     "end_location" : {
                        "lat" : 47.5480206,
                        "lng" : -53.5424143
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gblaHnuydIROPKRCHDDBPXXl@fBxDHRTh@FNLVXj@n@t@FD^XVRDD~AhAbAt@|BvA`Al@~AbA^VFBb@^PRr@|@Zl@BD`A`D|@hEj@pCZ`Bz@`EJf@BFTh@j@tA`AzBVf@^|@z@dBBHn@`BZbAf@xAjArDXz@F`@F^BPDd@F`AHvA?P@dBBjBFvABRJjAFXBNH^Nn@H\\b@rBf@bCR|@\\`Bx@`EjApFHb@BJ^tBJZt@lCZ`Ad@v@@@vArA~@p@v@f@h@Z`Aj@DBXNvAr@lBjAbAn@ZVlA`Aj@n@DD|AnBVx@Vr@Zv@`@hAt@nBDRRx@Hf@Z|BDXHp@LbANtAHp@@FFj@Hr@RdBf@rC`@dCT|@T|@bAxDl@~B~@lDBLbAzDLd@t@vCNl@@B`AvDb@zAHXHPNXp@rADHn@lANVHLr@hA|AhCFJTh@N\\z@rAlAjBt@hAXb@Xd@PVx@tAr@jA\\j@`BlC`@r@PVp@hAXd@bA`BHLXb@r@hAXd@Xb@r@hAf@x@HPVf@BF^jANv@@JJhAHbAB^@TPvBBb@Fr@Dr@HpADTHr@@PXlAj@lBv@dD@Dd@zADLNZ^x@LTr@jA@BZXtBtB\\\\\\\\l@l@`ChCVVl@jAVz@`@zAVdBt@tEFb@Lp@TrAN~@@BLl@@FNb@?@Xf@r@dAhBlCDDR^n@lAb@x@`@~@Rb@Xn@bCzFTh@j@vAl@lA^t@LZTh@xAnDRb@j@pAbA|BFN^dAp@jBP~@BLJt@`@pCRrA\\rBBLb@fCLt@Jl@Hp@\\lBVrBDVJp@F`@\\tAHVHTr@lBDJh@bA@@j@z@~@lAn@jA@@\\t@TlA?@RpAJdAFj@?FFr@Db@PhBBJ\\nAN~@@Fp@dBJRv@nBZh@`@`@d@b@XVLJn@j@t@r@b@d@r@x@DDrAzAjDdEh@h@TXNTXZHFJHb@f@`ClCrA`B\\^jC`D^j@VVpC|ClDzDZ\\rAxABDl@p@JL\\b@XZPTHJZb@LRZh@DLFPXfAp@pCJ`@XtADXJp@b@tCJp@@?VbBPjADZBZ?T?FEbAKbACJShASfACHSzAKn@?@Ep@?n@@lAZxCPdBPfBLlANvAFf@RdBb@xBFV`@|AH^DLf@xARj@Ph@@BRh@Pd@BD^z@Vx@@LHj@LrAFt@@X@r@?j@BlA?d@?hB?^DtD?r@?@@l@?D?V@bA?L@r@B|BBb@Bh@@HHp@Jp@Jj@Nv@Jn@F^RbAJn@\\bB@FZhBVpALp@@BJj@FZDTVnAJ|@KRQVc@d@WTWVKHQPy@r@CBaCdCo@n@wAxAEDu@t@wAzA]\\CDWVyAzASTGF]^sCtC]^IHo@p@y@z@wAvAAB}@v@OLMNw@~@MNKTy@jBINUh@wAtCmArBEF[^iAzAGHwA~Aw@|@?@{@|@sAzA{@`A[^y@`AaCnCw@z@ONg@h@QTmAhB?BOn@CNWrAEd@?JCt@?X@XHhALpAHr@Fp@b@nEPdBb@lED\\BT@TB\\@`@?R?\\Cj@K|@CRIp@AFi@fBi@|@Wb@QZk@~@k@r@MPiAfA{@x@_@Zo@n@g@h@{@z@{@z@e@d@oBjBw@t@CB]Z{AtAe@`@aAlAqA\\GB}@PG@[DeANMB}AP?@IHoAxC_A~BwAhDUh@i@tA]v@oAzCyEfLaB|D"
                     },
                     "start_location" : {
                        "lat" : 47.58067639999999,
                        "lng" : -53.3847207
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 306
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 47.5472321,
                        "lng" : -53.5461193
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cveaH`oxeIVLNTV\\HTBN@JB`@B^@X?DBVDR@BHPDV?J?P@f@Bb@?FJhA@l@?P@R@FBN@LBT?@Bf@?N@n@"
                     },
                     "start_location" : {
                        "lat" : 47.5480206,
                        "lng" : -53.5424143
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.3 mi",
                        "value" : 11698
                     },
                     "duration" : {
                        "text" : "38 mins",
                        "value" : 2288
                     },
                     "end_location" : {
                        "lat" : 47.4476881,
                        "lng" : -53.5400623
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTrinity Rd South 80\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-80 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eqeaHffyeIl@LNDD@HB`@Pr@\\p@`@t@d@VPPJVPv@h@FDRL^VJFDDJFf@ZVNPJf@\\ZRVLNHDBLFLDDBXJ^JTFPDLBD@PBH@ZBF@L@T?@?`@?^AB?b@Ab@?VAJ?n@A~@@rDDfBBH?X?b@@`@@v@@tBPjCZ~ARx@Hv@DbABP@b@?H@xB@p@?~ACtBEn@CpBAb@?pDCrBAz@?b@?F?x@Dj@Ff@JZHD@ZNPH\\Rj@\\r@n@LL\\\\BBb@b@RR^^^X\\RTLd@TRJLDRF`AXVHb@HJBx@RLBTFF@XJLBRHHDNFFDPH\\PVNrAz@f@\\~@p@JJpBvANJNJ\\T^TVNJFRJj@Xd@R^Nd@P^Lb@NjCr@^Hb@Fb@FJ@VBx@FjAH`@BH@TBLBH?l@JtAR@?fATv@NXHRJB@NHJF@@HHLJRXJLLR\\l@b@z@Vj@R^Vb@Zj@RZJNRXTX^`@PR\\\\b@`@VPPNb@Zh@XDBZNVLj@TB@XHB@^Jd@JD@\\FZDh@Db@D@?hBDJ@`@@tABvABlBHf@@xADP@n@Dr@FF@b@DdAJH@XDJBf@Fd@DP@T@R@l@?T?ZAh@Ct@Gd@ErAO|@Kh@Il@Op@UJE^Q@APIVOTMXUNKTQ@An@i@j@g@RQHI\\[TQ|AsAd@c@PQtBiBnAcA|@y@\\Y|@u@BCvAoAj@e@^_@x@s@NMdAcAnAgAbAy@l@c@`@URMTK\\M`@Oj@Mr@Qz@QrB]@?xAYxAWbAOx@Ml@Gl@GXCZAl@?HArCG^A\\AD?x@CxAK~AOD?\\EB?^EtEc@TCLApD[l@GdBQNCRANCRCRCLCb@IVEJCZIDA`AU|@Wl@SrAc@LE^OzCeAtAe@hBk@dBo@|@[pDkAXMh@QJETGb@M?Af@Ol@OxAULAv@Kb@Gl@G|AOf@EF?p@E~@CN?zFBbD@rF?b@?nCAnBBfA?|A@`F?tE?|@@b@?nC?jB@jB?b@?b@@jB?jB?|D?nD?dE@bBDdAFtAJvBP`@D|APN@xCV~AP`@DL@x@HZDF?b@BD@h@Bz@?T?L?R?f@Aj@Ch@Eh@Gd@Gz@ObAUt@Qb@MNEXI`@OTK\\Qf@]ZWr@o@XYZa@~FsJXe@xAaCxAeCJOVe@Xc@Xe@FMb@s@vAaCl@aAXe@BCRYBCRYVYRSt@q@@A^W\\UNIf@WHE`@OHCXIXIFA\\It@ItCGNAvBGbCE"
                     },
                     "start_location" : {
                        "lat" : 47.5472321,
                        "lng" : -53.5461193
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 415
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 47.4476131,
                        "lng" : -53.5455514
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto the \u003cb\u003eTrans Canada Highway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 W\u003c/b\u003e ramp to \u003cb\u003eClarenville\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "acr`Hj`xeI@pA?V@t@@t@?RJhCB^FxA@b@Bf@@lA?f@?j@AHCpAAVKtBIhA?J@LD^"
                     },
                     "start_location" : {
                        "lat" : 47.4476881,
                        "lng" : -53.5400623
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "25.7 mi",
                        "value" : 41281
                     },
                     "duration" : {
                        "text" : "2 hours 26 mins",
                        "value" : 8749
                     },
                     "end_location" : {
                        "lat" : 47.6869136,
                        "lng" : -53.8968769
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "qbr`HtbyeI_@~D]zDAFEr@UhCYxCa@rEWlCYfDKhA_@xEkA`MGr@MtAo@dHe@pFO~AYzCUhCCTUtCI|@IjAIxBGzBAfA?FChBA`GCpMA|GE|R?xGC~DATC|AKdBALQdBOtACN[nBSjAq@dE}AlJ[fBiA|GmBjLoBnLg@rCsB~Lq@dEMp@sHfd@aAvFe@tCY`BKp@qBvLmAdH_AxF_AvFkAhHkA~G}@fFe@tCMn@y@~E{@`Fi@~C_@|Bc@jCYbB[lBc@dC[xA]vAg@~AiArCSh@aCbGiBvE}B`GiBtEsClHSj@Uh@i@tAi@tAUj@Sj@qExKsCjHiBtE_GbOSj@_A~BO^Wx@ITGVSt@e@lBShAId@[nBMp@e@rCs@fEkAhHe@pCsChPkBvLcCfOeB~JMp@e@rCMp@ETgAvGgEdTy@bEkC`N]~AOp@k@nCOn@k@pCm@pCgAdF]jAUj@Wn@IRWf@O\\y@tAA@U\\ABa@j@q@x@w@~@sAbBA?w@`AoBbC[`@oBbCqBbC[`@gDdEsBlCA?Y^EDoAzAEFUXw@`AEDUX[`@EDWXEDKLe@l@EFUXEDUXEFUXa@f@KLe@l@[^y@`Aa@f@UXs@z@CBEFUXEFUXEDs@z@[^EFKLIJ}@hAUXEDUX[`@EFq@x@EDUXEFs@x@EFUXKJq@z@q@z@[^c@f@[`@q@x@}@hA}FfHeBvBcAlAqBbCs@z@CB[^WXEDUXy@~@[`@[`@[^[`@[`@[`@[^[`@[`@[`@[^[`@[`@[`@[^cEhF_AlAW\\u@dAaAlAuAlBa@j@[`@qAfBgI|Kw@dAqAfBq@x@i@p@A@?@aAlAwBzCwC`EmBfCYb@uAhBiB`CoBhC?@[`@qAdB[b@k@t@IL[`@u@dA[`@[`@ABs@~@CBW\\sAdBY`@gCnD[b@Y`@kBlCe@p@gAvA[`@sEdGaElFoBhCu@`A}B|Ce@n@oCtDaCdDkBhCg@p@i@t@sAdBcCdDqAdBqAdBwEjG[`@aAnAQT[`@EFs@t@EFWTURGDc@\\[RYPg@VIFWJUJe@PYHODc@LG@YFg@Hi@FY@M@U?Q?Q?q@@UCYAIAm@GWEc@GaAMEAeAUqAWo@MUEMCw@Qq@MUEa@IGAiDq@IA}Aa@{@U}@Su@K_@GmAII?{@Cc@?c@Ak@@wADm@Fc@DiBZc@Lm@NA@o@TGBm@V[LEBSJc@RgAp@g@XOLUPIFsApAaBfBeD|Dy@~@a@f@CDkCfDiAtAILQRcEhFILQRe@l@kCfDw@`Am@v@e@l@w@`AeBxBgDfEkCfDqA`BcApAm@t@IJm@t@e@l@m@t@w@`A[`@[`@IJm@t@g@l@c@j@[^[`@[^uAfB[`@w@`A[`@IHk@z@q@hAo@dAIN}@rBw@zBGLu@fCK`@Qv@[vAIXETYvAAHKp@Kr@SbBIr@Gt@MfBC^IlBYvGCr@IhBKnCEbAm@fQSnEMtDG~AAHOzCKdBK~AM~@EZETMv@a@hB[nACN_@jAABQf@Q`@Yp@KXINg@dAa@l@Yd@w@bAKLOP{@z@]ZYREBaAj@KFSHqAh@qA\\m@Ju@Ls@HQBQ@eAJc@Dc@Dc@DwEd@a@DkBRa@FgALeHx@YDkBPc@FeAJc@DuGr@iGj@iDf@}@Lk@Jm@LwA\\qC|@a@La@LiDtAeA`@cA`@a@P_@PiDzA{B`A_KfEgD|AeAf@_@PqOvGm@Va@PgDxAa@PiDxAa@P{GvCyB~@a@PcAb@cA`@eBt@a@PcBr@mFbC_@PmGrCcAd@A?aA`@cAb@eBt@cA`@gCfAwLbFcAb@iDvA[LEBkEdBuBz@{@^a@Pa@PcAb@a@Pa@Na@Pa@Pa@Pa@Pa@Pa@PcA`@cAb@a@Ps@XcAd@eBr@eBt@_@Nc@R_@NA@_@Nc@P_@PA?QHsAj@_@NeAd@aA`@cAb@gCfAoGnCeBt@_@NeAb@cBt@gDvACBG@YNaBr@C@cAb@_A`@C@gDxAa@Pa@PkBx@yB~@oClAq@ZmAh@_A`@g@Ri@ToAh@oAf@iFtBIDeCpA}AhASNi@f@]Z]Xe@h@w@dA}@pAq@`As@rAmAlCm@|Ag@xAa@xA_@tAMb@AHYtAO|@G`@W`BCRKp@CROfBC^K`AIxA?BGdBAHAhB?j@?`B@rB@~@?h@DjDBrCD~C@t@H`H`@vVBxBBr@FtEF~CH`EPdKDhCNhJ@pD?zCEpBGrBGt@Gr@ARWpCWtBYnBo@bDAFw@tCiAjDgA~CeBbFWl@qAlDqAnDsAlDSj@k@zAQd@Sl@mApDmDbKcAtCSj@g@vAg@xAUj@CHw@xBSj@}@bC_CtG_BfEWj@Wh@Q`@kApB_ApA{@|@cA|@}@n@u@`@a@RA@_@La@Pa@Jw@R{@LcAH]@gABc@@o@B{@@y@@o@Bc@BK?WDkAPyAVoBj@}An@sBhA{@h@gA|@s@n@]ZQPKJe@h@QTq@x@GFYb@QXGH_@l@S\\OVGLWf@ADSb@EHO^Uj@EHO^MXGNSj@Sj@KVIRg@vAAFQb@qAvDqBzF_EjLy@|Bs@xBw@vBgEvLoAnDSj@g@xA{@bCoApDSj@{@bCaEhLeArCQf@g@hAaAnB[j@[j@Wb@w@hAsC`DmBdBwBtAgB|@sBx@w@Vg@Js@NsBZyDp@oDl@iBZ}HxAmATgATaHtAI@iB^[FG@iBb@[HE@eAZa@LOFs@Vc@Na@Pe@P_A^WJIDiB~@{A~@[RC@_@V_KbH_@V_@VeAr@YT_@V_@V_Ap@_An@_Ap@_@V_@V_BhA_@VwA`AwAdA_BfA_Ap@_@V_An@_@X_@V_@V_Ap@uBxA_@Vg@\\wCvBIFSROLi@p@UXy@nASXEHW`@Yl@_@`AIRQf@ABOn@ELQ|@ERIh@AFO|@Ef@Gp@?@Ct@GdACvAM~FMxDCd@Ep@?@KpAMfAKr@CNQ`AS|@Kf@I^ENOh@_@hAIRQb@CD_@x@e@~@CFUZi@z@u@`AKLQTC@e@h@g@d@cAr@]VcAj@mAb@w@TcAPk@HO@a@DgABc@@qADY@{DL[DcBNmAXG@YLaAd@IDWNIDUPUPGFa@^a@`@UXa@f@mAzAyFnH[`@[`@[`@Y\\ABqAfB"
                     },
                     "start_location" : {
                        "lat" : 47.4476131,
                        "lng" : -53.5455514
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.9 mi",
                        "value" : 15941
                     },
                     "duration" : {
                        "text" : "46 mins",
                        "value" : 2760
                     },
                     "end_location" : {
                        "lat" : 47.8069986,
                        "lng" : -53.9724145
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ez`bHnv}gI}@AeA?c@@c@FYDIBa@Ns@VOFcAb@qAl@SFa@Na@N]Lg@LeAXC@aAXmD`AcAZkCt@o@Rm@Vc@h@MLKRg@z@sAdC?@k@j@OJo@^aC~@kAj@y@l@u@Vg@BO@u@CS?wAOOAS?c@AK?s@VaAp@C?_Aj@y@Pq@?S?OEq@OcBw@y@EQAQ?w@@{@b@SLcBdAaAj@_@Jc@Ja@A]AmA[a@MiCu@mDeAu@UOCg@K]B[BGDa@PMD{@z@QNg@`@y@Zc@De@Fa@C_@Ce@Ok@S{@W_@MA?y@As@J_@J[JiAf@E@iAP[?c@@a@G[Ei@W_@SA?aAi@KGy@KQCyAGcAOkBa@EA}ACG?c@?o@?W?}@BIBk@R{@j@YT]ZWTyBdC]^y@~@i@l@o@d@KHUJa@PCBkAR{@HoCRsDZg@DeBDC?qBIYCkBUE?aBa@e@K_@MgBk@QGuB{@{@]GCqBm@YCg@E_@@_@B}@^GFs@n@GJs@fAEF_AnAMNaAjAoAjASPyBpBk@\\SLgAd@oAZiALgALc@DgALeALoCZu@HODs@PcAj@i@l@]^sA~A_An@iAJC?]Ec@GQAQIcBu@a@QgCiAs@YOEiB]IC}@C{FM_ACiARC@cAd@A@y@v@KJeCnCwA|Ay@|@eAjAi@x@Yb@Yb@s@jAq@hAgBtCe@x@KPq@lAgAtAKLqBbCYZw@jAILc@bAKPg@tBIt@K`AQvAGh@eArDWz@e@xAg@zAQj@Sl@GTc@r@C@_@XWRGBcA\\iBh@a@LA?]TYRe@^o@j@KL]^yCdDOXYf@A@Qh@c@pASt@c@|AIV]~@e@hAyAvDiBxESh@sAlDsEpLc@jAmA`CWf@GLOXeBtCA@kAjBu@fAmAlBYd@Yb@}CzEaAzAKPu@fAiBnCy@lAqAxAIHSNeAx@{BrAcB`A}@r@}AlA_@XYb@w@bAa@j@Q\\aAjBYv@iA|CsAdEi@bBc@pAw@fCe@zA]hAGNSj@Sf@aAbCk@tAsAfDYh@U^a@d@UV}B~Ba@`@{@b@A?iAZgCj@iB`@C@_AXC@e@XUTYX]f@GH]`AW`AIh@CNGfACrAFdBD`BJ|CBt@D|@?lAApBAJCt@AXM`BSjBGXMp@?@a@dAe@t@Y\\STy@f@OJwBjAo@b@s@l@EDi@l@OPkCdDA@e@f@SP[RcCdB_An@_C`Bw@h@GD_D|B_@Vi@`@kEpD_Av@}@v@{CfCQPcAv@g@XC@w@Xk@N{Ab@o@N}D~@_Bh@{@b@sAp@sBbA{@b@s@VMGO?SHGD]Pm@^s@j@o@l@OF{@f@kDhBcB|@C@_A^gDxAqBx@UJ{InDaC`Aa@PeBr@a@Na@PcAb@e@Pa@P_@Ni@Ra@Pa@PcA`@cAb@kEfBsAh@wAf@a@Nm@PW@SBo@Cg@IKCaBg@}@]iC_A_A]kBq@iDoAe@OeC_AeA_@gC}@kDoA[MmBq@a@MkAc@s@Mo@Cq@DUFYFk@V{@f@cAp@"
                     },
                     "start_location" : {
                        "lat" : 47.6869136,
                        "lng" : -53.8968769
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "24.8 mi",
                        "value" : 39962
                     },
                     "duration" : {
                        "text" : "2 hours 6 mins",
                        "value" : 7572
                     },
                     "end_location" : {
                        "lat" : 48.1193654,
                        "lng" : -54.01324589999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "whxbHpnlhIwBxAiAb@w@Ra@HWDw@J}@LeAN_C\\O@gAPa@JYHeBf@cCv@wBp@cA\\aAPi@DQBQAo@?y@Q}@c@EAaAk@{@g@m@M]AQAQ@[?k@PEBcA^}@\\QFs@H{@AKCi@MYQ]S{@}@AC_BwBOKa@_@_Ai@]Ui@_@o@y@IKa@}@AEU}@MeAQmBAKQgB[sCUmAa@oAo@_AAA[[e@c@{Au@iFiCYOgAYEAcAQiAKQAu@?O?SB}@DI@{C^cDb@uEl@m@JcCXiBVcALqC\\qDf@uAPeEh@oAP}@RA?a@LYHaAn@c@^UPk@p@WVIJQTu@dAmBhCqAfBoAdBA@o@n@cAz@}@d@m@PQFaBZYDeANuEp@c@Hc@FgANeAPeANgAPmC`@UDo@JSBO@y@DM?kAAgBIc@EuE_@c@EmCUG?[Cc@EkAI_@CMA]CiBOOAw@Fg@BiA\\YLk@Xu@h@CBYV]\\]ZCBuBnB{@z@k@h@OJ_An@aBhA_Av@gAhAOJc@^i@TSFq@RS@q@DUAo@C{@Qm@M}AWmCUe@Ko@MaAm@kB}ACA]]{@{@wBuB]]]]]]wA{AgAmAi@s@A?Ue@MWe@uAk@uBOm@Uk@Sk@Wg@MUMKq@o@oAw@{@m@MGQS[]KK_A_B_AsBGKo@mAEGUWm@m@s@UYIcAEK@c@B]BoBZ_@Hg@@_@Be@Gc@GSA{Cs@GAeAKaA@kB?i@A{@MCAsAa@_Be@o@AQ@c@BmCf@eALA?a@@g@?_@Cg@E_@Ka@IKCmAc@KIaAu@[[eCcCcBoAMEq@Wy@UaAE[AG?sAB_BB[@w@JUJUHKF_@TA?i@h@aAlAcA|@A@}@l@GD{@\\GBYHq@Py@FO@u@IWCm@UYKcAu@_AcA[[e@c@y@e@CCw@Qm@C]CcC@O?kBBkBB}@@m@CYAaAUgAi@g@_@c@[uAmA]c@s@y@_@i@q@_ACEg@{@IQiAuBaB}CGMc@eACE]qASeAGa@SoASeAKe@Ys@M[c@q@U_@aA{@uC_BoAw@GG][USe@g@[_@cAuAOOk@m@OKu@g@IGaAm@GEw@}@S_@Wi@Om@YeASiAMq@Mq@Mq@E[YcAOm@Me@EEu@_AAAgAs@[Ku@UO?c@?e@?cB`@e@HeAPC@yANMAc@?]AEA{Ai@ICc@OyAg@MCkCe@OE{AMwAMSAc@Ca@Cc@CgAGu@EQ?gA?oCAc@?i@AiCPgAHe@BgBZoATYFgB`@sEdAc@@a@B_BIKCgAUIC{Ao@KEyBiASKmB{@CAsBu@y@Mc@GOCuB]i@EwF]CAaCa@k@YsAo@q@a@kAu@UM_@SgAo@_AWa@MQEu@IcBSi@EsD[_@Ce@A{@AsAT_@FoAf@UR}@v@[`@[`@w@`AMPgApAw@bAkCdDy@`A_CvCKLaFhG]^w@`Aw@`AwCpDq@p@]\\c@b@qD|C}ApAy@t@_Ax@}@v@yChCuAfAwDtCE@_@Tu@^sAXMBgE^sDZyFf@gAJmCVwE`@uALw@DkBHkBHoCLO?eE^kBNmCTo@FWDgANmC`@eAPgANq@Je@Hw@Lk@Jy@Pc@Ha@Hc@JoDt@iB^uFjAeATgALc@F]DE?c@BqAJ{@DwBJg@Du@VE@o@Tk@LE?k@H[Bg@Bo@Fu@TIBy@f@y@l@A@uAjAiAp@UNmAj@a@PEB_CdAgAf@aBl@oAb@_Cv@gBh@KDsCf@YDiBVoC^o@JcDf@gAPMB{AVwB^w@JA?a@?W?o@OSGMEi@W}@m@WY[_@QScAoAw@aAMMcBsBa@e@YUw@o@i@U_@QgAYEA_ASaBa@i@CaAEi@@{@?K@gBBmBXe@FmCVYBI?c@?w@@qAOCAc@Ka@KICwA}@EAw@u@{@{@EEqBoBOOMK_@Y}@u@aAi@_Ae@gAe@gAc@]OcAc@cAa@cAc@cAa@k@Wy@SAA_AIE?qA?aB@kB?wE?cA?oBJK?{@R_@RWLg@\\YR}@`As@nAILyAlC}E`JqA`Cg@`A_B~C?@uBxDa@f@[b@qAvAaBvA}@t@oKhJ[XaAv@QNg@j@g@l@_DvDeEdFaAjA_BhCg@x@c@x@uAlCa@v@wBhE}A`DWf@wBfEeDxGWf@oAfCOXoCnFyAxCa@f@MR_Ap@ODwAb@_Bl@ULm@^o@l@]ZiDfEw@`AgArAML}A~AyAhAKJSJaB|@CByBdAi@X{@d@ED}AnAc@\\wC~ByFpEUNKDk@VWHi@P}@Ns@J}BZk@F[F]Hu@d@MN[^MNc@|@CD]vAGVEXUdBE`@aA|Ja@pEeA~KoAvMYfCCNKr@YrBc@fCUpAaArEOp@_@|AOn@oGrXo@nCkBzHYjAc@vAc@z@EJc@j@k@f@ED{@d@A@mEtAiCx@cA\\gBh@eA\\mDfAGBsAXo@Ba@BiAG[CqAOa@@[@GB_ATeAn@WLiBpAEDsAZM?c@?YAqAGc@CSAuAYIAUS_@YMM_A_BAAm@{BS_A]_ByAeHMq@]aB]cBQk@Sk@[cA{@eBSa@CC}AcB{A_AQMOEwAe@{BOeA?sD?kBAgA?S?s@KWCKEcAe@]YaA{@u@y@mAqAKG_Ao@UOk@[aAi@aAi@}@g@oAyAGMs@kA?AUg@i@uA_A{BACu@iA?A}@o@QMsAc@QGoBKMBc@Fs@Hq@`@_@VIDuAfBk@x@[`@c@p@oAjASPKFuAv@MBa@Fc@FSB{B@gANOBqAh@a@`@c@b@m@`AOTm@xBMd@On@cA|DaA|Da@~AaA|DSx@i@`Bi@z@AB[XA@u@d@IBmAV_ANqDl@a@FkA?_@Ck@E}@Uc@Ka@I{@OKE_@QUKy@q@mAcAYWe@[KIs@OCAc@Gm@IY?c@AO?w@Bg@BeBJwETeBJqBFC?cAA]?mAGk@C}@MkBUc@GmD}@QEQCaAOgA?g@D[BmAXcAb@{@`@kCrA]PC@a@PsAl@s@TcBj@e@Nc@JcAXgBf@c@Pa@PQHqBjAA@]Ps@ZODq@Jy@?I?YCcAOiAGMAy@Bw@@s@DgAFkBJc@BE@_ARwAl@MFaB`AaAj@KFwBhAaAh@cAh@k@\\cAt@MP_@f@k@hAKRy@nBQd@Uh@sAlDa@bAKNY`@o@p@MF_@TE@_ARI@iAB{@EgAEE?eBCY?m@DM?u@VA@_@ROHkAbA[f@Yb@IJw@|As@`BIToAxBm@p@YLc@V]No@T}Bp@q@Ru@RsFxAqBj@}@PG@[@q@BeAOmAUwBi@q@Qw@K[GE?oC[]Eg@IgAMgAMc@Ga@Gc@EsAIW?aAAi@BoCFa@@iABc@@c@@m@B}@GmASo@U_AYmBk@o@SkAm@IG][]Y_@_@]]oAqAIE_@Wu@i@k@[_Ak@a@Ue@W}@e@aAg@a@QcB{@cB{@k@YUOaBeAaAm@_Am@aBcA_@WOIOKcCyAWOGEgAa@aAYKCyAGuAA[@u@BQDaARe@Nc@JaFvAQBw@JqAAC?gAUUGo@MkB]a@EgAIeAK}AMMEq@UQI_@Ua@UKGkBcBCA_Ao@CC]Ks@WQAu@GQ@c@B[BeATmAXa@J{@AKCc@I_@GACa@U_@U?A{@aASe@[s@y@yBk@{AiCoFGOOWYe@_AaBk@k@"
                     },
                     "start_location" : {
                        "lat" : 47.8069986,
                        "lng" : -53.9724145
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 mi",
                        "value" : 5908
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 911
                     },
                     "end_location" : {
                        "lat" : 48.1594587,
                        "lng" : -53.9900753
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "aiudHxmthISUk@W_@SkB_@EAeCi@c@IoDw@gAUa@Ia@IiB_@A?_@Oo@WiAu@IGs@q@c@i@WY]m@[e@k@yAQg@Sk@?C]gBYgC[gDu@}HQcB]kDQuA?C_@uBG[[mAk@mBSq@{@aCWg@Ug@IQkAeBUWw@aAy@_A[_@[_@uAcBy@aAoBeCGGoBmB]]_@[uAkAkDgCkAkA]]QQg@i@wByB[_@qDuD}@{@{@kAS]y@uAeAsAGC_@WOIu@KGA[?Q?gAHQDc@HQDcA?w@IIA}@a@s@k@EGi@q@e@{@KS[cAGUSmAKk@_@iBOm@Qq@Qi@a@kAm@gB}@cCg@yAQg@iAkCS]eAoBCEiAuBMUa@uASsAScAYcAAAc@}@o@u@YSUQm@MIAY?W?k@Jc@TE@e@b@QPk@n@MLc@^[RYRE@a@POFSBg@J]Bc@Dc@Ac@Ac@EwAOs@?C@a@HOBq@XC@q@l@IJ[`@ILMX[r@iAxCEFWf@]r@UVY^A@y@|@GFuAhAOLcBvAEF]^SRa@p@ILOVm@dACDYd@S\\EDw@z@{@j@i@Va@PkAf@{At@m@Z{A`AaBrAs@l@]ZyBnBMJo@h@WRGD}@`@aAZm@FQBQ@w@BMC_@Gm@]UWKK_@u@EISi@M[CQKm@AECs@Ae@"
                     },
                     "start_location" : {
                        "lat" : 48.1193654,
                        "lng" : -54.01324589999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.2 mi",
                        "value" : 8371
                     },
                     "duration" : {
                        "text" : "27 mins",
                        "value" : 1633
                     },
                     "end_location" : {
                        "lat" : 48.221532,
                        "lng" : -54.04656850000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sc}dH~|ohIq@BiA@gABI?WB[@eAPw@RYHmAb@MFSH[N}@f@IDu@b@iAx@oBfBQP[^[^aAlAgAxA[f@{D~Go@jAkAtB_D~Ee@x@eDtFg@z@kArBkApBkCpE}AjC}@xAkAnBcAdBYd@Yd@Yd@Wd@Yd@Yd@q@jAYd@Yd@Wd@Yd@Yd@eBvCy@vAyBnD}F|JwBrDg@`AGHa@p@u@nAk@bA]j@U^IL]l@KN]j@u@nAQZu@pAm@dAq@hA}AnCsA~B_@p@k@~@q@lAQVGLYd@s@hAEJeAdBYd@EHYd@y@vAw@rAa@p@a@n@aAbBu@nAYd@S\\CFeBxCYd@Yd@Wd@ILaAbBYd@_C|DWf@Yb@?@k@|@c@l@W\\CD[^MPeAbACDWTGDYTCB_@Xm@^SJYNGBi@Vo@VKBc@La@FMBUBc@FcADA?c@@U@M@c@@_@@kABc@@K?_BB[?qCFmABe@@eA@g@@eB@}A?{A@c@@]@qBJa@Dc@BkBJg@@kBFc@@kBDoBFyABc@?eBAi@@K?e@Bg@De@Fc@J]Jg@P[Fa@P_@Pe@Xi@^QLWPa@^g@d@WX]\\EDm@n@e@f@e@f@{@|@{@~@sAvAiAjAc@d@]^g@h@gClCcBfByAzAmApA[^MLiBpB}A~AqBzBoAnA_A`AcAfAwAxA{@~@w@v@q@p@u@l@u@j@{@p@w@j@}@p@a@ZQLm@d@_@XEBYT]X}@p@m@d@SLa@Zu@j@u@j@OJYRo@h@q@f@q@f@mBxAWRcBlAgAz@wB`BA?}@p@UPIF_@Xc@Zw@l@A@_Ap@_@XUPIFi@b@SPi@`@u@j@w@h@gAv@"
                     },
                     "start_location" : {
                        "lat" : 48.1594587,
                        "lng" : -53.9900753
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 517
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 126
                     },
                     "end_location" : {
                        "lat" : 48.2210714,
                        "lng" : -54.0524631
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWhite Hills Resource Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qgieH`~zhIJh@Lp@BHVx@JTVt@P`@`A~BFPXjAFRTlABJAPCNMZIb@@^@FFp@H`A@nAEt@CLGVSZWZeAnAKL"
                     },
                     "start_location" : {
                        "lat" : 48.221532,
                        "lng" : -54.04656850000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43 ft",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 48.2210074,
                        "lng" : -54.0526158
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eRestricted usage road\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "udieHzb|hI?@J\\"
                     },
                     "start_location" : {
                        "lat" : 48.2210714,
                        "lng" : -54.0524631
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "77.5 mi",
                        "value" : 124776
                     },
                     "duration" : {
                        "text" : "6 hours 22 mins",
                        "value" : 22918
                     },
                     "end_location" : {
                        "lat" : 48.9617436,
                        "lng" : -54.5926523
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "idieHzc|hI_@d@WZ[^]`@sA`Bs@z@[^i@l@OR]^m@r@IJuAbBUVGFoAlAIF_@ZuAjAEBaBhACBk@Vq@RC?_@HC?e@Fa@Dq@JSFIDUJMHi@`@c@j@CDi@v@iAzAq@t@YV_@Zk@^UJQHOD_AX}@Xk@NC@_@VQJc@Ze@h@[b@EHe@v@Up@Qr@WhAGXi@hCAHi@tCMp@Y|AADMn@Mp@Ox@YnACFWt@a@z@a@p@?@c@h@oAjAAB}@z@y@z@w@v@m@x@[t@Wv@GRWpAIl@Gb@ANQfBS|B]|DSnBk@fHAJUpBKf@SfAYhAK^k@~Aa@|@OXWb@k@`Ac@n@MNg@b@GDSLKDQH]Je@Fq@?E?s@?S?K@_@B[H}@d@C@aAh@SJsAx@YTEDu@h@{AzA]\\GFkAbAIDWLc@Na@BI@c@Dq@Da@Ei@Ac@@c@LODSHMHSLc@b@CDST[p@ABUn@_@zAEPI^Kj@]dAKVg@dAELSj@EJ]tA_@`BKl@Or@Sp@Sn@g@|@a@h@c@l@STo@|@EH[j@[z@Sv@Mz@AFEr@CN?d@A\\CbC?RIvD?`AAfAEpBAZCn@?DMxAa@`EE\\CZG~@ALCr@@nABvABp@@^@|@?p@APAZEx@CRCVO`AAJOr@WfAQhAIr@Gh@GbB?PCvAAR?`AE`AI|@CPGf@Q|@Sx@O`@M\\GLw@fB[`AS`AGb@Gj@?FKbBIbBKbAGp@EZO~@Mb@Oj@ITSn@m@dBWbAOx@Kr@Er@?D?t@?@@l@Dj@@LDZJn@Pn@DVThALn@DZDb@@NDb@DdA?J@fACnAGjBM|CAFGbBGrAOvDEvAAPQ~CUfFKrBCXEd@MdAOx@Qt@St@e@jAQ\\OZc@j@c@j@mAfAe@^a@\\y@t@c@d@sBfByAnAC@{ArA{ArA}@x@w@~@EDkAhBUd@_@t@m@~AGT]rAAJe@fC}@xFmA`IMp@[tBe@zCG\\y@lFANQzAALCnA@bC?@@|@B`B?fAEd@CXCXKr@Kp@YlB[xBETm@xDYbCA?Ct@APErBGlCAl@Cd@KdBCRMvAMbAQfBEd@y@fI?FCl@AZAt@D~ADb@Fr@@HHh@Lz@Hh@PhANnA?FHnAA|@AHEp@?BIl@ABQl@CHM^A@i@z@MHc@^i@T}@T_APQBQDa@FkB\\YFcANKBc@DWDI@c@BK@W@c@@E?aAHC?[JA@a@RC@[VOLMNY\\k@dAq@bBSh@A@[~@a@`AmApCMTo@nA_B~CqAjCk@`A_@h@WZYVa@VULSHg@TyAh@q@Ta@LiBn@_@LeBn@}@ZkA^q@TyAb@OFs@NA?mANs@DK?c@?e@As@CWEqAOSA_AImAIeBKqBOc@Cc@EC?eBMa@CeBKk@?e@?a@BK?k@FOBsEr@G@cBVa@F_@DmB\\OBcATa@PSLMF_@\\UTC@OT_@j@S^O^Ql@WbA?@YbBUrA]tBe@nCAFe@tCSnACTKr@?@IbAE`@C^ATKhBEzAAzBAt@AlA?\\At@AvA?RCt@Cz@K|@Gb@GZiAlG?@y@dEMn@Mp@]bB]dAYr@i@|@e@j@IDWRg@XA@i@RYHODaAVc@NSHIDUNC@[X?@[Zi@l@eAlAc@^GF[L[L_@FG@U@K?O?_@EWECAWIkAc@KEUIEA[GUCM?C?]@A?]FE@OD[JWNA@a@Tc@T]HA@_@Fc@?c@EE?]I_@Iy@QOEqBe@YIa@Ic@IWC{@KWAK?WAC?Y@[BWDWF]Ne@TEBi@Tm@Xa@LGBa@J{@No@FQBOBc@DG@m@@_@CUC_@Em@K_AI}AKMCk@Iq@Mk@UAAy@a@ICeAi@cDaBs@]qBcAcAg@aAg@a@Sa@SOGQIiAk@YOa@SAA]MAAa@OOEs@Wg@Q{Ak@EAa@OeA_@QG{@]WGUGMCg@K]G_@Es@GgAOy@KOCSEWIIC_@K{@]KEa@Oa@QWMg@Qg@IICYC]Eg@GSC{BQm@EYCeAIgAIgAIc@CIA}@IiAIcAKy@GMCuAUw@O_AQoBe@gBk@cA]UGmBq@ECoBo@aCw@c@Os@UiAa@KEo@WSI[Oe@Yg@_@UQOKuAoAUU]]EEm@m@c@i@W]y@iAw@eAa@k@aCcDe@m@k@{@wAoBcCgDW_@]e@mBkC[c@qAgBaAqAOUsAgBqAiB[a@[a@IMaB_Cw@eAYa@qAiBk@w@_AqAACk@w@KKSW_@_@WUMISOi@WCAi@Uk@OQEICa@Gq@EK?g@@_@@a@@wDPa@DU@M@UBc@H_@HOFMDWN]To@f@WTQRA@Y^IJOVEF[l@e@`AKP_@x@}A|Ck@z@IJ[\\A@SPWNSLUNg@Vq@P_@Ha@BY@C?_@?sEEwDE}@?qAAaGE_BE}@Em@GCAc@Ii@K[KiC{@c@McA]YKGAc@OiA_@]KYIKC]I_@Cc@?I@]DEB[HEBWL[VWVQTSZS`@GLITSl@GVGXOz@Mv@AFKh@AFMd@Ur@?BSb@Q\\QZQVs@n@YPGBYLa@PcAb@gCbAiBt@uBv@{Bx@E@qAb@_AJ_@DE@]Cc@CeAIgAKuAKyAKm@CE?o@HsA\\GBi@Tw@\\C@eClAmB|@{@X[JaANo@AI?YGME{@]oAo@MImBcAgAo@cAm@_@Uo@_@QIa@S_@UYMGCeBu@a@SWKk@YiAk@KGcAc@SKq@M[ImAKMCU@c@?]@i@Fa@FQB_Ej@C@gALaBTi@RWHq@`@}@|@qApAo@n@cBdBkAjAgAjAw@dA}AvBeAzAe@r@gAvAk@t@e@r@i@z@c@r@Yb@[b@}@tAi@|@Yd@g@v@s@~Ao@|AA?cA|DENK\\Wx@Q^cAzBABkArCq@lB?@c@jBoAjGk@dDETE\\Kp@UdBIt@Ir@Ir@Ir@OtAYvBWfBUdB?BKn@[nBIf@Mp@AFWpACFa@|ACHgA`DCFaAfCk@lAWh@g@~ASf@Sh@EJ[jASfAIbA?TAf@?L@n@DdABj@Dx@Bp@Dr@@B@p@?T?z@Gx@?BCZABMj@AFOd@?@Sj@CDg@pAKXGNk@tAwAlDkBvEuAjDUf@gBrECFk@tAA@o@vAMh@IZCRe@hCALCTC\\Ep@EtACfCEp@C\\CVK|@YdAELYr@S^?@e@d@UPOLc@R[Jc@HU?C?e@@w@CuB?i@?u@FIB{@Xe@XYNe@j@GFe@v@Yt@Qn@GRk@zBCJwAhGCJa@~AOn@ER[jAWfAENQx@S|@[rAOn@On@On@ERk@zBa@bBQh@Qn@k@pAaA`BmApBMLUVy@n@MFsAp@sAl@_@Ra@PGBm@\\KJGHURONKNi@x@{AzB{AbCs@jAmAnBEHuCtEaCzDYd@CDcBnCuAzBk@|@iBpCOTKJs@z@cAz@aAh@_@Tc@LaBh@{AV}B^_ANi@NKBq@^i@^i@f@KNY\\CBe@r@u@jBA@m@tAyAdDk@tAm@tA{@bCQh@?Be@bBU|ASvBEf@Gt@U|CAJUrCEb@KbAAJU~@IRM\\_@r@A?m@|@GD_@XIFWHWHm@FWBK?c@Ca@Aw@GOGa@SICwAw@a@[mBwAOKsA}@MGuAq@q@SIEo@IK?c@AeACe@Ac@?c@A_@?s@I}@U]S]W_@]USm@aAKUa@cAESWeAKaACO_@qEa@sEQ{BQuAMcAYeA]aAQ[IMOUOSg@e@CC_@UYOi@WeCiACA[[[]KIe@s@]m@Yg@aB{CmA{BUa@aB}CaB}CWg@kAwBo@kAuCiFq@mAS]k@w@o@i@c@UAA_@Kc@ISE{BAgAA{BASA}@Ew@IWGMEUG]Is@[SK_@UaAi@i@YWQa@U_Ao@_@UaAm@_Am@a@W_@WKGu@c@_@W_@Ua@W_@UcEgCYQiBeAg@WYMKEc@Iw@KAAgAIwE_@SA}CUkBOuCS[CsDWe@Di@HYLa@PgAz@w@~@SZyA|BMRq@bAs@t@KHk@`@s@\\e@NC@q@LO@gAHkBN{@Fo@BeBFi@Ec@EeAKgAMEAkD{@w@e@ECcCuA?AcB_AeDiBqAu@qAu@aBaAwCcBMGcDmBcB_AaAk@OKuDoBm@[UIWGo@Ka@AS?O?c@@{@JsANaBPG@kBLE@]Cc@C{@Ok@W_@OAA_Ao@?AeAiA_AgBQ[EK}AcDQ_@cB{CEGe@g@UQSOeAk@ICq@Uc@Iu@Ao@?{@HWFoDt@qD|@_@JcAZ_@Tc@VULm@h@WVKJi@l@CDu@fAEDw@pAeC`EyAbCm@bAEFq@hAYd@s@jAEFS\\Yb@g@v@mAnBe@z@U`@s@fA_@f@SXGFeAnAONwAvA_@^cDbDm@l@gClCcCbC{@z@uBrBAB]\\{@z@]\\yAxA]\\STIFwAzA{@z@oBpBcAbAsDrDuBvBA@wAxAwBxBuBxB}B~BWVmFpF{@z@{@|@URcAdAwAzAUVcAbA{@z@{@z@{@z@cAdAUR{@z@EFs@v@k@p@w@bAKPo@lAk@jACFKTKZg@tAGRc@|AELe@hB{@dDcAbEa@zAQl@qA~EELuAlFw@xCuB|H?@m@dBO\\Wh@CFg@x@c@h@OReBjBm@n@w@v@QJ]Xk@VYH[Hi@JWFo@BO@u@Be@Ge@G_@Ku@QgAk@}@m@m@o@WYGIQ[KQk@gAu@iBaDyHSg@mBwEISy@iBuAkDk@wAsBgFMYoDwIAC_A}BuAmD[w@}@qBk@mAkAoBCEiBoCU]sAwBkA}BQe@Wu@c@_B]eB[iCIw@ASGcBAg@Cy@EwECiBASGsAKmAQmAg@{CQkAoAaIi@_Dg@wCYcBo@oDo@gCs@_CkA}Cw@aBO]}BuDKOyAeCg@u@q@{@c@a@MMwAq@]SyB_@{AUg@IaAOwCc@}@KE?eB?]?oBV_@DC@sJfAcE`AkCl@q@N_CPc@DoCReAHwE^kBNqDXkBLc@DiKx@eAHoCRgAHqDXsDXoCTeAHsDXkBNmCRsDXgAHqDXc@DaIl@c@DS@yBVaIz@kBRmCZaAJE?gA?kB?Q?q@ZeBt@iAf@sArA_B`By@|@]^sCzCmBtBGD}@r@A?iAt@w@^o@VUFyAZyBTUBwBIgAW{@SmAi@e@Q}A_A_Ag@cAo@{@i@EC}@u@IIk@}@MS_@}@M[a@uBGs@CWCkCBs@@s@?yA?{ACe@AOIaAOgAOy@o@cCAEgC}FUi@w@iBc@}@u@}A]c@SQOO}@q@q@_@sAw@qBgAgE}BaAi@uAu@MGcCuAa@Ua@UaA_@QGm@Gm@Bq@JQHc@Tq@j@GJc@n@]v@St@AHUpAARMtBO|AEZOfAMz@]hAu@~A?@Y`@a@l@u@n@CB_Ah@cAVEBs@Hy@?}@MSCq@SE?g@Wu@e@AA_A{@U]k@_AEKa@{@c@uAKa@]{AACy@cDKYWq@Sc@o@wAUe@sAoCe@u@Yc@o@s@KI]YaAq@m@e@o@e@GEq@y@AA_@i@[s@[_AAEmAqDSe@CGYe@AAe@m@QO_@Y_@Sc@Oe@U[SSOu@m@o@s@Yc@SWe@qA]aA}@eCg@wAo@qAACw@{@GIUSa@a@{@m@o@c@q@a@_@Ua@Ua@W_@Qw@]mAYg@CiAGiBK]CE?kBIc@CA?_@KYGICk@[SQg@a@SY_@e@Se@Se@c@}AACYcBCMO{AGy@WyCUsCOuBc@qGMaBO}BGa@OmAEWYqAW_Au@mCI[GQsAoEIWc@{AOe@YqAC[Iq@IcBAIGsB?m@C_BI_BAWGy@[eBa@wAGSgAsDM_@_AyC_@kAUw@]sA?AMq@Ie@UyACYQoAImAGk@OqBGu@AO[{CGe@SgBUcBKu@a@cCk@kDG[m@mDUkAc@{B[cBOo@o@cDWuAw@gECKs@{Dk@{CKk@i@uCi@uCScAs@uDy@gEy@gEKk@Ou@Oq@{@eECISq@g@eA?AYa@]c@y@{@WYoC}BOO}@w@]]{AuAsBiBEG_@[{@y@{@y@aA_Ay@q@][GEu@u@Yc@S]CGSi@U_AKcAE_AEq@?CAu@Au@CcBCuBAuA@kA?w@@{A@O@kB@u@?QDiB@g@@u@F}CBy@FeDAs@Cu@?EIm@Ky@Mi@WcAMWi@qAoAuBYe@]m@k@gAkAuBWe@cB{CCE{AeBUQsAgAk@Yk@Y{@Oi@K[C_BOwBIgAEgAEI?}@CiBEkBEgACgACy@AuAGgACoCKa@AuDKyCKYAiBCqBEaAIiBKe@G}AUm@SoBm@}@[cA]MGwDwAGCa@Oa@OuAi@q@_@}@e@EA_Ao@o@_@QM_C_B}AgAAAcEiCUOiBkAcAcAu@w@uA{AmAkAe@w@OWa@qAm@yBK_@o@yBe@qASc@Wi@w@cAGGgAeAwAqAk@o@IKOWYa@k@qA{@qCc@yAe@}ASq@u@gCQm@u@mCKs@O{@UwBC[S}CUqD]qDCO]cBw@_C}@mBg@w@Ye@k@_A}@qAgA_ByBuCU[{@kAmBkCc@k@eC}C_AmAeBuBaA}@SSiAy@AA_@Qs@]o@Ya@Sw@]KEcAc@k@U{@Yc@OcAWs@A_ANs@VGDi@Xm@h@_@p@Uh@Sd@ABMp@A@Ox@KnAMxBKhBStDGvAE~@OfC?NKdCErBCvB?|@?tAAtD?BIhBEp@?DGp@?BOz@[lBo@pBAFg@xAIRMTe@`AILw@nAiAtAcArAS`@[j@g@rAMn@Mh@MrA?\\Ct@?R@zB?~B?TIrA?@MfAWfAYn@KVm@`Aw@t@[Rm@^yBz@o@VyAh@WJkAl@C@q@p@s@~@GNUh@MXW`AELOhAMjAOdBEn@Ch@S|A[xAe@nAQ^Wf@CDcAzA_BzAcAx@_@XOLOFgAj@]Dk@HeAGy@QEAw@_@y@u@MMy@_AIKkAuA[_@gAqAOOsCgDYWg@g@_Ay@qA_AGEcAs@m@w@s@gAYi@Ym@eAaBGE]Wm@YWGYEsAQcAGMAUE]Gg@OQGy@g@USa@_@y@{@w@}@{HeJu@{@IMmAqAOQi@m@sBeC[[}@w@GGy@a@WMmAWA?gA?M?y@Je@FmBl@YJcDlAoBp@YJaBf@iAVK@y@DiAEm@Q]KCAa@OgBq@cA_@kDqAa@Qu@YqAg@a@OiCaAiDsAYKICkDoAcA_@cA_@kDoAiC_AeA_@cA_@cA_@eA_@}@[g@Sa@Oa@QgBq@a@Oa@Oa@Oa@QaA]CAa@Oa@Qa@OcA_@]MiAe@cAa@eAa@cAUWGK?gA?c@Fi@JmCv@{@Vm@RwAZ{AFw@KYCsAg@_Bs@wAq@uE}BgDcB}Aw@yBgAII_@YiBwAqAgAy@s@aBsA_@YcA{@aFeEqA_Ag@]y@e@w@e@i@Ys@_@q@Wa@OGC_AOQCmACm@JWDm@VQF}@n@{@x@m@n@YZwDdEu@v@]^{B`CYRWTEBk@Zs@RG?m@DY?[AGAa@GMCy@WaA_@QGs@Yc@OqA_@SCYCm@@?@{@Nw@^SNURi@n@g@x@ELUj@EJo@jBY|@M`@e@`BQx@SdAIZWnAW`AIZe@vAITy@jBIRm@pAMZgA~BEJa@`AGTOf@Mj@Kp@Il@ATEt@?B?p@ARDlAFx@@BHt@?@Pt@X|@JRh@rAf@hADL\\`AXhA?@LhA@\\Bf@?L?bAKnACJKn@[pAa@v@MXIJq@`AiArAQNm@f@u@Xa@DUB}@EWIi@SaAm@aBsAyBcBYM_@SCCeAW_@AWAK?c@B[@{@Pm@ZC@q@h@KLo@p@ILc@p@MZQ^Wx@K`@[jBO~@Kr@Kp@c@xCKr@ETm@tDIh@Qx@GXW|@CD[z@MZUh@EHQ^_@n@k@bAS^CFm@`A]t@Sh@GNUz@SbAGt@ADGl@CTAfABfB@RHpBLdCNlCDf@LvAVxBD`@TzB@BFlACtAEn@CNKt@K\\I^GLWl@c@t@e@f@e@\\u@Zq@TYHqBl@a@HIBe@Bw@Cg@GIAcAUaAQq@Ek@@IBc@Hi@XURMHORSV_@n@Yh@mAzBeApBkBjDOZo@nAyBfEKRsAlCo@pAgAvByBhEk@fA[n@Yf@gAvBq@pAgAtB_B~CyBjEqAfCOXo@nAkBpDcCtEs@vAyBhE_@p@i@bA]r@m@`Ac@r@oDhF]d@{ClEEFqAjBuArBo@bAMTINy@~Ac@dAi@jAk@bBa@lAsAhFg@rBi@|Bg@pBQn@g@nBI`@a@~A]xA_@tAENSl@CFc@`Aq@fAk@z@SR[^o@`Am@fA_@x@]t@k@xAY~@wAlFc@~AeA|DK\\kAlEgA|DwAlFQn@Qn@kDpMCFs@nCs@lCc@~AQn@mDzMQn@c@|AmD|MuAlFwAlFc@`BkCxJwAlFs@nCg@hBKb@uAnFs@nCy@dDm@vBu@pCc@nAYv@o@nA[l@yAvBm@l@gAfAcC|BGF{ArAuAjAcBxA_@Z{BlB{ArA}ApA}@v@yChCuHrG}ArA{ApA{AtAwDjD{AtA{BpBA@uDdDsHzGOLkB~As@l@g@d@]Z_@\\]Z]ZAB{@r@_@Z]Z_@ZMJo@j@]Z_@X]ZYVEB{BnBy@r@aCnBkCjCIHiBxAIDsBdA_C`@_@AEA]@E?o@CQ?OAa@Ki@Ok@Q_As@QKMK_Am@?Aa@S_@U_@Y_Aq@QMi@m@EE[a@OK]JeAi@_Ag@k@[w@c@AAqAq@s@QGCYGYEIAU?MCCAUCUBE?OBA?IBOFYAGBUHMBUBM@QDOBQDQ@WBi@FE?o@KUGeAYoCmBOK_CcB}@y@o@k@qB}BOOkAmA}AuAk@c@_As@[We@Oa@Ma@OmA_@[CmCUKA{@IoAM}@Oc@GWEK?cB@oAFI@y@ECAk@O_B_@WGK?oCCE?cB@c@@gA@}AVKFa@Vw@~@IHOZw@bB_AdBQXkAjCm@nA]fBId@S|BCzC?DIdBAh@_@~Bw@zBKZeAnBw@|AYt@GNa@pBOtC?\\?pG?~E@dBB|H@HJrBP`BFr@Ft@@VFrAGjBCl@Qv@WdAm@zAg@p@QRgAfAeAfAuBrAw@d@qCjAQHs@V_C|@u@Z{M|FkF~BmF~BkEjBgChAgCfAeCfAeBv@cAb@a@PcAb@kElBiDxAKFw@ZoGhCsHzCkEfBiDtAgBr@eBr@iDvAiDtAqGhCcAb@[LiAd@gCdAa@Pa@PeBr@oChAoBx@ID{BlAOHm@h@i@b@aA~BK^_@pAMlBCbACfBCx@MnGAh@I`As@|Ig@bHEr@y@dLADKjBQ`DMhB_@lGEt@Ex@e@lEQbBa@rCQ|@_@`BoCnGiA`D{BjGi@xAg@vAgB~Eg@tA}BlGsApD_AfCWd@yBvDy@rAgBtCuDfGaBjCiFpI}C`FuBjDeDtFYd@yCbFaC|DkApBs@jAsDjGaDnFgCpEGLi@vA{@|ByBvGa@nAEJ}@dCi@xA{BjG}@dC}@dC{BjGgB|Ew@vBGLgBlDeAbBwBdD{A`CwDbGiBrCoAnBmAnBu@hAgBrCoAnBYd@u@hAcCxDcCxDYb@oApBmAlBaHxKYb@qEhHwDdGcCxDcCxDcCxDcCxDiAhBiC|DYb@[b@cCvDu@hAoAlBMPyA|AMJmBxAQHeCjAeBv@eCjAkEpBiEpBuB`AuB`AgChAeChAgCjAsJlEsCpASFiBf@IBiDOeDg@uBV_@DsB|AqAhBeDpEmBjCABkAhCK\\cA~DEPw@jBa@^{AtAIHQVmAzA{AxCk@rBwEvPUx@w@|B]bA{@fBYl@aCbDsBnCkBdCqAtCmAtEs@tCsBrIaAbEaB`HaAbEqApFoAdFWx@Sl@g@xAgBxEABqBrEq@|AyB~FCDoAzFc@zFG|@S~Ac@hDq@`CQl@Uv@yCvEg@x@oDdFcDtEsCbEoBtDWf@i@vA_AbC{@zBgEpKuCpHk@vAk@vAkF~Mk@vA_AbCwAlDi@vA{@vBeA`BQN_@Ze@`@mEhBUVwAvA?@eBxC_C`EcGfKQb@yAjDO`@_ArCkAvDaBdFmAzDKn@a@fCM`CAPGbDQdIEbCClCAt@KjNOzOCzB?l@IxGEpCQfKKzB[zBm@vBQj@m@fCO~@EVIhB?^?t@?d@Z`Dd@fDJr@`@zCFb@RxB@HJ`BTzCTjBFb@PbAX`Bn@tCXvATz@rAnFvBpI@Dl@xCTzAPtANbAJr@d@xCVbBh@rEVpBL`BHfALlD@nABlCHhA@VX|B@Fb@|ADPl@|BHZBTJr@Jr@Jr@f@dE?JLhB@RAxA?DBbCBXFr@BVHX\\xAh@bBb@|ADJ`@`C`@jB^`BDVzAvGZvANp@@B~@zB?@r@dBLZRl@Xz@VrALp@?@JxB@tC@t@?@JhBDn@RlBP|Ap@xEz@`G\\~BHpAL`BAlB?FOjBEp@m@pBOVo@pA]^[\\SR{Ax@u@X_Bh@GDoAr@ORy@`As@jA_@n@Q\\m@rAcAzBaAdC_AbCUn@Sf@}@dCqArDsApDSj@i@xAABuDpKqArDg@xAeDdJi@vAgB~EyDpK{BjG}@fCg@tAA@qArD{BlGSj@oCxHcDfJ}@dCqArDgB~EoCzH}@dCqArDSj@qArDm@`BqAdDc@dAwA~BGHkE`E_@\\qGbGoDzE_BhCwDdGYd@}C~EuDfGoAnBcEvGMNiEfFqBbCsBbCqB`CsBbCw@`AiEfFqBbC]^aGfHo@v@sEnFiC|CcAz@_@Z_@ZaEdCeEdCaAl@eHhEa@TgIzEeDnBu@b@gAbAqAlA_BjBeAnAMTaB~CYl@aB|EOb@kCnJ}DjPOn@wFxUeEfQ_@`Ba@~A_@`BsArFaBbHuDtOOp@qApFcAbEaA`EaBbHcBbH]xASv@s@tCa@`Bm@fCm@hCEPg@tBm@hCk@dCA@]~AOh@a@fBK^m@hCS~@YhAGVe@nBYpAQn@o@nCq@tCi@zBe@vBqArFOp@On@_AbEq@vCCJa@~AOp@cBbHOn@q@pCOn@qArFQn@_@`BYfAgAzEq@rCOn@aAhEKj@Mp@G\\e@vDSbBYhCMfAQhBIr@It@]|C]zCi@vEGn@Ir@]|CShBIt@Ir@[|CSjBIr@It@SfBSlB]xC}@xHIt@MbAEb@[~CGp@E^CRIr@CPWT]Ca@SgCmAsAx@iAr@ST"
                     },
                     "start_location" : {
                        "lat" : 48.2210074,
                        "lng" : -54.0526158
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 mi",
                        "value" : 896
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 200
                     },
                     "end_location" : {
                        "lat" : 48.9612512,
                        "lng" : -54.6004063
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{yyiH`selIM^Gl@AVCz@ItDA\\GbB?HCn@I|@Iv@Kl@?@Md@MZQVSPULSFk@NYFk@JUHQTKRMb@E`@@p@Dt@D\\HfABb@Ft@B`@@RFt@?BDp@Dh@BFBDTBH?b@?b@?b@?fAA`@?tB?RDNLD\\"
                     },
                     "start_location" : {
                        "lat" : 48.9617436,
                        "lng" : -54.5926523
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "16.6 mi",
                        "value" : 26762
                     },
                     "duration" : {
                        "text" : "1 hour 17 mins",
                        "value" : 4636
                     },
                     "end_location" : {
                        "lat" : 48.9973521,
                        "lng" : -54.8964507
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yvyiHpcglIwAxMy@zHy@|Ho@fGSfBQhBShBShBG~@CPKr@Gf@M~@It@Ir@oAdLyAvMShBIr@It@Ir@QbBADALE\\Ir@ShBIr@Ir@It@[|C{@zH{@zHo@dGg@rEIr@]|C]|Cy@zHIt@SfBIt@ShB_@hDSfBg@rEe@pE]|C]|Ce@nEABg@pEIr@g@pEgAnJgAnJg@pEg@pE]|CKr@It@g@pE_AfIEf@mAdL]|C_ClTQhBSfB]|Ce@rEg@pEwAzMIr@UfBUfBAFcA~EGNc@|Aq@|B[x@gB|EuApDi@xA{BdGc@bB[dAo@pDY|DAnA?vC?JPhE\\rBTpAj@pBn@zBZ|@x@hClAvD\\bAt@lBHPjAfBRVtAbBx@`AnA|At@~@B@nAbANHbBdA`A\\~Aj@FB|E~BnBhAbFzCrAdAbAfA@Bp@lAf@|@lAnDFXx@rDR|BPpB@n@DbDNdJ?lAB|CIrB?N_@fCUp@]hAIL[b@Yb@CBsAx@mC~AeDjBA@m@l@IL[b@KNKV]`A_@nBIdAGr@CRWpHG~A@L@t@Bt@Ht@Dd@DLLn@Lh@BFt@jCFRVxA@l@DpAB|DBlBBbD@RD`@BZFTNp@?Bt@hC@DThABTFr@BVAvBOlBYvBa@zCKr@UfBeAvHy@`G_@tCE|@GfA?b@?zAVzCRhBHr@f@rEHr@d@pEp@fGHl@p@xCj@tABHVVp@r@jBtA|@h@|@j@B@~AhARLHN~AnChAhCzAhDzBfFt@nB`@fA`@jB@HLdBAz@ExAAP_@jH?nA?r@?@PhB@Jp@zF`@pDHfCADGjBARa@nBm@lBkD`LsBtGSl@w@jCsBtGeC`IQp@e@jBg@vDG`AU`DEjBK`D@nB@bD?z@?v@@dD@xE?t@?v@@bD?^LnDH|@VbCVhA\\bBJf@DFvAtCnAfCVf@Vh@d@~@dAzBn@nAVh@fAxBPZt@`D@Db@jEDZB|D@p@Gz@WfDKj@_@~BITw@~BEDoB`CaAr@s@d@wGhDeCpAo@ZQLoAbAMLuAdBq@jA}@xA}AhCmApBeBvCmApBgBxCYd@s@jAcE~Gs@hBO\\CNg@vCMv@[vF?PFpEVnBPxAlArDFLrCnFlA~BP`@t@fBPpAL~@@h@@jB?@Y~CATC^MjBCf@?bA?fB?D\\tBj@bC@@Nl@`@~Ab@hD?vA?PUlCWvAe@fCW|@Ql@Qn@Sl@Qn@u@lC_ChIiAzDyAjF{AjFu@lCSn@i@jBWrAKb@[jDAnB?x@?hB?pG?v@?t@?pG@tL?~J?\\ZjDv@bDNf@z@rCd@`BDf@VxC@D`@bIDv@HjBVvEJjBN`D\\lGN`DPbDl@nLJjBJjBN`DDt@JjBNbDXbFJ|AH~@Z|BDR^`B@DdAbCXxAHd@H`AJtAQvD}@tC}AdBSDyAZiBFQ@kA@mAPqAv@{@jAo@~AIh@Kr@G`@GlCDf@F`AZtA@@Nl@b@~APl@Rl@Rl@x@hCd@zARl@lAvDlAvDf@zARp@t@fCbCjINl@XvAJjCExAEdAe@dBKVc@|@oAz@?@aAj@a@V[\\_@`@q@fA_@j@[xAId@]jDC`@_@vBKd@_AbBUNs@b@sAb@A@wABs@E{@EK?c@@S@qAXC@_@X_@XGDo@z@[`@mAlAOD_@Rg@RaABY?oAYGCaAs@oAg@MA}AWo@AkACkBEc@Ac@?mCGc@AkACgBHq@BUBoCVqD\\oCVmCVc@DkBPeAJgAJkBPc@Da@Do@FeAJoCVWByCZ{@HI@y@Rc@Ha@JKByAt@q@\\kAdAa@x@c@~@Wx@Oh@EXEXKbAC`AGlBQnGCv@MxEYpKIlFMhIMfIAt@Ct@K~GAh@EbDEjBElBGjBAv@SfIAt@SfIe@lSIbD_@`PEvBI`BIjBEv@c@rBc@t@a@fAGNK\\e@vAMt@YdBENIb@]`B"
                     },
                     "start_location" : {
                        "lat" : 48.9612512,
                        "lng" : -54.6004063
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "174 ft",
                        "value" : 53
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 48.9978112,
                        "lng" : -54.89625239999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSalmon Pond Resource Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mx`jHx}`nI{Ag@"
                     },
                     "start_location" : {
                        "lat" : 48.9973521,
                        "lng" : -54.8964507
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "35.3 mi",
                        "value" : 56758
                     },
                     "duration" : {
                        "text" : "2 hours 44 mins",
                        "value" : 9846
                     },
                     "end_location" : {
                        "lat" : 49.0095411,
                        "lng" : -55.49403090000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i{`jHp|`nIOl@OTSt@CJI\\Kt@OJW?UBQZQZKNMTWf@Wf@q@nAq@nAkAvBgAtB{BdEYf@cAlBEFaB~CcB|CS^oA~BWf@y@zAOXq@nA_@r@[d@QTIHSTONo@b@CDeAb@sAZMDeAV[H_AXKFk@Xs@j@q@x@a@l@KNc@bASd@s@rBKV}@dCg@xA_AdC}@dCqArDO`@CJ}BjGeB~EMZcC|GoCxH[x@i@xAQX[l@U^g@r@gArAqBdCEDs@z@mCfDw@|@sBfCoCdDIHSRq@l@oAj@QHyBz@]Re@TYZs@t@EHcAbB_@v@uBnEaApBqBhEeA|BUf@}AdDS`@i@~@ON]^CDw@j@c@X{@f@gBfAq@l@g@l@Y`@U^CDk@nAe@|AOt@Mh@{@nEIf@{@tECJ}@vC_@~@kBzEe@lAo@`BwCpHUj@_B`EKVk@vA_AbCk@vAO^{C|HuAnDSh@aAdCkBzEkBzEUj@[v@y@tBaAbCuAnDk@vA_A`CuAnDwAnDSj@EJUt@IZI\\a@xA[`Bs@nDi@vCk@vCI`@o@dDcB~IgAzF_CbM_@hBY~AShA]`BIZQv@_@tASp@K\\s@pBQb@Uh@GN{@fB[j@gAvBWh@kA|BUb@wBjEs@vAeArBwBjEQ\\eBjD_BbDILyGvMo@pA{@bBKTWf@MVw@dBk@vASl@e@vAmAxEu@nD{AhHkAvF{AhH{AhHm@tC]bB{@dEeA|EGX{@fEOn@m@tCm@tCw@vDCL}@dEMp@_@bBq@dDI^_AdEI`@W|@]fA_@|@Uj@o@~AQ`@}AdD}AdDm@rA}AdD}AfDeA|Ba@~@sAtBIFw@n@s@VY?gADcAUkAk@YOeBy@a@So@OUEc@GMCS?q@AU@c@Ba@BA?kBTmCZqDb@c@FcHx@]Da@Fc@FmC\\I@{@VQDs@Xk@VyAr@a@RaBdA_Al@c@XaGvDaBbAaAn@aBbA_BdAaAl@aCzAiC`ByClBaAl@aBdAA@]T_@TaAl@aAn@aDpBo@`@sBpAy@f@g@ZiC`By@h@_Al@q@`@q@`@aBbA]TaAn@gC`B[RaBbA{@h@EBaDrBoAv@sAx@YP{@`@MDq@RSDc@JeALQ@QBgAJqBP]BiBLc@Bm@DYDc@Do@Hu@PC@w@b@{@t@IJuAdBOR_BtBkBfC[h@GHw@dBu@~AsDdIWv@CDMr@Gj@Kv@Cf@?HKzC?FGdDEjBGdDCnACrAO`GCdACt@Kr@Ir@YjAGTWl@e@r@kAdA?@}BjB_@ZyDbD_@Xa@\\y@x@yAxAs@r@GHqBdCKLm@p@[`@qB|BA@oCdDeFdGA@w@~@wA~ACBYV_@\\{BnB]ZsDvD_@^oDtDiBhBk@l@sDrDEDqCnCgChC{DbDIFqDxC}@t@YVEBe@^e@b@ONY^[f@Wb@s@tAc@dAq@vAa@z@c@~@}BfF{AfD{AhDqBrEsBpEc@dA}B~EQXo@z@k@j@gAfAONk@l@e@f@m@z@A@Wf@KRq@lBQp@GVYhASl@CF[~@sAhCu@xAcBjDMTc@~@c@x@S`@w@tA?@u@fAs@fAC@i@z@s@hAa@t@m@hA]v@[`AU~@A@WlAo@lDAHS|AE`@GnAAn@ElCAtBEdA?BSdBcA|FCJId@I`@k@jBA@Uf@cA~B{AfDWh@IPw@nBADSd@GPg@dAeAvBaAtBo@|AsA~Cg@jAA@e@jAk@bBSl@iBvGQl@Qn@Qn@g@fBa@tAiAzDgA|DiAzDcBbGc@~BGXc@tDKbAsArKu@fGiAlJ_@|CUfBg@~D]xBKl@Up@}@rCOb@oAvDg@xAaBdFwBpGiC`IcBbFeEjM[z@k@`COl@m@tEYpE?Bi@hNMbDIlBCt@MbDCt@SdFAh@?lBAp@LbFJ`I@fDB`DCx@MnEC`AQxEIlBI|B[dEGt@i@vCk@dDmCjMCXSpB?l@@t@@fABd@NbDBd@@NHjB`@dIb@dIHjBJlB\\lGp@hNf@xJ?dCVnDZvBPpABTVfBTfBHt@JdAJjB?d@@n@EpDAn@AlB@pC?RDbAL|ABZ`@vDZ|CHt@j@xFBLb@`CXbALb@`@j@|D|FhBjCp@tALVFRT~@Bb@Hz@LrBH`BJlAN`APz@Pp@Nl@b@~Ap@bCTx@b@~AhB~GPn@dA|DzBnIb@~Ar@nCj@tBdA~DDPn@|BPl@J^V~@f@lBJ`@b@|Ab@~Al@xBfAbEz@~CPn@Nh@@DPn@dA~DPn@`@|ABFNf@Pn@z@|C~@nDFXx@lCHPVr@p@hAv@~@Z^HHlArAz@~@FFRXd@p@d@`ABHNb@Rn@f@fBd@nBDV|@|DBDn@pCx@jDVfAt@`DrAzFj@zBVfAFXp@rCFZFRl@fCBHNn@?@ZdAHTTj@n@jAZf@\\h@bB~BDHXd@|@rAPZr@hAd@t@~AbCRZDFpAjB@DnAbBZ`@v@dAX`@v@fADDR`@Tf@@@`@`At@`CJ\\d@bBt@fCFTr@fC\\nANh@Rt@J^TbANdARbBTnAZhAJXPl@BD~@zBh@pArBvE^z@`@dAl@tAZx@~BnFTl@vAlDVh@bA~BbA`CTh@Zt@d@jAVh@Tj@DHL`@\\bAFVRt@Hd@X~ADRXdBFVn@pDl@|CJj@`@dCRdAJl@`@vAf@pAFN`@~@n@lAJVRj@\\lAPdABNVpBP`BNvA?@R|A@FNp@BHZ`A^v@l@r@JL\\\\XXn@p@LRPTRj@Nh@RjABFp@bEJr@f@xCr@jERrAFP\\vATt@X|@L\\bBbFpAtDz@fCRl@Nf@j@nA\\p@\\p@p@z@NPf@p@l@v@b@r@NTv@~A@@tEtJfAxBZn@R`@dA|Bv@bBz@jBjCxFr@xAP`@Vj@nExJzAhDl@rAl@rATh@N\\`A~AnArBRVp@`Az@jAZb@fAjCN^Tl@Zz@z@fD@FxAdIFZvAzHJd@d@zBPx@DJPl@d@|A?@|@dCnCxHN`@bAnCh@xAb@jAbArCv@tBlBnFx@zBpApDXv@v@|BPf@~@jCRj@v@xBZx@|@dCTj@v@zBn@bB|@`CVl@v@tBt@bBDJP\\j@jA|@`B`AfBl@bA^j@x@nA~AxBf@n@j@t@h@j@VZ~@`AJJdAjA^`@fAfAlAnAx@x@`EjEl@n@z@z@vBxB`AdATTz@|@vBvBz@|@\\\\hAjAhBjBrDtDJLPNZX@@^VD@ZNTJf@JF@h@Jz@Xb@RPHNH^VD@n@r@^l@DHP^N\\HRT|@HXBVLp@HtA?V@t@?BAp@?b@GbAOv@Ox@WnAOp@}@dES`Ag@bCo@tCOn@]bBOp@m@rCWjAShAKp@Iv@OrAEjACf@CzB@lB@~@DbBHbDLpGFxB@h@NpGJxEN|GB~ABdAN~CFh@NjBHr@\\xCZhBLp@t@`Dz@vC\\`At@tB\\z@fBrEn@~AjD|I~AbEJVtAnDj@vAtAnDrAhDl@zAjBzE~@bC\\z@v@rBtAnDTj@jD`JRh@jBzEj@vAFNlCbHtApDvCpHtCrH`CfG~@`C`AbClFbNx@tBp@bBtCrHTj@tCrHjBzEtAnDjBxE`AbCtAnD~@bCjBzEjBzEjBzEz@xBn@`BRj@lJjVh@vAtAnD`CfGRj@jBzEjBzEhBzEbAjChBrE~@bCj@vAjBxEtAnDtAnDj@vAjBxETj@h@vAtAnD`AbC~@bCjBxEvAnD~@bCTj@Zv@N\\Th@n@rAZt@jBzBrB~B\\^fF~FtB~BhF~FrB~BxBbCVZtB~Bx@~@x@~@\\^rB~Bz@~@~AhBlArAvA~AvA~AtB~BrB~B|@`AVb@`@n@h@jAb@vAX~@H\\n@rCtA|FN|ABVBtABf@InC_@`EW~Cs@~Hy@rJs@~Hi@hGW~CObBAFUzDG~D?Z@ZLrE?Dp@zF@HXdBVfBz@`GfAtHd@zCb@xCVfBz@`GhAtHVfBz@`GJp@fAtHz@bGJp@|@bGz@`Gn@lEVfBb@xCz@`Gp@nErAhJVdBVhBJt@Lx@ZrBvBdOn@lE`@nCN|@b@zCJp@n@nEp@lEn@lEp@lEJx@jApFDTHZfBzIzAjHp@fDTpAJr@DVTdCh@jGZnDLxARhBHbAHb@Lj@@DTj@BJl@|@\\^XZBBtBzBvBzBx@|@xAzA\\^LLbAnA~@tAR\\j@`At@|ANZDLTj@`@`AtAlEJXFTfC`KNn@`AtDb@lB^`BFVPjA`A~F\\rBd@hC|BdMJj@@DtAnHv@hEVtAXvB@r@@p@IdB_@`BCH_@p@SX_@d@_A\\EB]HcAZ}@Xa@Jc@LeAXgBd@kCr@a@Jc@LODm@Nm@Tg@^a@f@Up@ADOn@CFGj@C\\AV?d@?NBv@Lp@@FLf@BNVl@PTNVn@n@TVVV"
                     },
                     "start_location" : {
                        "lat" : 48.9978112,
                        "lng" : -54.89625239999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "446 ft",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 49.0105817,
                        "lng" : -55.4950201
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCannings Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sdcjHttuqIeExDIJ"
                     },
                     "start_location" : {
                        "lat" : 49.0095411,
                        "lng" : -55.49403090000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 mi",
                        "value" : 2634
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 463
                     },
                     "end_location" : {
                        "lat" : 48.99667540000001,
                        "lng" : -55.5234256
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eExploits Valley and Beothuk Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ckcjHzzuqIl@lBf@zA^hAHTRl@Pl@Rl@Rl@Pn@`BdFx@jC@Dv@bCPl@lAvDx@jCRl@@Dx@`Cz@jCVv@P`@Rj@`AbCh@vA~@bCvArDlC~G^bAZx@`@hAh@xATl@|AlEFPf@zARj@lAvDjC~HHVpCvIx@hCnAvDlAvDX~@JZn@rBd@vB@BXdBDVj@jBr@~AX^Z`@Z`@rAlAHDdAd@^FZFj@FdAN"
                     },
                     "start_location" : {
                        "lat" : 49.0105817,
                        "lng" : -55.4950201
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.0 mi",
                        "value" : 12800
                     },
                     "duration" : {
                        "text" : "42 mins",
                        "value" : 2529
                     },
                     "end_location" : {
                        "lat" : 48.9470861,
                        "lng" : -55.6695592
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "gt`jHll{qIVh@vAlD`A`CTh@vAlDvAjDTh@dCbGv@lBv@fBdA|BJTrA~C`@nAd@|ABFr@bCd@|APl@Rl@hAzDJ\\X~@d@|APl@v@jCd@|Ad@|A~@`DZfA^vABF^~A?@Jr@Hj@?FBt@Bh@AbA?BIn@G`@[z@GPMVg@`Ac@r@Yd@s@hAUf@Uj@IPMTYf@Yd@Wf@Yd@Wd@U\\?d@Ld@L`@DJCf@Cb@@PBt@@r@?@Ft@JjBDt@Dt@HvAV|BPl@Rp@h@tATh@lBxETj@Tj@b@fAl@xARd@@Bl@x@v@t@NL\\Z^XTRp@~@HRVj@@BNh@Jd@N~@BTJ|ABbB@t@?@BxE@lB@jBBzE@lB@t@@bD@lB@t@?b@@RBvAFhA@TD^Ht@@Nd@`EHr@HrA@VDhA?xA?RM~BIbAc@zECl@Cd@A|AB^Dt@Bf@V~BLh@Np@d@zATh@x@rBFLRl@HTHVRv@P~A@FBl@HbCLbEJ`D?BNfBB^ZzBDZDVb@|BHVb@|AFRv@nBZx@N\\h@vATj@HTTp@VbAJ\\H\\BRXdBJr@Lr@TzAn@|C@FfAlCNRZ`@v@bAZb@v@bAfDnEnBhClBjCZ`@X\\@BdDpEv@dArAhB^h@hAhBTh@n@tAnA~CBLt@lCPj@l@vCLp@Np@j@tCNp@Lp@Np@z@dENv@Lj@TbAn@`B`@v@b@z@tAlCxBfExBhE`B~CxBhExBfE|@dBJP`B~ChAvB`B~CZl@Nf@d@|ABDj@jCHt@ZdCFlAHvAEbF?HGlBGhBDnB@b@LdAPpA|@~BJR~B`E|B`Er@lAXd@jAtBdBxCbBzCr@lAjArBjArBvChF|B`EdBzCdBxC|BbEp@lApDnGdBxCVf@j@`Ax@xAbBzCjEvHjArB|CrFdBxCVf@r@lA|B`Ev@rA~@vB?@Ln@VjAT`C@F?n@?t@At@?dDAjBApG?dDAxE?t@Av@?t@?bDAv@?t@?@@r@Bv@?BFfB?@Fr@@XFt@JhAF^Jr@DZTfA\\`BNp@Np@Lp@n@xC^dB\\bBLn@Np@\\bBNp@\\`B~@dE~@bE~@dE^`BfAxFDRF\\XdBZdB?DX~AJn@BLZbB@JJd@^bBBN\\lAJZFPRl@HXn@hAp@hALXZt@|@`C|@lCJ`@Pn@Pn@DPRpADn@?D?`@Aj@?JIzBEd@El@CD[xAAB"
                     },
                     "start_location" : {
                        "lat" : 48.99667540000001,
                        "lng" : -55.5234256
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 mi",
                        "value" : 917
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 205
                     },
                     "end_location" : {
                        "lat" : 48.94644210000001,
                        "lng" : -55.6808907
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i~viHv}wrILp@HVr@`@z@f@BB^TB@NT@NBX@pA@f@?LAv@?ZA`@Cl@@pA?^@V@t@@RB`@BVB\\BXNhA?BJ|@@l@Bp@?B?t@?JEh@ABKZU^ITKZOr@APIn@GhACh@In@AHOl@Il@O|AAHEd@?NAVBj@Df@Ft@J|@@RHnA?PBp@?B"
                     },
                     "start_location" : {
                        "lat" : 48.9470861,
                        "lng" : -55.6695592
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 693
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 153
                     },
                     "end_location" : {
                        "lat" : 48.9451981,
                        "lng" : -55.690085
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gzviHpdzrIBLJnAHfB?N@`B?rABzA?PBzA?BHnA^bDBNHr@Fj@DtALbBXtABJHd@H`@VfAHx@Dh@Fr@NjBHr@?@LdBABCRCJ"
                     },
                     "start_location" : {
                        "lat" : 48.94644210000001,
                        "lng" : -55.6808907
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "88.5 mi",
                        "value" : 142458
                     },
                     "duration" : {
                        "text" : "7 hours 2 mins",
                        "value" : 25307
                     },
                     "end_location" : {
                        "lat" : 49.1925091,
                        "lng" : -57.29468749999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "orviH~}{rICL?LBXDn@Fz@Dt@Dr@Ft@HlAV~D\\vFLbBz@xM@Hl@vJF`AZhE^|FFdAn@rJLnBDt@f@`IBVA\\PtCXhELjBR`DLhBDt@`@lGLjBLhBXvEFt@Dt@R~CFt@LjBJjB@HP~DBdA@fAEvDc@bFGh@I~@e@rEShB[|CcApJe@rEw@zHy@zHm@hGoCvWaApJ[|Ce@pE_BtOIn@QhBo@fGIr@It@[|C_BnOQhBe@pE]|C[~CIr@[|CIt@Ir@[|Ci@bFw@zHShBGt@y@xHW`DMvAWvFGxFDvB@lB@LH|ATjDN~AHr@PhBXvCJz@Hr@Jr@x@bHJjAj@hGFd@HbAPhBNhBHt@X~CV|Cd@rEd@rEZ|Cd@rErAzMJr@Jp@BNN^Rl@@DTj@Nj@Rl@Pn@P`AF\\DTJr@Lp@NfAD^b@rED\\LjAn@fGBVJpAFd@HzB@PJfEHbDHbDFjBDlBBt@@t@?hACxACz@En@IlBIzAGdA_@jGS`DC^EjAAf@AzB?HFxC?BDp@Dt@JbBF|@Ft@PrBN~AFt@Z|CXzCl@jGl@hGd@pEPdBDx@HnABrA@d@BdF?D?jB?v@?tL?t@?zE?jB?v@?xC?HCzECfIAxEAbDAzEAbD?PQxYAnBCv@Gr@CXSjAAHe@tAW`@QXc@l@kCjD[`@a@z@g@fAOf@Qj@a@dBc@zC_@|DCRgAdLUzBStAADOh@Qx@S`@]z@OXm@pAQ\\_AvBGRSl@Ob@a@~AO|@Mp@CH[zCg@hEmBbQg@pEg@pEq@fG?BWvCCx@Ct@A\\GdCAf@CzBIpGEbDAt@ExEM~JIpGCjBClB?`@?REnCEbDGzEGpGInGGzEInGK~JAt@EzC?FIpGAt@CbDGzEA`@BbBFrALhBDb@ZpDPhB`@rEPjBh@hGJhAL~ABj@DbAFxB@pA@pAApA?rAIdCCd@UfDG~@k@`Io@`JCjAA^?TBjBJlBB`@V~CJfA`@tEDh@N|CBdABtAAVIvBGf@Kr@Gb@cDzMEXKr@e@xCKp@MjBInACtEDvAFlBDjB@TDpD?RCjB?`@CR]tDE\\m@vF[pGCbAEjBAZ@hCBjB?v@?RNvDNvBPpCLbARfB\\|CLbAZlCRhBZjCBNLtALjAj@xJD|@RxCDf@J`AD^PfA?@Np@VhApArELl@j@|BBTPfAJz@@V@\\@bA?xA?\\IzCEtBMnGCp@@~A@PBhAHbAPfALn@DNZpA^tAZpAPnAFr@@V@\\Bt@CxAIfAABOjA_@|BADs@bEId@]pBKd@YrAKVOb@e@~@QV]f@W\\q@`A_CbDu@jAKROZ]dAW|@SdAKv@AHGh@C\\GfAAlAAjA@N@t@?@FfAB`@Hx@P|AJx@Jt@@LDd@Hv@B`A@f@?X@v@?ZAtC?LIxEAr@QtHARUtHAPSdI?@QxFIpBANGnACXMdAQrA?B[hBMl@]pBe@hCi@vC[dBa@vBUpA[bBMp@Kj@i@tCAFMr@]pBSxACJQpAGz@KrACdBAnC?^?T?~FAbHArC?fA?rB?n@?~CAz@AjB?VGdAMtAStACP_@~A_@pAi@tACDo@dAMTe@r@q@~@]l@SX_@|@]x@[~@Sr@Md@Uv@K^e@nAm@rAkAbC_@t@q@nAu@tAS^aB`DAD_BvCoA~BS^aB~CKTmBpDgArBABYf@o@nAq@nAABm@nA[`AIVOj@YnASjAIp@In@SlBGh@OtBKpACVe@dFe@xFQlBs@zH[lDWnCc@rEEf@YlDo@pH]~CO|@Ib@_@zAGP_@z@g@|@S\\u@jA]l@m@bA]p@i@`AELcAzBA@k@tAgAnCuAnDy@tBa@`AgBtE_@hAO`@Wx@CLOfAIdAA@AzABdB?TDlC?VDhCAXAnACZEl@ShAM^M^]bAS\\[b@EHs@z@mBxAMJ_Ap@_@\\]ZMJm@~@k@jACDu@nBe@nBe@dBMh@c@|AkAnE[nAqA|E_ClJs@nCYfAg@bBGN]z@k@dAi@|@EFi@bAa@~@Kf@GRKd@Ih@YdBUvA]rBKr@AFo@dFu@dFmChRYdBg@xCKp@i@zDObA{BvM[fBYbBYdBYfBYdBy@lFOdAShBaAxHAHIf@UzAAJg@vCId@Q~@CNOn@Uv@]x@Q`@Ub@SVKNIHSVIFYXCB[Vc@VA@YN_@LGBQFYFYDE@U@G?SBO?G?_@E_@Ai@E]CK?o@Ii@Ac@Ai@?G?Y@E?]@kBPoCVqD\\C?_@DgAJgAJ{D\\YD{BTQBo@DaAJ{ALm@FG@e@Hs@Ni@RCBa@RWPUNMJKH[XSRUVORQVCBW`@GHO^Wj@Ob@CDQ`@Qd@O^iA`D]~@}@hC}@dCi@xAi@vAi@zASh@Sl@sApDSj@GN_BnEaAlCyBbG_AdCoCzHYx@c@jAcArCq@jBYx@g@tAa@lAY~@ELYlAABOp@EROx@ETGl@Kz@?DK|@Ed@QhBGh@i@tGQhBW~CUlCQ|Bk@hHKjAMvAKbAABq@dGe@rEYdCY~BqAbLs@fG?@y@xHIr@k@fFE^}@zHs@dGMdAWfC?DS`AM\\IT_@lA_@`AENe@hAELq@hBs@dBCJi@vAW`AI^Kd@QlASpC?J[bGMdCMfCWvEi@zJUlE?Hc@bIO`DSrDCd@Et@AHWzFAFQ~CKvBIbBIvAO~CATE~@Ej@SxDU`EIjBCl@MrBOxCKrBEt@Cd@GdAKtAM`CIzAKzBOrCMjCAd@KjBCp@KpBEt@]nGIhB]lGOvCE`AKjBa@bIEt@ATUbEU~DKbCAHOjC?JMvCAJEvBCbC?R?lB@xDDvABv@DjBBt@?DJdBFbAXpDLhAPzABLb@`DV~AJl@l@vCbAxEPtAh@rDHnDDxD@vB?pE?bD?bD?zE?bD?zE?hI?t@?hI?fI?pE@lD?bD@dD?bD@bD?t@?dD@xE?dD@|BIpCc@xCq@bDQ\\Uh@gAzBCH_ArBWh@sBrEwDnIm@rAwDnIeA|Bm@rA{AfD_@x@gBrFm@jBkAvDEJgBnDe@p@kA~AGF}@v@_BtAyCbC}BjBwIhH}AnA}ApA]X}BjB{D`D_@X]Z}BjB_@X]Z}AnA}ApA_@X}@t@{FvE}@t@}AnA}@t@gA|@SXk@t@u@|BStAKr@CRCxACtAVbFH~@^pENlBr@vJNnBRdBLrAj@lDJn@t@rCXhAZbAv@jCZdA\\bAf@zAf@xADJdAnDTfBVpBPvCFt@LjBLjBXtELjBT`DR`D@HD`BBtA?lA?v@?fCApAIpGIvG@p@BjB@dAFd@Ht@Jr@RfBHn@@BZdBt@|D`@lBxAjHNn@j@tCNp@j@tC`@hBp@hDl@tCl@rCLp@\\bB^bBLp@l@tCLn@DRf@`CNp@Lp@Np@\\`Bl@tChBzIb@rBj@xCd@hDBPh@hGh@hGX~CPhB\\~DJhA^tE`@tE`AhL`@tEDb@@Pj@hGh@hGRtBTrCpAtOPjB^tENhB@J^xCJh@^rBJ`@t@hC@BbCbIlAxDX|@hBfGRn@jAxDPl@v@jCJXZbAd@zAd@zAPn@f@zAnBpG@Bb@~AFRTlALp@X~CFh@PlDJlBDt@@RPzFHjB@j@NhKDlB@j@?`AHfIB|BDhEDzE@^BxDJ~JLlN@lBD|C?z@BbDDzE@t@@j@DvBBhB?z@?xAKfEEb@S`D]tEm@xIQhCOjCGbCAf@DhCNrC@JR|AHn@^dBLj@@Bz@hCtBrGlAvDRl@Tr@Nf@lAvDd@|AfC`IFRx@~DNzAHbALlDChCAl@MtBEh@K|@_@zCe@zCWfBIb@s@dE_@pCe@~Da@`E]jCEXWbCK|CDpBBp@Hx@VtBXjATfA`AvD\\rAZnAl@tCh@`FZ|CLjBFz@LbBFz@JpAXlDLjBHbAJjE?t@C~GFpJ@fA?~D?HBbDFzEDxE@z@?p@@lBDzEBxEBzED~E@fBBbDDrGBpBD|CD`CJfC@FTrBJd@XlAFPh@zADJt@|Ab@t@nApBbBnC\\j@bGzJlApBDHl@`A~B|DvDjGxC~EV`@hDvFLVfAxBLV|AdEh@rA~@bC`AbC~BfG|BjGfB|Er@jB`@dAtAnD`CdGRj@x@tBXz@vBzGNf@hC~Jr@nC@Dp@jC`@~A`@~AbA~Db@`B`@~AFRx@lD^`BFR`@bCVzARrBT|BRbEDt@LrG?|HHba@Hx]RjjAHx]Hp_@Fp\\AlEIr@U~BqApE_CxFyDnJ]zA[rA_@fF@`Id@dPhC~}@tAdf@JjDbCb|@lAvb@lCv_AvCzdApAnd@fAj_@Z|KT~I?r@IjHkBva@aBf_@}@hSYvEIdBo@xEQh@w@dCABqA|BwAjAwGrF}ApA}@t@{CfC}ApA}BjB}ApA]X_@Z}@t@_@Z]X_@Z_@X]Z{CfC}BjBs@l@_ApAY`@yAnDaAzEOp@UjAUdAW|@Yt@a@v@i@t@mOhNyBnB_OvMq@h@}AxAeAfAgAzAy@rAQ\\}@jBkE~J}@lBqAtBoA`BiAjAyAdAMFmAp@uBt@oXzIsAl@}@h@i@b@IHs@|@k@|@o@nAc@jAc@|A[dBW~BItBAhBFnBLhBnAtLFlADpACxAI~AU`Ba@bBe@lAe@|@[`@ORu@n@sAr@yHxCkTpIgA`@cAVGBsAPuAHc@AkACgBScAWg@O_ViIwAc@a@KeAOgACe@@u@@qATi@NWH}Aj@wQjHqWhKC@g@NkBd@{@La@FoBHwU|@aL\\G@iAFu@Li@Pc@PoAt@uEzC}@`@k@Rc@HcAHs@Aa@AgAQGA_Be@gDgBEC}Am@A?q@QUCo@Gy@DI?y@NC?u@To@^IDUPe@b@oAxAcB|BaArAeDrEu@dA[^mDvEk@r@_At@iAf@k@N[HE?c@B]@mAEc@Mm@OyAo@GCeFyBIC{@WGC[Eo@IWAa@AW?qAFwATw@Rm@LmB^cA@WCc@EIA_A][Sa@Ua@W_EqCYSkAcAUUuB{BiEoEGEo@i@_A]UCa@EIAmABw@@oCDkTZ{FHsDFY@m@DE@}@Pc@R[L}@l@GF_Ax@Y\\wA~Ai@j@o@f@A@q@\\u@PE@_AJI@mAIu@QKCw@c@KGQSu@u@{AkB]e@u@aAsAgBs@_A}@cA]a@gAeAs@c@WOICmAg@WGsAUWAc@Ci@AwAFiAPsAd@[P_Af@iA~@q@v@ST{@rAYh@e@z@]`AUl@g@lBUtAId@g@fDAHiAdJ_@zCETE\\SxAa@pB?B_@|ACPc@hAYb@Yd@}@z@oAx@s@TYJ{AP{@B_HP}DLiBXy@\\}@\\kB`AeDdBeCnAiFlCcB|@eCpAeCnAaAh@eCnAsAr@OJ_An@y@`AQT}EtHYd@cCvDuEhHuD~FC@sA~AA@qBhBIF{CdC}BjB{D~C}BjB{CdC_@Z{D`D}@r@_At@}@t@cBtAwAlAuAjAc@f@cAhAQVmBtCmAhBcDvEYb@qAjBgCtDeCrDu@fAyAtBSXqAjBw@dAo@|@gBrBs@l@{@p@aBpA{D|C}BhB}DzCuAfAgAz@_@X_CdB}AlA}EtDqBxAiIpG}EtDA@}@r@{BhB_At@o@f@MPw@bA}@hBk@pBg@zC[xEWrE]lGQbD]lGSpDMzAOvACP[hB_AzCqBzFeB`FqAtDqArDe@bCOfAOlAMfCCXU|DWxE_@lGo@pLGt@GpASdCCZW`CQrA[zBKr@}@`Go@nEq@lE_B|KMr@QlAUhAWhA_@bAYt@m@`A_@j@w@p@UTIB_@TcB`AWLkBdAa@Tg@VsArAGFQ\\aAfB_A|CCHa@jDCpAEtBDrEBbDP|Q@t@FzEBbDDzEDdDFpG@t@LnNDbDDzEB|A?dA?hAO~BCN]bBADmAxD_@xA]lASrAI|@Q|AEbAEt@Et@WdCGTm@pCOr@y@xDCLg@jDAd@Ct@C`ABxC@l@NfFChBAp@?BS|CIx@W~CMrAK`C?@@jBNlB?Bb@tCNjB@@FhB@ZEpAAn@SnBE`@CR{@fEgAzFy@fE{@hE[bBy@fEk@vCk@tCiAzFy@fE]dBk@tCG\\o@bEg@zDq@`F_@hCEb@U`A_@`BGVyBpHkAzDw@jCGVa@jCAh@EhBBx@Bv@@L^lC?Bj@pCBJ^vCBl@FrB?fB@`C@b@?lB@z@Bn@FlB@Hh@~FHp@XbDd@rEj@hGBZJnANvBH~AHrBFdBDpAVhDVzBFf@LbBBjA@b@GfACn@S|BEh@Gx@?p@?`BF`AHzAPhCD~A@VC\\GzAYvBIt@MhA?vA@t@?BTbBDX\\dAHX`@x@R^n@fAV`ABLHb@L~@F~AAfAMxAOn@Qr@i@bBUzACNQ~B?NMtCEpC@^FrATxAN^Rj@BHn@`ADFbAv@RNj@b@NTn@~@Vx@Rl@Z~BB\\FbBHlDBt@FbDBv@BnAAnBCXGt@CVc@dBKPWf@wBhEqCrFGLSTi@l@s@\\_@Pc@Rq@Zm@l@UREJk@hAe@fBCHc@nB]dAYx@gAxBM`@K\\CREZAX?Z@bA@LBt@H|BPfEFvALxDDnAC~@GfAKt@ALOv@Ut@[t@EF_@h@WXCDYTSPk@`@A?cBt@WLi@\\OJc@`@GL_@l@Q`@KTWz@UfAMzAEz@@~@FpBJxADn@LpBDt@?PBd@?P?x@Cx@Er@QrAGl@i@hB]x@IVQp@Kp@Kf@Iz@SlBS`B?Fq@fGShBYtCK|@{@zHE^q@~GMlAGtAAr@Ah@AxB?@@hAFnC@v@@RL|FDjBDlBLzEBdA@f@LpGHbDDlBDlBB~@HbDAl@?b@APEr@?@QdASx@IRSl@Od@CDe@|AQl@A@MfAC^C\\?XAz@DtAPzBL|A`@jGPzBT~Cb@lGpAnQDt@?F@xA?JAx@KtAARMjBQbCOhCCX?Z?XBf@B\\L~@T`B@D|@xGF\\t@hFPp@Tn@HNVf@JTz@lAj@|@LXRb@Vr@@BPx@LxABnA?`@?ZIz@I|@Or@CDUj@m@zAgArBWd@yAlCIPq@nAo@nAaB~Cq@nAq@nAg@bAa@t@Wf@Wf@Yf@Ud@Ul@Uj@[|@I^ERG\\EZCt@?X?n@?FHhB?@f@fEJ~@@VJrA@jAA`@?XK`ACLKl@i@nBe@jAi@rAw@lBORq@bACB{@z@]^MLk@p@UXa@h@SXa@|@_@~@Uv@AFOn@?@SfAO|AGhAAVCl@@~@?FDdAD\\RfBFl@Lz@BNDdA?TAn@?DEd@CNOhA]hASl@ADe@tA{@hCSj@Sl@Qh@y@zBm@hBmAvDg@zAELe@hAAFYn@SVORi@n@]`@[\\wA|AMLON{@~@m@p@y@jAEJs@tAU`@q@nAWd@iAxBWh@}@dBy@fBMXeA|BeAlCUr@{@dCUn@cA~CcAbDy@hCg@|Ao@zB}@vCKb@Qn@eA~DQn@wAnFa@~Au@nCETIXeA`Es@nCs@pCs@nCuApFcA~Dc@`BOn@c@~Aq@nCs@pCc@~As@pCuAnFAFoAxDS\\kAvBGHqApAo@l@kA~@}C`C}BhB_BlA}@r@_@X}BhByAhAcAx@_@X}BfB_@X}CbC}D|C_Ar@}BhB{FpE_@X}AnA_Ar@{@p@}A|A]\\w@x@y@hAyAnBq@z@y@`Ay@~@gBvBKH}@v@}@x@k@f@QL_BhAaAp@_An@_CbBoA|@o@b@_Ap@a@V_DzB_Ap@UP_CbCIHeAdBQVeArCO`@CJaAbEI`@c@rBOp@kAvF_@hBMj@Op@q@xCMh@m@tCS~@WdBEf@Kr@E`@[rDi@jGOjBg@jGSbCKpAC^EfCGnBCn@Av@Ah@?JAj@?jA@l@@t@?XHbAP`A`@~ATbAl@|BPn@Nl@@@v@jChAzD@BvAtD|@xBbA`C@@Ph@Nb@N|@Lp@?@VdCNzBF|@Dv@B\\VpBBJLr@Hh@d@fBRr@Nj@r@nCPn@fA~Dt@pCPj@xAlFDTl@zBFRV`AP~@Jn@Fb@@NJdAJvA?BBt@@h@?fBAPEnAC\\YzCIv@e@nEABW`DU~CCbA?h@?RFdABPJp@@@Lp@@BVv@NZNXb@t@BDT\\t@hA?@Tf@LTZ`AHTFXLl@@BLr@DXNlA@NNxA?HFj@Ft@`@tEFt@BZBVX`DFt@JpABVDt@Ft@J~A@bA@t@?x@ElAA\\Et@Cb@GfAEl@?FGx@C`A?f@@f@DjAFl@D`@DR~@~F?Bd@vCp@lEXdBjAtHd@xCXdBVfBLr@d@xCJr@b@tCZjBp@lEjArHp@lE~@`G|@`GLr@p@lEn@bEb@dDHr@Jt@\\|Cr@dGNjB`@vEDh@?HRzEPxERxERxEPxELbDHjBRzEBt@HjBPxEHlBRxEHlBLbDPxEVnG\\fIVnGd@rLPxEVpG\\dIFjBLdDPxENvDP|F@p@F~EBjBJdDTfIHdD@TZvFT`EPhATfBDVZhAd@|ARt@T`@bB|CNZ`@p@r@lAdBxC~B~DfBxCxCfFp@lAfBxCR^l@~ATj@DLZrANp@R~@Fb@Lr@fAtHXfBb@xCJr@VfB|@`GJr@p@lEVfB|@bG`BzKb@zCbAzGjBdMp@lE`D~Sd@xCp@lEXfBzBbOd@xCp@nEhArH|@`Gp@nEXdBp@nEt@~EF`@|@`GtAfJLr@n@lEjAtHhAtH|@`GvAhJtAhJjAtHpEjZHf@f@fDn@nEn@lEFZ`AlKVhCHjAr@~H`@tEp@~HNjBPhB`@tENjBr@~Hh@jGNjBp@~HBVNpAZ~Cb@rEZ|CPhBd@rEl@hGBRh@tF\\|Cl@dFF`@f@xCXdBd@vCJt@b@xCJr@r@`FRhBh@pEh@pEPxARxBHt@Hr@?JNnEFjB@X@\\TfIj@jSCz@At@?`@ERMp@Kd@e@lBk@`CELcEhK{DxJSdAc@nBOzAKhABnCBlCHbC^|JFlBL`DPzE@`@C`CAhAi@lDWz@w@bCmAzBcB~CmDtGcB|Cq@nAcB|Cq@nAWd@iAvBq@nAcB|CcB|CeB`DkB~BcDfBGBoEvAc@NcA\\sFdBiCz@qFfBiCx@c@NQDoBtA_@VaAp@[\\y@`Ay@~@w@|@Yj@wB~DQz@kAxFOn@q@`DcCjPWfBq@lEKr@q@nEuAhJ}@`GuAhJiAtH{@`GMr@Kr@c@zCYdBWfBc@zCKp@q@nEWfBiAtHq@lEmBpMUzAG`AMjBMjBAHJ`BFt@FjAH\\^`Bl@pChBjFRd@lBvElBxElBvEJVx@hDXnA@RXpE?DE`FUxC[tDK\\Ql@oAlEM\\sG~PsApDk@vAsAnDi@zA_EnKi@vA_AdCi@xA}BhGuCvHgDbJ_AbC_AdCi@xAi@vAuApDSj@iDbJ_CjGi@vASl@i@vAUj@Ul@gDbJa@bAu@jBSj@cCdGUj@_AbCUh@k@vAi@vC?@StCAxB?~@VtJPpGNxEThIDjBRpGPpG^lNJbDPpGNxEBvAR~BFz@r@fDHXfBdGN^z@hCRl@Rj@Rl@Rl@z@fCd@rAp@tBFTVpAR|B?v@@zAKjDC~@MfDYnG_@dIEt@SxE_AlSObDO`DMhCO|DErAE~FPdG@D\\pEJxAZvBZxBJ^~@bEBJrBfIp@pCdBbHxDtO`@~Ar@tCtApFxCtLNn@Pn@`@~ANp@Pn@`AxDDF"
                     },
                     "start_location" : {
                        "lat" : 48.9451981,
                        "lng" : -55.690085
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.2 mi",
                        "value" : 10031
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1707
                     },
                     "end_location" : {
                        "lat" : 49.17828919999999,
                        "lng" : -57.4078601
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "e|fkHxju|IpAdFp@pCtApFtBrIvCtLr@nCp@pC`@`B`@~A`@`BPn@Nn@ZjAv@xBl@~@Xd@PZdA`ANLNJ`BbAf@\\xDhC^V`DvB`DvB`EnCbEnC`DvB~AfAj@^r@l@zArAh@d@hAzAhAzAn@hBRj@d@tARt@Pn@Nn@l@zBLjAVfBTnBDl@LbDD~@[dG?HW|AKr@g@xCOn@oD|O_BfHoAtFqCzLOp@_A`Ea@`BOp@qBtIaAbEo@rC_@`Bq@rCOn@Mh@q@zCmCzL_AdEoAtFm@tCOn@_CjK}DnQ}@dEoC|LmAtF_AdE_@`Bo@rCmAvF_CjKmAtFk@hCCHMr@iAxF]jB]vDAlACtBL|D@R`@pGLfBZvEv@nLLjBR`Dv@nLp@xJLjBLjBZvELjBR`Dh@bI~@dNv@nLLjBR`Db@lGZvELjBR`DFt@Dt@T`DR`DT`DPnCJfAFr@X`DLvABPLp@Lr@ZbBDZlAtERr@Rf@j@vATh@x@`Ax@`A?@bAd@bAd@`@Db@BfAJ@?tE@vE@b@?fA?`@Db@DZJf@Pp@l@DDZ`@RTDLTj@HNF^RjA@ZDt@Df@DzBBrA@XDlB?ZNlAFj@Px@RbAJ\\d@|APl@f@zAf@zA"
                     },
                     "start_location" : {
                        "lat" : 49.1925091,
                        "lng" : -57.29468749999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 316
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 49.1804613,
                        "lng" : -57.4104549
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAirport Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "icdkHbnk}ImApBU^CDYd@q@lA[f@Wd@Wf@Ub@]n@KLKHC@MDOFO@s@D"
                     },
                     "start_location" : {
                        "lat" : 49.17828919999999,
                        "lng" : -57.4078601
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "112 ft",
                        "value" : 34
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 49.1806867,
                        "lng" : -57.4101311
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHigh St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{pdkHh~k}Im@_A"
                     },
                     "start_location" : {
                        "lat" : 49.1804613,
                        "lng" : -57.4104549
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 796
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 111
                     },
                     "end_location" : {
                        "lat" : 49.1852571,
                        "lng" : -57.4183391
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOld Bonne Bay Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "irdkHh|k}Ie@FIDA?MHULU^A@c@xAABQn@Ql@_CjI]lAO`@e@lA_BzCq@tAq@pAqCpFoDdH"
                     },
                     "start_location" : {
                        "lat" : 49.1806867,
                        "lng" : -57.4101311
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 759
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 135
                     },
                     "end_location" : {
                        "lat" : 49.18235749999999,
                        "lng" : -57.4276715
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eReids Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{nekHrom}Iz@zCPn@t@lCPn@^tAv@xCt@nCdA~Dz@dDHXFRbAtDPn@h@lGJvD"
                     },
                     "start_location" : {
                        "lat" : 49.1852571,
                        "lng" : -57.4183391
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "351 ft",
                        "value" : 107
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 49.1833167,
                        "lng" : -57.42770230000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWights Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w|dkH|io}I_ED"
                     },
                     "start_location" : {
                        "lat" : 49.18235749999999,
                        "lng" : -57.4276715
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 412
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 74
                     },
                     "end_location" : {
                        "lat" : 49.1843199,
                        "lng" : -57.4313219
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCemetery Ln\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wbekHbjo}I?lBAbDA~BAlBApGANEJEFEDCBIBM@GA_@Wq@i@KIi@c@"
                     },
                     "start_location" : {
                        "lat" : 49.1833167,
                        "lng" : -57.42770230000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "82 ft",
                        "value" : 25
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 49.1843701,
                        "lng" : -57.43165759999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_iekHv`p}IIbA"
                     },
                     "start_location" : {
                        "lat" : 49.1843199,
                        "lng" : -57.4313219
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "486 ft",
                        "value" : 148
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 49.18548240000001,
                        "lng" : -57.43054919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iiekHzbp}IYYiAmAUK{@}@IK]_@"
                     },
                     "start_location" : {
                        "lat" : 49.1843701,
                        "lng" : -57.43165759999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 479
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 116
                     },
                     "end_location" : {
                        "lat" : 49.1826477,
                        "lng" : -57.4347301
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gpekH|{o}I]jAAF?D?B?@?D?HBHFLBBPRf@l@TZDB\\`@LNZVf@\\JFb@Xt@t@|@`A\\^fAnAl@j@DDR\\?@Vj@FZF\\Dj@"
                     },
                     "start_location" : {
                        "lat" : 49.18548240000001,
                        "lng" : -57.43054919999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "194 ft",
                        "value" : 59
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.1822666,
                        "lng" : -57.43529290000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBennett Ave\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "q~dkH`vp}IjAnB"
                     },
                     "start_location" : {
                        "lat" : 49.1826477,
                        "lng" : -57.4347301
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 315
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 49.1841973,
                        "lng" : -57.43837299999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDr D. D. MacDonald Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e|dkHpyp}IqA~Cg@hAq@`B]x@yB`E}@^"
                     },
                     "start_location" : {
                        "lat" : 49.1822666,
                        "lng" : -57.43529290000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 402
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 49.18450559999999,
                        "lng" : -57.4436734
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHumber View Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ghekHxlq}ID`@D^Dh@HnABxAF`BCjBg@rCw@tDEPCPERCV?h@?@?NJdADb@"
                     },
                     "start_location" : {
                        "lat" : 49.1841973,
                        "lng" : -57.43837299999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 400
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 49.186463,
                        "lng" : -57.44815999999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLushs Ln\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ejekH|mr}Ic@xBGZ_@dBc@bBW`@KPyB`De@n@EJGPi@vCYdB"
                     },
                     "start_location" : {
                        "lat" : 49.18450559999999,
                        "lng" : -57.4436734
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 mi",
                        "value" : 778
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 214
                     },
                     "end_location" : {
                        "lat" : 49.1925474,
                        "lng" : -57.45109
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNicholsville Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kvekH~is}Iw@OgAAmAAaCa@aFq@SCA?S?SFOHSNSZQl@qA~DKXSl@KZYb@a@^g@`@o@`@OJm@^_@Ra@RaAh@s@^"
                     },
                     "start_location" : {
                        "lat" : 49.186463,
                        "lng" : -57.44815999999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 mi",
                        "value" : 4597
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 975
                     },
                     "end_location" : {
                        "lat" : 49.1826054,
                        "lng" : -57.5096807
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGoose Arm Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "m|fkHh|s}ITr@R|@jAbD`@lA~@tBf@hAn@tAjBfERb@BDx@fBdApCBJBHLb@d@|Ad@|APn@~@jDPn@b@~A`DjLj@tBPn@b@|APn@r@nCzAnFtAlFfA|DNn@Pn@t@nCRz@b@~AhAdEt@nCJ\\DPJ\\V~@J^Pn@@DBHdAxDd@bBJ\\vAfFn@`CDTJh@@F@J?DBb@@L?BAb@?RAb@?PAb@?FAdB?R?b@?P?P?P?v@?P?b@?v@?v@?~@?zC?lB?lB?t@?v@?pG?v@?t@?v@?hI?bJ@rS?lB?bD?lB?lB?nB?p@?pBAlBCzEAlBArBI|CE`BAHOh@m@|CId@Ij@?VAj@Bl@@PFj@^fDH|@RjBF~@B|A?f@?~@?zEAdDAvLAjF"
                     },
                     "start_location" : {
                        "lat" : 49.1925474,
                        "lng" : -57.45109
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 mi",
                        "value" : 3537
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 558
                     },
                     "end_location" : {
                        "lat" : 49.15468019999999,
                        "lng" : -57.5252861
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "i~dkHnj_~Ib@bBJT`@fAPb@~BfGTl@jA|C\\|@Tj@`A`CTj@Th@r@bBd@hAbA~BHPx@lBNZv@~ATh@rA|Bl@~@~A`CJNtAbBlA|Az@hA@B\\^LNNNLNl@l@^TLHh@XHBv@ZrAPRBr@DrBJbBNpDZzFd@lCTn@F~Bq@`@MfDaA|EMZAj@DnCTb@BlCTb@BfAJjBLb@DhBNb@Bb@D|@Fl@Hb@F`@FnC^dANhDd@dAh@bB|@~DvBjAh@bAb@PHhAXJ@fAPb@FhBVPBt@HtEb@"
                     },
                     "start_location" : {
                        "lat" : 49.1826054,
                        "lng" : -57.5096807
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "17.1 mi",
                        "value" : 27445
                     },
                     "duration" : {
                        "text" : "1 hour 51 mins",
                        "value" : 6637
                     },
                     "end_location" : {
                        "lat" : 49.130316,
                        "lng" : -57.824291
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wo_kH`lb~I?n@Bd@HjA@FHj@VfBLx@Lj@Lp@J`@\\|Aj@rE@PF|@Bn@Bt@?NB|A@t@?BAr@?t@?DDlAJnA@VVlADRTp@LPV\\h@`@ZH`@LnD`AbAZdAZ`Bf@jA`@fCz@b@Nb@LTHJD^TTL`BnAFB`@R`@P`@R`@RbAd@B@d@j@fAvBhBtCNPz@z@j@j@tAvBv@|AVf@FJn@fBr@fBp@~ANb@b@lABJLr@DTTfC?Hn@bHBPX~CN~AXpBXfBNbAZjCLhAD^Hr@f@`EBNVfB@F\\xALl@rAtD@@xAfDXn@Ph@^jABPZdBXdB@@h@rCHd@DJTh@LZdAbCjAtBFJd@fATj@Vh@BFz@zBPb@BFjBzEBFd@z@x@bAFFtBxB\\^\\\\VVbA~@zArAPPLJ\\\\\\\\z@z@PR~BlCZ^?@fBtCnAnBXd@`A|AJRVf@hAxBn@nAVf@p@pAVf@`B`DHPJT`@|@Lp@X|@DHVf@Td@@Bl@rAbA~BbA~BbA~Bj@tAl@tAbA~Bl@rAXp@rAfDLZFNRj@l@`BP`@LXJLVZBB^ZBB\\FD@jCNbCf@nABt@@vALPBb@Tl@`@`@T~@l@`Al@^VXNFFZV@BXd@P\\DJRj@h@xAHVl@tBPl@t@lCRn@Pl@DRZlANn@@@Bn@f@vDJr@Jr@Jr@h@zDTxB?Bb@dIDt@VvEDv@P`Db@bIJlBJnBHn@J~@N~ARhBPhBHr@\\~CFr@LhAH\\Lp@@DNh@Pn@b@|Aj@vBv@lDBJDf@Hr@Fl@D|@FfABb@J`CB`@FvABRVvBXfET`DFt@Ft@LdB`@`DJr@?BNf@Vl@FNNR@?VNtAx@PVFJPXr@jAt@hA`@l@RXZb@|AzBLPx@bADDTX\\`@x@~@Z`@@@vBnBz@~@dAjALVXd@`@r@L\\Rl@Tj@Nl@Hj@b@zCH|Ad@zC@JNp@Np@F\\TbAVrAT`Ap@pCNn@pAtF@BLj@l@tCPv@r@bEbA~FZbBXdBZdBf@xCLp@?@`@lDBb@N`D@FFhGBtCN`HNzFFdD@t@DlBDlB?FHbBXnGDt@N`DDv@N`DDt@HlBDt@Dt@Dv@Ar@Av@At@AlBClB?Vd@~B\\bBdCnL@NfAvHTfBJr@?@@r@@f@YfFEt@IjBKlBCb@CNShBABe@vAK\\GNENCh@Dh@Br@?F@t@?nA?tA?tCBLVfB`@xCJp@Fv@LjBFt@?JAh@ClBCv@Az@W`BKp@Kr@Mr@WdB_@~BAZEt@Et@MlBKjBE~@Dh@Ht@Ft@ZxCABGt@Gt@Ir@?Fy@`CyAhEg@x@Yd@u@jA{@xAs@xBe@|Ay@hCQn@c@vA}@`Ay@~@]^y@~@A?a@Na@L{Br@oAt@_@Tu@b@IJ]^]^y@`A_@b@IFaBdAIFY@[@ECa@QcAe@a@Sa@QuAo@OAc@CgAGU@]Dw@DO@yAVc@FQBOHa@Na@P]LiA\\c@Na@La@Lc@LQFsAh@cA`@{CnAODWDe@Ak@CgAIKAWCo@EW@Q?Q?W@c@REHSZEJUh@_@x@e@bAMTMH]TC?a@Ja@Hc@LUFi@TCBUTELc@dAEPSl@m@jBa@jAq@pBGVQl@Uv@Y|AGb@ELc@xBE\\Ix@Cn@AZ@ZBt@@TPnBFVNp@BP^lAXd@`@r@t@|ADPb@~AJp@Lt@Dr@Dt@Dn@@D@t@DdB?FBt@Dv@Bt@Dx@Dp@NjBFr@BPDbDAd@CbDA`@?T?t@?@Fr@BPH^^`BXjADVJp@DR@`@@b@APCv@Ct@IbB?HCnACZCv@C`A@`B?DFdB?HDz@Fd@D`@BPVdBNr@\\bB@Bb@~B@RJrA?VAn@?z@FdABf@Bv@Dx@F|@Hf@Hr@Fb@XxB?@L`BB|@Bt@@f@@xA?`@?v@?fA@d@?d@FdAHnAJpADd@HdA?BDdA?`@?v@@PCtA?DShBGr@ALKt@Kb@GV]rAGb@ABATAj@@h@Bd@F|@F|@@T@h@Al@?@Cr@AX?\\?Z?x@AhACx@ALI`AGXMp@ADMj@I\\SdAMp@Mp@EPEd@Cf@?HCl@?HIlAA\\C`@AREl@I|@CTE\\EVEZGZKh@a@bA?BWh@CHMb@K^Ov@El@CRCf@CLEZGTCFO\\CBMPYPWJa@NIBWJC@[VGFk@|@?BSl@Oh@St@EPc@dAWl@Sh@EJKHKBKBo@Fm@La@JYDI@]Di@Ia@GA?a@IeAU[@GDSLKJs@z@c@b@]\\A@aBz@YNcB`Ae@^SPe@l@UZaBpCw@hAg@H_@?m@QEA[KeAYCAcAMmC]c@GeAOkBU{@KoA`@C@[X{ArA]Z_@\\A@]|AQn@Op@_@`B_@`BOp@_ChKGVm@rDe@xCI`@ELg@zAoAvDmAtDg@zASl@Wv@S|Ak@pE_@zC}@pHAHEt@U`DU`DEt@MhBGt@Et@OvBMjBGt@[tE[vEMjBGt@CZ?X@v@?bD?v@?BAp@QpGElA@^@bD@v@@lB?PAzAExEClBAv@At@?LFf@Hr@Ht@TfBRhB^|CDn@Ft@Ft@Ft@Dt@Fr@Ft@Ft@NjBLjBV~CNjBT~CNjBd@jGV`DLjBFr@NjBFt@\\tENjBBXDZHr@^zCThBJn@Xj@`B|ChAvBXf@Vf@BDZN`@RbAf@^RNFj@r@LNHVRl@x@jCd@zAPn@Rl@@B\\LfAZZ^Z^\\^BBHj@Jr@Jr@`@zCJr@l@nEJr@Hj@?HFt@XvELjBBX\\bARj@~@dCDLDd@RfBZjC@RBt@LbDBn@?DPn@^`B^bBNn@J`@@NLjB@V?^At@AlBClBAt@AlBEzEEzEAlBClBAlBAt@AlBAv@AlBA~@c@fHCPWfBUfBKr@Ih@C`ACt@CtA[|Ba@|CKr@Kr@AH]jEOhBGt@GlBAV?\\AlB?pCN|B`@lGXfELbA`@zCThBVfBTxEHjBB^OhAKr@Il@?DBt@Bt@@Tr@lD@Dl@tATh@Th@Vj@FLD`@TjB"
                     },
                     "start_location" : {
                        "lat" : 49.15468019999999,
                        "lng" : -57.5252861
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 mi",
                        "value" : 2245
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1240
                     },
                     "end_location" : {
                        "lat" : 49.1341309,
                        "lng" : -57.848122
                     },
                     "html_instructions" : "Sharp \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-sharp-right",
                     "polyline" : {
                        "points" : "owzjHxx|_JYc@[a@Y_@AAeASA@}@d@Qv@IX?VBlBBlBBdD?PI`@Mp@?@gAnAOEc@KwBi@SBc@Dc@DK@i@`As@jAs@lACFsArA]^]\\EDOb@e@lA?L?fATtAJr@Jr@p@lELr@RtAANIt@SfBUhBShBIr@It@Ir@Ir@MhAb@rCJr@VfBJr@Lp@Jr@VfBxAlFPn@@FGbBCt@Cv@KbDGjBCx@?r@@v@BpBEfBKlEDbAFlBBt@@l@?FAv@EzAANGt@"
                     },
                     "start_location" : {
                        "lat" : 49.130316,
                        "lng" : -57.824291
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.7 mi",
                        "value" : 20402
                     },
                     "duration" : {
                        "text" : "1 hour 20 mins",
                        "value" : 4775
                     },
                     "end_location" : {
                        "lat" : 49.0075902,
                        "lng" : -57.86319129999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "io{jHvma`J@p@Jl@Jr@?Df@tAjAfDZt@j@tA|@v@lAfALNx@`AbBtB\\b@j@d@^ZbAz@T\\Xb@p@bABDb@j@RXNTJHXRDB`@PFBZFb@JJBt@Jf@Hb@FdANVDJBd@L^JXFFBb@J`@Ld@LrAb@PFjDlA`@NLDxAh@r@XNFx@Xl@T`@N`@N~@^f@NXJFBvAl@LFf@ZVRZV@B\\`@Z`@RVb@l@@@p@hAb@t@LVf@dA^r@Vh@Vh@Th@n@pAVh@r@xAPb@N`@BHPf@@DHl@@DD^?TARE^?FOb@A@Y\\c@XA@{@JI?y@@KBUF[PQJKFq@n@]\\ABW^MNy@fAMLi@n@uAlAw@l@mA~@OLy@l@EDc@^WZc@|@GVIZKt@?TC|@@l@?RBb@Bf@J`ABZFl@H^DTHXDPTb@RX\\b@ZZ^Zz@v@tBjBDDzAtANNNJ\\ZNLJRFLVp@JVRj@@FPf@d@zABHNb@\\jA~@|C?@Pl@dA~DBHp@bCRl@Rh@@@Th@l@tADLf@dAn@rA@B|@lBDHh@vATl@Pd@pAxD?@Rl@f@zAf@xARh@?Bd@vARn@@@TdA@LD\\@JBV@NFt@@LDf@Dl@@DThBDRTlA?@Rn@Pl@f@zADPH\\Lr@FX^jBDLXz@v@vBVn@Rf@Tj@DNXv@DRJj@@F`@~BThAH^DNPn@DJlArD\\tA@@Jp@RfA^`D\\nCHd@DRH\\BJN`@@@PZ^h@^^x@|@vA|A\\\\bBfBrAdAJFRPf@b@RVv@bAZ^~@v@`@^`@Rh@@VEfAQb@IDAZEfASlCc@DA`ABT@L@dAPfANTDJDn@VPRv@bAPVDLx@jC@@fAhFBJz@hC@BTb@Vf@pAdB`@V`@V`@PbAd@`Ab@bAd@bAb@TJHLXb@Zd@FJLZj@vATj@?@Z\\\\^TTFDdA`@RHp@JhBXTDpA`@HBVL`@P`@R`@PbAd@HDVFb@Jh@JXPJHRNnA`An@`@^V`@TRNJDHBVB\\AFC`@O@A^KRGz@]n@W`AU`@Kb@QfBu@\\QbAg@`@SFEv@g@`@W^UXSDEZ_@DEb@u@Lg@D_@PkAn@mFPyABMLq@Ls@Lq@@KJe@Nq@Jk@FYFW\\aB?CLo@Jq@FWB[@WA]AYE[EUIYUm@Sk@g@{Ag@yAGSG]G]CUCW?g@D_@@INk@Xm@N[FKtAyBlAsA`@[^YDEVUZ[\\a@p@cAp@{AFMb@gAVo@Ra@^c@LQLO^c@X[HKPW`@o@l@{@Xa@@Av@cALQn@e@HIVGJCVAD?ZFF@|@RPDt@Fb@FT@L?t@Cv@Qb@]TYDGN[Ps@@EJm@VaB?CHu@Fo@?C@m@C{@?CK}@Gk@CUCw@?]?O@aAH_ANcA?AJq@BMJc@Nq@DUJWPm@Z}@J]\\iADUJs@VwABMJq@Ls@F]d@uBZ{A@GPeAF_@PkAD[P{ABKPaALa@H]Tg@JMf@i@TMf@]XKv@_@h@_@`@WHIt@c@b@I?A~@IZGLGLGn@m@LMp@e@BAZWHGn@w@BCRc@LWFSd@kADIXe@Ta@Vq@HUHWb@}APo@@C`@{APm@^uABIRmA@YHkA@_@FcBD_AFuA@UDoAD[Fu@?ALo@BQH_@Lg@BITi@DKRYn@_ADGj@{@FONe@BG`@_BPq@`A_EDOJ_@`@aBbA}D^eBLq@Nq@b@sBz@qEj@uBH]jAeDN]j@uATk@j@uA@Aj@sAh@oABCr@iAb@q@pBiCv@eA@Az@cBFSf@kBh@gBLQ\\a@DGx@g@^Ul@SVKhC}@~Bq@~@YD?dASdAQfAQb@IHA~B{@`@O`@ObA_@`@Qj@SXGdAUfAUB?^E`@EfAKfAKfAIb@Eb@AfAAb@AdAAB?jCFb@@r@@RGb@K`@Kb@KdAY`@Kb@K`AWB?b@CfAGjBIdAGb@Cb@C|BKPClC]nC[dAOjBUb@EdAOfAMb@GD?lDKtACv@Db@Bb@BrDRzFZr@D`DCfAAh@AdBTdANfALb@FlC\\fANdANL@v@\\^P`@R`@PdBt@bAd@`@PzAtAVVF@dATLBzAKfAIb@Cb@EJAp@s@Z_@z@}@r@u@lCg@FB`Ah@`@T^RdCtA^RHFRVt@dAv@dAdDrEv@`A\\`@pA~Ad@t@Tt@DXJj@PbBF`A@ZBXP~ABFRd@B@`@ZZP@@\\J^Hf@Ah@CRAf@Cf@T@@@@p@p@`@r@Xd@HNh@h@@?dAr@^XB@ZR`An@`@Ll@VTBd@J@?j@NXHLD\\FN@HAFAPE`@KHEVKHCTGd@GL?^JTFn@RH@f@RPHn@XRHb@N`@LTHJDLDPF@@^X`@T^TNJp@^^TPJn@`@RLl@^PHJFB@RH^BPAN?b@IXYDAf@]`@o@BEp@aAJOn@Yx@AvAtAz@dARTNRlA|APTd@j@Xf@NXHLVd@PX`@t@Vf@Th@Vh@DJHJ`@h@ZVFD^VJFlAf@FBVTDD^f@Z`@t@bAPXHJZRb@HBAl@Kd@W~@u@NOl@m@NOLMj@k@\\_@j@k@NO@?JK`Ay@ZQRM`Am@LIZUTQFGNMp@{@N]P]HQh@gAR_@n@qAl@kAPe@DIZc@@CHMNOFEVGB?P?N@@?l@Pt@^dAVF@ZFH@XA"
                     },
                     "start_location" : {
                        "lat" : 49.1341309,
                        "lng" : -57.848122
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 mi",
                        "value" : 1998
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 644
                     },
                     "end_location" : {
                        "lat" : 48.9927034,
                        "lng" : -57.8757775
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLidstone Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mxbjH|kd`Jr@ZLFB?fABF@TBF?XDVLVNPNDBVR@BJL^f@HNNRVb@V\\j@z@BFNTLVRf@Td@N\\LPPNRJVDX?D?f@Af@BTDHBVJPFNHLF\\RXVRZ@@P`@Vt@Rl@J\\HNTh@DF~A~CR`@Vf@Vh@R^`@z@b@l@fAlABDBBZ`@PVV\\Zd@\\d@?@NNVVr@l@@?`@`@XVNNLJBBZVBBXT^XRLVJVJ^P`@T@?h@RXHb@L`@L`@Lb@L@?\\L@@RJTRRRBB^d@\\^TRFDXNFDXH@@ZFD?b@DNBt@@R?j@AFA`@Ib@ODAn@OLAB?TATBTHXPFHHHNZ?@N\\DJDJHXJh@DP@FHZVn@Zn@"
                     },
                     "start_location" : {
                        "lat" : 49.0075902,
                        "lng" : -57.86319129999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 mi",
                        "value" : 5123
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 988
                     },
                     "end_location" : {
                        "lat" : 48.9534643,
                        "lng" : -57.8881179
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNL-440\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k{_jHrzf`Jd@o@bAaAb@[`@Uh@SRILE`@K@APC^EXC\\AB?^?@?`@BB?`@D`@H@?d@N^L\\P@?d@VXT@@\\VB@z@p@@?zAnA~AlAz@t@@?\\VPLLJ`@Z\\X|@t@@?\\X^X\\X^Z@?\\X^X|@t@z@n@`@\\@?\\Z~@r@\\XVRFFrAdAHFjBxApAbA^XNLtAfAv@l@`@\\z@n@HFt@h@FB~@l@nAj@NFz@^tAb@d@L@?fAR^F@?`@HZFtCLvAHb@Bb@BfADb@Bb@BvEVb@B`@@@?b@Bb@B`@Bb@Bb@Bb@BfAFv@Bf@BtERb@BT@LB?@ZFh@JXHlAb@`Al@LH^ZNNNLb@d@d@j@n@|@v@zAf@lA`@pATz@Pz@P`AD\\Jp@RfB@@NzAL`ABXVzB@FNpAL~@@HJl@Lp@Rp@Pf@Vr@P^DHXd@PVd@j@HLh@b@FFXRRJv@Xd@J^Db@BP@T?T?\\E`@CdAMBAb@G`@GZEvAQ@?PCNABANA`@GfAMhEg@n@Ib@GNCPCJAbAOHAPCNCt@QRENEl@SBAPGNGB?\\QB?LINIb@ULINK@ALINKZS|@u@d@e@JMLMNQBC^c@DGLQLO@AJQJQ@AJOLSXg@HSJQJUJSJUBEFM^y@LYTi@Vg@N[h@cAd@w@BEt@iAVa@@AZc@FKPWHKFIJI@AFEJEDCD?FAH?L@B?B@F@FDHF@@TVN\\`A`C^|@"
                     },
                     "start_location" : {
                        "lat" : 48.9927034,
                        "lng" : -57.8757775
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "472 ft",
                        "value" : 144
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 48.9534491,
                        "lng" : -57.8897988
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRiverside Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cfxiHvgi`JGJGHIRADGPGTCFCJCNAR?@?NBV@\\BVBPDNHRLTNR"
                     },
                     "start_location" : {
                        "lat" : 48.9534643,
                        "lng" : -57.8881179
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "121 ft",
                        "value" : 37
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 48.95367659999999,
                        "lng" : -57.8901637
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiverside Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "afxiHfri`Jm@fA"
                     },
                     "start_location" : {
                        "lat" : 48.9534491,
                        "lng" : -57.8897988
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43 ft",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 48.9535924,
                        "lng" : -57.8902934
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eStan Dawe Terrace\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ogxiHnti`JPX"
                     },
                     "start_location" : {
                        "lat" : 48.95367659999999,
                        "lng" : -57.8901637
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 mi",
                        "value" : 1775
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 338
                     },
                     "end_location" : {
                        "lat" : 48.9621513,
                        "lng" : -57.9089203
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}fxiHhui`Ju@fBCHUf@e@lAA@aArBCFo@pAMXe@n@?@Y`@e@l@o@x@]^Y^y@dAY\\_@b@w@`AY\\EDq@fAq@fAABq@dA[h@KNe@t@CDmAnBU\\]j@U^_@j@S\\_B`DEFi@fAEHSb@{A|CEJIN]v@g@jACHSl@Yx@]fAiA`EK\\[x@GPKTiAxBUl@GPIRQt@EPKhAE`A?JBjABPFn@RbA^~ANh@?FLp@DXBZDt@Et@A\\"
                     },
                     "start_location" : {
                        "lat" : 48.9535924,
                        "lng" : -57.8902934
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 mi",
                        "value" : 1237
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 265
                     },
                     "end_location" : {
                        "lat" : 48.9657397,
                        "lng" : -57.924106
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "m|yiHvim`JALKv@G`@Ml@A@Uj@EHUX[`@GFs@r@MNc@b@GJUb@Up@IT}AhGc@fBMh@UdAG\\OdAOtAEVA\\IvAMhD?LY|Dg@dFS`CI~@q@TAPKbB?FClB?lB@t@?NJTI~@El@IxAEfAEzACjB"
                     },
                     "start_location" : {
                        "lat" : 48.9621513,
                        "lng" : -57.9089203
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 mi",
                        "value" : 2421
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 468
                     },
                     "end_location" : {
                        "lat" : 48.95348509999999,
                        "lng" : -57.9492529
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNewfoundland T'Railway\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "{rziHthp`J?j@JjB@FLr@h@`DHh@Jr@Jr@F\\BTRfB@PTlC@NPbEJpBDl@PpBFt@BTD\\Jr@RfBThBBLp@hGTtAJp@Hd@BL`@`BDHHTj@tAb@v@Vf@Xf@Vf@P\\bB|CVf@p@nAp@lAp@nAVf@Xf@T^HN^h@TRRRHDVPHD^R`@RHDVL`@P`@P`@P`@R@?\\R`Aj@^T`Aj@`@TFDVR|AlA@@X\\\\`@RVDJVh@Rh@?@Tp@^zADLJ`@FPJZRd@@DTj@X`A\\`AVn@HRLRXd@NTJLf@h@b@ZNJ`@TVPFDPLJPh@~@Nr@DJPh@@BPl@Np@VdARjA"
                     },
                     "start_location" : {
                        "lat" : 48.9657397,
                        "lng" : -57.924106
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 88
                     },
                     "end_location" : {
                        "lat" : 48.95213880000001,
                        "lng" : -57.94798539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMill Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ifxiHxeu`JNCPKhAk@^Y~AoA`@uA"
                     },
                     "start_location" : {
                        "lat" : 48.95348509999999,
                        "lng" : -57.9492529
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 192
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 67
                     },
                     "end_location" : {
                        "lat" : 48.9517572,
                        "lng" : -57.9502567
                     },
                     "html_instructions" : "Sharp \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMain St\u003c/b\u003e",
                     "maneuver" : "turn-sharp-right",
                     "polyline" : {
                        "points" : "{}wiH|}t`JXBHBRHBX@TBp@BpA@T?Z?h@B^?X?`@?fA"
                     },
                     "start_location" : {
                        "lat" : 48.95213880000001,
                        "lng" : -57.94798539999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 328
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 218
                     },
                     "end_location" : {
                        "lat" : 48.94901669999999,
                        "lng" : -57.94866049999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMt Bernard Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "o{wiHblu`Jt@SrAUPGDCvAo@j@_@r@g@@A^Yj@a@rAw@DE`@U"
                     },
                     "start_location" : {
                        "lat" : 48.9517572,
                        "lng" : -57.9502567
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "446 ft",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 48.9487939,
                        "lng" : -57.9503639
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kjwiHbbu`JCb@?DCLKfA?R?L@BBXDP@BXjABF@BBLNV"
                     },
                     "start_location" : {
                        "lat" : 48.94901669999999,
                        "lng" : -57.94866049999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 mi",
                        "value" : 303
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 48.9490147,
                        "lng" : -57.95031700000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}hwiHvlu`JEJ]|@MVWb@A@_@XEDc@Bg@i@O]GSAW@SL_@JYPk@NYLAF@D@PPNLNPBDLJLL"
                     },
                     "start_location" : {
                        "lat" : 48.9487939,
                        "lng" : -57.9503639
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "184 mi",
                  "value" : 296269
               },
               "duration" : {
                  "text" : "15 hours 21 mins",
                  "value" : 55277
               },
               "end_address" : "François, NL, Canada",
               "end_location" : {
                  "lat" : 47.57841500000001,
                  "lng" : -56.74650699999999
               },
               "start_address" : "Corner Brook, NL, Canada",
               "start_location" : {
                  "lat" : 48.9490147,
                  "lng" : -57.95031700000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "75 ft",
                        "value" : 23
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 48.948821,
                        "lng" : -57.9504209
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ijwiHnlu`JBBHBHBLF"
                     },
                     "start_location" : {
                        "lat" : 48.9490147,
                        "lng" : -57.95031700000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 mi",
                        "value" : 185
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 48.94731729999999,
                        "lng" : -57.9493836
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eWellington St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ciwiHbmu`JDKFIHEJG?AJEHEHE@?HEHGFEBENMZWNKLGVKLId@SNEDCXO"
                     },
                     "start_location" : {
                        "lat" : 48.948821,
                        "lng" : -57.9504209
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "358 ft",
                        "value" : 109
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 48.9476084,
                        "lng" : -57.9479583
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWellington St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w_wiHrfu`JQ{ACMUiBMgA"
                     },
                     "start_location" : {
                        "lat" : 48.94731729999999,
                        "lng" : -57.9493836
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 mi",
                        "value" : 663
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 208
                     },
                     "end_location" : {
                        "lat" : 48.94376889999999,
                        "lng" : -57.9413738
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMt Bernard Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qawiHv}t`J`Bo@BCjAc@d@k@PQNUHM@ALULWHWFMHQX{@Tu@h@{ARk@Tq@Pg@h@yAj@cBNa@zAeE\\cATu@Re@Pw@Nq@"
                     },
                     "start_location" : {
                        "lat" : 48.9476084,
                        "lng" : -57.9479583
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 437
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 248
                     },
                     "end_location" : {
                        "lat" : 48.94148879999999,
                        "lng" : -57.93658370000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eUniversity Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qiviHpts`Jf@sAPm@?ARm@Ja@Rm@Pk@?CPg@?A\\iAFQDOLYDK@AFGDEP[Zc@FIXc@HIVg@DILWLU@AJQJWHY?ABGD[TiALq@"
                     },
                     "start_location" : {
                        "lat" : 48.94376889999999,
                        "lng" : -57.9413738
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 mi",
                        "value" : 2027
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 770
                     },
                     "end_location" : {
                        "lat" : 48.9280513,
                        "lng" : -57.9271393
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCorporal Pinksen Memorial Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i{uiHrvr`JTTZZ@@\\X@@x@|@\\\\\\\\\\\\xAzAbBzAp@t@b@t@`@|@\\r@TV\\d@LLd@\\ZHPB?@@?\\DX?LEBA\\I^Y@AVWRWLYR]Pe@To@p@eBd@mABCf@qAZw@~A{DVm@Rm@jBaEd@eAVi@Tk@L[\\w@n@eBRm@Rk@fCgHlAmDvBkGrAoC`BsAJKlCiAfBs@n@SXMNIHEFEZORGJADA\\GB?N@X?b@?VB"
                     },
                     "start_location" : {
                        "lat" : 48.94148879999999,
                        "lng" : -57.93658370000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 mi",
                        "value" : 2809
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 881
                     },
                     "end_location" : {
                        "lat" : 48.9125107,
                        "lng" : -57.9001326
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNL-450 E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "igsiHr{p`JBiBB}@@ECo@JeBFs@BYHq@?AJq@F[DWVmBtBkK?ALo@@Ax@eEhB}INq@Lq@Nq@Lq@j@oCNu@Lm@@CLq@Nq@j@sCXqAR}@@Cn@sCNo@Nq@Lk@@CF[\\{@To@Rk@DIN[fBeDhB}Bb@]^[ZYnAaArAo@@?^Q@ADA~Ae@d@G`@EpDa@|BYNEb@K`@K@AbAW@?XIDC@?bBy@`@SBAvBkB@Cl@o@~@sAfA_BdA{Br@eBTk@xEqL`AaCTk@Tk@Tk@h@uATk@vAmD"
                     },
                     "start_location" : {
                        "lat" : 48.9280513,
                        "lng" : -57.9271393
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 mi",
                        "value" : 1649
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 343
                     },
                     "end_location" : {
                        "lat" : 48.8997142,
                        "lng" : -57.90787419999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWhite Lakes Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "efpiHxrk`JZ`@@?tA~A@BX\\BBd@h@x@f@LHL@F?b@DXBJ?B?\\KVIJC@?h@a@`EaFl@GTAJAZDPFNHVRFH\\\\@?vBrBtBlBFFnDdD|@x@\\Z@@\\ZvClCvCrCZXr@p@dB|A@@\\\\x@v@@@\\X@@^X\\ZHDTR^XDDVTZXz@p@DDx@l@DD\\X^Z^ZLLl@d@@@HFLDJ@JAFIHK"
                     },
                     "start_location" : {
                        "lat" : 48.9125107,
                        "lng" : -57.9001326
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "34.0 mi",
                        "value" : 54720
                     },
                     "duration" : {
                        "text" : "2 hours 43 mins",
                        "value" : 9776
                     },
                     "end_location" : {
                        "lat" : 48.5100452,
                        "lng" : -58.2713974
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNL-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "evmiHdcm`Jz@bAVZTVf@l@bBvBbE|EvEvFjBxBpArAbFtEdCvBt@l@zAvArJ~I\\\\n@j@pDhDnC`CxBrBnH~GzBrBvArAxBpBf@d@vBpBzAvATT\\ZfAbAr@n@\\\\TRdAbA\\Z\\ZZXjAdAzAxAhBbBzBtB^\\^Z\\ZRRf@d@VVd@b@\\Z\\\\FDVTz@z@\\ZNNl@h@ZZr@h@l@f@l@j@jAdANNl@l@dAbAhAdAr@r@`A~@tBnBnChCFFxBtBfD~ClC~B~@p@n@`@`F~BnGnCDB`CbA~Ar@xMzF`@PjEjB`@PdBt@`QpH`CdAzEvBhCjAlB`Ab@TTNlA|@XXt@p@LJNN\\^TR|AlBZ^jDfElCdD\\^dNrP|@dApA|AbFhGjDdEtAbBZ^x@bAvBhCTXx@`ArBbCpB`C\\`@HHPTZ`@x@`Av@bAx@`Af@n@\\`@v@`A\\`@v@`AZ`@f@l@PRZ`@x@`AZ`@Z^x@bAZ^Z`@TXDF\\`@Z^rAdBlCfD^b@j@n@n@t@FFTV^^p@n@d@d@\\\\RRJHZXbA~@b@`@RR\\ZHFrAlA|AvAfAbAlBbB|BvBtApAzAtAfA`ATP\\\\t@p@d@b@\\ZPPJJb@d@LLTXdAxA\\h@fBpCfAdBz@tAbBhCZf@`CxDX`@lApBjAvBb@x@Zp@l@xAFNLZFNJXRl@^lAb@zAr@bC^rAf@dBL`@DJb@|APl@@@b@zAPl@x@jC?BPh@Rl@Z~@JZFPRn@LZf@rATj@Tj@jF`NTh@tAnDfBnEjE`L^bA~ChIjBvEv@lBTj@j@tAXr@d@lATj@bAfCJVfAhC~@zBb@fAl@xA^~@HP~@bCv@zBn@jBj@`BJXd@vAtC|IbA|Cv@bC@Dz@tCb@pAZ~@^dAPh@@Bp@fBLZRj@HTn@bBDHx@tBDLTj@n@bBN^Th@zAvDpAdDZz@b@dAr@bBfBhEp@`Bh@pATj@N`@dAjCp@fBz@xB`@lA^hAL`@`@`Bp@pCPr@xAjITnBJz@Ht@PfBHt@Fr@Ht@Fr@X~CHr@NhBHt@X|CFt@PhBLpA^rDHt@LjADZTfBJr@Hr@Jr@VdBJr@BJTxA~D|VvH~f@Jp@Jr@d@xCb@vCd@xCJr@vClRb@pCJr@Jp@d@xCJr@Jr@d@xCJp@Jr@Hf@@JVdBJr@Lp@VfBJp@@DHl@b@vCTvAd@fCTpAd@tBr@pD\\vAdAzE~@bENn@n@rCNn@@D\\zAn@rCx@pDj@fCb@lB~@bEl@hC@F`AbE~@`E~@bENn@H`@T~@Ll@d@fBNj@Pl@Pr@z@`C|@|Br@zAbAhBDFh@bAbArA~CdEpBlCnBfC@@v@`AZ`@nBbC|EdGt@~@fDjEpBfCv@bAv@dAvAhBzFrHJN~@jAZ`@Z`@TZrCjDZ^x@`AZ`@RV~@lA\\`@DFRXv@dAJLLVl@fABDVf@d@~@FRTj@Nb@BH^lABNNn@@@Ln@FVRjAHb@R`BBTNlBJ`B@ZJjBFnAHpBN~BJpAL|AN`BP`BPvANjAHj@VlBF^j@jDDPF^XdBLp@Lr@F\\BRd@fCR~@Lj@@D^dBv@zC\\lAXbAJXr@`Cj@bBTj@^jAZz@pAxDz@~Bd@rAtAbEfChHh@xARj@?@j@vATf@Vh@l@nAXf@LXfAhBp@fApAbBRXJLPPp@t@FH\\\\r@p@FF^\\LJn@f@JHr@f@`An@DB|BlA`@TbB|@^R`Bz@dAj@^RbAh@^R`@RdCpA?@^RbBz@`@TbBz@`Ah@bAf@^TbBz@`@RzAx@h@VlCtAbB|@bAf@^R`@R~@d@b@TlCvAdB|@^R`@T^RbAh@`Af@bB|@`@R~CbBfBx@vExBdAd@`A^`@Nz@Zj@R`@L`DdAxGfBFBb@Jb@HfBb@b@J`@J|A\\JBb@LhCr@B?\\P`@P`@PbBz@B@jBlArA~@HFtAjAZXzBnBn@l@tHvGjB`BtEzD?@^ZzBlB\\Zx@p@b@^zBnB\\ZHFv@p@ZR`@Xr@d@pAp@pDzAZL`@PzB~@~GnC`Br@`Bp@lDzAVJHDdBr@fBt@LFpFtBbBn@PDpA\\x@PJBVDb@FRBp@Fb@DB?bAHb@Bb@D~@FrBNJ@VB`@Bb@BjBLfAFl@DXBb@BdCN`BTlAZx@VbA^tAt@?@`BbA`@Vl@^RJ`Af@JDTJbA^`@PD@~@Vb@Jh@NZF`@JlCn@dAVTFJBr@Nt@T|@\\`Af@hAl@^R`Ah@bB~@@?`B|@`@Rh@XrBp@zA\\fAJH?hDRb@B|DR~AHb@Bb@BfAFlCL@?h@Bh@BxEN`@Bb@BjBLz@FH@vBRVBXDr@LbCp@`@NfBl@B@\\N`@PRJnBfA^Xr@f@~@p@j@f@FFp@n@z@~@pA|AbApA\\b@v@`ArAdBv@bAZ`@TXhG~HjJrLV\\nDnEZ`@v@bAlCfDrArAn@l@`Az@x@n@l@b@x@f@z@b@TJrCjAlGtA~A^@?b@FdAP@?`@Ht@NNDb@H~@RjAVb@Jv@PrAXbCp@h@Rx@`@n@\\XP`@XvB`BhBdBlAtAV\\b@t@JNhAdB^l@dBjCFNRXxBlD^l@nAjBbAzAl@z@hBpCxBlDdBhChB~Ch@hAh@rAr@|BXhA\\|A@HH`@Lx@Hl@Dd@D`@JfADb@BNFt@H|@Dj@Ft@X|CFt@f@bGFx@PhBV|CFt@X|CNhBJhAXjDLfAHr@DX^fCJh@Lp@Ln@d@tB^tA\\lAh@vAVv@b@~@`AtBf@z@h@`AlAdBdApAz@z@RTlAdAxAhAlBfAbAb@vAf@dAV@@b@HfAV^JdCh@h@Lb@H~InBjDr@dATb@JxX`G`E~@\\Hb@JfAXrAXx@RhAVhATJB`@JrEbApEbApIlBdGnAvDv@d@H`@JhB`@b@J`@JdATb@Jb@J`@HdAVfAT`@Jb@H`@Jb@J`@H|HfB`@Jb@HdAVb@H`@Jb@JtBd@TFb@HJBdA^v@XRHbAd@hAl@DB^TXPt@j@LN\\\\JJPRx@`AZ^Z`@x@`AZ^rBbCjCfD\\`@rAbBZ`@x@`AdEjFZ`@Z^Z`@x@bArAbBZ`@tAbBrAbBfAtAnKxMX\\v@`ABDXXhAhAlB|ABBvAx@f@Xj@ZvAf@fA\\v@Pz@N|APjAJfBPbAJf@Dj@F\\FRBx@R|@TlBr@pBbA`BbA~ArAnBnBx@~@~BjDn@bAXb@fLlQdCtDhBrCt@fA|F|I`A~AnCfEhBrCXd@Xb@T^BBZd@d@t@d@n@z@fApAlAlAx@Vb@HHj@Zj@TB@j@PLDHBd@LTFPBn@FD@L@TBX@d@@j@A@?|@GFAb@EFAXEfAQ`@IjCc@ZQPKn@i@rBi@fBe@nEmAtFoAlCo@`@IhBc@b@I`@KrEeA`@Kb@IhCm@jBe@`@Kb@MdAWDA~@QDA\\ELCTAf@E\\CZAF?b@?P?P?V?n@DF?ZD^BB@b@FRDf@Nd@Nf@N`@PHDt@^B@b@Tl@`@lAbAVTDDdB`B~CzCbOvNtIjI\\ZFFx@|@nArA\\b@Xb@V\\|@`B~BlFzH~RvGvPfApCvAvDDNLZTj@JRj@|A\\z@b@hAj@xAn@bBRj@Vn@Pf@Th@lCbHFN|@bCpKbYn@dBXt@\\t@BDTd@@BVf@DFRZZd@BDr@|@JNNNz@|@fA`ArAz@|@b@bA^j@L`@JPDl@Ht@LVBZDF@z@Ll@JfANb@FhBXb@F`@Fb@HlC\\b@Fb@DfANhBTb@FPBn@HZBD@d@BB?`ADJ@n@@J?|@Bb@@b@@dABhCDj@@b@@b@@b@@b@?\\@D?b@@b@@b@@b@@xFLL@T?b@@jBDb@@b@@b@@jBBb@@H@|@@b@BfAB|@@H@b@Bb@@b@BD@\\@J@V@F@XBD@ZD@?^HB?dATdARb@Jv@NLDb@Hb@Jn@NdE~@dARjAT\\H`@JfATjAXrGrA@?hCl@h@L~@R`@JfAT`@Hb@JLBTD`@HJB`AV`B\\D@v@JH@b@FF@\\BV@F?N?x@@v@BhE@jDBjC@B?b@@b@?fA@b@@Z?F@b@?jB@b@@b@?`A@D?vEBfA@b@?p@@x@@nC@b@?b@@jGBvEDjBBb@?fA@b@@R?vA@b@?j@?~@@jB@r@@dFDdB?b@Ab@?dE?vE?@?`@?nCBfA@jB@b@@fA@b@?r@@~A@vB@b@?V@b@?pC@b@@jB@b@@fA@fA?b@@bEBlDCpA@lA@`BFlADpAHhC\\r@Ld@Jx@NdAR\\H\\HVHNFj@Rh@Rb@Nz@\\r@VNFbA`@LDTHdBt@tBv@r@VbA^rAh@`@P`@P`@N`@PbAb@bCdAjAj@"
                     },
                     "start_location" : {
                        "lat" : 48.8997142,
                        "lng" : -57.90787419999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "31.5 mi",
                        "value" : 50639
                     },
                     "duration" : {
                        "text" : "2 hours 52 mins",
                        "value" : 10320
                     },
                     "end_location" : {
                        "lat" : 48.3910352,
                        "lng" : -57.6988006
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNL-480 S\u003c/b\u003e (signs for \u003cb\u003eRamea Ferry\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBurgeo\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yragHfctbJ?wB?u@?cEDiANwEBu@FkBFkBF}BBc@Bu@Bu@Bu@Bu@Du@Bu@FkBBu@ViH^uDFq@?AZcBLq@Ls@Jq@Lq@Jk@@ERgBJs@`@gDFuC@u@Bu@@u@Bu@?K?i@?kB?u@?w@AwE?kB?w@?kB?u@?u@?eI?eAE{AMyEGaDCu@Cu@Au@EmAIuFGyEAu@CkBAAEmGAu@AeCNsF?QNwAHs@LiARoA@CNk@b@}AVaALYxAiDTi@xAiDj@uATi@j@uAp@aBJc@`@}ABIBk@Ds@Ds@?ADaD@u@@mB@u@BkBFoGHcIHoG?u@BkB@Y?[?w@?}@Em@Cs@Ek@?IOcB[{AEIg@yASm@EKO_@k@sAUk@Q_@CIWg@gAyBUa@AE{AgDIQMWUg@Wi@m@sAUi@Ui@Wm@Qk@Sm@Qm@A?YcBMq@CMEe@KiBAK@i@@u@BcBLgDJu@Hs@Hk@@GJs@Hq@DYFYLq@XcBNw@Ni@Pm@xBwHX{@Tk@z@gCRk@Rm@FQJYPo@Rm@Pm@v@iCJ]DQNo@Po@No@Li@?GFs@Du@Be@?OAu@CmAA]Cu@KaDOwEMaDCu@Cu@Cu@Cu@GkBCu@Cu@MaDGiBCu@Cu@Cu@Cu@A_@?U@u@DcD@kB@u@BkB@w@@u@?IQ}AEe@CMg@wCKq@?A[aB]kBg@uCKs@GWm@qDMo@Ms@]qBIc@YeBG[EUk@sCWqAc@sB]aBOq@Oo@Mq@ESG]SqAMgAK_ACi@Eu@?A?{A@sB@EDu@?GFaABa@Hw@\\aBNk@Jg@BGTk@JYHQZ{@d@cA^y@NUfBuClAoBVa@^c@~FiHZa@Z_@tAcBx@aApBeCv@aAZ_@\\a@Z_@DGVUz@y@xBsBRQHK\\_@Za@Z_@r@{@bB{Ed@mBPo@XgAb@}DBk@HkBJaDBu@PwEBu@Du@J_DBu@Du@Bu@@]JkAHu@XsC@GLq@h@uCLq@Lq@Nq@Lq@Hc@BMJq@Js@p@iEBML{AHs@PiB@MBe@Bu@Du@Bu@Bs@?AJwE@u@Bu@?a@?SAw@EkBCkBAu@EkB?ASeBUgBSgBKs@]sCIqBCu@KiC?WAu@AmB?u@Au@?u@Au@AcDCiDBcB@kBBmB@u@BkBBgCHeCFkB@e@BOHs@Hs@`@yC@MPyAHs@h@oEHs@Hs@h@oERgB^{CHs@Fe@FcADu@Bu@Du@P_DDu@P_DDu@?I`@cLDu@JaDBu@Du@FkBRsFR_O?Oj@}DVgB@O\\oAt@mCPm@`@_BdA{DLc@BKNo@bEaQ?AHu@Z{CFu@RkBb@iJ?IBu@FkBDkBBu@@u@PgG?E@u@@kBBmB?u@BkB@kBBmBBaD@u@@u@?u@@u@BeDJoG?cB@cB?mAAgAAu@Cw@Cy@AUAYC[C[Em@G}@CUCc@Iu@AOC_@CUEc@Ek@CYAMEe@AAEq@CSCa@CWGk@Gu@Ec@AMEi@Iu@Eo@AEGm@?AEm@Gq@AIASC_@AAAa@AYC[?]?e@?C?c@?a@@]?G@[@a@De@?GBa@Da@Fi@Hm@Ji@Pw@R{@x@yDzDiQNo@^aBt@gDf@iC\\cB\\aBLq@Lq@Nq@Lq@No@Lq@Lq@Nq@Ls@d@{CP}A?CBu@Bc@BgA@Y?[D_I?E?gCIsEB]P}DPkAJs@Hq@\\}BFYPq@^_BdCaKNm@No@`@_BNq@RgBTgB@K?g@@w@BmDKaG?OCe@GkBCk@@I?u@BmB@u@@gAh@kFNy@Lq@v@gELq@?AVcBXeBZoBb@}FFcAFmJ@u@?u@DwEH_P@u@?u@DwEByEDeIJ}O?u@@u@@u@?u@@u@?w@@kBDwE?u@@w@?K@_B?u@?e@@O@u@Bu@@g@@M^yD`@wCb@{Bh@yADML]b@kAlAeCNWHMvC_EnBoBnBoB`CiCn@m@`B_Br@s@\\]\\]\\]@A\\Y`A}@XW\\[f@c@VOhBaAxBw@h@ShC}@FCbDiAVKnAe@`@OPG`C}@~Bq@bBg@pBu@x@Yx@[j@Y^Sr@]tAmARUvAaBXa@Za@b@o@N[Ti@Te@@CTi@Ti@JUJSj@uATi@Ti@`AaCTi@Tk@Ti@Tk@^}@JUVi@Ti@Vi@Ti@Vi@Tg@^{@NUnAmBr@gAZe@FIRS\\]\\]z@{@`A_Al@gAhAsBDGPa@Vg@Vi@Vg@Te@@Ab@}ARm@hAwDL_@DOt@kCPm@Rm@xAiFd@}APm@b@}AhAyDLe@~@uEFm@RgBBMBe@Fu@Ds@Dc@?gA@u@?w@?OIyAIyACOYeBKq@a@eBiAwBo@qAWg@Wg@Wg@Wg@eAqBcD}FYg@We@Yg@q@kAYg@q@kAq@mAkAsBuCiFq@mAYe@q@mAwAiDWk@Ui@GQG]Kq@Ks@Kq@Ii@AICu@Cu@Cu@Cu@Cu@AK\\gEFs@Fu@Fs@B[?Y@u@@kB?u@@u@?w@@u@?ICcG?u@CoGAkB?u@?w@EqLAaDAu@?g@AMCu@QwEEs@Cu@Cu@Eu@GsACWGs@Is@QgBIu@m@eGIs@Is@?AQk@c@}Ac@}Ac@}AQo@CKIe@[cBYcBMq@Mq@Mq@AIGi@Ks@Ks@UeBm@mEUgBKq@Is@w@aGKs@Ks@Iq@UgBKs@Kq@Is@Ks@Ks@Es@MiBGu@MiBMiBS_DAKCi@GkBCu@GkBAY?[Au@?u@AmE@aA?u@BkB@u@BaDDcDBaDBkBBcDBkB@u@?u@@u@@u@@u@@u@@w@?u@FmGFyEJoLDkDBaD?u@@u@@u@@u@?w@@u@DmG@u@HqL@u@DyE@cBNiDHiBBi@\\oBLq@XeBLq@DS`AgDPm@Pm@Po@Rm@Pm@Po@v@iCp@_Cn@aB~@cCnBgCrAeBJMhI}G|CeCNMJQXe@Ve@Xe@j@_ARm@l@aBVyALq@Lq@Lq@V{A?GBu@DmB@u@DkB@u@JwELmGJwE@u@@i@BKxAsMHs@f@oEJs@Hs@Hu@f@oERgBHs@RgBHs@Hs@^{CHs@RgBHs@Hs@Hs@Hs@Fk@d@iIDs@JkBDu@JeBFq@Fs@f@gGNiBFu@NgBVyCD{@J_BLwDC}AE}ASsBKw@Io@ACW{@w@{Ay@{AYi@We@kAuBAEUa@We@Yg@We@Yg@GMOYYe@Ye@oBkDKWUi@[q@Oc@Sm@Sk@EOI_@Mq@YuAAMa@mDSaCUsBIs@OsAASSgBWaCC[QgB?CQeBGo@WuCMqAK}AEk@C{@As@?u@?Q?e@?[@Y@u@@Q@c@B_@Do@DYBYDYBWTaBF_@FUFYDUF[Nq@DQVoA\\aBn@wCj@mCNq@\\aBJe@BKLo@Nq@\\_B^eBLm@Nq@@ELi@Lg@BGXcAf@aBFSz@eCXw@`@mA^cA\\cARk@La@BKPo@@ELi@BIJe@@E\\{ALq@DMHa@^aBHa@Ry@Pu@@C^uA@CTs@Pe@Rk@BIPa@Xu@Na@Rk@DINa@Rk@BEPe@Re@@C^gAZ}@R{@XwALs@Jq@@ENmAPcBBYLaB?GLiB?ADs@H}@FkBBcA@oAAy@?q@?CCgBCmAEcAKoBAOGq@Iu@Is@AKGg@CUSqAAKUyASsA]oBMw@Ms@?Am@qC]_BMk@AEQm@K_@EOQm@GQK[GMQg@Q_@Si@m@uA]y@e@cAUi@O]]w@k@qAsBoEUi@Uo@e@yAM_@YiA[oAACYaBS}AIw@Iu@AEEu@MiBEu@Es@AESyCEg@AMUcDCo@Eu@C[ImAG_AQmCGiAAi@AIAk@Am@@}@?s@@s@?CFkB?ADs@BWB[Dc@JeADk@TqBFs@Fc@@ORgBTgBHs@Hs@RgBfAkJHs@Hs@Hs@Hs@n@uFTuBHs@Hs@Hs@Hu@RgBHs@\\{Cf@oEHs@\\{CHs@Hs@Hs@Hu@jAkKLgAf@oEHu@lA_LHs@RgBHs@Hu@dAkJPgBz@yH\\{CHs@Hs@\\{CFu@z@wH\\{CHs@lBgQp@eGxFug@\\{Cd@{Dr@cG~@uHFk@@G^aB\\aBZwAfAcDb@aAVg@zAeDhBuClAoBlAmBjFoIFKf@cAVi@Vg@Ti@Xi@dAwB~@qBDIVg@hB{DpAmCt@}Af@cAf@_A^m@Xc@^g@?A\\]JK^[PMROJGRMf@Wn@[fAYXGNCbBSbBUb@G~@KfBUFAb@Gz@KhBYn@K@?f@KZGh@Mb@Ob@Oh@U^QPKDCXQJGRO~@u@@AZWFG\\[VWVW~@cAvA_BDETY\\_@Z]b@g@tB_ClAoAtAaBhAoAt@y@TUFGZ_@VYDEZ_@Z]@AZ_@PS`@k@BC\\e@f@w@Zm@Zo@@CTi@HMJ[j@uAPe@BEPm@HSHYPo@@ENg@Ng@@EPo@No@Pm@?APm@No@zAgGFY^_BPo@No@No@`@}A?ANo@Po@No@`@_BXiADU`@_BNo@t@wC\\wA^aBLi@Ru@BMJa@J]^qAfAaDDOTg@Ri@N_@JUv@yABGd@y@LQXe@FIn@{@LSLM\\]JMPOVWDC^Y^[|@q@XSdAu@PMLK^W^Y^W^Y^WBCZU^W^W^WtCqBHI~@o@^Y~@o@^Y^W^W^Y~BaB^W`BkA\\W^Y^W^YVQfBqA^YNKn@e@^W^Y|BcB^Y\\U`CeBROJI^W~AkAFE|B_BxAeAb@[z@k@r@e@n@]@Al@Yp@YfA[BA^GXEFAb@ID?\\CD?\\Aj@?jD@b@@`@?@?jB@b@@b@?b@@V?rA@b@?b@?`A@D?fA?b@?b@@dA?d@?tDBdA?`@@fA?j@?jDBn@?V@fA?b@@vA?v@@b@?b@@b@?b@?T?tA@b@@`B?l@@jBBH@j@?j@?H?b@?b@CNAf@Ej@G^I\\GNC`@I?Ab@MHCVKNIPGLGXQXQLGx@m@h@c@b@a@b@a@X[BE\\e@Va@DGR]Xe@Vg@FMTe@Rm@N]Ne@f@wARk@Rk@lAwDb@{Ab@}APm@Pm@b@}APo@Rm@t@kCNk@Rq@fAyDV}@\\oARw@p@eCZcBP_AFc@VeBJo@?AXeBJs@Jq@d@yC`@wCb@yCl@kEJs@Js@Hi@VoBJq@VgBHq@VgBBOh@}DHq@VgBl@kEj@mEp@aF"
                     },
                     "start_location" : {
                        "lat" : 48.5100452,
                        "lng" : -58.2713974
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "61.5 mi",
                        "value" : 98978
                     },
                     "duration" : {
                        "text" : "5 hours 15 mins",
                        "value" : 18920
                     },
                     "end_location" : {
                        "lat" : 47.6135824,
                        "lng" : -57.6100489
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNL-480 S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_kjfHnhd_JfBn@VHHBb@N`@Nn@TRFb@L`@N\\Jf@N`@Ll@PVFb@JTDJ@b@Df@D^Ab@Ab@?B?bAIB?bBe@JC~@k@vA_A`DuB`BeA^W`BeA~@o@^U~@o@`@W~@m@`C_B^Ux@i@fBmA~@m@~@o@`@W~@o@^W^U^W`@W@A\\U`DuB^U~@o@`@WTOHG^Y\\Y^Y^Y\\Y^Yx@q@hBgA^O\\OBAv@]l@Sn@Sx@CfAG@?`@@b@Bb@@H?xAXpBz@v@v@^ZDDrApAHFhDhDZZ^`@Z^\\^Z^\\^\\^Z^\\^Z^\\\\LPLLxA`BZZ|@v@\\Z^Z\\Z^V^VPJn@Z^R`ARlAXfBf@b@HdARvA\\JBVBpAJ~@A`@?^Ad@Gp@KRK`@OnCgAZO`@QbBw@LGt@]dCmAbAe@dCmAfDaB^S`@SbAe@^SbAg@`@SbBy@`@S^SbAg@`@Q^SbAg@TKJG`Ae@fD_B`@Q`@SRKLG`@Q`@SdCkA`@S^Qt@]rCwArCwAdCmA`@SbBy@bAg@`@QDEdCmAdCoAbBWXEFAb@Gb@EXEH@b@@b@@b@@N@RB`@Hb@Hb@F@@\\R`@TPLnAr@B@vDxC~AnA\\X^X`At@ZXvGtF\\X^Z\\Z|ApA\\Z^X\\Z^ZZVB@\\Z^Z\\X^Z\\X^Z\\Z|@t@zDbD\\X|ApADDVT^Z|@t@zCfC\\Z^X\\ZzBjB^Z\\Z^XNLxCfCNL^Z|@t@j@d@PJ`@TRJLF^RXNFBb@L`@LRFp@D`AHbBHLCfAIx@GLA`@Gb@E~Da@`CUfAMhAMfBQpD_@jD]FAb@E`@GjBQb@Eb@Gb@E|C[RCx@Ep@GZCj@AtAEjADd@@b@@@?^FfANl@LdAPHBXDl@LVDHB`BXFBXDH@XFdARl@JXF`@Hb@Hj@Jb@HXFj@Jv@NjATl@JXDnAVXDnAVXDb@HPDNBHB~AXl@L~AXdAR`@H@?HBXDj@Jb@Hb@FdAPPBPDr@LfAXF@`@Lp@Rt@\\LDPNd@^z@bARVZb@dAvBLTbAzCvAfE^fARj@Rl@d@xARj@f@xAh@~APf@fB|EBF~@rBNXx@zAVf@JPNPZ^\\^TVDF\\\\b@b@x@h@VPh@X\\Nf@Jd@HrANtANtCDb@@p@?x@BrDDfIMfAAv@ANAb@?b@Ab@Ab@Ab@?b@Ab@Ab@?b@AfACj@?jDEb@?b@Ab@?VAJ?b@?b@Ab@?b@ArCC\\Ab@?b@Ab@AfAAfA?^?B?b@BfAFb@BL?TDxAVNF`@Pl@X~A`At@d@h@\\TTZ`@\\^h@n@LPZb@V^@@Xd@Xf@BDR^Xd@HNLVl@rAl@pAl@rATh@Vh@Th@Vh@Tf@Vf@~A~CVf@h@dAx@`BR`@Vf@n@pAfAvBh@bAVf@DJP\\DJFH`A|BbAzBBDdBvCxA|BrApAJJPNTPj@XXNFBhAj@zAn@d@Fb@DD@\\Bb@DH@X@b@DJ@V?`@?b@@nC@b@@b@?b@?b@@d@?`@@b@@nCDb@?jBBH@|@@rDFfA@b@@P?xADb@@b@@X@H?b@@nCFb@Cb@Cd@EdB_@BA^K`@K@A^Kb@M`@O@?|@q@^YZUzA_B`BiCfBsCNUHO|BaEXe@p@kAjAsBjAsBVe@Xg@Ve@Xe@Xe@Vg@Xe@Ve@r@mAVe@Xe@Xe@|BaEp@kAVe@Xg@hAqBjAuBhAuBtCiFzBcEVe@jAuB|E_JXe@Vg@p@mAXe@Vg@Ve@Xg@Vg@Xe@Vg@Xe@Vg@Ve@jAuBVe@Xg@n@mAp@mAp@mAVg@Xe@p@mAVg@hAsBXg@DItByD~@iAj@aA`@s@TO~@o@JGnBeA~Ai@xAEZAnADJ@TDdAPzAVfBt@vApALNjArAJJZ`@\\^lBxBpDfE@@zAlAr@n@hAh@b@Tb@R^PpB~@fAVRDr@Pt@JnDf@hAFb@BjBJ`@Db@BTBLBz@THD^T\\RdAp@ZZ\\\\LNbBfCP^n@nAl@pATd@Xh@Xf@Vf@b@x@jBtCJLv@bAHLRPl@l@LH`Al@NJnAx@NHPJdHfEZPhEfCbB`Af@Z|CbBrHfE~IbFpBfAr@`@^T`@T^R`Aj@`@TdFvC^R`@T^T`@T^T`@R`Aj@^T`Aj@bB~@`Aj@`Ah@^T`Aj@dFtC`Aj@`@TdE`C^RvCbBl@Z`@RtAr@pC`BxAtA^Zn@n@JH\\Z^\\~AzAfC`DZ`@LP`AxAXb@Xd@X`@Vh@Vf@pCpFVf@JRjBrDxBjETd@|A`DVf@n@nA?@n@nAlCpFpAxBR\\~@zAhApALPvA`BLHbBrAxAz@dAd@`@PPFrBf@D@b@Fd@H^BfADzA?r@IxFi@fAKrCWtFi@xI{@HAhKcAtEe@dAKnCWrD]dAKfAKNC~BOb@CfAE^CjA?j@?XDb@Fb@FnAb@nAd@jCxAf@FjBX~@l@~@l@jAx@RN^X|AlAHFTPbCnBlA|@PLhAz@tA~@@B|AbA|CrBdC`BTPHDhBfAXJNFPFNDr@N|@LrAB|@Eh@Cf@Eb@E`@I\\Ij@O\\QRMbAm@zAkArAwAnAiB^o@Xe@j@eA\\m@rCkFp@mAVg@p@mAXe@n@mAp@oAlDqGrCiFp@mAn@mAXg@Ve@p@oAVe@zAoCtD}GhAsBp@mAhAuBnCaFDGXe@Xc@p@kAd@u@NQv@cAX]@A|@{@HIr@i@HG`C}AjAe@p@SVGl@Qj@O|@S^IjBa@rEcAdAUdAUjCk@lCm@`B_@jJwBnMwCZIb@K`@K`Bc@h@Q`@Mb@OzAg@j@U`@QfBs@zAg@`@MhC{@b@M`@OdA]dBk@b@MxIuCbA]dA[jDkAjDqAdBq@hCaA`@OtIcD`@QhCaAjEaBfBq@`@OdBq@pViJ`@QtIcDfBq@hDqA`@OfBq@dBq@nFqBbAa@jDqAbAa@dBo@dAa@xKeE`@OvIcDdBq@`@OdBq@hCaAdBq@hCaA`@ObAa@jDqAnFqB`@QdBo@bAa@b@OlFsBhCaAjDqA`@OdBq@rHsClEcB`@ObA_@`@OhCaAdBq@fBq@tIcD`@ObAa@dA_@fCaA`@Q`@OhCaA`@OzLuEb@O|MgFhCaA`@OnFqBtIeDbA_@`@OfBq@nFsB`@ObA_@dBq@b@OtIeDdBo@jDsA`@O`@O`@OfBq@fBq@bBs@h@Ut@q@^YxCiC^Y|@w@zBkB|@w@TSfD_DxAwAvBsBvCqCxAuA|@{@z@y@jAgApAaAZWr@k@|Aw@rAq@FCz@Wx@WnAYB?fAOl@I`Fg@`Fi@rD_@bCYfHu@LCTAfGq@zAOb@GzC[TCb@EnCWb@E~@I~BW|AOlCYTCjFm@jFk@DAdAKxAQbD]fBQ^CB?hBSfAM\\CDApD_@ZEzBWpCWz@GfBMB?lCSbIk@hBMfAIzFa@nM}@jU_CfKeAzPeBF?dCWjBQb@EtEe@jBQ`@EjBQ`Iw@fAK|Go@xFo@`@EdJaAtEg@b@EdGq@jK_Av@O`@InAWz@]lAc@hAq@zAsA\\[vDgDzAsA\\[vDiDtF_F\\[|AsAzAsA\\[\\[zBoBvDgDtEeExBoB^[zAsA\\[^[zAsAz@w@nF{E|BgB^[\\Y^Y^Y|@s@|AoA~@s@\\Y^YZW|@_A\\]z@{@\\]z@{@\\]\\]vA{ABAX[x@_AZ_@\\_@HIPUlCeDZa@Za@t@}@jCgDfEcFdAoAfAuAZa@Za@t@_Az@aAZ_@z@aAZ]Z_@Z_@NQ|A_AvAo@~As@BCfBo@`@Q`@ObA_@?A`@QhEoBh@U|BkA?A`@QdCgA`@Q`@QXMFC`@Q`@QfCeA^[^Y\\Y|@s@nCiCxAoBZa@BCnAaBdA{AJMr@gAZc@Vg@n@oAVg@Vg@fAwBn@oAn@oAVg@Vg@j@gA\\o@~A}CVg@Vg@p@mAVg@Vg@Vg@Vg@Ve@Vg@Xg@fAuBVg@n@oAp@oAr@wAl@qAVg@Vg@Vg@Ti@Vg@n@oAdAyBn@qAn@oATg@n@qAVg@Vi@Vg@Tg@Vg@Vi@Vg@l@oAfAyBdAyB~AaDd@aA|@kCBIRm@Rk@Pg@Tq@Pm@Rm@J]DO`AmDj@gB@El@iCNo@DOJ]Rm@Pm@Pm@Pm@DMd@gADGP_@Ta@v@mAHOn@m@\\]RQnA{@`Bi@XIj@Mv@Oz@C~@HD?\\Dh@DZB|Gt@b@Db@Db@Fb@D\\DjEb@xBVb@DfALv@HZBx@FL@TBjBNL@TDL@RDzAPNDLB`@JTF`@HRFNDJFTF`@PLDZLnAp@JD`@RbAf@^PpBbARJJDTL^P`@RLFlB~@HD`@R`@Rl@\\^Rt@`@l@ZvBjAVLh@X`Ah@`@RJFTLJFRJ`Ah@LFRJl@Zl@Zf@X`@Rl@Zt@^LFRJ`@R^RLF`@RRJ^R`@R`@RJDTLB@FBRJ`@R`@R^RLFRJ`@RJFRJn@ZRJ`Af@`@RLFRJ^RRJZNRJ^RLFtAt@n@ZRJ`Af@`Af@`@RLFvC|AFBDBRJ`@RJFRJLFt@^^RbAh@JFRJ`@RdCnA^RbAh@ZNd@V`@R^RLFRJJFt@`@LFRJ`@R`Af@`Ah@`Af@n@Zr@^bAh@l@ZRJ`Af@nAp@t@^`@R`Af@JF`@RRL`@RJFNHB@n@ZRJ^RLF`@TRJ^R`@RLFRJJFRJ`@R`@TRJnAn@^RLFRJ`@R^T`@RJFRJ`@Rl@ZRJJFv@^JFTJ^R`@R`@Rl@ZRJ`@Rf@X~C|AnAn@`Af@TL`Af@JFRJl@Zt@^LFRL`Af@nAn@t@^rDlBRJ^TD@f@XdCnAtAt@`@R`@RbCpAn@ZRJ^RjB`Az@b@JFbAf@RJl@ZRJ`@R^RnAn@t@^JDTLLFRJ^RbAf@JDxC|ALDRLnAn@RJbBz@JFRJLFtAt@`@R`@RJFRJ|@d@DBl@ZRJbB|@bBz@`Af@LFr@`@HDxAt@`@R^Rn@\\RJvAr@XHTFLDr@Rd@Db@FN@v@DL?b@BTA|@GHA`CWl@S`@Q`@OTIJGLEtAq@`@W`@UJGr@c@`@U^UJINIBA`Ak@LGRMJGRM`@Sl@]?AvAm@`@SJE~As@XKdAa@bBo@@ALERG`@Ob@MLERIJE@?RGdA]`@OLELEDCLERK`Aa@@?LGxAo@JEPMl@_@RMZSbAu@^Y@AFIPSJMl@s@xAeBV[Z_@x@_A`AkARUf@m@lB{BBEPQJKPQ\\]HKPSJKPQXYNMRQJIPO\\[^[JIHIFE^WLIRO^WJIRM@A\\U~@q@JGrCqB^W^Wj@a@RMj@a@ROjAy@`Am@^U^WHE^WzAcAjA_@bA[VIJAb@C\\CDA`@Cb@Eb@Hd@FhAP~@XPFbA`@dBtA`BzA|@x@\\Zz@v@NLNNrEfE\\ZDDpCjCtCrCz@x@z@x@\\\\z@x@^\\xAvAtCpC\\\\TRFHxBrB\\Zz@x@\\\\\\\\z@x@zAtAnGdGtArABBvClC|@x@\\Z\\Z~BvBt@t@xAvAp@n@f@h@\\ZxBxBX^Z`@v@bAf@n@NPdCbDBDx@`AZ`@v@`AnA|AxA`B^`@x@|@^V\\X~@n@@@^Tp@^NF`@N`A\\B@`@NbA^HBz@Rb@L`@Jb@JdAXlDz@|@VF@b@JdAXt@RtBp@RHn@Z`@P`@RHDTP|@r@^XFFrElDp@h@hDjC^Xz@p@`@Z^X^X|AlAxAfAvGdFFD|AlAj@`@r@h@|AlAjAp@jAp@p@VXJFB`A^@?`@Nb@Lr@TNDjBl@^L`@Lv@VLD`@JzIhC`@LdAZnA^VHdAXdCr@D@|EtA|Cx@lCr@NDRDdAT@@`@Fx@NJ@b@F|ARbBNbBPXD~B^n@TZJjAb@ZJD@`@P`@P~Ap@D@`@P`@PbAb@ZLD@`@PbAb@bAb@pD|AVLbAb@dBt@`@PzB`ApBz@jF`C`@PbAd@^P`@P`@P`@RbAb@LFRHdCfAbAb@`@PbAd@`@P`@P`@PbAb@dBt@d@T\\J`@LXJj@P`@NHBz@Nb@Hn@JTBhBH@?dBGh@Gb@E|A]HC`@Q`@OpFmBNEvAg@`@M`@OdBm@dAa@bA_@`@OdAa@`@O`@OfCaAb@O`@O`@OdBq@VIHEb@ObA_@`@ObAa@`@OjDqAbA_@`@OfBq@n@U~DyA`@OnFoBfBo@`@O`@O`@O`@OjDoA`@OdA_@`@Q`@O`@ObA_@hC_A`@ONEPIfBo@lEaBbA_@pGcCDAZMbA_@fBo@dBq@d@Q\\Or@[p@[TOHE`@S`BaAzAsAXWBE\\]r@w@~@eARU`@o@Xc@HKbAcBVi@pBmEj@sAdA{BlCwFl@oA|A{CfAaCVg@Vg@Ti@n@oATi@|AaDdCmD|B}Eh@y@fAaBFIz@}@LMNK`Ag@`@UHEjA]jA_@n@G\\CBAb@AJ?r@Cj@?nCAb@AjB?jBAb@AN?bD@fA@b@?b@?b@@fA?b@?b@@rD@b@?f@?bA?rD?jBAfA?b@?nC?b@?b@Ab@?nC?fA?b@?`@Ab@?b@?b@?b@?b@?b@?b@?b@?b@?b@AfA?b@?b@?dAA@?b@@fABX?H@b@Fb@DPBPB`@Fb@HPBPD`@JPD`AXRF`@N?@`@RPJt@^XT~AjA\\XFDv@l@^X|@p@HFTP^V^VNJl@h@^Zt@n@FD\\Z^X|@t@?@^Vt@j@tAbAp@d@^T^VFDz@`@b@T`Br@RHx@PZH\\HB@b@Hb@JLBRBN@b@Ft@F@?b@@fADb@@b@@b@@b@Bb@@b@@|GRb@@fADbITjBFb@@L@v@O`Di@NG`@O`@Q`@O`@ObAa@fCaAhCcAbA_@l@W`C[b@Gx@K~DJdAN`@Fb@FlBZhBXPBr@JfAPt@Lr@JxATr@JhBXb@HfAN`@Hb@Fh@H\\FnDl@RB~AXbC\\b@FRBN@xARNBNBzARPBr@JfALPDjAN`APr@Jb@HfBZhAPdARfAP`@HF?`BXb@HH@nCd@VDtAVRFn@Rv@TJDhDfAbDbADBZJ~Aj@h@PrAf@t@TnBp@XH`@LRFLBb@L^Jd@Hx@Nn@Jb@FHB|@LhBTF@dDb@B?b@Fb@F`@Fv@JxBXTBLB`CZJ@jC^@@b@Db@Fb@Dx@JLB`@Fn@Hz@L`@FPBt@J`@D@?b@F`@FTBp@DL@TAb@Ab@AVAJCz@Ol@MLCt@[RIn@]LGf@c@d@c@@?Z_@Z]HKb@k@HMX_@?AVg@Vg@BERa@Vi@Vg@l@oAl@qAVg@tBkEL[FK|AcDVg@l@qAVg@l@oAn@qAXo@Ra@Vg@Tg@|AcDjCqFLWfBsDVg@|AaDTi@Vg@l@mAXg@Zi@t@qATYt@eA`@k@jA}AZa@FIRUZa@Za@Za@FKn@w@rAcBnBeCZ_@Za@Za@Za@Z_@Za@Za@Z_@v@cAZa@Z_@v@cAZ_@Za@Za@x@aArAcBrAeBZ_@Za@Za@Z_@Za@Za@Za@Z_@rAeBv@aAZa@Z_@Za@v@cAZ_@Za@pBeCZa@Z_@Za@Za@Z_@Za@Za@Za@Z_@Za@v@cAZ_@Za@v@aAZa@Za@Za@Z_@Za@Za@Z_@Za@Za@v@cAZ_@Za@Za@Za@Z_@Za@v@cAZ_@d@m@l@w@Z_@Za@Za@Za@Za@Z_@Za@Za@tAcBv@aAV[BEZ_@PSv@aAPUnBeCZa@Za@Z_@Za@Za@Z_@Za@Za@v@aAZa@n@w@zAoB\\_@Za@dCaDpCkDZa@Za@rAaB\\_@TWFE^WHGTO^S@A~@Sf@GLCl@Cn@?D?\\D^FB?b@DVDHBb@FlAT`BZVDbGfAb@H`@HJBVDb@HdAPhB\\b@H`@Hb@H@?`@H`@Hb@Hb@H`@HD@\\FhB^b@HF@XFb@Jb@H`@HPDPD`@LDBf@RTJPHLJ`@Tp@b@l@d@ZV@@^X^XFFVN|@p@BBZTz@l@BB\\Z^Z\\Z|@v@RPh@b@fA`ARN\\Z~@x@ZX^ZFFTR\\\\NLLLZVB@^TB@\\PFDXL^R@?`@Lb@Nz@Pr@LZD`@Ff@F^Fb@D`@F@?`@Fb@Db@Fb@F@?`@H`@Hb@HJBTFdAX@?^NXJHB`@NJDTL^R^R`An@HFTN^X^X\\V~@r@^VRNh@d@^X\\X^X?@\\X^Z^X\\XHHt@j@XTBB~@r@HFRN|AhAx@f@HD^TLHvDrB`@T`Ah@`@R`Ah@?@^R`@R`Ah@^TfE|BRLJDbB|@^T`@R`@R`B|@dDfBZNDBtAt@LF`Ah@JFRJ`@PlAZZH`AVxB^VD`@Fb@HZDFB`@Jb@J`@JB@^J`@Nd@L\\Nb@Nt@VLDhBp@^N^N@?`@P\\Lb@X^Vd@XXR`@Tl@`@p@^`@VPHNF\\NB@`@PHDVH`@LFBZH`@L@@`@H`@HD@\\H`@HLB~Bf@RDLDb@JXHF@b@L\\HB@`@R`@PBBZPJHTLRJJJ\\X`@\\ZXLNh@h@@@Zb@Z`@RX`@j@h@r@t@bAh@p@HJh@l@DDb@d@f@d@LLZXhAt@^Td@Vv@\\FDXLf@TXL\\Nt@\\r@^\\TPJNLd@\\r@j@`@^b@^VXb@f@r@t@XZ@BhAlAd@d@b@`@ZXB@\\V^Rp@XRHD@VHd@HZFH?`@@d@Cp@CpAG`AG`AI\\AZ?@?f@@^FXHF@`@LD@^PVNBB\\T\\Z^`@j@n@h@n@\\\\BDVZZZ\\b@RTj@h@XTNJj@`@RLTJh@VTFPFh@Jd@Dd@FD?XDH?b@?`@Al@EXEJAVGFA`@O^OZQFEVOHETO`Ao@^WLIpA{@p@c@NINININGPGJCVC@A^@@?V@JBNBRBD@XJXLFFHFRP@@Z\\@@Vb@DDTl@JX@FHVDVJp@DXDVJp@DVPlAF\\XjBBHFVHV@DPd@@BR\\RVJHNJNLHH^NXF@?XDF?F?N@TEREBAXKFEXU^]R_@P]FOHYFSH]BQDSF]@EFk@BQDa@Di@@IHs@@MDe@TwC?CHs@@IFg@BOFa@Je@BKNo@FYVw@BGTk@@EZs@NWLUHOT_@BEXc@Za@Za@FGRWNOLOx@{@V]TYDGZc@Xa@FKbAeBPm@H[JY?ALq@BKHe@Fa@@ODe@@MDm@?EFs@?AFm@?CHs@DYBYHq@@GFk@Jq@Hs@Hq@DYBYTeBR}A@GHq@NgAF]Hq@Jq@Js@PqABSHq@?CHo@DYBWJs@Fc@VeB@KJs@Hq@Hs@D[BUF[B]Ng@Po@Pe@LSLSTWHE^WBC\\QZGDATEPAP?J?H@XFB?XHD@`@JTFLB`@JNDRDXHF@RBV@T@DAZEFCPENI@?PKJIJIPSNSHOFINW@CVg@Tg@NYFOl@uATe@N_@DITi@BEPk@Nw@Fe@@QBa@?k@?ICu@CcAAu@Aw@Bm@J{@Ng@Re@Ti@L[Ji@NkA@WBk@JmB@e@Bs@Bq@Fw@FgABa@Bk@?G@u@AYAYCu@EkA?]A}@DuA@KDoAFm@?EBi@B_A@Q@c@@[Fu@Nu@Ng@@Cj@mA@CPi@Pg@@CTc@@CJu@?U?EAMEe@AIKg@Mo@G[Kk@Ig@AIAKGs@CMEe@A_@Cs@Cu@Cs@EiBAa@?iA?[BWFk@@GB[@W?C?WCWCMCIKSEMAEIMISM_@Ka@Is@?]Au@?OBuA@q@Fi@NY^k@lAkAZ[LS`@m@`@o@Zs@^m@^i@\\c@PSJKj@i@b@_@"
                     },
                     "start_location" : {
                        "lat" : 48.3910352,
                        "lng" : -57.6988006
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 mi",
                        "value" : 560
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 136
                     },
                     "end_location" : {
                        "lat" : 47.6088467,
                        "lng" : -57.6093838
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCentennial St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{oraHx}r~I\\Yf@g@h@c@JERKVKDCJEVIJ?H?VHRFRNVVRPLBRB@A^CbAEB?`@GJAVG^IBAl@Q`@MLETCPCP?N?P@NBTCJCTI@?\\MBANCNL@@X^DD"
                     },
                     "start_location" : {
                        "lat" : 47.6135824,
                        "lng" : -57.6100489
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.8 mi",
                        "value" : 22249
                     },
                     "duration" : {
                        "text" : "1 hour 2 mins",
                        "value" : 3690
                     },
                     "end_location" : {
                        "lat" : 47.52269700000001,
                        "lng" : -57.38741049999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eBurgeo, NL - Ramea, NL\u003c/b\u003e ferry",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "irqaHryr~Ij@f@X@`@@Zc@PS`@}APiBGeD[eDsAuMsCyPCU{A_JaAuFsB}LqGoc@aCiPAqRNw@bCkS~GcWzMy\\z_@yk@pa@ai@hn@wx@bj@gs@deAi|AhmCqpEhD_Kpb@ukAxcAu~Bnj@axA`a@wdAtb@w}@rMw\\dEoNZgA|AqKf@cSCeA]kPgBmPg@_CsBcK_KgY{@cC{KcVSe@mJwPyFkHeC_CgAeAcEkByHbCsFdB"
                     },
                     "start_location" : {
                        "lat" : 47.6088467,
                        "lng" : -57.6093838
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15.3 mi",
                        "value" : 24548
                     },
                     "duration" : {
                        "text" : "1 hour 7 mins",
                        "value" : 4015
                     },
                     "end_location" : {
                        "lat" : 47.5890183,
                        "lng" : -57.1015558
                     },
                     "html_instructions" : "Take the \u003cb\u003eRamea, NL - Grey River, NL\u003c/b\u003e ferry",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "{w`aHhng}ItByDdEyH@A[_JmCeIa@qA{GuQaCmCcG{GgAoAyNeNgPyM{CeCKGsB{OaBiMmByNwBmPqF}a@wHal@A]oD{lAg_@}gMqJkcD_SohEm\\kyE{]abCiWq~AkAkHwPg}@eBmJgGm\\{SkOaAJgAJgAJ{Ed@}@\\}LtEsBv@oGb@E@wBcB_@Y{EsD{EuD}DyCe@_@wDmC_BiAc@[o@eAwCaF_A_Bk@qBiAwDUy@yBuAaDsBqA{@MKyCkC]Y][_@[][eAUmCk@a@K[G"
                     },
                     "start_location" : {
                        "lat" : 47.52269700000001,
                        "lng" : -57.38741049999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "22.7 mi",
                        "value" : 36554
                     },
                     "duration" : {
                        "text" : "1 hour 36 mins",
                        "value" : 5759
                     },
                     "end_location" : {
                        "lat" : 47.5779061,
                        "lng" : -56.7451175
                     },
                     "html_instructions" : "Take the \u003cb\u003eGrey River, NL - Francois, NL\u003c/b\u003e ferry to François",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "kvmaHvso{Ib@Ib@IhBYhB[B?ZR`@T^V^T`DpBbDpBvChBFJtAjDtAhDtAjDjArCh@p@jCfDRVFF|@v@xBlBzBnBxBlBz@t@`@X`FbDtClB|Dd@rDb@@?`KiBPE~FwFnFgF|@y@xa@u`@dAcAf_A}cCz{@cvDzj@w}DrWqiBfDin@xq@ieM~M_qE~Uy~HwBopDcw@skFgVqiAeOwr@e^sWen@iq@}GoG_QaP_QaPuDkDsEiEqAoAeDgCyGgFGEy@f@aAj@aB`AeHfE}FlD}@fAkCbDiBzEqCnH}@`Ci@tA_A`Cg@vA{DdK_A`Ci@vACHWP_Ap@_Ap@}@p@A?eAK{CY}AOgAKgAKgAKkLiAiJ}@_E`CgHdEi@ZDnC@t@BhB"
                     },
                     "start_location" : {
                        "lat" : 47.5890183,
                        "lng" : -57.1015558
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "390 ft",
                        "value" : 119
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 47.57841500000001,
                        "lng" : -56.74650699999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eFerry Ramp\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "}pkaH~_jyIeBtG"
                     },
                     "start_location" : {
                        "lat" : 47.5779061,
                        "lng" : -56.7451175
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "owmbHbjscItkAnzBbL`wBvcAuBbeBgBzs@}gAxtAphBhlCrrEvoD`_Ed_L|bSdqFhlN`[plEwuBzoE~fG~xA`_Gu`AhsA_o@j@|hEoyEx|R}mDpsEamEtwC}j@fsCkjDjgA{sFd`Eo`Ah}FgvAljByeEfiEs{DznAkhEt^c|DbiGkhA|eBktC|`@}zEbE}{D{c@i`Dw_BacHt}@saFe@suFxnIcjBq^{uAbUgeEnp@qrEcYogDeiEqhCjj@u`JxjJetDjsI}|@xoGysCzeBg|AblAi{DstBitC|f@}dDdjCgcBl~DgjA|gBsgAcqAsbFalAgpEnrEkqA{eC}aEql@kvDyk@uoBqrEo`A{zCmwAauAu|A}yBccA|Qwy@zdBqgBkbAgnFoy@elAj{CygDb{HcrCbrE_fAt@k_B}AasC`eDs`IjfO}zCbhFeuBtjH|KdwIo|EftHqmBjiHa|@`gH{gAphIjl@~hDvShmKci@f|LmDzzCgsBfb@u`Cx`JsnExaK}aBpiD}rCpuAwmEp~GswBt|MduB`vJb|HdiQd[xwE`fDnsIxcDlfO`pCp}Pn{F~{S~L~fXc`@bwZ_dExzTgbCfkDsl@bxM_pBvhGjOvkEz}AjxOxyBv}NzPlaWocAziD}gDprEm_Jf^wpGxrEguBfuFqj@fzEqSl_Kox@|qPoiChiHsyBjwCn_@~|Cbx@trK|aDjiUmdBrkFuo@vlHyo@lmHfeAtmHiYj~Hhu@~`GaTdcEfKzkGBfhDlgB~zBr_DvfEvhC`rFrpAn{HxBxwCyuAh}@}MnmDe^rnCapA|hBtEjzDhl@|kHlZzeEjl@dhC`nBxiDf}AsdAhhAofCfbAkmB~~BgOdjCbiAhdBzKlhFl~C|tAwRigA`|DffAvzDvs@eVxjBktBt}@}kB|vA}XzjH`wFbmE`lGdqH|gW|aOl_If{N~_MrbBoN|fCl|DvhEh]n|CvH~h@iiBlL_mH|nAycSb^qiG`zBgnHeEodHz]saJh@gsN|iBibL|rB}uCxtDqaAhoC{~DjhEuZfjEpnAdpDvwAdkAtgAbdBczAlfB}d@v_Cb{AjvGhjCjoKu{Fh`NymDxiHo{E~`A}yBdwAfCrkCjtAdgD~oA|kCmz@hyF~vD`vF}GzfEiwAnbFpn@x~Cu~A~wCcnCtwBhcAr{F~cCh|A}hExSy~D|bPcu[`z@o_IwaAycBclC_z`@oqDapPio@_s@xIlMrx@f[l~EmnPt~AeqXc{@ogXyvC_tD}_@gBui@v`Ay}@xV"
         },
         "summary" : "Newfoundland T'Railway",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0 ]
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
