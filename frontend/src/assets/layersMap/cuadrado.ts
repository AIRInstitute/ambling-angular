export var cuadradoMap = {
    type: "FeatureCollection",
    name: "cuadrado",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:EPSG::25830" } },
    features: [
        { 
            type: "Feature", 
            properties: { 
                id: 2, 
                text: "AOI 9600 Km. de lado 320 pixel a 30 m." 
            }, 
            geometry: { 
                type: "MultiPolygon", 
                coordinates: [ 
                    [ 
                        [ 
                            [ 269746.0, 4532333.0 ], 
                            [ 269746.0, 4541933.0 ], 
                            [ 279346.0, 4541933.0 ], 
                            [ 279346.0, 4532333.0 ], 
                            [ 269746.0, 4532333.0 ] 
                        ] 
                    ] 
                ] 
            } 
        }
    ]
}
