const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../../../facilitators.js');
const { base, statnames, dfltskl, smshskl } = require('../../../constants.js');
const g = require('../../../gunvals.js');

Class.myriad_knifeBullet = {
	PARENT: "bullet",
	INDEPENDENT: true,
    	GUNS: weaponArray([
                {
                        POSITION: [50, 15, 0.001, 0, 0, 90, 0],
                        PROPERTIES: {
                                COLOR: "mirror"
                        }
		},
                {
                        POSITION: [15, 15, 1, 0, 0, 90, 0],
                	PROPERTIES: {
            			AUTOFIRE: !0,
        			SHOOT_SETTINGS: combineStats([g.basic, g.lowPower, {spray: 0, shudder: 0, reload: 0.01, range: 0.3}]),
            			TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            			STAT_CALCULATOR: "thruster",
            			WAIT_TO_CYCLE: true,
      			}
                }
	], 2),
}

Class.myriad_knife = {
	PARENT: "genericTank",
	LABEL: "Knife",
	GUNS: [
                {       
			POSITION: [18, 8, 1, 0, 0, 0, 0],
                        PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.basic]),
                                TYPE: "myriad_knifeBullet",
                        }
                },
		{
                        POSITION: [15, 15, 0.001, 0, 0, 0, 0],
                        PROPERTIES: {
                                COLOR: "mirror"
                        }
                },
	]
}
