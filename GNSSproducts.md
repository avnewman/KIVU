---
layout: single
title: "GNSS daily time series results"
classes: wide
permalink: /products/GNSS
author_profile: true
sidebar:
  nav: "main"
#header:
#   image:  /assets/images/Prop_map_sm.png
---

<style>  
.floatauto  {
    width: 23%;
    padding: 5px 5px 5px 5px;
    overflow: auto;
    border-radius: 5%;
}
.Bigbox {
    background-color:#bdb;
    width: 80%;
    padding: 5px 5px 5px 5px;
    float: left;
    overflow: auto;
    border-radius: 15px;
}
.box {
    background-color:#bdb;
    width: 25%;
    padding: 5px 5px 5px 5px;
    float: right;
    overflow: auto;
    border-radius: 15px;
}
.clear::after {
    content:"";
    clear:both;
    display:table;
}
</style>


As of August 2022, the project is operating 7 continuous GNSS stations along the Eastern side of the rift system. The sites are: BNZA, BYAH, KANZ, NYBA, RUBO, IWAW, and KMBR.  All data are publicly available through the GAGE facility managed by the [EarthScope Consortium](https://www.earthscope.org) and processed by routinely by at least two groups.  All GNSS data for this experiment are independently processed into daily solutions by two groups.

 1. Time series including rapid (within 2 days) and final products (available within 2 weeks) are available on each station's [status page](https://www.unavco.org/instrumentation/networks/status/pi/overview/IWAW) and processed by Central Washington University. Individual stations are searchable using their above name. Also avialable at the above site are the raw RINEX data files.
 2. Time series for only final products processed are available at the [University of Nevada-Reno](http://geodesy.unr.edu/PlugNPlayPortal.php).
 1. High-Rate GNSS data, primarily useful for identifying data availability are available through the [Central Washington GPS Cockpit portal](http://www.geodesy.cwu.edu/realtime/data/) and are searchable using their above name.
 1. Time series and rates are further analyzed by Georgia Tech and are shown below. 

## The GNSS Velocities:
We utilize these results to calculate station velocities and displacement, and will use them for subsequent characterization of source processes.  Results are updated daily.

### Daily time series
Below are daily positions and errors showing in a local reference frame determined removing the average daily positions from the 5 eastern-most stations.
<div class="clear">
   <div class="box"> <b>BNZA</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/BNZA_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/BNZA_TS_Common_sm.png" alt="BNZA" ></a></div>
   <div class="box"> <b>BYAH</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/BYAH_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/BYAH_TS_Common_sm.png" alt="BYAH" ></a></div>
   <div class="box"> <b>KANZ</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/KANZ_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/KANZ_TS_Common_sm.png" alt="KANZ" ></a></div>
   <div class="box"> <b>NYBA</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/NYBA_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/NYBA_TS_Common_sm.png" alt="NYBA" ></a></div>
   <div class="box"> <b>RUBO</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/RUBO_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/RUBO_TS_Common_sm.png" alt="RUBO" ></a></div>
   <div class="box"> <b>IWAW</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/IWAW_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/IWAW_TS_Common_sm.png" alt="IWAW" ></a></div>
   <div class="box"> <b>KMBR</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/KMBR_TS_Common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/Common/small/KMBR_TS_Common_sm.png" alt="KMBR" ></a></div>
</div>

 **Note** that the image files may not show up properly in Google Chrome.  You can find them as well [here](http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/). 
 {: .notice--info}

### Velocity Map
Velocity map is shown after removing the daily position average from 5 eastern stations.
<div class="clear">
   <div class="Bigbox"> <b>Kivu GNSS Network</b><a href="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/KIVU_GNSS_common.png"><img src="http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/KIVU_GNSS_common.png" alt="KIVU GNSS velocities"></a></div>
</div>
 **Note** that the above image may not show up properly in Google Chrome.  You can find it [here](http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/KIVU_GNSS_sm.png). 
 {: .notice--info}

### Global reference frame solutions
Daily solutions shown in a global reference frame are available here.  

* [Velocity map](http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/KIVU_GNSS.png)
* [Daily solutions](http://geophysics.eas.gatech.edu/anewman/research/KivuGNSS/plots/TS/small/)  


### Testing below
(I am testing mechanisms to better incorporate images into browsers like Chrome that are not supporting the hotlinked images above)
<img src="https://raw.githubusercontent.com/avnewman/pyGMT-Tutorial/main/Kivu_DEM.png">

 <!-- To fix the above issue with hotlinked images not showing up on Github, I may need to find a way to directly include figures in this repo.  May be done using github submodules. 
 It looks like I will need to turn my repo public before including the results in any github pages.
 https://stackoverflow.com/questions/37638034/private-folder-submodule-in-a-public-repo
 A good overview on how to make submodules work is here: https://github.blog/2016-02-01-working-with-submodules/
 -->