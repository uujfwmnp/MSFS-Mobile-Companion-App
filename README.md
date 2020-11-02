# MSFS Mobile Companion App
MSFS Mobile Companion App is a tool that allows you to control essential aircraft instruments such NAV frequencies or autopilot using almost any mobile device. The MSFS Mobile Companion App is free to use.

### MSFS Mobile Companion App features:
- Moving Map (Open Street Maps)
- NAV 1 frequency and OBS 1 selection
- NAV 2 frequency and OBS 2 selection
- ADF frequency and ADF card selection
- Autopilot with altitude, vertical speed and airspeed settings

Screenshot of MSFS Mobile Companion App in action:
![](images/MSFS_Landing_Inspector_Screenshot.png)


## How do install MSFS Mobile Companion App?
1. Download the latest build [here](https://github.com/hankhank10/MSFS2020-cockpit-companion).
2. Unzip the archive. That's it.

## How do I run MSFS Mobile Companion App?
1. Make sure your PC and your mobile device are connected to the same local network and that your home network is set to *Private* in your Network Profile settings. 
2. Run MSFS_MCA.exe that you've unzipped previously.
3. A Windows Security Alert Window will open when you launch MSFS_MCA.exe for the first time. Allow private network access for MSFS_MCA.exe in the Windows Security Alert Window.
4. A command line window will open, giving you instructions which IP-address you have open in your mobile device's web browers. The IP address will most likelely by something like *192.168.0.XXX:4000".
*Notice: You can launch MSFS Mobile Companion App directly from you PC's browser. In that case, just type in localhost:4000 in your browers's url bar.* 

## Known issues:
- NAV frequencies can get out of sync, especially when rapidly pressing frequency adjustment buttons. Use the "Force Sync Button" to synchronize frequencies with the sim.
- NAV G3000 can only switch between VOR1 and GPS. VOR2 is not available.
- MSFS Mobile Companion App may crash when accessing it from multiple devices.

## Credits
MSFS Mobile Companion App is based on the Python [SimConnect](https://pypi.org/project/SimConnect/) project.

## Donation
If you like this tool and would like to support the development, please consider donating by clicking on the link below.

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CXDDYFUSWA2Z4&source=url)

Happy flying!

