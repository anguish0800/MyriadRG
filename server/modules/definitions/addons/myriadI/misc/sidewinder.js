const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../../../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../../../constants.js');
const g = require('../../../gunvals.js');

// this only includes sidewinder, coil and python

g.sidewinderBullet = { reload: 300000 }
g.sidewinder = { damage: 1.8 }

for (let i = 0; i < 6; i++) {
	Class["sidewinder" + i + "Bullet"] = {
		PARENT: "bullet",
		BODY: { RANGE: 180 },
		LABEL: "a" + i,
		CONTROLLERS: [["snake"]],
		GUNS: []
	}
	if (i !== 0) {
		Class["sidewinder" + i + "Bullet"].GUNS.push(	
			{
				POSITION: [0, 19, 1, -10, 0, 0, 0.0000015],
				PROPERTIES: {
					SHOOT_SETTINGS: combineStats([g.basic, g.sidewinderBullet, g.desmos, {damage: 12 / (i + 1)}]),
					TYPE: ["sidewinder" + (i - 1) + "Bullet", {PERSISTS_AFTER_DEATH: true}],
					AUTOFIRE: true,
					ALPHA: 0,
				}
			}
		)
	}
}


Class.sidewinderV2 = {
    	PARENT: "genericTank",
    	LABEL: "Sidewinder",
    	DANGER: 6,
    	STAT_NAMES: statnames.desmos,
    	UPGRADE_TOOLTIP: "[DEV NOTE] This tank does not function as intended yet!",
    	GUNS: [
        	{
            		POSITION: [10, 8.5, 1.4, 7, 0, 0, 0]
        	},
        	{
            		POSITION: [20, 8, -4/3, 0, 0, 0, 0],
            		PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.desmos, {reload: 3, damage: 12}]),
                		TYPE: "sidewinder" + 5 + "Bullet"
            		}
        	},
        	{
            		POSITION: [4.25, 11, 2, 2.25, -4.25, 92.5, 0]
        	},
        	{
            		POSITION: [4.25, 11, 2, 2.25, 4.25, -92.5, 0]
        	}
    	]
}

Class.addons.UPGRADES_TIER_0.push("sidewinderV2")
