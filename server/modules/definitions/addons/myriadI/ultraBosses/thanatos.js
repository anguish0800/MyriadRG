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

g.fast = {speed: 1.3, maxSpeed: 1.3}
g.cocaine = {speed: 2.5, maxSpeed: 2.5}

// projectiles

Class.myriad_autoTrap = makeAuto('trap', "Auto-Trap")
Class.myriad_cocaineDrone = makeAuto("realchip")
Class.myriad_cartridgeMissile = {
    PARENT: "missile",
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 3],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.missileTrail, g.rocketeerMissileTrail]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "thruster",
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
                AUTOFIRE: true
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, -60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
                AUTOFIRE: true
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
                AUTOFIRE: true
            },
        },
        { 
            POSITION: [7, 9.5, 0.6, 7, 0, -120, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bee]),
                TYPE: ["bee", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: "swarm",
                AUTOFIRE: true
            },
        }
    ]
}

// turrets

Class.myriad_omegaTechnicianTurret = makeTurret({
    GUNS: [
        {
            POSITION: [5, 24, -0.5, -5, 0, 0, 0]
        }, {
            POSITION: [18, 20, 1, 0, 0, 0, 0]
        }, {
            POSITION: [14, 24, 1, 0, 0, 0, 0],
        }, {
            POSITION: [4, 24, 1, 18, 0, 0, 0]
        }, {
            POSITION: [6, 24, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder, g.destroyer, g.hexaTrapper, {reload: 1.3, size: 1.2, health: 1.35, damage: 1.4, speed: 0.9, shudder: 0.1}]),
                TYPE: "myriad_autoTrap",
                STAT_CALCULATOR: "trap",
                AUTOFIRE: true,
            },
        },
    ],
}, {independent: true, hasAI: false, extraStats: []})
Class.myriad_fangTurret = makeTurret({ 
    GUNS: [
        {
            POSITION: [24, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [21, 16, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        }, {
            POSITION: [10, 6, 0.001, 7, 4, 0, 0]
        }, {
            POSITION: [10, 6, 0.001, 7, -4, 0, 0]
        },
    ]
}, {independent: true, limitFov: true, fov: 3})

Class.myriad_cartridgeTurret = makeTurret({ 
    GUNS: [
        {
            POSITION: [17, 20, 0.75, 0, 0, 0, 0],
        }, {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.launcher, g.rocketeer]),
                TYPE: "myriad_cartridgeMissile",
                STAT_CALCULATOR: "sustained",
            },
        }, {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ]
}, {independent: true, limitFov: true, fov: 1.5})

Class.myriad_huntsmanTurret = makeTurret({ 
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
}, {independent: true, limitFov: true, fov: 2})
Class.myriad_swarmerTurret = makeTurret("swarmer", {independent: true, limitFov: true, fov: 1.25})
Class.myriad_twisterTurret = makeTurret("twister", {independent: true, limitFov: true, fov: 1.25})

// boss

let thanatos = new LayeredBoss("myriad_thanatos", "Thanatos", "eternal", 15, "#6D0000", "myriad_omegaTechnicianTurret", 4, 3)
thanatos.addLayer({turret: {
    POSITION: [5, 9, 0, null, 120, 0],
    TYPE: "myriad_fangTurret",
}})
thanatos.addLayer({gun: {
    POSITION: [2.25, 3.25, -1.6, 9, 0, null, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pounder, g.cocaine]),
        TYPE: ["myriad_cocaineDrone", {INDEPENDENT: true, DRAW_HEALTH: true, COLOR: "mirror"}],
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
    },
}}, true, null, 18);
thanatos.addLayer({turret: {
    POSITION: [7, 9, 0, null, 50, 0],
    TYPE: "myriad_cartridgeTurret",
}})
thanatos.addLayer({turret: {
    POSITION: [8, 9, 0, null, 90, 0],
    TYPE: "myriad_huntsmanTurret",
}})
thanatos.addLayer({turret: {
    POSITION: [8, 9, 0, null, 120, 0],
    TYPE: "myriad_swarmerTurret",
}})
Class.myriad_thanatosLayer5.TURRETS.push({
    POSITION: [10, 0, 0, 0, 360, 1],
    TYPE: "myriad_twisterTurret"
})
const radius = 8,
      alpha = 0.5
//Class.thanatos.SIZE += 16
Class.myriad_thanatos.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_thanatosLayer1.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_thanatosLayer2.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_thanatosLayer3.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_thanatosLayer4.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}
Class.myriad_thanatosLayer5.GLOW = {
    RADIUS: radius,
    COLOR: "#6D0000",
    ALPHA: alpha,
    RECURSION: 3
}

