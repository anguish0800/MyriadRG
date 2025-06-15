const { combineStats, makeAuto, makeTurret, makeOver, makeDeco, weaponArray, menu } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')

// menus
// important stuff
Class.myriad_dev = menu("Myriad Developer", "green")
Class.myriad_beta = menu("Myriad Beta Tester", "gray")
Class.myriad_shiny = menu("Myriad Shiny Member", "shiny")
// fun
Class.myriad_fun = menu("Fun", "green")
// bosses
Class.myriad_bosses = menu("Bosses", "rainbow")
Class.myriad_fanmadeBosses = menu("Official", "#badbed")
Class.myriad_officialBosses = menu("Fanmade", "yellow")
Class.myriad_ultimateBosses = menu("Mega", "red")
Class.myriad_miscBosses = menu("Misc.", "darkGray")
Class.myriad_fanmadeBosses.SHAPE = 3.5
Class.myriad_fanmadeBosses.PROPS = [{ POSITION: [11, 0, 0, 0, 1], TYPE: "genericEntity" }]
Class.myriad_miscBosses.PROPS = [{ POSITION: [9, 0, 0, 0, 1], TYPE: "genericEntity" }]
// tanks
// fun
Class.myriad_fucked_up_turret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0}]),
                TYPE: "bullet"
            }
        }
    ]
})
Class.myriad_fucked_up_bullet = {
    PARENT: "bullet",
    BODY: {
        RANGE: 180
    },
    TURRETS: []
}
for (let i = 0; i < 8; i++) {
    Class.myriad_fucked_up_bullet.TURRETS.push(
        {
            POSITION: [17 - (i * 1.5), 0, 0, 0, 180 * (i + 1), i + 1],
            TYPE: ["myriad_fucked_up_turret", {INDEPENDENT: true}]
        }
    )
}
Class.myriad_WTFITGprop = makeDeco(10)
Class.myriad_WTFITG = {
    PARENT: "genericTank",
    LABEL: "What The Fuck Is This Garbage",
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 14
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "myriad_fucked_up_bullet"
            }
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: "myriad_WTFITGprop"
        }
    ]
}
Class.myriad_omniBasicDeco = makeDeco(6, 0)
Class.myriad_omniBasicDeco2 = makeDeco(-3, 0)
Class.myriad_omniBasicDeco.FACING_TYPE = ["spin", {independent: true, speed: 0.25}]
Class.myriad_omniBasicDeco2.FACING_TYPE = ["spin", {independent: true, speed: -0.25}]
Class.myriad_omnipotentBasic = {
    PARENT: "genericTank",
    LABEL: "Omnipotent Basic",
    DANGER: 10,
    GUNS: [
        {
            POSITION: {},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {recoil: 0.1}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 0,
                WIDTH: 26,
                X: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {health: 10**100, pen: 10**100, damage: 0.5, speed: 0, reload: 5, spray: 0, shudder: 0}]),
                TYPE: ["bullet", {MOTION_TYPE: "fastgrow", ALPHA: 0.5}],
                ALPHA: 0,
                ALT_FIRE: true
            }
        }
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 0, 2],
            TYPE: "myriad_omniBasicDeco"
        },
        ...weaponArray({
            POSITION: [12, 0, 0, 0, 0, 1],
            TYPE: "myriad_omniBasicDeco2"
        }, 2)
    ]
}
Class.myriad_0sc = {
    PARENT: "sunchip",
    NECRO: [0],
    SHAPE: 0
}
Class.myriad_4sc = {
    PARENT: "sunchip",
    NECRO: [4, 0],
    SHAPE: 3
}
Class.myriad_3sc = {
    PARENT: "sunchip",
    NECRO: [4, 3, 0],
    SHAPE: 4
}
Class.myriad_5sc = {
    PARENT: "sunchip",
    NECRO: [5, 3, 4, 0],
    SHAPE: 5
}
Class.myriad_6sc = {
    PARENT: "sunchip",
    NECRO: [6, 5, 3, 4, 0],
    SHAPE: 6
}
Class.myriad_allInOne = {
    PARENT: "genericTank",
    LABEL: "All In One",
    SHAPE: 5,
    GUNS: [
        // egg spawner
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 6,
                ASPECT: 1.2,
                ANGLE: 36 + (72 * 0)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 0.9, damage: 0.8, pen: 0.8, health: 0.9}]),
                TYPE: "myriad_0sc",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: 'necro',
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false
            }
        },
        // square spawner
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 6.5,
                ASPECT: 1.2,
                ANGLE: 36 + (72 * 1)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.1, damage: 1.4, pen: 1.2, health: 1.5, size: 1.5}]),
                TYPE: "myriad_4sc",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: 'necro',
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false
            }
        },
        // triangle spawner
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7,
                ASPECT: 1.2,
                ANGLE: 36 + (72 * 2)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.2, damage: 1.7, pen: 1.7, health: 1.75, size: 1.45}]),
                TYPE: "myriad_3sc",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: 'necro',
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false
            }
        },
        // pentagon spawner
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 7.5,
                ASPECT: 1.2,
                ANGLE: 36 + (72 * 3)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 1.4, damage: 2.3, pen: 2.2, health: 2.4, size: 2.2}]),
                TYPE: "myriad_5sc",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: 'necro',
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false
            }
        },
        // hexagon spawner
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 8,
                ASPECT: 1.2,
                ANGLE: 36 + (72 * 4)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sunchip, g.drone, {reload: 2, damage: 2.6, pen: 2.9, health: 3, size: 3}]),
                TYPE: "myriad_6sc",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: 'necro',
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false
            }
        }
    ]
}
Class.myriad_mageBulletExplosion = {
    PARENT: "bullet",
    SHAPE: 'M 0 1 A 1 1 0 0 1 0 -1 A 1 1 0 0 1 0 1 M 0 -1.4 A 1 1 0 0 0 0 1.4 A 1 1 0 0 0 0 -1.4'
}
Class.myriad_mageBullet = {
    PARENT: "bullet",
    SHAPE: 'M 0 -1 A 1 1 0 0 0 0 1 A 1 1 0 0 0 0 -1 M 0 0.8 L -0.8 0 L 0 -0.8 L 0.6 0 L 0 0.8',
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: {
                LENGTH: 0,
                WIDTH: 26,
                X: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, shudder: 0, spray: 0, health: 2, damage: 1.5, pen: 20, range: 0.5}]),
                TYPE: ["myriad_mageBulletExplosion", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "fastgrow"}],
                SHOOT_ON_DEATH: true,
                ALPHA: 0
            }
        }
    ]
}
Class.myriad_mage = {
    PARENT: "genericTank",
    LABEL: "Mage",
    SHAPE: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 7
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {range: 0.8}]),
                TYPE: "myriad_mageBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 10,
                ASPECT: -0.6
            }
        }
    ]
}
Class.myriad_testDummy = {
    PARENT: "genericTank",
    LABEL: "",
    NAME: "Target Dummy",
    SIZE: 56,
    COLOR: 16,
    BODY: {
        HEALTH: 5 * base.HEALTH,
        REGEN: 20 * base.REGEN
    }
}
Class.myriad_tf2engi_shotgun = {
    PARENT: "genericTank",
    LABEL: "Engineer",
    GUNS: [
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
        {
            POSITION: [0, 0, 0, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: ["genericEntity", {COLOR: 12}]
        }
    ],
    ON: [
        {
            event: "define",
            handler: ({ body }) => {
                body.tickTank = 40
            }
        },
        {
            event: "tick",
            handler: ({ body }) => {
                if (body.tickTank > 0) {body.tickTank -= 1}
            }
        },
        {
            event: "altFire",
            handler: ({ body }) => {
                if (body.tickTank === 0) {body.define("myriad_tf2engi_pistol")}
                else {body.sendMessage(`Cooldown unfinished, ${body.tickTank} Ticks left.`)}
            }
        }
    ]
}
Class.myriad_tf2engi_pistol = {
    PARENT: "genericTank",
    LABEL: "Engineer",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [0, 0, 0, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: ["genericEntity", {COLOR: 12}]
        }
    ],
    ON: [
        {
            event: "define",
            handler: ({ body }) => {
                body.tickTank = 40
            }
        },
        {
            event: "tick",
            handler: ({ body }) => {
                if (body.tickTank > 0) {body.tickTank -= 1}
            }
        },
        {
            event: "altFire",
            handler: ({ body }) => {
                if (body.tickTank === 0) {body.define("myriad_tf2engi_shotgun")}
                else {body.sendMessage(`Cooldown unfinished, ${body.tickTank} Ticks left.`)}
            }
        }
    ]
}

Class.myriad_directorDrone = {
    PARENT: "minion",
    LABEL: "Director Minion",
    TYPE: "drone",
    GUNS: [
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {size: 1.5}]),
                TYPE: "minion",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 6,
                WAIT_TO_CYCLE: true
            }
        }
    ]
}

Class.myriad_OSeerDrone = {
    PARENT: "minion",
    LABEL: "Overseer Minion",
    TYPE: "drone",
    GUNS: weaponArray(
        {
            POSITION: {
                LENGTH: 6,
                WIDTH: 11,
                ASPECT: 1.3,
                X: 7,
                ANGLE: 90
            },
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {size: 1.5}]),
                TYPE: "myriad_directorDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 1,
                WAIT_TO_CYCLE: true
            }
        }, 2
    )
}

Class.myriad_overpowered = {
    PARENT: "genericTank",
    LABEL: "Overlo- I mean OverPowered",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 4,
    GUNS: weaponArray({
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.overseer, {size: 1.5}]),
            TYPE: "myriad_OSeerDrone",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: "drone",
            WAIT_TO_CYCLE: true
        }
    }, 4)
}
Class.myriad_ftanksDronerStitches = {
    SHAPE: "M -0.1 -0.8 L 0.1 -0.9 M -0.1 -0.6 L 0.1 -0.7 M -0.1 -0.4 L 0.1 -0.5 M -0.1 -0.2 L 0.1 -0.3 M 0.7 0.4 L 0.7 0.2 M 0.5 0.3 L 0.5 0.1 M 0.3 0.2 L 0.3 0 M 0.1 0.1 L 0.1 -0.1 M -0.7 0.6 L -0.5 0.5 M -0.6 0.4 L -0.4 0.3 M -0.5 0.2 L -0.3 0.1 M -0.4 0 L -0.2 -0.1 M -0.68 0.67 L -0.48 0.26 M -0.45 0.3 L -0.31 -0.06 M -0.08 -0.91 L 0.04 -0.54 M -0.07 -0.5 L 0.06 -0.24 M 0.8 0.35 L 0.37 0.07 M 0.41 0.18 L 0.04 -0.05 M 0.16 0.08 L -0.05 -0.28 M -0.01 -0.28 L -0.43 0.09",
    MIRROR_MASTER_ANGLE: true
}
Class.myriad_ftanksDroner = {
    PARENT: "genericTank",
    LABEL: "Ftankenstein's Droner",
    SHAPE: "M 0 -1 A 1 1 90 1 0 0.9 0.3 L 1.23 0.13 L 0.32 -1.25 Z",
    SIZE: 36,
    MAX_CHILDREN: 25,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, -30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, {reload: 0.8}]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "necro",
                WAIT_TO_CYCLE: true,
                DELAY_SPAWN: false,
            }
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 100, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 100, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: "swarm",
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: "drone",
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 6
            }
        }
    ],
    PROPS: [
        {
            POSITION: [22, 0, 0, 0, 1],
            TYPE: "myriad_ftanksDronerStitches"
        }
    ]
}

Class.myriad_eagleArtyWingL = makeDeco("M -2 -1 L -0.5 -1 L 0.5 0 L -1 0 Z", 16)
Class.myriad_eagleArtyWingR = makeDeco("M -2 1 L -0.5 1 L 0.5 0 L -1 0 Z", 16)
Class.myriad_eagleArtillery = {
    PARENT: "genericTank",
    LABEL: "Eagle Artillery",
    DANGER: 200,
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.artillery]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
        {
            POSITION: [17, 17, 1, 0, 8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.desmos, {reload: 5}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 180, yOffset: 50}]]}],
                LABEL: "Mini Tarnisher",
                ALT_FIRE: true
            },
        },
        {
            POSITION: [16, 17, 1, 0, -8, 180, 1/4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.desmos, {reload: 5}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 180, yOffset: 50}]]}],
                LABEL: "Mini Tarnisher",
                ALT_FIRE: true
            },
        },
        {
            POSITION: [19, 20, 1, 0, 0, 180, 2/4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.desmos, {reload: 5}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: true, amplitude: 0, yOffset: 50}]]}],
                LABEL: "Tarnisher",
                ALT_FIRE: true
            },
        },
        {
            POSITION: [19, 20, 1, 0, 0, 180, 2/4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.artillery, g.desmos, {reload: 5}]),
                TYPE: ["bullet", {CONTROLLERS: [['snake', {invert: false, amplitude: 0, yOffset: 50}]]}],
                LABEL: "Tarnisher",
                ALT_FIRE: true
            },
        },
    ],
    PROPS: [
        {
            POSITION: [40, 0, 0, 0, 0, 0],
            TYPE: "myriad_eagleArtyWingR"
        },
        {
            POSITION: [40, 0, 0, 0, 0, 0],
            TYPE: "myriad_eagleArtyWingL"
        }
    ]
}

const makeDecoGun = (color, depth, opts = {}) => {
    for (let i = 0; i < depth; i++) {

    }
}

Class.myriad_decoTest = {
    PAREMT: "genericTank",
    LABEL: "Decoration Tank Test",
    GUNS: [
        {
            POSITION: {},
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        },
        {
            POSITION: { LENGTH: 16 },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                COLOR: { BRIGHTNESS_SHIFT: -5 },
                BORDERLESS: true
            }
        },
        {
            POSITION: { LENGTH: 14 },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                COLOR: { BRIGHTNESS_SHIFT: -10 },
                BORDERLESS: true
            }
        },
        {
            POSITION: { LENGTH: 12 },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                COLOR: { BRIGHTNESS_SHIFT: -15 },
                BORDERLESS: true
            }
        }
    ]
}

Class.myriad_laser = {
    PARENT: "bullet",
    SHAPE: "/laser.png",
    ARENA_CLOSER: true
}

g.laser = {shudder: 0, spray: 0, speed: 5, maxSpeed: 5, size: 7, recoil: 3, reload: 3}

Class.myriad_nuclear = {
    PARENT: "genericTank",
    LABEL: "Nuclear",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.laser]),
                TYPE: "myriad_laser"
            }
        }
    ]
}

Class.myriad_brainDamage = {
    PARENT: "genericTank",
    LABEL: "braind  amage",
    SHAPE: "M 0.5 -0.8 L 0.43 -0.78 L 0.3 -0.71 L 0.15 -0.57 L -0.02 -0.36 L -0.16 -0.25 L -0.48 -0.11 L -0.81 0.01 L -0.85 -0.05 L -0.91 0.04 L -0.87 0.16 L -0.8 0.35 L -0.73 0.49 L -0.64 0.63 L -0.5 0.74 L -0.39 0.78 L -0.24 0.79 L -0.05 0.74 L 0.13 0.7 L 0.34 0.66 L 0.53 0.58 L 0.64 0.49 L 0.77 0.35 L 0.86 0.22 L 0.92 0.02 L 0.94 -0.26 L 0.92 -0.45 L 0.87 -0.63 L 0.78 -0.73 L 0.69 -0.79 L 0.61 -0.81 Z",
    GUNS: [
        {
            POSITION: [17, 7, 1.2, 0, 0, 1, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet"
            }
        }
    ]
}

Class.myriad_fairingFull = makeDeco("M -3 -0.7 L 2 -0.7 L 3 0 L 2 0.7 L -3 0.7 L -2 0.001 L 3 0 L -2 -0.001 Z", 16)
Class.myriad_fairingFragmentR = makeDeco("M 0.7 3 L 0.7 -2 L -0 -3 L 0 2 Z", 16)
Class.myriad_fairingFragmentL = makeDeco("M -0.7 -3 L -0.7 2 L 0 3 L -0 -2 Z", 16)

Class.myriad_fairing = {
    PARENT: "genericTank",
    LABEL: "Fairing"
}
/*
Class.myriad_netTrap = {
        PARENT: "trap",
        LABEL: "Set Trap",
        SHAPE: -4,
        MOTION_TYPE: "motor",
        CONTROLLERS: ["goToMasterTarget"],
        BODY: {
            SPEED: 1,
            DENSITY: 5,
        },
    PROPS: weaponArray(
        {
            POSITION: [10, 3, 3, 45, 1],
            TYPE: "arras_basic"
        },
        4
    )
}*/
Class.myriad_c4deco = makeDeco("M -0.1 0.1 L -0.9 0.1 L -0.9 0.9 L -0.1 0.9 Z M -0.8 0.2 L -0.2 0.2 M -0.8 0.3 L -0.2 0.3 M -0.8 0.6 L -0.2 0.6 M -0.8 0.5 L -0.2 0.5 M -0.8 0.4 L -0.2 0.4 M -0.8 0.8 L -0.2 0.8 M -0.8 0.7 L -0.2 0.7 M 0.1 0.9 L 0.9 0.9 L 0.9 0.4 L 0.1 0.8 Z M 0.1 0.6 L 0.9 0.2 L 0.9 0.1 L 0.1 0.1 Z M 0.1 -0.5 Q 0.1 -0.1 0.5 -0.1 Q 0.9 -0.1 0.9 -0.5 Q 0.9 -0.9 0.5 -0.9 Q 0.1 -0.9 0.1 -0.5 M -0.9 -0.1 L -0.5 -0.9 L -0.1 -0.1 Z M -0.9 -0.9 L -0.9 -0.3 L -0.6 -0.9 Z M -0.4 -0.9 L -0.1 -0.3 L -0.1 -0.9 Z", "mirror")
Class.myriad_c4trap = {
    PARENT: "setTrap",
    INDEPENDENT: true,
    LABEL: "Bomb",
    GUNS: [
        {
            POSITION: [15, 5, 1, 0, 5, -90, 0]
        },
        {
            POSITION: [20, 1, 1, 0, 5, -90, 0]
        }
    ],
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: "myriad_c4deco"
        }
    ]
}
// shrapnel
for (let i = 0; i < 10; i++) {
    Class.myriad_c4trap.GUNS.push(
        {
            POSITION: [2, 10, 1, 0, 0, i * (360 / 10), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {spray: 3, shudder: 3}]),
                TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true,
                LABEL: "Bullet Shrapnel"
            }
        },
        {
            POSITION: [2, 10, 1, 0, 0, i * (360 / 10), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {spray: 3, shudder: 3}]),
                TYPE: ["myriad_multiBullet", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true,
                LABEL: "Multiplier Bullet Shrapnel"
            }
        },
        {
            POSITION: [2, 10, 1, 0, 0, i * (360 / 10), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {spray: 3, shudder: 3}]),
                TYPE: ["myriad_signal", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true,
                LABEL: "Signal Shrapnel"
            }
        },
        {
            POSITION: [2, 10, 1, 0, 0, i * (360 / 10), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {spray: 3, shudder: 3}]),
                TYPE: ["myriad_missile", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true,
                LABEL: "Missile Shrapnel"
            }
        },
        {
            POSITION: [2, 10, 1, 0, 0, i * (360 / 10), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {spray: 3, shudder: 3}]),
                TYPE: ["myriad_iceBullet", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true,
                LABEL: "Ice Shrapnel"
            }
        }
    )
}
//explosion
Class.myriad_c4trap.GUNS.push(
    {
        POSITION: [0, 24, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, {speed: 0, maxSpeed: 0}]),
            TYPE: ["bullet", {MOTION_TYPE: "grow", PERSISTS_AFTER_DEATH: true}],
            SHOOT_ON_DEATH: true,
            LABEL: "Explosion"
        }
    }
)
Class.myriad_c4 = {
    PARENT: "genericTank",
    LABEL: "C4",
    DANGER: 100,
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, -4, 0, 0],
        },
        {
            POSITION: [2, 24, 1.1, 18, 12, 0, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.setTrap, {reload: 2}]),
                TYPE: "myriad_c4trap",
                STAT_CALCULATOR: "block",
                MAX_CHILDREN: 1
            }
        }
    ]
}

Class.myriad_desmos3Bullet = {
    PARENT: "bullet",
    GUNS: [
        {
            POSITION: [0, 20.5, 1, 0, 0, 0, 0],

        }
    ]
}

Class.developer.UPGRADES_TIER_0.push("myriad_dev")

Class.myriad_dev.UPGRADES_TIER_0 = ["myriad_beta", "myriad_shiny", "myriad_bosses", "myriad_fun"]

Class.myriad_beta.UPGRADES_TIER_0 = ["myriad_shiny", "myriad_bosses", "myriad_fun"]

Class.myriad_shiny.UPGRADES_TIER_0 = ["myriad_bosses", "myriad_fun"]

Class.myriad_fun.UPGRADES_TIER_0 = [
"myriad_WTFITG",
"myriad_omnipotentBasic",
"myriad_allInOne",
"myriad_mage",
"myriad_testDummy",
"myriad_tf2engi_shotgun",
"myriad_overpowered",
"myriad_ftanksDroner",
"myriad_eagleArtillery",
"myriad_nuclear",
"myriad_brainDamage",
"myriad_decoTest",
"myriad_c4"
]

Class.myriad_bosses.UPGRADES_TIER_0 = ["myriad_officialBosses", "myriad_fanmadeBosses", "myriad_ultimateBosses", "myriad_miscBosses"]
Class.myriad_officialBosses.UPGRADES_TIER_0 = ["myriad_multiBoss", "myriad_ultimateVulcan"]
Class.myriad_fanmadeBosses.UPGRADES_TIER_0 = ["myriad_iceElite"]
Class.myriad_ultimateBosses.UPGRADES_TIER_0 = ["myriad_thanatos", "myriad_hades", "myriad_amun"]
Class.myriad_miscBosses.UPGRADES_TIER_0 = ["myriad_mrCitron", "myriad_miniCitron", "myriad_microCitron"]
