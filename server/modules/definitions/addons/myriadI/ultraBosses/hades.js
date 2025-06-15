const {
    combineStats,
    makeAuto,
    weaponArray,
    makeTurret,
    LayeredBoss
} = require('../../../facilitators.js');

const {
    smshskl,
    base,
    basePolygonDamage,
    basePolygonHealth
} = require('../../../constants.js');

const g = require('../../../gunvals.js');

// functions and gunvals



// projectiles



// turrets

Class.myriad_crossbowTurret = makeTurret("crossbow", {independent: true, limitFov: true, fov: 2})

Class.myriad_boomerTurret = makeTurret("boomer", {independent: true, limitFov: true, fov: 1.2})

Class.myriad_vulgateTurret = makeTurret({
    GUNS: [
        {
            POSITION: [15, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.hive]),
                TYPE: ["hive", {MOTION_TYPE: "grow"}],
            },
        }, {
            POSITION: [3, 16, 1, 13, 0, 0, 0]
        }, {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ]
}, {independent: true, limitFov: true, fov: 2})

// boss

let hades = new LayeredBoss("myriad_hades", "Hades", "eternal", 13, "cyan", "baseTrapTurret", 4.5, 4)

hades.addLayer({gun: {
    POSITION: [11, 4, 1, 0, 0, null, 0]
}})
Class.myriad_hadesLayer1.GUNS.push(...weaponArray(
        [
            {
                POSITION: [10.5, 5, 1, 0, 0, (360/11)/2, 0]
            }, {
                POSITION: [0.5, 5, 1, 11.5, 0, (360/11)/2, 0],
                PROPERTIES: {
                    MAX_CHILDREN: 1,
                    SHOOT_SETTINGS: combineStats([g.factory]),
                    TYPE: "minion",
                    STAT_CALCULATOR: "drone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                },
            }
        ],
        11
    )
)

hades.addLayer({turret: {
    POSITION: [8, 9, 0, null, 120, 0],
    TYPE: "myriad_crossbowTurret"
}})

hades.addLayer({turret: {
    POSITION: [8, 9, 0, null, 150, 0],
    TYPE: "myriad_boomerTurret"
}})

hades.addLayer({turret: {
        POSITION: [8, 9, 0, null, 110, 0],
        TYPE: "myriad_vulgateTurret"
    }
})

const radius = 4,
      alpha = 0.25

Class.myriad_hades.GLOW = {
    RADIUS: radius,
    COLOR: "cyan",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_hadesLayer1.GLOW = {
    RADIUS: radius,
    COLOR: "cyan",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_hadesLayer2.GLOW = {
    RADIUS: radius,
    COLOR: "cyan",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_hadesLayer3.GLOW = {
    RADIUS: radius,
    COLOR: "cyan",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_hadesLayer4.GLOW = {
    RADIUS: radius,
    COLOR: "cyan",
    ALPHA: alpha,
    RECURSION: 3
}

