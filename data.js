var APP_DATA = {
  "scenes": [
    {
      "id": "0-sf-19_overview-1",
      "name": "SF-19_Overview 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.1633176920113009,
        "pitch": 0.6180481611628004,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -0.9941190871729404,
          "pitch": 0.8304248302924133,
          "rotation": 0,
          "target": "1-sf-19_overview-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sf-19_overview-2",
      "name": "SF-19_Overview 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.231594661522676,
        "pitch": 0.5574694203683155,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.647447388478679,
          "pitch": -0.23273816068649467,
          "rotation": 0,
          "target": "0-sf-19_overview-1"
        },
        {
          "yaw": -1.0963661546551862,
          "pitch": 0.5686386188415078,
          "rotation": 0,
          "target": "2-sf-19_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sf-19_wellhead",
      "name": "SF-19_WellHead",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.01095595536067151,
        "pitch": 0.7698216779234599,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -0.03789891147274105,
          "pitch": -0.22283676203875302,
          "rotation": 0,
          "target": "1-sf-19_overview-2"
        },
        {
          "yaw": 3.080097587890373,
          "pitch": 0.2378288920503433,
          "rotation": 0,
          "target": "3-sf-19_concreta-pad"
        },
        {
          "yaw": 0.9151035313047444,
          "pitch": 0.3809655456972827,
          "rotation": 0,
          "target": "4-sf-19_pipeline"
        },
        {
          "yaw": -1.5365600521269123,
          "pitch": 0.025082052470992267,
          "rotation": 0,
          "target": "5-sf-19_well-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sf-19_concreta-pad",
      "name": "SF-19_Concreta Pad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.668344238746668,
        "pitch": 0.4136264620099581,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.5990981577854289,
          "pitch": 0.1936386052288004,
          "rotation": 0,
          "target": "2-sf-19_wellhead"
        },
        {
          "yaw": -3.1400025152623563,
          "pitch": 0.1020880643701183,
          "rotation": 0,
          "target": "9-sf-19_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sf-19_pipeline",
      "name": "SF-19_Pipeline",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.10116040192743725,
        "pitch": 0.5313476747012409,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.3137232275348758,
          "pitch": 0.776340851958917,
          "rotation": 0,
          "target": "2-sf-19_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sf-19_well-pad",
      "name": "SF-19_Well Pad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.180656542864856,
        "pitch": 0.20831943229593008,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 2.2334364868002323,
          "pitch": 0.007348413038826607,
          "rotation": 0,
          "target": "6-sf-19_well-pad-1"
        },
        {
          "yaw": -2.581055999302613,
          "pitch": 0.1457929749712772,
          "rotation": 0,
          "target": "2-sf-19_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sf-19_well-pad-1",
      "name": "SF-19_Well Pad 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.2142872075364082,
        "pitch": 0.10534343877519348,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 2.151446372720299,
          "pitch": 0.13461821715058164,
          "rotation": 0,
          "target": "5-sf-19_well-pad"
        },
        {
          "yaw": 0.13558903036205194,
          "pitch": 0.025341122292052987,
          "rotation": 0,
          "target": "7-sf-19_well-pad--ohl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sf-19_well-pad--ohl",
      "name": "SF-19_Well Pad & OHL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.9709557654170293,
        "pitch": -0.05209769304185485,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 3.008229158125862,
          "pitch": 0.15316246995930172,
          "rotation": 0,
          "target": "6-sf-19_well-pad-1"
        },
        {
          "yaw": 0.7045110465569948,
          "pitch": 0.08045659667975258,
          "rotation": 0,
          "target": "8-sf-19_well-pad-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sf-19_well-pad-2",
      "name": "SF-19_Well Pad 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.174409354004502,
        "pitch": 0.4236889955134018,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.979181851060419,
          "pitch": 0.0783292396826134,
          "rotation": 0,
          "target": "7-sf-19_well-pad--ohl"
        },
        {
          "yaw": 1.3602957629966035,
          "pitch": -0.0066878836398007735,
          "rotation": 0,
          "target": "9-sf-19_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sf-19_well-pad-3",
      "name": "SF-19_Well Pad 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.6275386483697343,
        "pitch": 0.08682107070564982,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.0168091038835225,
          "pitch": 0.22692358450389882,
          "rotation": 0,
          "target": "8-sf-19_well-pad-2"
        },
        {
          "yaw": 2.378087185323091,
          "pitch": 0.05272953263545688,
          "rotation": 0,
          "target": "3-sf-19_concreta-pad"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
