const { combineStats, weaponArray, makeDeco, makeTurret } = require('../../facilitators.js')
const { makeMulti } = require("./functions.js")
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')

// wave based
Class.myriad_ascBosstype = {
    PARENT: "miniboss",
    LABEL: "Ascendent",
    BODY: {
        FOV: 1.2 * base.FOV,
        HEALTH: 4.6 * base.HEALTH,
        SPEED: 0.8 * base.SPEED,
        DAMAGE: 4.1 * base.DAMAGE
    },
    SIZE: 48,
    COLOR: 3,
    SHAPE: 6
}
Class.myriad_multiTurret = makeTurret("myriad_multiplier")
Class.myriad_multiBoss = {
    PARENT: "myriad_ascBosstype",
    GUNS: weaponArray([
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {damage: 1.2, reload: 1.4}]),
                TYPE: "myriad_multiBullet"
            }
        },
        {
            POSITION: {
                LENGTH: 12.5,
                WIDTH: 5
            },
            PROPERTIES: {
                COLOR: 12
            }
        },
    ], 6, 1/3),
    TURRETS: weaponArray(
        {
            POSITION: [5, 7.5, 0, 30, 90, 1],
            TYPE: "myriad_multiTurret"
        }, 6
    )
}
// my buds
Class.myriad_IEtrapTurret = makeTurret({
    COLOR: "#badbed",
    GUNS: [
        {
            POSITION: {
                LENGTH: 17.5,
                WIDTH: 7
            }
        },
        {
            POSITION: {
                LENGTH: 3,
                WIDTH: 7,
                ASPECT: 1.7,
                X: 17.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, {reload: 0.8}]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap"
            }
        },
        {
            POSITION: {
                LENGTH: 15,
                WIDTH: 10,
                ASPECT: 1.2
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {reload: 0.9}]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: {
                LENGTH: 13,
                WIDTH: 12,
                ASPECT: 1.15,
                DELAY: 0.5
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.machineGun, {reload: 1.2, spray: 1.3}]),
                TYPE: "bullet"
            }
        }
    ]
})
Class.myriad_IEshotgunTurret = makeTurret("shotgun")
Class.myriad_IEshotgunTurret.COLOR = "#badbed"
Class.myriad_IEoctoTurret = {
    PARENT: "genericTank",
    COLOR: "#badbed",
    FACING_TYPE: ["spin", {speed: 0.3}],
    GUNS: weaponArray({
        POSITION: {
            LENGTH: 14
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: "bullet",
            AUTOFIRE: true
        }
    }, 8, 1/4)
}
Class.myriad_iceElite = {
    PARENT: "arras_genericElite",
    COLOR: "#badbed",
    LABEL: "Ice Elite",
    DANGER: 10,
    TURRETS: [
        ...weaponArray(
            {
                POSITION: [10, 5.5, 0, 60, 170, 0],
                TYPE: ["myriad_IEtrapTurret", {COLOR: "#badbed"}]
            }, 3
        ),
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "myriad_IEshotgunTurret"
        },
        {
            POSITION: [12, 0, 0, 0, 360, 2],
            TYPE: "myriad_IEoctoTurret"
        }
    ]
}
const makeVulcan = (name, count, length, width, stats, opt = {}) => {

    opt.justGuns ?? false

    let guns = []

    const decoGunWidth = 17.5 + width

    for (let i = 2; i <= (count - count % 2); i += 2) {
        guns.push(
            {
                POSITION: [length + 5, width, 1, 0, (width + 4) - i, 0, i/count],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, ...stats]),
                    TYPE: "bullet"
                }
            },
            {
                POSITION: [length + 5, width, 1, 0, (-width - 4) + i, 0, i/count],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, ...stats]),
                    TYPE: "bullet"
                }
            }
        )
    }
    if (count % 2 == 1) {
        guns.push(
            {
                POSITION: [length + 5, width, 1, 0, 0, 0, 1/count],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, ...stats]),
                    TYPE: "bullet"
                }
            }
        )
    }
    guns.push(
        {
            POSITION: [15, decoGunWidth, 1, 0, 0, 0, 0]
        },
        {
            POSITION: [5, decoGunWidth, 1, length - 3, 0, 0, 0]
        }
    )
    let tenk = {
        PARENT: "genericTank",
        LABEL: name == null ? 'Vulcan?' : name,
        GUNS: guns
    }
    return opt.justGuns == true ? guns : tenk
}

Class.myriad_vulcanBossTurretBulk = makeTurret(makeVulcan("", 5, 25, 5, [g.pounder, g.pelleter]), {canRepel: true, limitFov: true, fov: 1.5})
Class.myriad_vulcanBossTurretLong = makeTurret(makeMulti(makeVulcan("", 5, 50, 3, [g.sniper, g.assassin]), 2), {canRepel: true, limitFov: true, fov: 3})
Class.myriad_vulcanBossTurretBulkiest = makeTurret(makeVulcan("", 7, 22.5, 6, [g.pounder, g.destroyer, g.annihilator]), {canRepel: true, limitFov: true, fov: 1.5})
Class.myriad_vulcanBossTurretLong.FACING_TYPE = ["autospin", {speed: -0.1}]

Class.myriad_ultimateVulcan = {
    PARENT: "myriad_ascBosstype",
    LABEL: "Ultimate Vulcan",
    COLOR: "gold",
    SHAPE: 3,
    TURRETS: [
        ...weaponArray([
            {
                POSITION: [15, 10, 0, 60, 170, 0],
                TYPE: "myriad_vulcanBossTurretBulkiest"
            },
            {
                POSITION: [6, 6, 0, 0, 170, 1],
                TYPE: "myriad_vulcanBossTurretBulk"
            }
        ], 3),
        {
            POSITION: [11, 0, 0, 0, 360, 2],
            TYPE: "myriad_vulcanBossTurretLong"
        }
    ]
}

Class.myriad_citronDeco = {
    SHAPE: "M 0.8 0 L -0.7 0.6 C -0.9 0.5 -0.9 -0.5 -0.7 -0.6 Z",
    COLOR: "#de951f"
}

Class.myriad_genericCitron = {
    PARENT: "myriad_ascBosstype",
    LABEL: "Generic Citron",
    DANGER: 10,
    SHAPE: 0,
    COLOR: "#deb81f",
    PROPS: weaponArray({
        POSITION: [10, -5, 0, 0, 1],
        TYPE: "myriad_citronDeco"
    }, 8)
}

Class.myriad_citronBulletShards = {
    PARENT: "bullet",
    SHAPE: "M 0.8 0 L -0.7 0.6 C -0.9 0.5 -0.9 -0.5 -0.7 -0.6 Z",
    PERSISTS_AFTER_DEATH: true
}

Class.myriad_microCitronBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    SHAPE: "M 0.8 0 L -0.7 0.6 C -0.9 0.5 -0.9 -0.5 -0.7 -0.6 Z",
    GUNS: [
        {
            POSITION: [0, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
    ]
}

Class.myriad_miniCitronBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    SHAPE: "M 0.8 0 L -0.7 0.6 C -0.9 0.5 -0.9 -0.5 -0.7 -0.6 Z",
    GUNS: [
        {
            POSITION: [0, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
    ]
}

Class.myriad_citronBullet = {
    PARENT: "bullet",
    INDEPENDENT: true,
    SHAPE: "M 0.8 0 L -0.7 0.6 C -0.9 0.5 -0.9 -0.5 -0.7 -0.6 Z",
    GUNS: [
        {
            POSITION: [0, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -12.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -25, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, 37.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
        {
            POSITION: [0, 10, 1, 0, 0, -37.5, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "myriad_citronBulletShards",
                SHOOT_ON_DEATH: true
            }
        },
    ]
}

Class.myriad_citronTurretLonger = makeTurret({
    GUNS: [
        {
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "myriad_citronBullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
            POSITION: [2.5, 10, 1, 13, 0, 0, 0],
            PROPERTIES: {
                COLOR: "#deb81f"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})

Class.myriad_citronTurretLong = makeTurret({
    GUNS: [
        {
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassin]),
                TYPE: "myriad_miniCitronBullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
            POSITION: [5, 10, 1, 13, 0, 0, 0],
            PROPERTIES: {
                COLOR: "#deb81f"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})

Class.myriad_citronTurret = makeTurret({
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "myriad_microCitronBullet",
            },
        },
        {
            POSITION: [5, 10, 1, 13, 0, 0, 0],
            PROPERTIES: {
                COLOR: "#deb81f"
            }
        }
    ]
}, {canRepel: true, limitFov: true, fov: 3})



Class.myriad_microCitron = {
    PARENT: "myriad_genericCitron",
    LABEL: "Citron",
    UPGRADE_LABEL: "Micro Citron",
    TURRETS: weaponArray({
        POSITION: {
            SIZE: 10,
            X: 8,
            ARC: 120,
            LAYER: 0
        },
        TYPE: "myriad_citronTurret"
    }, 4)
}

Class.myriad_miniSeed = {
    PARENT: "genericTank",
    LABEL: "Seed",
    SHAPE: "M 0 -0.4 C -0.7 -0.6 -1.2 0 -0.5 0.2 C 1.1 0.5 1.2 0.3 0 -0.4",
    COLOR: "#f7e98d",
    GUNS: [
        {
            POSITION: [0, 0, 0, 0, 0, 0, 200],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                AUTOFIRE: true
            }
        }
    ],
    ON: [
        {
            event: 'fire',
            handler: ({ body }) => {
                body.define("myriad_microCitron")
                socket.talk("The Seed has grown into a Micro Citron!")
            }
        }
    ],
}

Class.myriad_miniSeedShooter = {
    PARENT: "genericTank",
    INDEPENDENT: true,
    GUNS: weaponArray(
        {
            POSITION: [0, 10, 0, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 3, maxSpeed: 3, shudder: 0, spray: 0}]),
                TYPE: ["myriad_miniSeed", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }, 2
    ),
}

Class.myriad_miniCitron = {
    PARENT: "myriad_genericCitron",
    LABEL: "Citron",
    UPGRADE_LABEL: "Mini Citron",
    TURRETS: [ ...weaponArray({
        POSITION: {
            SIZE: 10,
            X: 8,
            ARC: 120,
            LAYER: 0
        },
        TYPE: "myriad_citronTurretLong"
    }, 6), {
        POSITION: [10, 0, 0, 0, 0, 0],
        TYPE: "myriad_miniSeedShooter"
    }]
}

Class.myriad_seed = {
    PARENT: "genericTank",
    LABEL: "Seed",
    SHAPE: "M 0 -0.4 C -0.7 -0.6 -1.2 0 -0.5 0.2 C 1.1 0.5 1.2 0.3 0 -0.4",
    COLOR: "#f7e98d",
    GUNS: [
        {
            POSITION: [0, 0, 0, 0, 0, 0, 200],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                TYPE: "bullet",
                AUTOFIRE: true
            }
        }
    ],
    ON: [
        {
            event: 'fire',
            handler: ({ body }) => {
                body.define("myriad_miniCitron")
                socket.talk("The Seed has grown into a Mini Citron!")
            }
        }
    ],
}

Class.myriad_seedShooter = {
    PARENT: "genericTank",
    INDEPENDENT: true,
    GUNS: weaponArray(
        {
            POSITION: [0, 10, 0, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 3, maxSpeed: 3, shudder: 0, spray: 0}]),
                TYPE: ["myriad_seed", {PERSISTS_AFTER_DEATH: true}],
                SHOOT_ON_DEATH: true
            }
        }, 2
    ),
}

Class.myriad_mrCitron = {
    PARENT: "myriad_genericCitron",
    LABEL: "Citron",
    UPGRADE_LABEL: "Mr.Citron",
    TURRETS: [ ...weaponArray({
        POSITION: {
            SIZE: 10,
            X: 8,
            ARC: 120,
            LAYER: 0
        },
        TYPE: "myriad_citronTurretLonger"
    }, 8), {
        POSITION: [10, 0, 0, 0, 0, 0],
        TYPE: "myriad_seedShooter"
    }]
} 

