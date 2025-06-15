const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray, menu, dereference } = require('../../facilitators.js')
const { base, statnames, dfltskl, smshskl } = require('../../constants.js')
const g = require('../../gunvals.js')

const enableMyriad = true

g.multi = {damage: 0.5, health: 0.8, pen: 0.8, reload: 1.3}
g.split = {damage: 0.7, reload: 1.2}

Class.myriad_placeholder = {
    PARENT: "genericTank",
    DANGER: 1,
    LABEL: "Placeholder",
    COLOR: "#000000"
}
Class.myriad_basic = {
    PARENT: "genericTank",
    LABEL: "Basic",
    DANGER: 4,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            }
        }
    ]
}

// wave 1
Class.myriad_multiplier = {
    PARENT: "genericTank",
    LABEL: "Multiplier",
    DANGER: 5,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 5
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_duo = {
    PARENT: "genericTank",
    LABEL: "Duo",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 7,
                Y: 4.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 7,
                Y: -4.25,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 5
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_trio = {
    PARENT: "genericTank",
    LABEL: "Trio",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 7,
                ANGLE: 15,
                Y: 1,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 7,
                ANGLE: -15,
                Y: -1,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tripleShot, g.multi]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 5,
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_tetration = {
    PARENT: "genericTank",
    LABEL: "Tetration",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 11.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.multi]),
                TYPE: "myriad_tetraBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 6
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_pentation = {
    PARENT: "genericTank",
    LABEL: "Pentation",
    DANGER: 7,
    GUNS: [
        {
            POSITION: { 
                LENGTH: 19.5,
                WIDTH: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.multi]),
                TYPE: "myriad_pentaBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 4
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 6
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_exponent = {
    PARENT: "genericTank",
    LABEL: "Exponent",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 11,
                Y: 6,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pounder, g.multi]),
                TYPE: "myriad_tetraBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 11,
                Y: -6,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pounder, g.multi]),
                TYPE: "myriad_tetraBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 7,
                WIDTH: 27,
                ASPECT: 0.0001,
                ANGLE: 180,
                X: -2
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 6
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_splitter = {
    PARENT: "genericTank",
    LABEL: "Splitter",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.multi, g.split]),
                TYPE: "myriad_splitterBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 1.5,
                Y: 1.5
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 1.5,
                Y: -1.5
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_defenestrator = {
    PARENT: "genericTank",
    LABEL: "Defenestrator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 7,
                Y: 4.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.multi, g.split]),
                TYPE: "myriad_splitterBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 7,
                Y: -4.25,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.multi, g.split]),
                TYPE: "myriad_splitterBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 1.5,
                Y: 1.5
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 1.5,
                Y: -1.5
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_decapitator = {
    PARENT: "genericTank",
    LABEL: "Decapitator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 19,
                WIDTH: 11.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.multi, g.split]),
                TYPE: "myriad_decapitatorBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 6
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 8
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 0
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_tearer = {
    PARENT: "genericTank",
    LABEL: "Tearer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.multi, g.split]),
                TYPE: "myriad_tearerBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14,
                WIDTH: 4
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 2
            },
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
Class.myriad_hive = {
    PARENT: "genericTank",
    LABEL: "Hive",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_hiveBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 14.5,
                WIDTH: 5,
                ASPECT: 0.8
            },
            PROPERTIES: {
                COLOR: 10
            }
        }
    ]
}
Class.myriad_corporate = {
    PARENT: "genericTank",
    LABEL: "Corporate",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    GUNS: [
        {
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.multi, {size: 1.4}]),
                TYPE: "myriad_multiMinion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 12
            }
        }
    ]
}
//wave 2
Class.myriad_signaler = {
    PARENT: "genericTank",
    LABEL: "Signaler",
    DANGER: 5,
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 15,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 1.3, reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_wifi = {
    PARENT: "genericTank",
    LABEL: "Wi-Fi",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 15,
                ASPECT: 0.8,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 15,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 1.3, reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_5G = {
    PARENT: "genericTank",
    LABEL: "5G",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 15,
                ASPECT: 0.8,
                DELAY: 0.375
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.9, reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 15,
                ASPECT: 0.8,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 15,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 1.2, reload: 1.9}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_application = {
    PARENT: "genericTank",
    LABEL: "Application",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 17.5,
                DELAY: 0.25,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {reload: 1.3}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 17.5,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {reload: 1.3, damage: 1.4}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_internet = {
    PARENT: "genericTank",
    LABEL: "Internet",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.3
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 15,
                ASPECT: 0.8,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, {reload: 1.1, damage: 1.5}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 15,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, {reload: 1.1, damage: 1.8}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_phone = {
    PARENT: "genericTank",
    LABEL: "Phone",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 17.5,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {damage: 1.4}]),
                TYPE: "myriad_signal"
            } 
        }
    ]
}
Class.myriad_android = {
    PARENT: "genericTank",
    LABEL: "Android",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 20,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_bluetooth = {
    PARENT: "genericTank",
    LABEL: "Bluetooth",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 17.5,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.pounder, {damage: 1.2, reload: 0.9}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_darkWeb = {
    PARENT: "genericTank",
    LABEL: "Dark Web",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.4
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 15,
                ASPECT: 0.8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, {damage: 1.2}]),
                TYPE: "myriad_signal"
            }
        }
    ]
}
Class.myriad_hitman = {
    PARENT: "genericTank",
    LABEL: "Hitman",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.7
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 10,
                WIDTH: 15,
                ASPECT: 0.9,
                X: 15
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin, {damage: 1.3}]),
                TYPE: "myriad_signal"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 15,
                ASPECT: 1.1
            }
        }
    ]
}
//wave 2 misc
Class.myriad_knight = {
    PARENT: "genericTank",
    LABEL: "Knight",
    DANGER: 7,
    FACING_TYPE: ['spin', {speed: 0.05}],
    GUNS: weaponArray({
        POSITION: {
            LENGTH: 17.5,
            WIDTH: 10,
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, {reload: 0.02, damage: 0.3, range: 0.03, health: 0.5, pen: 0.5, speed: 0.05, maxSpeed: 0.05}]),
            TYPE: ["bullet", {ALPHA: 0.001}],
            AUTOFIRE: true
        }
    }, 2),
    TURRETS: weaponArray(
        {
            POSITION: [10, 15, 0, 0, 0, 1],
            TYPE: "myriad_shield"
        }, 2
    )
}
Class.myriad_spotify = {
    PARENT: "genericTank",
    LABEL: "Spotify",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 13,
                ASPECT: 1.3,
                ANGLE: 120
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {damage: 1.5}]),
                TYPE: "myriad_signalDrone",
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 3,
                SYNCS_SKILL: true,
                AUTOFIRE: true
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 13,
                ASPECT: 1.3,
                ANGLE: -120
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, {damage: 1.5}]),
                TYPE: "myriad_signalDrone",
                STAT_CALCULATOR: "drone",
                MAX_CHILDREN: 3,
                SYNCS_SKILL: true,
                AUTOFIRE: true
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 5,
                Y: 5,
                ANGLE: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 5,
                Y: -5,
                ANGLE: -10,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter]),
                TYPE: "bullet"
            }
        }
    ]
}
// wave 3
const noBulletStats = [12, 0, 0, 0, 0, 12, 12, 12, 12, 12]
const twelveBullet = [12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
const makeBlimp = ({ length = 0, width = 0, recoil = 0, angle = 0, y = 0, delay = 0 }) => {
    return {
        POSITION: [
            length + 15,
            width + 8,
            1,
            0,
            y,
            angle,
            delay
        ], // too lazy to fix the format ,_,
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.thruster, { recoil: recoil + 0.5 }]),
            TYPE: "bullet"
        }
    }
}
function spikeify(type, name = -1, opts = {}) {
    let output = dereference(type)
    let spike = Class.arras_spike.TURRETS
    opts.damage == null ? 1 : opts.damage
    opts.speed == null ? 1 : opts.speed
    opts.health == null ? 1 : opts.health
    output.BODY.DAMAGE *= opts.damage
    output.BODY.HEALTH *= opts.health
    output.BODY.SPEED *= opts.speed
    output.TURRETS = type.TURRETS == null ? spike : type.TURRETS.concat(spike)
    output.DANGER = type.DANGER + 1
    output.LABEL = name == -1 ? type.LABEL : name
    return output
}
Class.myriad_blimp = {
    PARENT: "genericTank",
    LABEL: "Blimp",
    DANGER: 6,
    SKILL_CAP: noBulletStats,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        DAMAGE: 1.3 * base.DAMAGE,
        HEALTH: 1.3 * base.HEALTH
    },
    GUNS: [
        makeBlimp({ angle: 150, y: -2 }),
        makeBlimp({ angle: -150, y: 2 })
    ]
}
Class.myriad_aphid = {
    PARENT: "genericTank",
    LABEL: "Aphid",
    DANGER: 7,
    SKILL_CAP: noBulletStats,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        DAMAGE: 1.2 * base.DAMAGE,
        HEALTH: 1.25 * base.HEALTH
    },
    GUNS: [
        makeBlimp({ angle: 180, length: 2, width: 1, delay: 0.5 }),
        makeBlimp({ angle: 150, y: -2 }),
        makeBlimp({ angle: -150, y: 2 })
    ]
}
Class.myriad_lasher = spikeify("myriad_blimp", "Lasher", {damage: 1.3, speed: 0.9, health: 1.1})
Class.myriad_airship = {
    PARENT: "genericTank",
    LABEL: "Airship",
    DANGER: 7,
    SKILL_CAP: twelveBullet,
    BODY: {
        DAMAGE: 1.2 * base.DAMAGE,
        HEALTH: 1.2 * base.HEALTH
    },
    GUNS: [
        makeBlimp({ angle: 150, y: -2 }),
        makeBlimp({ angle: -150, y: 2 }),
        {
            POSITION: {
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {pen: 1.2, damage: 1.2, health: 1.3, reload: 1.5}]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }
    ]
}
Class.myriad_beetle = {
    PARENT: "genericTank",
    LABEL: "Beetle",
    DANGER: 8,
    SKILL_CAP: noBulletStats,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        HEALTH: 1.1 * base.HEALTH
    },
    GUNS: [
        makeBlimp({ angle: 150, y: -3, delay: 0.5, length: -1.5, width: -0.5, recoil: 0.4 }),
        makeBlimp({ angle: -150, y: 3, delay: 0.5, length: -1.5, width: -0.5, recoil: 0.4 }),
        makeBlimp({ angle: 160, y: -2, recoil: 0.3 }),
        makeBlimp({ angle: -160, y: 2, recoil: 0.3 })
    ]
}
Class.myriad_engine = {
    PARENT: "genericTank",
    LABEL: "Engine",
    DANGER: 8,
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    SKILL_CAP: twelveBullet,
    GUNS: [
        makeBlimp({ angle: 180, length: 2, width: 1, delay: 0.5 }),
        makeBlimp({ angle: 150, y: -2 }),
        makeBlimp({ angle: -150, y: 2 }),
        {
            POSITION: {
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {reload: 0.9}]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        }
    ]
}
Class.myriad_scourge = spikeify("myriad_aphid", "Scourge", {speed: 0.9, damage: 1.3, health: 0.8})
Class.myriad_drigible = {
    PARENT: "genericTank",
    LABEL: "Drigible",
    DANGER: 8,
    BODY: {
        SPEED: 1.25 * base.SPEED,
        HEALTH: 0.9 * base.HEALTH,
        DAMAGE: 0.9 * base.DAMAGE
    },
    GUNS: [
        {
            POSITION: {
                Y: 5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },
        {
            POSITION: {
                Y: -5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
                ALT_FIRE: true
            }
        },
        makeBlimp({ angle: 150, y: -2, recoil: 0.2}),
        makeBlimp({ angle: -150, y: 2, recoil: 0.2})
    ]
}
Class.myriad_motor = spikeify("myriad_airship", "Motor", {speed: 0.9, health: 1.2, damage: 1.1})
//Class.myriad_thrasher = spikeify("myriad_lasher", "Thrasher", {speed: 0.9, health: 1.2, damage: 1.3}) would break a lot of stuff so yeah
Class.myriad_thrasher = {
    PARENT: "myriad_lasher",
    LABEL: "Thrasher",
    DANGER: 8,
    BODY: {
        DAMAGE: 1.2 * Class.myriad_lasher.BODY.DAMAGE,
        HEALTH: 1.1 * Class.myriad_lasher.BODY.HEALTH,
        SPEED: 1.1 * Class.myriad_lasher.BODY.SPEED,
        TURRETS: weaponArray([{
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", {FACING_TYPE: ["autospin", {speed: 1}]}]
        }, {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", {FACING_TYPE: ["autospin", {speed: -1}]}]
        }], 4)
    }
}
// wave 3 misc
Class.myriad_shifter_twinForm = {
    PARENT: "genericTank",
    LABEL: "Shifter T",
    DANGER: 8,
    BODY: Class.arras_twin.BODY,
    SKILL_CAP: [9,9,9,9,9,9,9,9,9,9],
    GUNS: [
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: 5.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                Y: -5.5,
                DELAY: 1
            },
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
                if (body.tickTank === 0) {body.define("myriad_shifter_blimpForm")}
                else {body.sendMessage(`Cooldown unfinished, ${body.tickTank} Ticks left to Shift into Blimp form.`)}
            }
        }
    ]
}
Class.myriad_shifter_blimpForm = {
    PARENT: "genericTank",
    LABEL: "Shifter B",
    DANGER: 8,
    BODY: Class.myriad_blimp.BODY,
    SKILL_CAP: [9,9,9,9,9,9,9,9,9,9],
    GUNS: [
        makeBlimp({ angle: 150, y: -2, delay: 0.5 }),
        makeBlimp({ angle: -150, y: 2, delay: 0.5 }),
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
            TYPE: ["genericEntity", {COLOR: 14}]
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
                if (body.tickTank === 0) {body.define("myriad_shifter_twinForm")}
                else {body.sendMessage(`Cooldown unfinished, ${body.tickTank} Ticks left to Shift into Twin form.`)}
            }
        }
    ]
}
// ^ very buggy and would get fixed very later
Class.myriad_car = makeOver("myriad_blimp", "Car")
Class.myriad_car.SKILL_CAP = [9,9,9,9,9,9,9,9,9,9]
// wave 4
function makeMissiler(a, b, c, bullType, danger, name){
    let tank = {	
        PARENT: "genericTank",
        LABEL: name,
        DANGER: danger,
        GUNS: []
    }
    for (let i = 0; i < a; i++) {
        tank.GUNS.push({
            POSITION: {	
                LENGTH: 15 + (i / 1.75),
                WIDTH: 6,
                Y: (3.5 + a) - i
            }
        },
            {
                POSITION: {
                    LENGTH: 15 + (i * 1.75),
                    WIDTH: 6,
                    Y: (-3.5 - a) + i
                }
            })
    }
    for (let i = 0; i < c; i++) {
        tank.GUNS.push({
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ASPECT: -0.2,
                X: (1.5 + (c + 1)) - (i + 2)
            }
        })
    }
    tank.GUNS.push(
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ASPECT: -0.2
            }
        },
        {
            POSITION: {
                WIDTH: 9
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {damage: (1 / (a + 1) + 0.25), pen: 1 / (b + 1), speed: 1 * ((c + 1) / 2 + 0.5)}]),
                TYPE: bullType,
                STAT_CALCULATOR: "sustained"
            }
        }
    )
    for (let i = 0; i < b; i++) {
        tank.GUNS.push({
            POSITION: {
                WIDTH: 9,
                X: -1.5 * (i + 1),
                DELAY: (i + 1) / (b + 1)
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: bullType,
                STAT_CALCULATOR: "sustained"
            }
        })
    }
    return tank
}

Class.myriad_missiler =	makeMissiler(0, 0, 0, "myriad_missile", 6, "Missiler")
Class.myriad_rocketeer = makeMissiler(1, 0, 0, "myriad_missileR", 7, "Rocketeer")
Class.myriad_launcher = makeMissiler(0, 1, 0, "myriad_missileL", 7, "Launcher")
Class.myriad_dispatcher = makeMissiler(0, 0, 1, "myriad_missileD", 7, "Dispatcher")
// rocketeer
Class.myriad_bomber = makeMissiler(2, 0, 0, "myriad_missileR1", 8, "Bomber")
Class.myriad_terrorist = makeMissiler(1, 1, 0, "myriad_missileRL", 8, "Terrorist")
Class.myriad_demoman = makeMissiler(1, 0, 1, "myriad_missileRD", 8, "Demoman")
// launcher
Class.myriad_streamliner = makeMissiler(0, 2, 0, "myriad_missileL1", 8, "Streamliner")
Class.myriad_excavator = makeMissiler(0, 1, 1, "myriad_missileLD", 8, "Excavator")
// dispatcher
Class.myriad_sender = makeMissiler(0, 0, 2, "myriad_missileD1", 8, "Sender")
// wave 4 misc
Class.myriad_missile_misc = {
    PARENT: "genericTank",
    LABEL: "Missile",
    DANGER: 8,
    BODY: {
        SPEED: 1.2 * base.SPEED,
        HEALTH: 1.5 * base.HEALTH
    },
    GUNS: [
        {
            POSITION: {
                LENGTH: 5,
                WIDTH: 20,
                ASPECT: -1.5
            }
        },
        {
            POSITION: {
                LENGTH: 20,
                WIDTH: 15,
                ASPECT: 0.01
            }
        },
        {
            POSITION: {
                LENGTH: 16,
                WIDTH: 10,
                ASPECT: -1.5,
                ANGLE: 180
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 10,
                ASPECT: 1.5,
                X: 16,
                ANGLE: 180
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pounder, {size: 2.5}]),
                TYPE: "myriad_missilePillbox",
                STAT_CALCULATOR: "block"
            }
        }
    ],
    PROPS: [
        {
            POSITION: [15, 0, 0, 0, 1],
            TYPE: "genericEntity"
        }
    ]
}
Class.myriad_warden = {
    PARENT: "genericTank",
    LABEL: "Warden",
    DANGER: 8,
    GUNS: [
        {
            POSITION: [15, 12, -1.2, 0, 0, 0, 0]
        },
        {
            POSITION: [3, 12, 1.2, 15, 0, 0, 0]
        },
        {
            POSITION: [18.5, 8, -0.9, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "myriad_missileW",
                STAT_CALCULATOR: "sustained"
            }
        },
        {
            POSITION: [16.5, 9, 1, 0, 0, 0, 0]
        }
    ]
}
// wave 5
Class.myriad_genericCannon = {
    PARENT: "genericTank",
    ANGLE: 180,
    PROPS: [
        ...weaponArray({
            POSITION: [11, 0, 11, 0, 0],
            TYPE: "myriad_cannonLeg"
        }, 2),
        {
            POSITION: [12, 0, 0, 0, 1],
            TYPE: "genericEntity"
        },
        {
            POSITION: [6, 0, 0, 0, 2],
            TYPE: ["genericEntity", {COLOR: "black"}]
        }
    ]
}
g.cannon = {size: 2.5, speed: 0, maxSpeed: 0, reload: 3}
Class.myriad_cannon = {
    PARENT: "myriad_genericCannon",
    LABEL: "Cannon",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 6,
                ASPECT: 0.01
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.cannon]),
                TYPE: "myriad_cannonTarget",
            }
        }
    ]
}
// wave 6

g.icicle = { speed: 1.4, maxSpeed: 1.5 }

Class.myriad_icicle = {
    PARENT: "genericTank",
    LABEL: "Icicle",
    DANGER: 6,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_iceBullet"
            }
        }
    ]
}

Class.myriad_frost = {
    PARENT: "genericTank",
    LABEL: "Frost",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: -5.5,
                ANGLE: -7,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: 5.5,
                ANGLE: 7,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_iceBullet"
            }
        }
    ]
}

Class.myriad_frostwork = {
    PARENT: "genericTank",
    LABEL: "Frostwork",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 2.5,
                Y: -7.5,
                ANGLE: -8.5,
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 2.5,
                Y: 7.5,
                ANGLE: 8.5,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: -5.5,
                ANGLE: -7,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: 5.5,
                ANGLE: 7,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_iceBullet"
            }
        }
    ]
}
Class.myriad_geild = {
    PARENT: "genericTank",
    LABEL: "Geild",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10,
                X: 5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {       
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_longerIceBullet"
            }
        }
    ]
}
Class.myriad_glacier = {
    PARENT: "genericTank",
    LABEL: "Glacier",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10,
                X: 7.5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_longestIceBullet"
            }
        }
    ]
}
Class.myriad_hoarfrost = {
    PARENT: "genericTank",
    LABEL: "Hoarfrost",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: -5.5,
                ANGLE: -7,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: 5.5,
                ANGLE: 7,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10,
                X: 5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_longerIceBullet"
            }
        }
    ]
}

Class.myriad_nival = {
    PARENT: "genericTank",
    LABEL: "Nival",
    DANGER: 7,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 23,
                WIDTH: 8,
                Y: 2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 23,
                WIDTH: 8,
                Y: -2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_icierBullet"
            }
        }
    ]
}

Class.myriad_frazil = {
    PARENT: "genericTank",
    LABEL: "Frazil",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 23,
                WIDTH: 8,
                Y: 2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 23,
                WIDTH: 8,
                Y: -2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_iciestBullet"
            }
        }
    ]
}


Class.myriad_frostbite = {
    PARENT: "genericTank",
    LABEL: "Frostbite",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: -5.5,
                ANGLE: -7,
                DELAY: 0.25
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 17,
                WIDTH: 3,
                Y: 5.5,
                ANGLE: 7,
                DELAY: 0.75
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artillery]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
                Y: 2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
                Y: -2
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_icierBullet"
            }
        }
    ]
}

Class.myriad_hail = {
    PARENT: "genericTank",
    LABEL: "Hail",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
                Y: 2,
                X: 5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
                Y: -2,
                X: 5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_mixedIceBullet"
            }
        }
    ]
}

Class.myriad_everest = {
    PARENT: "genericTank",
    LABEL: "Everest",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 8,
                X: 5
            },
            PROPERTIES: {
                COLOR: "cyan"
            }
        },
        {
            POSITION: [28, 2, 1, 0, 2.25, 0, 7/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, 0, 0, 6/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2.25, 0, 5/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, -4, 0, 4/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, 2.25, 0, 1/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2.25, 0, 3/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, 0, 0, 2/8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner]),
                TYPE: "myriad_everestIcicleBullet",
            },
        },
        {
            POSITION: [5, 13, 1, 7, 0, 0, 0],
        },
        {
            POSITION: [5, 13, 1, 20, 0, 0, 0],
        },
    ],
};

Class.myriad_snowgrave = {
    PARENT: "genericTank",
    LABEL: "Snowgrave",
    TOOLTIP: "Right Click to shoot a Blast.",
    DANGER: 8,
    GUNS: [
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "red",
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, {reload: 4, spray: 5, shudder: 5}]),
                TYPE: "myriad_chioneIcicleBullet",
                ALT_FIRE: true
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "red",
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, {reload: 4, spray: 4, shudder: 4, size: 0.8}]),
                TYPE: "myriad_chioneIcicleBullet",
                ALT_FIRE: true
            }
        },
        {
            POSITION: {
                ASPECT: 0.01,
                LENGTH: 25,
                WIDTH: 10
            },
            PROPERTIES: {
                COLOR: "red",
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, {reload: 4, spray: 4, shudder: 4, size: 0.8}]),
                TYPE: "myriad_chioneIcicleBullet",
                ALT_FIRE: true
            }
        },
        {
            POSITION: {
                WIDTH: 10
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.icicle]),
                TYPE: "myriad_iceBullet"
            }
        }
    ]
}

// wave 7 -f-l-o-r-r-

Class.myriad_dandelion = {
    PARENT: "genericTank",
    LABEL: "Dandelion",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [15, 11, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 0, reload: 1.3}]),
                TYPE: "myriad_dandelionBullet",
                COLOR: "darkGray"
            }
        },
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet"
            }
        }
    ]
}

// wave 8 pls fight the decepticons

Class.myriad_mech = {
    PARENT: "genericTank",
    LABEL: "Mech",
    DANGER: 6,
    TURRETS: [
        {
            POSITION: {
                SIZE: 10,
                Y: 5,
                X: 7.5,
                ARC: 20,
                LAYER: 0
            },
            TYPE: "myriad_mechGun"
        },
        {
            POSITION: {
                SIZE: 10,
                Y: -5,
                X: 7.5,
                ARC: 20,
                LAYER: 0
            },
            TYPE: "myriad_mechGun"
        }
    ]
}

// wave 9 PiSTON MINECRAFT???

Class.myriad_piston = {
    PARENT: "genericTank",
    LABEL: "Piston",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 6, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [5, 10, 1, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {health: 1e5}]),
                TYPE: "myriad_pistonBullet"
            }
        }
    ]
}

if (enableMyriad) {
    Config.SPAWN_CLASS = "myriad_basic"
    Class.genericTank.REROOT_UPGRADE_TREE = "myriad_basic"
    Class.developer.UPGRADES_TIER_0.push("myriad_basic")
}

Class.myriadTesting = menu("Myriad Tank Testing")
Class.myriadTesting.UPGRADES_TIER_0 = ["myriad_cannon", "myriad_dandelion", "myriad_mech", "myriad_piston"]
Class.myriad_basic.UPGRADES_TIER_1 = ["myriad_multiplier", "myriad_signaler", "myriad_blimp", /*"myriad_missiler",*/ "myriad_icicle"]
Class.myriad_multiplier.UPGRADES_TIER_2 = ["myriad_duo", "myriad_tetration", "myriad_splitter"]
Class.myriad_duo.UPGRADES_TIER_3 = ["myriad_trio", "myriad_exponent", "myriad_defenestrator"]
Class.myriad_tetration.UPGRADES_TIER_3 = ["myriad_pentation", "myriad_exponent", "myriad_decapitator"]
Class.myriad_splitter.UPGRADES_TIER_3 = ["myriad_defenestrator", "myriad_decapitator", "myriad_tearer"]
Class.myriad_multiplier.UPGRADES_TIER_3 = ["myriad_hive", "myriad_corporate"]
Class.myriad_signaler.UPGRADES_TIER_2 = ["myriad_wifi", "myriad_phone", "myriad_darkWeb"]
Class.myriad_wifi.UPGRADES_TIER_3 = ["myriad_5G", "myriad_application", "myriad_internet"]
Class.myriad_phone.UPGRADES_TIER_3 = ["myriad_android", "myriad_application", "myriad_bluetooth"]
Class.myriad_darkWeb.UPGRADES_TIER_3 = ["myriad_hitman", "myriad_bluetooth", "myriad_internet"]
Class.myriad_signaler.UPGRADES_TIER_3 = ["myriad_knight", "myriad_spotify"]
Class.myriad_blimp.UPGRADES_TIER_2 = ["myriad_aphid", "myriad_airship", "myriad_lasher"]
Class.myriad_aphid.UPGRADES_TIER_3 = ["myriad_beetle", "myriad_engine", "myriad_scourge"]
Class.myriad_airship.UPGRADES_TIER_3 = ["myriad_drigible", "myriad_engine", "myriad_motor"]
Class.myriad_lasher.UPGRADES_TIER_3 = ["myriad_thrasher", "myriad_motor", "myriad_scourge"]
Class.myriad_blimp.UPGRADES_TIER_3 = ["myriad_shifter_blimpForm", "myriad_car"]
Class.myriad_missiler.UPGRADES_TIER_2 = ["myriad_rocketeer", "myriad_launcher", "myriad_dispatcher"]
Class.myriad_rocketeer.UPGRADES_TIER_3 = ["myriad_bomber", "myriad_terrorist", "myriad_demoman"]
Class.myriad_launcher.UPGRADES_TIER_3 = ["myriad_streamliner", "myriad_excavator", "myriad_terrorist"]
Class.myriad_dispatcher.UPGRADES_TIER_3 = ["myriad_sender", "myriad_excavator", "myriad_demoman"]
Class.myriad_missiler.UPGRADES_TIER_3 = ["myriad_missile_misc", "myriad_warden"]
Class.myriad_icicle.UPGRADES_TIER_2 = ["myriad_frost", "myriad_geild", "myriad_nival"]
Class.myriad_frost.UPGRADES_TIER_3 = ["myriad_frostwork", "myriad_hoarfrost", "myriad_frostbite"]
Class.myriad_geild.UPGRADES_TIER_3 = ["myriad_glacier", "myriad_hoarfrost", "myriad_hail"]
Class.myriad_nival.UPGRADES_TIER_3 = ["myriad_frazil", "myriad_frostbite", "myriad_hail"]
Class.myriad_icicle.UPGRADES_TIER_3 = ["myriad_everest", "myriad_snowgrave"]
Class.developer.UPGRADES_TIER_0.push("myriadTesting")
