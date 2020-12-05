# MSFS MOBILE COMPANION APP Pyinstaller Instructions

To compile an executable version of MSFS Mobile Companion App using pyinstaller follow these 4 steps:

## 1. Change glass_server.py:

Change line 29 from:

`app = Flask(__name__)`

into:

```
if getattr(sys, 'frozen', False):
    template_folder = os.path.join(sys._MEIPASS, 'templates')
    static_folder = os.path.join(sys._MEIPASS, 'static')
    app = Flask(__name__, template_folder=template_folder, static_folder=static_folder)
else:
    app = Flask(__name__)
```

## 2. Rename SimConnect.dll

Rename the *SimConnect.dll* file into *SimConnect.dllc*.

## 3. Compile MSFS Mobile Companion App using pyinstaller

Use the following pyinstaller settings to compile MSFS Mobile Companion App:

```
pyinstaller -F --onefile --add-data "templates;templates" --add-data "static;static" --add-data "SimConnect;SimConnect" glass_server.py
```

## 4. Enjoy and have fun!
