import { useState, useRef } from "react";
import RichTextEditor from "../../../components/RichTextEditor";

//template for echo report
const echoTemplate = `
<div class=Section1>

<p class=MsoNormal>&nbsp;</p>

<table class=TableGrid1 border=1 cellspacing=0 cellpadding=0 style='border-collapse:
 collapse;border:none'>
 <tr>
  <td width=478 colspan=2 valign=top style='width:286.65pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Referring
  hospital/doctor:                                            </span></p>
  </td>
  <td width=300 valign=top style='width:179.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=478 colspan=2 valign=top style='width:286.65pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Clinical information: </span></p>
  </td>
  <td width=300 valign=top style='width:179.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>BSA: </span></p>
  </td>
 </tr>
 <tr>
  <td width=307 valign=top style='width:184.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Weight(Kg): </span></p>
  </td>
  <td width=470 colspan=2 valign=top style='width:282.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Height(cm):</span></p>
  </td>
 </tr>
 <tr>
  <td width=307 valign=top style='width:184.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='font-size:10.0pt;color:black'>&nbsp;</span></p>
  </td>
  <td width=470 colspan=2 valign=top style='width:282.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='font-size:10.0pt;color:black'>&nbsp;</span></p>
  </td>
 </tr>
 <tr>
  <td width=307 valign=top style='width:184.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='font-size:10.0pt;color:black'>&nbsp;</span></p>
  </td>
  <td width=470 colspan=2 valign=top style='width:282.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='font-size:10.0pt;color:black'>&nbsp;</span></p>
  </td>
 </tr>
 <tr height=0>
  <td width=297 style='border:none'></td>
  <td width=162 style='border:none'></td>
  <td width=287 style='border:none'></td>
 </tr>
</table>

<p class=MsoNormal align=center style='margin-bottom:8.0pt;text-align:center;
line-height:107%'><b><u><span lang=EN-GB style='font-size:14.0pt;line-height:
107%;color:black'>M-MODE</span></u></b></p>

<table class=TableGrid1 border=1 cellspacing=0 cellpadding=0 style='border-collapse:
 collapse;border:none'>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Aortic root(mm): </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>RVOTd(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border:solid windowtext 1.0pt;
  border-left:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVEDV(ml): </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Asc.
  Aorta(mm):                                 </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>RVOTs(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVESV(ml): </span></p>
  </td>
  <a name="_GoBack"></a>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LA
  size(mm):                        </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>IVSTd(mm): </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVSV(ml): </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LA/AO ratio:                </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVEDD(mm): </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVEF (%): </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>ACS(mm):                        </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVPWTd(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVSF (%): </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>MV
  Excursion(mm):                            </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>IVSTs(mm): </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LV mass(g) :</span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>MV EF 
  slope(mm):                                </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVESD(mm): </span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVMI(glm<sup>2</sup>) : </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>EPSS(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVPWTs(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>RWT: </span></p>
  </td>
 </tr>
 <tr>
  <td width=260 valign=top style='width:155.8pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVOT HR (bpm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVOT(mm):</span></p>
  </td>
  <td width=260 valign=top style='width:155.85pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>&nbsp;</span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal align=center style='margin-bottom:8.0pt;text-align:center;
line-height:107%'><b><u><span lang=EN-GB style='font-size:14.0pt;line-height:
107%;color:black'>DOPPLER ECHO</span></u></b></p>

<table class=TableGrid1 border=1 cellspacing=0 cellpadding=0 style='border-collapse:
 collapse;border:none'>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>Mitral
  valve</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=314 colspan=4 valign=top style='width:188.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>E wave vel(cm/s): </span></p>
  </td>
  <td width=251 colspan=7 valign=top style='width:150.35pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>A wave vel(cm/s): </span></p>
  </td>
  <td width=213 valign=top style='width:127.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>E/A ratio: </span></p>
  </td>
 </tr>
 <tr>
  <td width=314 colspan=3 valign=top style='width:188.1pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>E wave DT(ms): </span></p>
  </td>
  <td width=251 colspan=8 valign=top style='width:150.75pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>e (cm/s): </span></p>
  </td>
  <td width=213 valign=top style='width:127.65pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>a (cm/s): </span></p>
  </td>
 </tr>
 <tr>
  <td width=113 valign=top style='width:67.75pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>E/e </span></p>
  </td>
  <td width=228 colspan=4 valign=top style='width:137.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>PHT (ms):</span></p>
  </td>
  <td width=177 colspan=4 valign=top style='width:106.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>MVA(cm<sup>2</sup>):</span></p>
  </td>
  <td width=259 colspan=3 valign=top style='width:155.55pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Mitral regurgitation:</span></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>Aortic
  valve</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=287 colspan=2 valign=top style='width:172.3pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Peak vel (cm/s): </span></p>
  </td>
  <td width=237 colspan=8 valign=top style='width:141.9pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>MPG (mmHg): </span></p>
  </td>
  <td width=254 colspan=2 valign=top style='width:152.3pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>VTI (cm): </span></p>
  </td>
 </tr>
 <tr>
  <td width=366 colspan=6 valign=top style='width:219.35pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>LVET (ms):</span></p>
  </td>
  <td width=412 colspan=6 valign=top style='width:247.15pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Aortic regurgitation:</span></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>Pulmonary
  valve</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=390 colspan=7 valign=top style='width:233.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Peak vel (cm/s): </span></p>
  </td>
  <td width=388 colspan=5 valign=top style='width:232.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>RV Acceleration time (ms): </span></p>
  </td>
 </tr>
 <tr>
  <td width=390 colspan=7 valign=top style='width:233.9pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Pulmonary regurgitation: </span></p>
  </td>
  <td width=388 colspan=5 valign=top style='width:232.6pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>PV PG (mmHg):</span></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><b><span lang=EN-GB style='color:black'>&nbsp;</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=778 colspan=12 valign=top style='width:466.5pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal'><b><span lang=EN-GB style='color:black'>Tricuspid
  valve</span></b></p>
  </td>
 </tr>
 <tr>
  <td width=391 colspan=8 valign=top style='width:234.3pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>TV regurgitation peak vel
  (cm/s): </span></p>
  </td>
  <td width=387 colspan=4 valign=top style='width:232.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Peak PG (mmHg):</span></p>
  </td>
 </tr>
 <tr>
  <td width=391 colspan=8 valign=top style='width:234.3pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Mean PG:</span></p>
  </td>
  <td width=387 colspan=4 valign=top style='width:232.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>PASP (mmHg):</span></p>
  </td>
 </tr>
 <tr>
  <td width=391 colspan=8 valign=top style='width:234.3pt;border:solid windowtext 1.0pt;
  border-top:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>MPAP(mmHg):</span></p>
  </td>
  <td width=387 colspan=4 valign=top style='width:232.2pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>Tricuspid regurgitation: </span></p>
  <p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
  normal'><span lang=EN-GB style='color:black'>&nbsp;</span></p>
  </td>
 </tr>
 <tr height=0>
  <td width=110 style='border:none'></td>
  <td width=164 style='border:none'></td>
  <td width=25 style='border:none'></td>
  <td width=1 style='border:none'></td>
  <td width=26 style='border:none'></td>
  <td width=24 style='border:none'></td>
  <td width=24 style='border:none'></td>
  <td width=1 style='border:none'></td>
  <td width=123 style='border:none'></td>
  <td width=5 style='border:none'></td>
  <td width=39 style='border:none'></td>
  <td width=205 style='border:none'></td>
 </tr>
</table>

<p class=MsoNormal><b><u><span style='text-decoration:none'>&nbsp;</span></u></b></p>



</div>
`;

const ResultForm = ({ setActiveNav, onClose, onConfirm }) => {
  const [form, setForm] = useState({
    testResult: "",
    inputTable: false,
    operator: "",
    radiologistName: "",
  });

  const [reportContent, setReportContent] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const handleCancel = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    setShowCancelConfirm(false);
    setActiveNav("overview");
  };

  const handleSave = () => {
    const requiredFields = ["testResult", "operator", "radiologistName"];
    const newErrors = {};

    // Validate required fields
    requiredFields.forEach((field) => {
      if (!form[field] || !form[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    // Set errors if any
    setErrors(newErrors);

    // Stop if there are validation errors
    if (Object.keys(newErrors).length > 0) return;

    // ✅ Simulate form submission
    console.log("Submitting report:", form);

    // ✅ Reset form after successful submission
    setForm({
      testResult: "",
      inputTable: false,
      operator: "",
      radiologistName: "",
    });
    setErrors({});

    setReportContent("");
  };

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["testResult", "operator", "radiologistName"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    onConfirm(form);
  };

  const handleExternalSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit?.();
    }
  };

  const nameLabel =
    form.operator === "Radiologist"
      ? "Name of radiologist"
      : form.operator === "Lab Technician"
      ? "Name of lab technician"
      : "Name";

  return (
    <div className="bg-white w-full flex flex-col py-4 px-[5px] lg:px-[72px] h-full relative">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-[24px] mb-[25px]">
        <h2 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
          New Report
        </h2>
        <div className="flex justify-between gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            Upload Result
          </button>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex-1 max-h-[72vh] overflow-y-auto pr-2 space-y-4 custom-scroll w-full lg:max-w-[60rem] scrollbar-thin-green"
      >
        {/* Test Result */}
        <RichTextEditor
          value={form.testResult}
          onChange={(content) => {
            setForm({ ...form, testResult: content });

            if (content.trim()) {
              setErrors((prev) => ({ ...prev, testResult: "" }));
            }
          }}
        />
        {/* Show error if empty */}
        {errors.testResult && (
          <p className="text-red-500 text-sm mt-1">{errors.testResult}</p>
        )}

        <div className="flex items-center gap-3">
          <label className="text-[#676E76] text-sm">echo test?</label>
          <input
            type="checkbox"
            name="inputTable"
            checked={form.inputTable}
            onChange={(e) => {
              const checked = e.target.checked;
              setForm({
                ...form,
                inputTable: checked,
                testResult: checked ? echoTemplate : "",
              });
            }}
            className="h-5 w-5"
          />
        </div>

        {/* Operator */}
        <div>
          <label className="block mb-1 text-[#676E76] text-sm">Operator</label>
          <select
            name="operator"
            value={form.operator}
            onChange={handleChange}
            className={`w-full rounded-lg border ${
              errors.operator ? "border-red-500" : "border-[#E5E7EA]"
            } bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]`}
          >
            <option value="">Select</option>
            <option>Radiologist</option>
            <option>Lab Technician</option>
          </select>
          {errors.operator && (
            <p className="text-red-500 text-sm mt-1">{errors.operator}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-[#676E76] font-inter text-sm">
            {nameLabel}
          </label>
          <input
            name="radiologistName"
            value={form.radiologistName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full rounded-lg border ${
              errors.radiologistName ? "border-red-500" : "border-[#E5E7EA]"
            } bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]`}
          />
          {errors.radiologistName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.radiologistName}
            </p>
          )}
        </div>
        {showCancelConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-4 text-center">
              <p className="text-gray-800 text-base mb-6">
                Are you sure you want to close this page? <br />
                <b className="uppercase text-red-600">Changes are Unsaved!</b>
              </p>
              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowCancelConfirm(false)}
                  className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
                >
                  NO
                </button>

                <button
                  type="button"
                  onClick={confirmCancel}
                  className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
                >
                  YES, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ResultForm;
