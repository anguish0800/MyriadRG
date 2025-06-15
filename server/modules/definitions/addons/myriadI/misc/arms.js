// few ar tanks that ill give to helena cause im so niec

const { combineStats, makeAuto, weaponArray } = require("../../../facilitators.js")
const { base, statnames } = require("../../../constants.js")
const g = require("../../../gunvals.js")

// single branch

Class.duo = {
    PARENT: "genericTank",
    LABEL: "Duo",
    DANGER: 8,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet"
            }
        },
    	{
            POSITION: [20, 8, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.single]),
                TYPE: "bullet"
            }
        },
        {
            POSITION: [12, 20, 0.9, 0, 0, 0, 0]
        }
    ]
}

Class.calc = {
    PARENT: "genericTank",
    LABEL: "Calc",
    STAT_NAMES: statnames.desmos,
    DANGER: 8,
    GUNS: [
        {
            POSITION: [22, 6.5, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.desmos, g.single]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.125, 0.5, -8, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 0.5, 8, -90, 0]
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
        }
    ]
}


// desmos branch

Class.modulo = {
    PARENT: "genericTank",
    LABEL: "Modulo",
    STAT_NAMES: statnames.desmos,
    DANGER: 8,
    GUNS: [
        {
            POSITION: [23, 8, -4/3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.desmos]),
                TYPE: ["bullet", {CONTROLLERS: ['snake']}]
            }
        },
        {
            POSITION: [3.75, 10, 2.5, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.5, 1.5, 6.25, -90, 0]
        }
    ]
}

Class.plot = {
    PARENT: "genericTank",
    LABEL: "Plot",
    STAT_NAMES: statnames.desmos,
    DANGER: 8,
    GUNS: [
        {
            POSITION: [20, 8, -4/3, 0, 0, 0, 0],
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, -6.25, 90, 0]
        },
        {
            POSITION: [3.75, 10, 2.125, 1.5, 6.25, -90, 0]
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.desmos]),
                TYPE: ["trap", {CONTROLLERS: ['snake']}],
                STAT_CALCULATOR: "trap"
            }
        }
    ]
}

Class.single.UPGRADES_TIER_4 = ["duo", "calc"]
Class.desmos.UPGRADES_TIER_2.push("modulo", "plot", "calc")
