const {                                                                                                      combineStats,
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

Class.myriad_detonatorFlare = {
    PARENT: "flare",
    INDEPENDENT: true,
    FACING_TYPE: "turnWithSpeed",
    SHAPE: 8,
    GUNS: weaponArray(
        {
            POSITION: [1, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                SHOOT_ON_DEATH: true,
            }
        }, 8
    ),
    PROPS: [
        {
            POSITION: [10, 0, 0, 0, 1],
            TYPE: "genericEntity"
        }
    ],
    ON: [{
        event: "tick",
        handler: ({body}) => body.size += 10,
    }]
}

// turrets

Class.myriad_topBananaTurret = makeTurret({
    GUNS: [
        {
            POSITION: [20, 18, 1, 0, 0, 0, 0]
        }, {
            POSITION: [17, 22, 1, 0, 0, 0, 0]
        }, {
            POSITION: [2, 22, 1, 21, 0, 0, 3],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.factory, g.bigCheese]),
                TYPE: "minion",
                STAT_CALCULATOR: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            }
        }
    ]
}, {limitFov: true, fov: 3, independent: true})

Class.myriad_detonatorTurret = makeTurret({
    GUNS: [
        {
            POSITION: [13, 8, 1.2, 0, 2, 7, 0]
        }, {
            POSITION: [26, 8, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                TYPE: "myriad_detonatorFlare"
            }
        }
    ]
}, {limitFov: true, fov: 4, independent: true})

Class.myriad_megaDualTurret = makeTurret({
    GUNS: [
        {
            POSITION: [3, 17, -2, -3, 0, 0, 0]
        }, {
            POSITION: [24, 12, 1, 0, 8.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [21, 16, 1, 0, 8.5, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [24, 12, 1, 0, -8.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter, g.hunterSecondary]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [21, 16, 1, 0, -8.5, 0, 0.5 + 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.sniper, g.hunter]),
                TYPE: "bullet"
            }
        }
    ]
}, {limitFov: true, fov: 4.5, independent: true})

// boss

let amun = new LayeredBoss("myriad_amun", "Amun", "eternal", 11, "shiny", "baseTrapTurret", 5.5, 4.5)

amun.addLayer({turret: {
    POSITION: [6.5, 9, 0, null, 160, 0],
    TYPE: "myriad_topBananaTurret",
}});

amun.addLayer({turret: {
    POSITION: [6.5, 9, 0, null, 90, 0],
    TYPE: "myriad_detonatorTurret",
}});

amun.addLayer({turret: {
    POSITION: [6.5, 9, 0, null, 160, 0],
    TYPE: "myriad_megaDualTurret",
}});

